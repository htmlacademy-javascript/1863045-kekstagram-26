function getRandomInt (a, b) {
  const minValue = Math.round(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.round(Math.max(Math.abs(a), Math.abs(b)));

  const resalt = Math.random() * (maxValue - minValue) + minValue;

  return Math.floor(resalt);
}

getRandomInt();

function checkMaxStringLength(string, length, maxLength){
  if(length <= maxLength) {
    return string;
  }
}

checkMaxStringLength();

export {getRandomInt};
