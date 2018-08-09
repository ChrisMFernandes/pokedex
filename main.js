let ability1 = document.getElementById('ability1');
let ability2 = document.getElementById('ability2');
let hpResult = document.getElementById('hpResult');
let atkResult = document.getElementById('atkResult');
let defResult = document.getElementById('defResult');
let type1 = document.getElementById('type1');
let type2 = document.getElementById('type2');
let image = document.getElementById('pokeImage');
let input = document.getElementById('text');

// function checkType(){
//   if(type1.innerHTML === 'grass' ){
//     type1.style.color = 'green';
//   }
//   console.log(type1.innerHTML);
// }

function getPokemon() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      
      for(let i = 0; i < data.length; i++){
        if(data[i].name == input.value.toLowerCase()){
          hpResult.innerHTML = data[i].stats[0].hp;
          atkResult.innerHTML = data[i].stats[1].atk;
          defResult.innerHTML = data[i].stats[2].def;
          ability1.innerHTML = data[i].abilities[0];
          ability2.innerHTML = data[i].abilities[1];
          image.src = data[i].image_url;
          
          for(let j = 0; j < data[i].types.length; j++){
            if(data[i].types[j] === 'grass'){
              type1.style.color = 'green';
              type1.innerHTML = data[i].types[j];
            } 
            else if(data[i].types[j] === 'poison'){
              type2.style.color = 'purple';
              type2.innerHTML = data[i].types[j];
            }
          }
          
        }
      }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/ChrisMFernandes/pokedex/master/pokemon.json", true);
  xhttp.send();
}

function checkType(){
  if(type1.innerHTML === 'grass' ){
    type1.style.color = 'green';
  }
  console.log(type1.innerHTML);
}

function clearSelection() {
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
}