const myModal =  bootstrap.Modal.getOrCreateInstance('#booking-modal');

var diceSound = new Audio('./cf/dice_ass/Rolling-Dice-Sound-effect1.mp3');
var diceRandNoPlayerOnePlayerOne;
var currentColorIndex = 0;
// modal box trigger variable
const myModalStart =  bootstrap.Modal.getOrCreateInstance('#modalStart');
const myModal1 =  bootstrap.Modal.getOrCreateInstance('#modal1');
const myModal2 =  bootstrap.Modal.getOrCreateInstance('#modal2');
const myModal3 =  bootstrap.Modal.getOrCreateInstance('#modal3');
const myModal4 =  bootstrap.Modal.getOrCreateInstance('#modal4');
const myModal5 =  bootstrap.Modal.getOrCreateInstance('#modal5');
const myModal6 =  bootstrap.Modal.getOrCreateInstance('#modal6');
const myModal7 =  bootstrap.Modal.getOrCreateInstance('#modal7');
const myModal8 =  bootstrap.Modal.getOrCreateInstance('#modal8');
const myModal9 =  bootstrap.Modal.getOrCreateInstance('#modal9');
const myModal10 =  bootstrap.Modal.getOrCreateInstance('#modal10');
const myModal11 =  bootstrap.Modal.getOrCreateInstance('#modal11');
const myModal12 =  bootstrap.Modal.getOrCreateInstance('#modal12');
const myModal13 =  bootstrap.Modal.getOrCreateInstance('#modal13');
const myModal14 =  bootstrap.Modal.getOrCreateInstance('#modal14');
const myModal15 =  bootstrap.Modal.getOrCreateInstance('#modal15');
const myModal16 =  bootstrap.Modal.getOrCreateInstance('#modal16');
const myModal17 =  bootstrap.Modal.getOrCreateInstance('#modal17');
const myModal18 =  bootstrap.Modal.getOrCreateInstance('#modal18');
const myModal19 =  bootstrap.Modal.getOrCreateInstance('#modal19');
const myModal20 =  bootstrap.Modal.getOrCreateInstance('#modal20');
const myModal21 =  bootstrap.Modal.getOrCreateInstance('#modal21');
const myModal22 =  bootstrap.Modal.getOrCreateInstance('#modal22');
const myModal23 =  bootstrap.Modal.getOrCreateInstance('#modal23');
const myModal24 =  bootstrap.Modal.getOrCreateInstance('#modal24');
const myModal25 =  bootstrap.Modal.getOrCreateInstance('#modal25');
const myModal26 =  bootstrap.Modal.getOrCreateInstance('#modal26');
const myModal27 =  bootstrap.Modal.getOrCreateInstance('#modal27');
const myModal28 =  bootstrap.Modal.getOrCreateInstance('#modal28');
const myModal29 =  bootstrap.Modal.getOrCreateInstance('#modal29');
const myModal30 =  bootstrap.Modal.getOrCreateInstance('#modal30');
const myModal31 =  bootstrap.Modal.getOrCreateInstance('#modal31');
const myModal32 =  bootstrap.Modal.getOrCreateInstance('#modal32');
const myModal33 =  bootstrap.Modal.getOrCreateInstance('#modal33');
const myModal34 =  bootstrap.Modal.getOrCreateInstance('#modal34');
const myModal35 =  bootstrap.Modal.getOrCreateInstance('#modal35');
const myModal36 =  bootstrap.Modal.getOrCreateInstance('#modal36');
const myModal37 =  bootstrap.Modal.getOrCreateInstance('#modal37');
const myModal38 =  bootstrap.Modal.getOrCreateInstance('#modal38');
const myModal39 =  bootstrap.Modal.getOrCreateInstance('#modal39');
const myModal40 =  bootstrap.Modal.getOrCreateInstance('#modal40');
const myModal41 =  bootstrap.Modal.getOrCreateInstance('#modal41');
const myModal42 =  bootstrap.Modal.getOrCreateInstance('#modal42');
const myModal43 =  bootstrap.Modal.getOrCreateInstance('#modal43');
const myModal44 =  bootstrap.Modal.getOrCreateInstance('#modal44');
const myModal46 =  bootstrap.Modal.getOrCreateInstance('#modal46');
const myModal47 =  bootstrap.Modal.getOrCreateInstance('#modal47');
const myModal48 =  bootstrap.Modal.getOrCreateInstance('#modal48');
const myModal49 =  bootstrap.Modal.getOrCreateInstance('#modal49');
const myModal50 =  bootstrap.Modal.getOrCreateInstance('#modal50');

const colors = ['0.1', '0.3', '0.5', '0.7'];
var diceSound = new Audio('./cf/dice_ass/Rolling-Dice-Sound-effect1.mp3');
var diceRandNoPlayerOnePlayerOne;

const setMyRandNoStorage = () =>{
  var myRandNoStorageVar = sessionStorage.setItem("myNum", JSON.stringify(diceRandNoPlayerOnePlayerOne))
};
const retriveMyRandNoStorage = () =>{
  var retrieveMyRandNoStorageVar = JSON.parse(sessionStorage.getItem("myNum"))
  // console.log(retrieveMyRandNoStorageVar);
  return (retrieveMyRandNoStorageVar)
  // return retrieveMyRandNoStorageVar
};
// console.log(retriveMyRandNoStorage());
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
    // myModal.show()
  }else if(diceRandNoPlayerOnePlayerOne == 2){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-two.png' style="width: 130px; height: 100px;">`

  }else if(diceRandNoPlayerOnePlayerOne == 3){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-three.png' style="width: 130px; height: 100px;">`

  }else if(diceRandNoPlayerOnePlayerOne == 4){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-four.png' style="width: 130px; height: 100px;">`
    
  }else if(diceRandNoPlayerOnePlayerOne == 5){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-five.png' style="width: 130px; height: 100px;">`
    
  }else if(diceRandNoPlayerOnePlayerOne == 6){
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-six.png' style="width: 130px; height: 100px;">`
    
  }
};

  var currentColorIndex = 0;
  // const aFunc = ()=>{
  // }
  // here is the function to dice
  const rolDicePlayerOne = ()=>{
  dispDiceRolOne.innerHTML = `<img style="width: 130px; height: 100px;" src='./cf/dice_ass/dice.gif'>`
  diceSound.play();
  // diceRandNoPlayerOne = Math.floor((Math.random() * 6 + 1)); ////
  // diceRandNoPlayerOnePlayerOne = diceRandNoPlayerOne
  diceRandNoPlayerOnePlayerOne = 1
  setMyRandNoStorage()
  retriveMyRandNoStorage()
  // console.log(retrieveMyRandNoStorageVar);
  ifSixLuck()
  setTimeout(function(){
    dispLuck()  
    diceSound.pause();
    myModal.show()
  }, 1200);
  // var backgroundToBlink = document.getElementById('for40')
  // const colors = ['#ff0000', 'black', '#0000ff'];
  // const colors = ['0.1', '0.3', '0.5', '0.7'];
  // var modalBox = document.getElementById('exampleModal').addEventListener('click', function(){

  // })

  
  
  
}

const blinkBackground = ()=>{
  if(diceRandNoPlayerOnePlayerOne == 1){
    let recentImg = document.getElementById('forPicOne')
    recentImg.style.display = 'block'
    // diceTableElementObject.for1.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
    // url("cf/1.JPG")`
    // diceTableElementObject.for1.style.backgroundRepeat = `no-repeat`
    // diceTableElementObject.for1.style.backgroundSize = `100% 100%`
    // diceTableElementObject.for1.style.backgroundColor = colors[currentColorIndex]
  }else if(diceRandNoPlayerOnePlayerOne == 2){
    let recentImg2 = document.getElementById('forPicTwo')
    recentImg2.style.display = 'block'
    // diceTableElementObject.for2.style.backgroundColor = colors[currentColorIndex]
  }else if(diceRandNoPlayerOnePlayerOne == 3){
    let recentImg3 = document.getElementById('forPicThree')
    recentImg3.style.display = 'block'
    // for3.style.backgroundColor = colors[currentColorIndex]
  }else if(diceRandNoPlayerOnePlayerOne == 4){
    let recentImg4 = document.getElementById('forPicFour')
    recentImg4.style.display = 'block'
    // recentImg4.innerHTML = `<img src='./cf/4.JPG'/>`
    // for4.style.backgroundColor = colors[currentColorIndex]
  }else if(diceRandNoPlayerOnePlayerOne == 5){
    let recentImg5 = document.getElementById('forPicFive')
    recentImg5.style.display = 'block'
  }else if(diceRandNoPlayerOnePlayerOne == 6){
    let recentImg6 = document.getElementById('forPicSix')
    recentImg6.style.display = 'block'
  }
currentColorIndex = (currentColorIndex + 1) % colors.length;
};

// console.log(paraRet);
const ifSixLuck = () =>{
  var paraRet = retriveMyRandNoStorage()
  // console.log(typeof(retrieveMyRandNoStorageVar));

if(paraRet == 6){
  const blinkingInterval = setInterval(blinkBackground, 800)
  setTimeout(()=>{
    clearInterval(blinkingInterval);
  }, 8000)
  }else{alert("Hum! You Need 6 to get on road")};     
  // backgroundToBlink.style.backgroundColor = colors[currentColorIndex]
  // console.log(currentColorIndex);
}


//  )