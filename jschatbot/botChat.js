// botChat is the function that picks the bot's next message.

function botChat() {
  // Set the bot as the sender of the next message.
  nextMessage.sender = "bot";

  if (botCount >= botScript.length) {
    nextMessage.message = "Hi " + chatInput[1] + ". According to your answers, the following helped you last time you where depressed - " + chatInput[2] + ". Please contact " + chatInput[3] + " at your earliest convenience, so they can help with your symptoms. With the help of " + chatInput[3] + " and using your own techniques, try your best to heal yourself before the symptoms get worse. I wish you the vert best in your future endeavours, Sincerely Kuthulu. The Monster Helper to help you figure it out.";
    botSilent = true;
  } else {
    // Set the bot's next message as the next string in the botScript array.
    nextMessage.message = botScript[botCount];
  }

  // Check sendSpecialChat to see if anything special should happen.
  if (sendSpecialChat[0]) {
    nextMessage.message = sendSpecialChat[1];
  }

  // Send the bot's message.
  send(nextMessage.sender, nextMessage.message);

  // Count 1 more chat that the bot has sent unless the chat was a sendSpecialChat.
  if (sendSpecialChat[0]) {
    sendSpecialChat = [false, ""];

  } else {
    botCount += 1;
  }

  // Start listening again after the bot has sent a message.
  listenFor();
}


// The comment below tells this file about variables we define in other files.
/*
global botCount
global botScript
global nextMessage
global botSilent
global goodbye
global sendSpecialChat
global send
global listenFor
*/
