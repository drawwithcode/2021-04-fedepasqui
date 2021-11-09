// movement page
//The Great Gatsby

const phrase =
  "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since. “Whenever you feel like criticizing any one,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.” He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men.";
const words = phrase.split(" ");
let buttons;
let iterator = 0;
let body;

console.log(words);

function setup() {
  noCanvas();
  body = select("body");
  body.style("background-color", "#335390");

  //create button for each word
  words.forEach((word) => {
    createElement("button", word);
  });

  //define the variable for the forEach function
  buttons = selectAll("button");

  buttons.forEach((button) => {
    button.style("position: absolute");
    button.mouseOut(loop);
  });

  //what happens when the red botton pressed
  buttons[83].style("color", "red");
  buttons[83].mouseClicked(function () {
    body.style("background-color", "#fff579");
    noLoop();
    buttons.mouseOut(loop);
  });
}

function draw() {
  //movement of the buttons
  iterator++;
  buttons.forEach((button, i) => {
    let x = noise((iterator + 60 * i) / 400) * windowWidth;
    let y = noise((iterator - 40 * i) / 400) * windowHeight;
    button.position(x, y);
  });
}
