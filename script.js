// the message text
const messageText = "You are not here by accident. Zimnygrad is a locked state, the government controls all information in and out of the nation.\n\nWe are here to share the truth. I am just one guide of many. I collect data and do with it what you must.\n\nYou will not know everything at once but there will be hints along the way. Each post contains a code, find the answer and the truth is yours.\n\nYour first key is the last lines of 'Gloss' by Eminescu";

const correctPassword = "Vreme trece, vreme vine";

let i = 0;
let currentMsg = "";
let typingSpeed = 65;

function start() {
  // hide first button from the screen 
  document.querySelector('.start-btn').style.display = 'none';
  
  // show typing box with message 
  document.getElementById('typingBox').style.display = 'block';
  
  // start typing
  typeNext();
}

//has to do with the spacing of the lines 
function typeNext() {
  if (i < messageText.length) {
    let char = messageText[i];
    if (char === '\n') {
      currentMsg += '<br>';
    } else {
      currentMsg += char;
    }
    
    // Update message with cursor
    document.getElementById('message').innerHTML = currentMsg + '<span class="cursor-blink"></span>';
    i++;
    setTimeout(typeNext, typingSpeed);
  } else {
    // remove cursor
    document.getElementById('message').innerHTML = currentMsg;
    
    // wait 10 seconds and the the message and title fade out 
    setTimeout(function() {
      // fade out title and message
      document.querySelector('.title').style.transition = 'opacity 0.8s';
      document.querySelector('.title').style.opacity = '0';
      document.getElementById('message').style.transition = 'opacity 0.8s';
      document.getElementById('message').style.opacity = '0';
      
      setTimeout(function() {
        document.querySelector('.title').style.display = 'none';
        document.getElementById('message').style.display = 'none';
        document.getElementById('typingBox').style.display = 'none';
        
        // show password area and remove te types out longer message 
        document.getElementById('passwordArea').style.display = 'block';
        document.getElementById('passwordInput').focus();
      }, 800);
    }, 3000);
  }
}

//see if the password that the user entered in correct 
function checkPassword() {
  var input = document.getElementById('passwordInput').value;
  
  if (input === correctPassword) {
    window.location.href = "homepage.html";
  } else {
    document.getElementById('passwordInput').value = '';
    document.getElementById('popup').style.display = 'block';
  }
}

//when a user clicks on the red button the popup should go away and the user returns back to the password box 
function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('passwordInput').focus();
}