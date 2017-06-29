var Pokemon = require('./../js/scripts.js').pokemonModule;

var displayResponse = function(response) {
  $('.output').text(response);
}

$(document).ready(function() {

  $('#input').submit(function(e){
    e.preventDefault();
    var userInput = $('#userInput').val();
    var newPokemon = new Pokemon();
    newPokemon.getPokemon(userInput, displayResponse);
    newPokemon.getEvolve(userInput);
    console.log(userInput);
  });

});
