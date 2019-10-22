// send is the function that sends the next message stored in nextMessage object.


function send(sender, message) {
  console.log("🗨 " + sender + ": " + message);

  // Insert the nextMessage into the HTML.
  chatArea.insertAdjacentHTML("beforeend", "<div id='chat-" + count + "' class='chat-container'><div class='chat-wrapper' id='chat-a-" + count + "'><p id='a-' class='chat-" + sender + "'>" + message + "</p><div class='avatar avatar-" + sender + "'></div></div></div>");

  // Scroll the most recent message onto the screen.
  document.getElementById('chat-' + count).scrollIntoView();

  // Count one more message that has been sent.
  count += 1;
}

// The comment below tells this file about variables we define in other files.
/*
  global chatArea
  global count
*/
