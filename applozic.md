This Doc will guide you to build a fully functional Conversation list.

1) Installing the Applozic react native library in your project.
2) Logging in a user to the application.
3) Displaying the list of conversations on the screen sorted in descending order.
4) Listening for several events to update on the conversations list


1) Installation:
>> You can add the library to your project using the below command:
    npm install https://github.com/AppLozic/Applozic-React-Native-Chat-Messaging-SDK.git#CustomUI


2) Logging in the User:
>> Create a user object and login to applozic.
   Please follow this section for more details: https://docs.applozic.com/docs/react-native-chat-session

3) Displaying the conversation list on screen:
>> You can call the below function to get the list of messages and then display them on screen. The Array of messages returned will be sorted in desending order of the communication time. The same what is displayed as the primary list in messaging Applications.

   var vary = {
          'isScroll' : false  //pass this as true and make this call again when the user reaches the end of the list(for Pagination)
        };

   ApplozicChat.getLatestMessageList(vary, (error, response) => {
            if(error){
                console.log("Reytum error : " + JSON.stringify(error));
            }else{
                var messageList = JSON.parse(response);  //this will be array of messages
            }

  Once you get the array of messages, you can display them on the list.

>> Understanding the Message object:
   You will need to know some properties of the message object inorder to display it on the list:

     Message{
      createdAtTime : number;  //the time at which the message was created
      to : string;             //Sender/receiver of the message
      message : string;        //Text in the message if any, empty otherwise
      key : string;            //Unique key for the message
      deviceKey : string;
      userKey : string;
      emailIds : string;
      shared : boolean;
      sent : boolean;           //True if the message has been sent to server
      delivered : boolean;      //true if the message is received on the receiver side
      type : number;
      storeOnDevice : boolean;
      contactIds : string;
      groupId : number;         //If the message is from a group this will be present, null if the message is for 1 to 1 chat
      scheduledAt : number;
      source : number;
      timeToLive : number;
      sentToServer : boolean;
      fileMetaKey : string;
      filePaths : string[];     //If the message has some attachment and the attachment is downloaded on device, this will contain its filePath.
      pairedMessageKey : string;
      sentMessageTimeAtServer : number;
      canceled : boolean;
      clientGroupId : string;
      messageId : number;
      read : boolean;           //true if the message has been read by the receiver
      attDownloadInProgress : boolean;   //true if the attachment download is still in progress
      applicationId : string;
      conversationId : number;
      topicId : string;
      connected : boolean;
      contentType : number;      //Defined the type for the message, maybe location, image, video, audio, text etc
      status : number;
      hidden : boolean;
      replyMessage : number;
      fileMeta : FileMeta;       //Object that contains the details of the file attached with this message. Null if the message is of simple text type
      metadata : Map<string,string>;   //Extra data you want to send with this message
    }

 FileMeta{
  key : string;
  userKey : string;
  blobKey : string;
  name : string;
  url : string;
  size : number;
  contentType : string;
  thumbnailUrl : string;
  createdAtTime : number;
}

>> Rendering the single message into a row in the list:
  You will need to display certain things from a message on the list view. For e.g Some of the common fields maybe, the Receiver's name, Message text, Image of the receiver, Unread count , last communication time etc.

  A message has a groupId field which determines wether the message is for a group or a 1 to 1 chat.
  If there is a groupId you need to get he Group object from it and then display its fields on the UI, for e.g name, image etc.
  If groupId is null then get the userId from the 'to' field of the message and then get the Contact object from Applozic and display its field on the UI.

               for(var i = 0; i< messageList.length; i++){
                    var name;
                    var message;
                    if(messageList[i].hasOwnProperty('groupId')){

                      //function to get Group object from groupId
                      ApplozicChat.getChannelFromChannelKey(messageList[i].groupId, (args1, args2)=>{  //args1 will be status and args2 will be group Object string
                                channel = JSON.parse(args2).channel;
                                contact = null;
                                imageUrl = channel.imageUrl;
                                name = channel.name;
                     });

                       //function to get unread count for Group
                      ApplozicChat.getUnreadCountForChannel({'groupId' : messageList[i].groupId}, (error, count) => {
                         if(error){
                             console.log("error ::" + error);
                       }else{
                            unreadCount = count;
            }
          });
                    }else{

                      //function to get Contact object from contactId
                      ApplozicChat.getContactById(messageList[i].to, (arg1, arg2)=>{   //args1 will be status and args2 will be contact Object string
                           contact = JSON.parse(arg2);
                           imageUrl = contact.imageUrl;
                           channel = null
                           name = contact.fullName;
                 });

                     //function to get unread count for user
                     ApplozicChat.getUnreadCountForUser( 'ak102', (error, count) => {
                         unreadCount = count;
                     });

                   }

                    if(messageList[i].message.length){
                        message = messageList[i].message;
                    }else{
                        message = 'Some other type of message';

                    createdAtTime = messageList[i].createdAtTime;
                }


4) Listening for several events to update on the conversations list:
>> You need to register and unregister the ApplozicUIListener and then subscribe to several events to listen for.

    Make sure you register the listener in resume event as well as unregister it in pause event.

    - Registering:
     ApplozicChat.registerListener((response) => {
           console.log("Reytum register UI response : " + JSON.stringify(response));
        });

    - Unregistering:
      ApplozicChat.unregisterListener((response) => {
            console.log("Reytum un-register UI response : " + JSON.stringify(response));
        });


   Listening to several events:

   let messageSent = DeviceEventEmitter.addListener('Applozic-onMessageSent', (response) => {  //triggered when a message has been sent to applozic server
        console.log('Reytum rec event message sent : ' + JSON.stringify(response)); //message object, update this in the current message array and display on screen
    });

   let messageRec = DeviceEventEmitter.addListener('Applozic-onMessageReceived', (response) => { //triggered when a new message is received on the device
        console.log('Reytum rec event message received : ' + JSON.stringify(response)); //message object, update this in the current message array and display in the list
    });


    don't forget to remove these events in componentDidUnmount

    messageSent.remove();
    messageRec.remove();


    other events:

    Applozic-onMessageDeleted
    Applozic-onMessageDelivered
    Applozic-onAllMessagesDelivered
    Applozic-onAllMessagesRead
    Applozic-onConversationDeleted
    Applozic-onUpdateTypingStatus
    Applozic-onUpdateLastSeen
    Applozic-onMqttDisconnected
    Applozic-onChannelUpdated
    Applozic-onConversationRead
    Applozic-onUserDetailUpdated
    Applozic-onMessageMetadataUpdated
