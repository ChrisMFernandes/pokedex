let ability1 = document.getElementById('ability1');
let ability2 = document.getElementById('ability2');
let hpResult = document.getElementById('hpResult');
let atkResult = document.getElementById('atkResult');
let defResult = document.getElementById('defResult');
let type1 = document.getElementById('type1');
let type2 = document.getElementById('type2');

function test() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      
      // hpResult.innerHTML = data.stats[5].base_stat;
      // atkResult.innerHTML = data.stats[4].base_stat;
      // defResult.innerHTML = data.stats[3].base_stat;
      // ability1.innerHTML = data.stats[]
      let input = document.getElementById('text');
      console.log(input.value.toLowerCase());
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/ChrisMFernandes/pokedex/master/pokemon.json", true);
  xhttp.send();
}

function clearSelection() {
  console.log('button is working')
  hpResult.innerHTML = '';
  atkResult.innerHTML = '';
  defResult.innerHTML = '';
  type1.innerHTML = 'Type';
  type1.innerHTML = 'Type';
}