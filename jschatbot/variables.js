/*

In JavaScript we use variables to store information for later use. To allow variables to be used globally which preserves their information across many functions we have to declare them first with the 'var' keyword. In this JavaScript file we declare all the global variables we will need in other files.

*/

// chatArea is the variable that stores the place on the screen the chats will appear.
var chatArea = document.getElementById('chat-area');

// count is a variable that stores how many total chats have been sent.
var count = 0;

// botCount and userCount are variables that store how many chats each the bot and the user have sent.
var botCount = 0;
var userCount = 0;

// nextMessage is an object variable that stores the next message that will be sent and who will be sending it.
var nextMessage = {
  message: "",
  sender: ""
};


// sendSpecialChat is a variable that stores if the bot should say something off script, and what that should be.
var sendSpecialChat = [false, ""];


// botSilent is a variable that stores when the bot is done speaking because it has said all of the things in the script.
var botSilent = false;
