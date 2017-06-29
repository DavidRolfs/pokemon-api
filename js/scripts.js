//business logic stuff for a particular module
var Pokemon = function() {
};

Pokemon.prototype.getPokemon= function(input, display) {
  $.get("http://pokeapi.co/api/v2/pokemon/" + input + "/").then(function(response){
    console.log(response);
    display("Pokemon name " + response.name + " type is " + response.types[0].type.name);
  });
};


Pokemon.prototype.getEvolve= function(input, display) {
  $.get("http://pokeapi.co/api/v2/evolution-chain/" + input + "/").then(function(response){
    console.log(response);
    // display(response.chain);
  });
};

exports.pokemonModule = Pokemon;
