// movement page
//The Orange Girl

const phrase =
  "'My father died eleven years ago. I was only four then. I never thought I'd hear from him again, but now we're writing a book together' To Georg Røed, his father is no more than a shadow, a distant memory. But then one day his grandmother discovers some pages stuffed into the lining of an old red pushchair. The pages are a letter to Georg, written just before his father died, and a story, 'The Orange Girl'. But 'The Orange Girl' is no ordinary story - it is a riddle from the past and centres around an incident in his father's youth. One day he boarded a tram and was captivated by a beautiful girl standing in the aisle, clutching a huge paper bag of luscious-looking oranges. Suddenly the tram gave a jolt and he stumbled forward, sending the oranges flying in all directions. The girl simply hopped off the tram leaving Georg's father with arms full of oranges. Now, from beyond the grave, he is asking his son to help him finally solve the puzzle of her identity.";
const words = phrase.split(" ");
let buttons;
let iterator = 0;
let body;

console.log(words);

function setup() {
  noCanvas();
  body = select("body");
  body.style("background-color", "#83cabc");

  //create button for each word
  words.forEach((word) => {
    createElement("button", word);
  });

  //cdefine the variable for the forEach function
  buttons = selectAll("button");

  buttons.forEach((button) => {
    button.style("position: absolute");
    button.mouseOut(loop);
  });

  //what happens when the red botton pressed
  buttons[75].style("color", "red");
  buttons[75].mouseClicked(function () {
    noLoop();
    body.style("background-color", "#e95610");
    buttons.mouseOut(loop);
  });
}

function draw() {
  //movimento bottoni
  iterator++;
  buttons.forEach((button, i) => {
    let x = noise((iterator + 60 * i) / 400) * windowWidth;
    let y = noise((iterator - 40 * i) / 400) * windowHeight;
    button.position(x, y);
  });
}
