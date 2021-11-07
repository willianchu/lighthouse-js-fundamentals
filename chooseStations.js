const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
];

// Good stations have at least 20 capacity
// Stations can be schools OR community centres

function chooseStations(list) {
  var chosenOnes = [];
  for (let item of list) {
    if(item[1] >= 20 && (item[2] === 'school' || item[2] === 'community centre')) {
      chosenOnes.push(item[0]);
    }
  } 
  return chosenOnes;
}

console.log(chooseStations(stations));


