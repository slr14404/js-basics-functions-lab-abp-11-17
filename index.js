// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
  if(blockNumber > 42){
    return blockNumber - 42
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber
      return 42 - blockNumber;
    }
  }
  
 -function distanceFromHqInFeet(blockNumber){
 -  return distanceFromHqInBlocks(blockNumber)*264
 +function distanceFromHqInFeet (blockNumber) {
 +  return distanceFromHqInBlocks(blockNumber) * 264;
  }
  
 -function distanceTravelledInFeet(start, destination){
 -  if(start < destination){
 -    return (destination - start)*264
 +function distanceTravelledInFeet (start, destination) {
 +  if (start < destination) {
 +    return (destination - start) * 264;
    } else {
 -    return (start - destination)*264
 +    return (start - destination) * 264;
    }
  }
  
 -function calculatesFarePrice(start, destination){
 -  let distance = distanceTravelledInFeet(start, destination)
 -  if(distance <= 400){
 -    return 0
 -  } else if (distance > 400 && distance <= 2000){
 -    return .02*distance
 +function calculatesFarePrice (start, destination) {
 +  const distance = distanceTravelledInFeet(start, destination);
 +
 +  if (distance <= 400) {
 +    return 0;
 +  } else if (distance > 400 && distance <= 2000) {
 +    return .02 * distance;
    } else if (distance > 2000 && distance < 2500) {
  return 25
  return 25;
} else {
    return 'cannot travel that far'
    return 'cannot travel that far';
    }
  }