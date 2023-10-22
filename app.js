// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

var bPatty = document.querySelector(".btn-patty")
var bcheese = document.querySelector(".btn-cheese")
var btomato = document.querySelector(".btn-tomatoes")
var bonion = document.querySelector(".btn-onions")
var blettuce = document.querySelector(".btn-lettuce")

var items = document.getElementsByClassName("items")
var price = 0;
var displayPrice = document.querySelector(".price-details");

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();

  renderButtons();
  
  renderIngredientsBoard();
  
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) 
  {
    Cheese.style.display = "inherit";
  } 
  else 
  {
    Cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes  = document.getElementById("tomato")  
  if (state.Tomatoes)
  {
    tomatoes.style.display = "inherit"
  } 
  else 
  {
    tomatoes.style.display = "none"
  } 
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onions  = document.getElementById("onion")  
  if (state.Onions)
  {
    Onions.style.display = "inherit"
  } 
  else 
  {
    Onions.style.display = "none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce  = document.getElementById("lettuce")  
  if (state.Lettuce)
  {
    Lettuce.style.display = "inherit"
  } 
  else 
  {
    Lettuce.style.display = "none"
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons() {
  if(state.Patty)
  {
    bPatty.classList.add("active")
  }
  else
  {
    bPatty.classList.remove("active")
  }

  if(state.Cheese)
  {
    bcheese.classList.add("active")
  }
  else
  {
    bcheese.classList.remove("active")
  }

  if(state.Tomatoes)
  {
    btomato.classList.add("active")
  }
  else
  {
    btomato.classList.remove("active")
  }

  if(state.Lettuce)
  {
    blettuce.classList.add("active")
  }
  else
  {
    blettuce.classList.remove("active")
  }

  if(state.Onions)
  {
    bonion.classList.add("active")
  }
  else
  {
    bonion.classList.remove("active")
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state


function renderIngredientsBoard(){
  if(state.Patty)
  {
    items[0].innerHTML="Patty"
  }
  else
  {
    items[0].innerHTML="";
  }

  if(state.Onions)
  {
    items[2].innerHTML="Onions"
  }
  else
  {
    items[2].innerHTML="";
  }

  if(state.Lettuce)
  {
    items[4].innerHTML="Lettuce"
  }
  else
  {
    items[4].innerHTML="";
  }

  if(state.Tomatoes)
  {
    items[3].innerHTML="Tomatoes"
  }
  else
  {
    items[3].innerHTML="";
  }

  if(state.Cheese)
  {
    items[1].innerHTML="Cheese"
  }
  else
  {
    items[1].innerHTML="";
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

const pay = document.querySelector("Rectangle5")


pay.onclick = () => {
}

function renderPrice() {
  price = wholeWheatBun;

  if(state.Cheese)
  {
    price += ingredients.Cheese
  }

  if(state.Patty)
  {
    price += ingredients.Patty
  }

  if(state.Onions)
  {
    price += ingredients.Onions
  }

  if(state.Lettuce)
  {
    price += ingredients.Lettuce
  }

  if(state.Tomatoes)
  {
    price += ingredients.Tomatoes
  }

  displayPrice.innerHTML = `INR ${price}`;


}