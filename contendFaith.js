var diceSound = new Audio('./cf/dice_ass/Rolling-Dice-Sound-effect1.mp3');
var diceRandNoPlayerOnePlayerOne;
// var diceRandNoPlayerOnePlayerTwo;
// dice luck display condition
const dispLuck = ()=>{
  if(diceRandNoPlayerOne == 1){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-one.png' style="width: 130px; height: 100px;">`
  }else if(diceRandNoPlayerOne == 2){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-two.png' style="width: 130px; height: 100px;">`

  }else if(diceRandNoPlayerOne == 3){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-three.png' style="width: 130px; height: 100px;">`

  }else if(diceRandNoPlayerOne == 4){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-four.png' style="width: 130px; height: 100px;">`

  }else if(diceRandNoPlayerOne == 5){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-five.png' style="width: 130px; height: 100px;">`

  }else if(diceRandNoPlayerOne == 6){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-six.png' style="width: 130px; height: 100px;">`

  }
};
const notifyFace = () =>{
  // forStart = document.getElementById('forStart')
  // for1 = document.getElementById('for1')
  // for2 = document.getElementById('for2')
  // for3 = document.getElementById('for3')
  // for4 = document.getElementById('for4')
  // for5 = document.getElementById('for5')
  // for6 = document.getElementById('for6')
  // for7 = document.getElementById('for7')
  // for8 = document.getElementById('for8')
  // for9 = document.getElementById('for9')
  // for10 = document.getElementById('for10')
  // for11 = document.getElementById('for11')
  // for12 = document.getElementById('for12')
  // for13 = document.getElementById('for13')
  // for14 = document.getElementById('for14')
  // for15 = document.getElementById('for15')
  // for16 = document.getElementById('for16')
  // for17 = document.getElementById('for17')
  // for18 = document.getElementById('for18')
  // for19 = document.getElementById('for19')
  // for20 = document.getElementById('for20')
  // for21 = document.getElementById('for21')
  // for22 = document.getElementById('for22')
  // for23 = document.getElementById('for23')
  // for24 = document.getElementById('for24')
  // for25 = document.getElementById('for25')
  // for26 = document.getElementById('for26')
  // for27 = document.getElementById('for27')
  // for28 = document.getElementById('for28')
  // for29 = document.getElementById('for29')
  // for30 = document.getElementById('for30')
  // for31 = document.getElementById('for31')
  // for32 = document.getElementById('for32')
  // for33 = document.getElementById('for33')
  // for34 = document.getElementById('for34')
  // for35 = document.getElementById('for35')
  // for36 = document.getElementById('for36')
  // for37 = document.getElementById('for37')
  // for38 = document.getElementById('for38')
  // for39 = document.getElementById('for39')
  // for40 = document.getElementById('for40')
  // for41 = document.getElementById('for41')
  // for42 = document.getElementById('for42')
  // for43 = document.getElementById('for43')
  // for44 = document.getElementById('for44')
  // for45 = document.getElementById('for45')
  // for46 = document.getElementById('for46')
  // for47 = document.getElementById('for47')
  // for48 = document.getElementById('for48')
  // for49 = document.getElementById('for49')
    // if(){

    // }else if(){

    // }
};
// document.getElementById('dispDiceRol').addEventListener('click', function(){
  var currentColorIndex = 0;
  // here is the function to dice
  const rolDicePlayerOne = ()=>{
  dispDiceRolOne.innerHTML = `<img style="width: 130px; height: 100px;" src='./cf/dice_ass/dice.gif'>`
  diceSound.play();
  diceRandNoPlayerOne = Math.floor((Math.random() * 6 + 1));
  
  setTimeout(function(){
    diceSound.pause();
    dispLuck();

  }, 1200);
  forStart = document.getElementById('forStart')
  for1 = document.getElementById('for1')
  for2 = document.getElementById('for2')
  for3 = document.getElementById('for3')
  for4 = document.getElementById('for4')
  for5 = document.getElementById('for5')
  for6 = document.getElementById('for6')
  for7 = document.getElementById('for7')
  for8 = document.getElementById('for8')
  for9 = document.getElementById('for9')
  for10 = document.getElementById('for10')
  for11 = document.getElementById('for11')
  for12 = document.getElementById('for12')
  for13 = document.getElementById('for13')
  for14 = document.getElementById('for14')
  for15 = document.getElementById('for15')
  for16 = document.getElementById('for16')
  for17 = document.getElementById('for17')
  for18 = document.getElementById('for18')
  for19 = document.getElementById('for19')
  for20 = document.getElementById('for20')
  for21 = document.getElementById('for21')
  for22 = document.getElementById('for22')
  for23 = document.getElementById('for23')
  for24 = document.getElementById('for24')
  for25 = document.getElementById('for25')
  for26 = document.getElementById('for26')
  for27 = document.getElementById('for27')
  for28 = document.getElementById('for28')
  for29 = document.getElementById('for29')
  for30 = document.getElementById('for30')
  for31 = document.getElementById('for31')
  for32 = document.getElementById('for32')
  for33 = document.getElementById('for33')
  for34 = document.getElementById('for34')
  for35 = document.getElementById('for35')
  for36 = document.getElementById('for36')
  for37 = document.getElementById('for37')
  for38 = document.getElementById('for38')
  for39 = document.getElementById('for39')
  for40 = document.getElementById('for40')
  for41 = document.getElementById('for41')
  for42 = document.getElementById('for42')
  for43 = document.getElementById('for43')
  for44 = document.getElementById('for44')
  for45 = document.getElementById('for45')
  for46 = document.getElementById('for46')
  for47 = document.getElementById('for47')
  for48 = document.getElementById('for48')
  for49 = document.getElementById('for49')
  // var backgroundToBlink = document.getElementById('for40')
  const colors = ['#ff0000', 'black', '#0000ff'];
  
  const blinkBackground = ()=>{
    if(diceRandNoPlayerOnePlayerOne == 1){
      for1.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 2){
      for2.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 3){
      for3.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 4){
      for4.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 5){
      for5.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 6){
      for6.style.backgroundColor = colors[currentColorIndex]
    }
    // backgroundToBlink.style.backgroundColor = colors[currentColorIndex]
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    // console.log(currentColorIndex);
  }
  const blinkingInterval = setInterval(blinkBackground, 1000)

  setTimeout(()=>{
    clearInterval(blinkingInterval);
  }, 5000)

};
//  )
