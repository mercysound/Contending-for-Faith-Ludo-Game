const myModal =  bootstrap.Modal.getOrCreateInstance('#booking-modal');
const myModal2 =  bootstrap.Modal.getOrCreateInstance('#modal2');
const myModal3 =  bootstrap.Modal.getOrCreateInstance('#modal3');
const myModal4 =  bootstrap.Modal.getOrCreateInstance('#modal4');
const myModal5 =  bootstrap.Modal.getOrCreateInstance('#modal5');
const myModal6 =  bootstrap.Modal.getOrCreateInstance('#modal6');
var diceSound = new Audio('./cf/dice_ass/Rolling-Dice-Sound-effect1.mp3');
var diceRandNoPlayerOnePlayerOne;


var arrayofTablesId = {
forStart: document.getElementById('forStart'),
for1 : document.getElementById('for1'),
for2 : document.getElementById('for2'),
for3 : document.getElementById('for3'),
for4 : document.getElementById('for4'),
for5 : document.getElementById('for5'),
for6 : document.getElementById('for6'),
for7 : document.getElementById('for7'),
for8 : document.getElementById('for8'),
for9 : document.getElementById('for9'),
for10 : document.getElementById('for10'),
for11 : document.getElementById('for11'),
for12 : document.getElementById('for12'),
for13 : document.getElementById('for13'),
for14 : document.getElementById('for14'),
for15 : document.getElementById('for15'),
for16 : document.getElementById('for16'),
for17 : document.getElementById('for17'),
for18 : document.getElementById('for18'),
for19 : document.getElementById('for19'),
for20 : document.getElementById('for20'),
for21 : document.getElementById('for21'),
for22 : document.getElementById('for22'),
for23 : document.getElementById('for23'),
for24 : document.getElementById('for24'),
for25 : document.getElementById('for25'),
for26 : document.getElementById('for26'),
for27 : document.getElementById('for27'),
for28 : document.getElementById('for28'),
for29 : document.getElementById('for29'),
for30 : document.getElementById('for30'),
for31 : document.getElementById('for31'),
for32 : document.getElementById('for32'),
for33 : document.getElementById('for33'),
for34 : document.getElementById('for34'),
for35 : document.getElementById('for35'),
for36 : document.getElementById('for36'),
for37 : document.getElementById('for37'),
for38 : document.getElementById('for38'),
for39 : document.getElementById('for39'),
for40 : document.getElementById('for40'),
for41 : document.getElementById('for41'),
for42 : document.getElementById('for42'),
for43 : document.getElementById('for43'),
for44 : document.getElementById('for44'),
for45 : document.getElementById('for45'),
for46 : document.getElementById('for46'),
for47 : document.getElementById('for47'),
for48 : document.getElementById('for48'),
for49 : document.getElementById('for49')
}
// var diceRandNoPlayerOnePlayerTwo;
// dice luck display condition
const dispLuck = ()=>{
  if(diceRandNoPlayerOnePlayerOne == 1){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-one.png' style="width: 130px; height: 100px;">`
    // alert('im work')
    // for1.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-one.png' style="width: 130px; height: 100px;">`
    myModal.show()
  }else if(diceRandNoPlayerOnePlayerOne == 2){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-two.png' style="width: 130px; height: 100px;">`
    myModal2.show()
  }else if(diceRandNoPlayerOnePlayerOne == 3){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-three.png' style="width: 130px; height: 100px;">`
    myModal3.show()
    
    
  }else if(diceRandNoPlayerOnePlayerOne == 4){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-four.png' style="width: 130px; height: 100px;">`
    myModal4.show()
    
  }else if(diceRandNoPlayerOnePlayerOne == 5){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-five.png' style="width: 130px; height: 100px;">`
    myModal5.show()
    
  }else if(diceRandNoPlayerOnePlayerOne == 6){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-six.png' style="width: 130px; height: 100px;">`
    myModal6.show()
    
  }
};

// const modalBox = (e) =>{
//   console.log(e);
// };
// document.getElementById('dispDiceRol').addEventListener('click', function(){
  var currentColorIndex = 0;
  // const aFunc = ()=>{
  // }
  // here is the function to dice
  const rolDicePlayerOne = ()=>{
  dispDiceRolOne.innerHTML = `<img style="width: 130px; height: 100px;" src='./cf/dice_ass/dice.gif'>`
  diceSound.play();
  diceRandNoPlayerOne = Math.floor((Math.random() * 6 + 1)); ////
  diceRandNoPlayerOnePlayerOne = 5
  // diceRandNoPlayerOnePlayerOne = 6
  setTimeout(function(){
    dispLuck()  
    diceSound.pause();
    // myModal.show()
  }, 1200);
  // var backgroundToBlink = document.getElementById('for40')
  // const colors = ['#ff0000', 'black', '#0000ff'];
  const colors = ['0.1', '0.3', '0.5', '0.7'];
  // var modalBox = document.getElementById('exampleModal').addEventListener('click', function(){

  // })


  const blinkBackground = ()=>{
    if(diceRandNoPlayerOnePlayerOne == 1){
      let recentImg = document.getElementById('forPicOne')
      recentImg.style.display = 'none'
      arrayofTablesId.for1.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/1.JPG")`
      arrayofTablesId.for1.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for1.style.backgroundSize = `100% 100%`
      // arrayofTablesId.for1.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 2){
      let recentImg2 = document.getElementById('forPicTwo')
      recentImg2.style.display = 'none'
      arrayofTablesId.for2.style.background = `linear-gradient( 120deg, rgba(15, 15, 15, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/2.JPG")`
      arrayofTablesId.for2.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for2.style.backgroundSize = `100% 100%`
      // arrayofTablesId.for2.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 3){
      let recentImg3 = document.getElementById('forPicThree')
      recentImg3.style.display = 'none'
      arrayofTablesId.for3.style.background = `linear-gradient( 120deg, rgba(15, 15, 15, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/3.JPG")`
      arrayofTablesId.for3.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for3.style.backgroundSize = `100% 100%`
      // for3.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 4){
      let recentImg4 = document.getElementById('forPicFour')
      recentImg4.style.display = 'none'
      arrayofTablesId.for4.style.background = `linear-gradient( 120deg, rgba(15, 15, 15, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/4.JPG")`
      arrayofTablesId.for4.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for4.style.backgroundSize = `100% 100%`
      // for4.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 5){
      let recentImg5 = document.getElementById('forPicFive')
      recentImg5.style.display = 'none'
      arrayofTablesId.for5.style.background = `linear-gradient( 120deg, rgba(15, 15, 15, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/5.JPG")`
      arrayofTablesId.for5.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for5.style.backgroundSize = `100% 100%`
      // for5.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 6){
      let recentImg6 = document.getElementById('forPicSix')
      recentImg6.style.display = 'none'
      arrayofTablesId.for6.style.backgroundImage = `
      url("cf/6.JPG")`
      arrayofTablesId.for6.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for6.style.backgroundSize = `100% 100%`
      // for6.style.backgroundColor = colors[currentColorIndex]
    }
    // backgroundToBlink.style.backgroundColor = colors[currentColorIndex]
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    // console.log(currentColorIndex);
  }
  const blinkingInterval = setInterval(blinkBackground, 800)

  setTimeout(()=>{
    clearInterval(blinkingInterval);
    if(diceRandNoPlayerOnePlayerOne == 1){
      let recentImg = document.getElementById('forPicOne')
      recentImg.style.display = 'block'
      arrayofTablesId.for1.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/1.JPG")`
      arrayofTablesId.for1.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for1.style.backgroundSize = `100% 100%`
      // arrayofTablesId.for1.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 2){
      let recentImg2 = document.getElementById('forPicTwo')
      recentImg2.style.display = 'block'
      arrayofTablesId.for2.style.background = `linear-gradient( 120deg, rgba(15, 15, 15, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
      url("cf/2.JPG")`
      arrayofTablesId.for2.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for2.style.backgroundSize = `100% 100%`
      // arrayofTablesId.for2.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 3){
      let recentImg3 = document.getElementById('forPicThree')
      recentImg3.style.display = 'block'
      arrayofTablesId.for3.style.background = `linear-gradient( 120deg, rgba(4, 59, 92, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(11, 127, 171, ${colors[currentColorIndex]}, rgba(30, 139, 195, ${colors[currentColorIndex]})),
      url("cf/3.JPG")`
      arrayofTablesId.for3.style.backgroundRepeat = `no-repeat`
      arrayofTablesId.for3.style.backgroundSize = `100% 100%`
      // for3.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 4){
      let recentImg4 = document.getElementById('forPicFour')
      recentImg4.style.display = 'block'
      // for4.style.backgroundColor = colors[currentColorIndex]
    }else if(diceRandNoPlayerOnePlayerOne == 5){
      let recentImg5 = document.getElementById('forPicFive')
      recentImg5.style.display = 'block'
    }else if(diceRandNoPlayerOnePlayerOne == 6){
      let recentImg6 = document.getElementById('forPicSix')
      recentImg6.style.display = 'block'
    }
  }, 8000)

};
//  )
