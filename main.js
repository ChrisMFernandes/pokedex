let ability1 = document.getElementById('ability1').innerHTML;
let ability2 = document.getElementById('ability2').innerHTML;
let hpResult = document.getElementById('hpResult').innerHTML;
let atkResult = document.getElementById('atkResult').innerHTML;
let defResult = document.getElementById('defResult').innerHTML;
let type1 = document.getElementById('type1').innerHTML;
let type2 = document.getElementById('type2').innerHTML;

function test() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      console.log(data.stats[5].base_stat);
    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/7/", true);
  xhttp.send();
}