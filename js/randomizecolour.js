
let colours = [
  "#fffb62",
  "#E91E63"
];


function randomizecolour() {
  var randomSelection = Math.floor(Math.random() * colours.length);
  chosenColour = colours[randomSelection];
  return chosenColour;
}

randomizecolour();