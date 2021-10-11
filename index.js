function scuberGreetingForFeet(someNumber){
  let result 
  if (someNumber <= 400) { 
    return ('This one is on me!');
  }
  if (someNumber >= 2000) {
    if (someNumber >= 2500){
      return ('No can do.');
    }
    return ('I will gladly take your thirty bucks.');
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return ('Ok, sounds good.');
  } else {
    return ('No go.');
  }

}

function switchOnCharmFromTip(tipType){
  if (tipType === 'generous'){
    return ('Thank you so much.');
  } else if (tipType === 'not as generous') {
    return ('Thank you.');
  } else {
    return ('Bye.');
  }
}