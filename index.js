dwarves = ["Doc", "Dopey" ,"Bashful", "Grumy"]
planeteerCalls = ["earth", "wind", "fire", "water", "heart"]


function dwarfRollCall(dwarves) {
  var array = [];
for(var i = 0; i< dwarves.length; i++) {
   if (dwarves[i])
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
    ||foods[i]=="swiss cheese"
  ){
    return foods[i]
  }
}
return "no cheese!"
}
