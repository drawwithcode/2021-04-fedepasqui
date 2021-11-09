// speech page
// 80 Days

const phrase =
  "Mr. Phileas Fogg lived, in 1872, at No. 7, Saville Row, Burlington Gardens, the house in which Sheridan died in 1814. He was one of the most noticeable members of the Reform Club, though he seemed always to avoid attracting attention; an enigmatical personage, about whom little was known, except that he was a polished man of the world. People said that he resembled Byron - at least that his head was Byronic; but he was a bearded, tranquil Byron, who might live on a thousand years without growing old. Certainly an Englishman, it was more doubtful whether Phileas Fogg was a Londoner.";
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
  body.style("background-color", "#81d7e4");

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
  buttons[79].style("color", "red");
  buttons[79].mousePressed(function () {
    body.style("background-color", "#223e54");
    voice.setVoice("Amelie");
    voice.speak(phrase);
  });
}

//to stop the voice
function keyPressed(Space) {
  voice.stop();
}
