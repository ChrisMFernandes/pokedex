function test() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/7/", true);
  xhttp.send();
}