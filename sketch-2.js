// speech page
// Siddhartha

const phrase =
  "In the shade of the house, in the sunshine of the riverbank near the boats, in the shade of the Salwood forest, in the shade of the fig tree is where Siddhartha grew up, the handsome son of the Brahman, the young falcon, together with his friend Govinda, son of a Brahman. The sun tanned his light shoulders by the banks of the river when bathing, performing the sacred ablutions, the sacred offerings. In the mango grove, shade poured into his black eyes, when playing as a boy, when his mother sang, when the sacred offerings were made, when his father, the scholar, taught him, when the wise men talked. For a long time, Siddhartha had been partaking in the discussions of the wise men, practising debate with Govinda, practising with Govinda the art of reflection, the service of meditation. He already knew how to speak the Om silently, the word of words, to speak it silently into himself while inhaling, to speak it silently out of himself while exhaling, with all the concentration of his soul, the forehead surrounded by the glow of the clear-thinking spirit. He already knew to feel Atman in the depths of his being, indestructible, one with the universe.";
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
  body.style("background-color", "#d9ed9e");

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
  buttons[39].style("color", "red");
  buttons[39].mousePressed(function () {
    body.style("background-color", "#f9cfd6");
    voice.setVoice("Rishi");
    voice.speak(phrase);
  });
}

//to stop the voice
function keyPressed(Space) {
  voice.stop();
}
