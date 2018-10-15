let ability1 = document.getElementById('ability1');
let ability2 = document.getElementById('ability2');
let hpResult = document.getElementById('hpResult');
let atkResult = document.getElementById('atkResult');
let defResult = document.getElementById('defResult');
let type1 = document.getElementById('type1');
let type2 = document.getElementById('type2');
let image = document.getElementById('pokeImage');
let input = document.getElementById('text');
let upButton = document.getElementById('btnT');
let downButton = document.getElementById('btnB');
let blinkL = document.getElementById('btn1');
let blinkM = document.getElementById('btn2');
let blinkR = document.getElementById('btn3');
let bluebtnL = document.getElementById('bluebtnL');
let bluebtnM = document.getElementById('bluebtnM');
let bluebtnR = document.getElementById('bluebtnR');
let bluebtnBL = document.getElementById('bluebtnBL');
let bluebtnBM = document.getElementById('bluebtnBM');
let bluebtnBR = document.getElementById('bluebtnBR');
let pokeType = document.getElementsByClassName('pokeType');
let submitButton = document.getElementById('submit');
let clearButton = document.getElementById('clear');
let pad = document.getElementById('pad');
let pokeList = [];

class Pokemon {
  constructor(name, hp, atk, def, ability1, ability2, image, type1, type2){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.ability1 = ability1;
    this.ability2 = ability2;
    this.image = image;
    this.type1 = type1;
    this.type2 = type2;
  }
    
    add() {
      pokeList.push(this);
    }

};

// make the call
submitButton.addEventListener('click', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      
// loop through JSON and append data to page
      for(let i = 0; i < data.length; i++){
        if(data[i].name === input.value.toLowerCase()){

          let thisPoke = new Pokemon(
            data[i].name,
            data[i].stats[0].hp,
            data[i].stats[1].atk,
            data[i].stats[2].def,
            data[i].abilities[0],
            data[i].abilities[1],
            data[i].image_url,
            data[i].types[0],
            data[i].types[1]
          );

// append the pokemon data to html
          hpResult.innerHTML = thisPoke.hp;
          atkResult.innerHTML = thisPoke.atk;
          defResult.innerHTML = thisPoke.def;
          ability1.innerHTML = thisPoke.ability1;
          ability2.innerHTML = thisPoke.ability2;
          image.src = thisPoke.image;
          type1.innerHTML = thisPoke.type1;
          type2.innerHTML = thisPoke.type2;

// if pokemon only has one ability pass nothing to browser
          if(ability2.innerHTML === 'undefined') {
            ability2.innerHTML = '';
          } else {
            ability2.innerHTML = thisPoke.ability2;
          }
          
//  if pokemon only has one type pass nothing to browser
          if(type2.innerHTML === 'undefined'){
            type2.innerHTML = 'Type';
          } else {
            type2.innerHTML = thisPoke.type2;
          }


// add this pokemon to an empty array to loop through later
      pad.addEventListener('click', function(){
        thisPoke.add();
        console.log(`${thisPoke.name} has been added!`);
      });

// change the color of text based on pokemon type
      for(let i = 0; i < pokeType.length; i++){
        if(pokeType[i].innerHTML === 'grass'){
          pokeType[i].style.color = 'green';
        } else if(pokeType[i].innerHTML === 'poison'){
          pokeType[i].style.color = 'purple';
        } else if(pokeType[i].innerHTML === 'ghost'){
          pokeType[i].style.color = 'violet';
        } else if(pokeType[i].innerHTML === 'fire'){
          pokeType[i].style.color = 'red';
        } else if(pokeType[i].innerHTML === 'flying'){
          pokeType[i].style.color = 'orange';
        } else if(pokeType[i].innerHTML === 'water'){
          pokeType[i].style.color = 'blue';
        } else if(pokeType[i].innerHTML === 'bug'){
          pokeType[i].style.color = 'green';
        } else if(pokeType[i].innerHTML === 'normal'){
          pokeType[i].style.color = 'black';
        } else if(pokeType[i].innerHTML === 'electric'){
          pokeType[i].style.color = 'yellow';
        } else if(pokeType[i].innerHTML === 'ground'){
          pokeType[i].style.color = 'brown';
        } else if(pokeType[i].innerHTML === 'fighting'){
          pokeType[i].style.color = 'red';
        } else if(pokeType[i].innerHTML === 'rock'){
          pokeType[i].style.color = 'black';
        } else if(pokeType[i].innerHTML === 'psychic'){
          pokeType[i].style.color = 'violet';
        } else if(pokeType[i].innerHTML === 'ice'){
          pokeType[i].style.color = 'blue';
        } else if(pokeType[i].innerHTML === 'dragon'){
          pokeType[i].style.color = 'green';
        } else{
          pokeType[i].style.color = 'black';
        }
      }

// start the flashing, lights, lights, lights
          startBlinking();

        }
      }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/ChrisMFernandes/pokedex/master/pokemon.json", true);
  xhttp.send();
});

console.log(pokeList);

// clear out everything from the getpokemon call
clearButton.addEventListener('click', function() {
  console.log('button is working')
  hpResult.innerHTML = '';
  atkResult.innerHTML = '';
  defResult.innerHTML = '';
  image.src = '';
  ability1.innerHTML = '';
  ability2.innerHTML = '';
  input.value = '';
  type1.style.color = ''
  type1.innerHTML = 'Type';
  type2.style.color = '';
  type2.innerHTML = 'Type';
});

// code for the blinky lights
function startBlinking() {
  setTimeout(function () { 
    blink();
  }, 10);
};

function blink() {
  setTimeout(function () {
    blinkL.classList.add("blink");
    bluebtnL.classList.add("blink");
    bluebtnBR.classList.add("blink");
  }, 100);
  setTimeout(function () {
    blinkL.classList.remove("blink");
    bluebtnL.classList.remove("blink");
    bluebtnBR.classList.remove("blink");
  }, 350);
  setTimeout(function () {
    blinkM.classList.add("blink");
    bluebtnR.classList.add("blink");
    bluebtnBL.classList.add("blink");
  }, 300);
  setTimeout(function () {
    blinkM.classList.remove("blink");
    bluebtnR.classList.remove("blink");
    bluebtnBL.classList.remove("blink");
  }, 550);
  setTimeout(function () {
    blinkR.classList.add("blink");
    bluebtnBM.classList.add("blink");
  }, 500);
  setTimeout(function () {
    blinkR.classList.remove("blink");
    bluebtnBM.classList.remove("blink");
  }, 750);
  setTimeout(function () {
    bluebtnM.classList.add("blink");
  }, 750);
  setTimeout(function () {
    bluebtnM.classList.remove("blink");
  }, 950);

};
