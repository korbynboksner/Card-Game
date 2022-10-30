let form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('you clicku')
const gameContainer = document.getElementById("game");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

const btn = document.getElementById('btn');

btn.value = 'Refresh';


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target);
  console.log(event.target.classList.value);
  //(you need this to change the color of the card) event.target.style.backgroundColor = event.target.classList.value;
  
  
  
  if(cardOne !== event.target && !disableDeck) {
    if (event.target.Id = "flip"){
  event.target.style.backgroundColor = event.target.classList.value;
   
  event.target.setAttribute("Id", "flip");

    if(!cardOne){
      return cardOne = event.target;
    }
    cardTwo = event.target;
    
    disableDeck = true;
    matchCards(cardOne, cardTwo)
  
    
    }
  }
  
function matchCards(){
    if (cardOne.style.backgroundColor === cardTwo.style.backgroundColor){
      matched++;
    if (matched == 5){
      let el = document.getElementById("game");
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      createDivsForColors(shuffledColors);
     }
cardOne.removeEventListener("click", handleCardClick);
cardTwo.removeEventListener("click", handleCardClick);
cardOne = cardTwo = "";
return disableDeck = false;
}
   else setTimeout(() => {
    cardOne.removeAttribute("Id", "flip");
    cardTwo.removeAttribute("Id", "flip");
    cardOne.style.backgroundColor = "white"
    cardTwo.style.backgroundColor = "white"
    cardOne = cardTwo = "";
    disableDeck = false;  
  }, 1000);




} 
    


}

// when the DOM loads
createDivsForColors(shuffledColors);









}, {once : true});

