function beginGame(){
  alert("Hello Trainer!");
  alert("Right-click the page, click the 'Inspect', and click the 'Console' tab!")
  console.log("\n")
  console.log("Professor Oak: Hello Trainer! You made it just on time!");
  console.log("I was in the middle of testing how Pokemon are able to be traded wirelessly.");
  console.log("In that process, they ran away... into your web application (I mean... it does look like their home...)");
  console.log("Luckily, you came right as they escaped and, since you're a web developer, you'll have an easier time finding them for me!");
  alert("Trainer received PokeDOM!");
  console.log("Use your PokeDOM I've given you to find the hidden Pokemon!");
  console.log("Let one of your instructors know when you're finished and they'll tell me the tricks to catching the Pokemon!");
  console.log("I have to go surfing for the rest of the Pokemon in the World Wide Web!!!");
  console.log("Oh yeah! If you're lost... Start by selecting the 'PokeDOM MANUAL'!");
  console.log("Catch you later, Web Development Trainer!")
}

var pokemon = ["tentacool", "magikarp", "horsea", "kingler", "gyarados", "seadra", "psyduck"];
var count = 0;
var stringOfPokemon = "";

function fillGear(){
  for (var i = 0; i < pokemon.length; i++){
    stringOfPokemon += pokemon[i] + " ";
  }
  document.getElementById('pokemonLeft').innerHTML = "MISSING: " + stringOfPokemon;
}

function randomNumber(){
  var min = 30;
  var max = 600;
  return Math.random() * (max - min) + min + 'px';
}

function randomizePokemon(){
  var pokemon = document.getElementsByTagName('div');
  for (var i = 0; i < pokemon.length; i++) {
    var xPosition = randomNumber();
    var yPosition = randomNumber();
    pokemon[i].style.position = 'absolute';
    pokemon[i].style.left = xPosition;
    pokemon[i].style.top = yPosition;
  }
}

function help(){
  console.log("\n* pokeDOM Manual *\n");
  console.log("The Pokemon were smart because they ran into the web applications elements...");
  alert("Select the 'Elements' tab in the developers toolkit and select the `body` element.");
  alert("As you can see, the pokemons information are embedded within the elements!");
  alert("Open the 'Console' tab when you're done!")
  console.log("Luckily, we have the pokeDOM!");
  console.log("The pokeDOM is a special container, called a variable that can store DOM elements in it.");
  console.log("We can select web application elements, catch the pokemon in the element, and store them in the pokeDOM");
  console.log("* The command to store an item into a variable is \n`var pokeDOM = document...etc`");
  console.log("\n********************")
}

function help1(){
  alert("Open the 'Console' tab!");
  console.log("\n* Hint 1 *\n");
  console.log("A pokemon's name is stored in an elements id.");
  console.log("Here is a tutorial to retrieve an element by its id: \nhttp://www.w3schools.com/jsref/met_document_getelementbyid.asp");
  console.log("Don't forget to store this value into the pokeDOM and print its value!");
  console.log("\n********************")
}

function help2(){
  console.log("\n* Hint 2 *\n");
  alert("Open the 'Console' tab!");
  console.log("The method of retrieving pokemon are stored in an elements class name.");
  console.log("Here is a tutorial to retrieve an element by its classname: \nhttp://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp");
  console.log("Don't forget to store this value into the pokeDOM and print its value!");
  console.log("\n********************")
}

function help3(){
  console.log("\n* Hint 3 *\n");
  alert("Open the 'Console' tab!");
  console.log("All the pokemon are stored in elements and we retrieve the elements by their tag names");
  console.log("Here is a tutorial to retrive an element by their tag names: \nhttp://www.w3schools.com/jsref/met_element_getelementsbytagname.asp");
  console.log("Don't forget to store this value into the pokeDOM and print its value!");
  console.log("\n********************")
}

function playAudio(pokeId){
  for (var i = 0; i < pokemon.length; i++) {
    if (pokeId === pokemon[i]) {
      var audio = new Audio('/kanto/audio/' + pokemon[i] + '.mp3');
      audio.play();
      caughtPokemon(pokemon[i]);
    }
  }
}

function caughtPokemon(specificPokemon){
  document.getElementById(specificPokemon).style.backgroundImage = "url('../../pokeballSprite.png')";
  ++count;
  if (count === 7){
    document.getElementById("pokemonCaught").innerHTML = "You caught them all!!!"
    document.getElementById("pokemonLeft").innerHTML = "Good job!!!"
  }
  else {
    document.getElementById("pokemonCaught").innerHTML = "CAUGHT: " + count;
    var str = document.getElementById("pokemonLeft").innerHTML;
    var res = str.replace(specificPokemon, " ");
    document.getElementById("pokemonLeft").innerHTML = res;
  }
}

beginGame();
fillGear();
randomizePokemon();