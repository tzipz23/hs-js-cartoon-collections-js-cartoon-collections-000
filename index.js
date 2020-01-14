dwarves = ["Doc", "Dopey" ,"Bashful", "Grumy"]
planeteerCalls = ["earth", "wind", "fire", "water", "heart"]


function dwarfRollCall(dwarves) {
  var array = [];
dwarves.forEach(function(name, obj) {
  	array += (obj+1 + ". " + name + " ");
  });
   return array
}

function summonCaptainPlanet(planeteerCalls) {
  return planeteerCalls.map(a=>a.toUpperCase()+"!")
}

function longPlaneteerCalls(words) {
  for(var i = 0; i< words.length; i++){
    if (words[i].length>4) {
      return true
      } 
    }
    return false
}

function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="cheddar"
    ||foods[i]=="gouda"
    ||foods[i]=="camembert"
  ){
    return foods[i]
  }
}
return "no cheese!"
}
