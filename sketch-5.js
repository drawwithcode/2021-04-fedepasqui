// speech page
// Pride and Prejudice

const phrase =
  "It is, of course, generally accepted that a wealthy single man must be in search of a wife. As soon as such a man moves into a neighbourhood, each of the families that live there will, without any inquiry as to his own feelings on the subject, immediately consider him the rightful property of one of their daughters. 'My dear Mr Bennet,' said Mrs Bennet to her husband one day, 'have you heard that Netherfield Park has been rented at last?' Mr Bennet replied that he had not. 'But it has,' she repeated. 'Mrs Long has just been here, and she told me all about it.' Mr Bennet made no answer.";
const words = phrase.split(" ");
let buttons;
let iterator = 0;
let body;
let voice;

console.log(words);

function setup() {
  noCanvas();
  voice = new p5.Speech();
  body = select("body");
  body.style("background-color", "#f0b565");

  //create button for each word
  words.forEach((word) => {
    createElement("button", word);
  });

  //define the variable for the forEach function
  buttons = selectAll("button");

  buttons.forEach((button) => {
    button.style("position: relative");
    button.mouseOut(loop);
  });

  //what happens when the red botton pressed
  buttons[64].style("color", "red");
  buttons[64].mousePressed(function () {
    body.style("background-color", "#453458");
    voice.setVoice("Google UK English Female");
    voice.speak(phrase);
  });
}

//to stop the voice
function keyPressed(Space) {
  voice.stop();
}
