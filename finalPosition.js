const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(list) {
  let position = [0, 0];
  for(let step of list){
    switch(step){
    case 'north':
      position[1] = position[1] + 1;
      break;
    case 'south':
      position[1] = position[1] - 1;
      break;
    case 'east':
      position[0] = position[0] + 1;
      break;
    case 'west':
      position[0] = position[0] - 1;
      break;
    }
  }
  return position;
}

console.log(finalPosition(moves));