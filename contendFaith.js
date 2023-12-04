//if any event need to triger after close of modal
// jQuery(document).ready(function () {
//   // $('#modalStart').on('show.bs.model', function (e) {
//   //   console.log('modal is about to show');
//   // })
//   // $('#modalStart').on('shown.bs.model', function (e) {
//   //   console.log('modal is about to show');
//   // });
//   // $('#modalStart').on('hide.bs.model', function (e) {
//   //   console.log('modal is about to show');
//   // })
//   // $('#modalStart').on('hidden.bs.model', function (e) {
//   //   console.log('modal is about to show');
//   // })
//   alert("gen");
// });

// to get the session figure
// variable to set and get session stor
var setComputerStoVar; // for computer
var getBackComputerStoVar;
var setMyStoVar; //for self
var getBackMyStoVar;
//here is the var setting the new number
// here is the var of the number saving to session stor
var computerTurnToSaveSessi = 0;
var myTurnToSaveSessi = 0;

// player to play turn
var myTurn = false;
var computerTurn = true;

// var globeChangNum = 17;

var currentColorIndex = 0;
var restart;

// Here is Computer session stor setter and getter func
const setComputerSessStorFunc = () => {
  setComputerStoVar = sessionStorage.setItem(
    "computerNum",
    JSON.stringify(computerTurnToSaveSessi)
  );
};
const retriveComputerSessStorFunc = () => {
  getBackComputerStoVar = JSON.parse(sessionStorage.getItem("computerNum"));
};
// Here is My session stor setter and getter func
const setMySessStorFunc = () => {
  setMyStoVar = sessionStorage.setItem(
    "MyNum",
    JSON.stringify(computerTurnToSaveSessi)
  );
};
const retriveMySessStorFunc = () => {
  getBackMyStoVar = JSON.parse(sessionStorage.getItem("computerNum"));
};

var confirmAnsObj = {
  modalshow1: false,
  modalshow2: false,
  modalshow3: false,
  modalshow4: false,
  modalshow5: false,
  modalshow6: false,
  modalshow7: false,
  modalshow8: false,
  modalshow9: false,
  modalshow10: false,
  modalshow11: false,
  modalshow12: false,
  modalshow13: false,
  modalshow14: false,
  modalshow15: false,
  modalshow16: false,
  modalshow17: false,
  modalshow18: false,
  modalshow19: false,
  modalshow20: false,
  modalshow21: false,
  modalshow22: false,
  modalshow23: false,
  modalshow24: false,
  modalshow25: false,
  modalshow26: false,
  modalshow27: false,
  modalshow28: false,
  modalshow29: false,
  modalshow30: false,
  modalshow31: false,
  modalshow32: false,
  modalshow33: false,
  modalshow34: false,
  modalshow35: false,
  modalshow36: false,
  modalshow37: false,
  modalshow38: false,
  modalshow39: false,
  modalshow40: false,
  modalshow41: false,
  modalshow42: false,
  modalshow43: false,
  modalshow44: false,
  modalshow45: false,
  modalshow46: false,
  modalshow47: false,
  modalshow48: false,
  modalshow49: false,
  modalshow50: false,
  modalshow51: false,
  modalshow52: false,
  modalshow53: false,
  modalshow54: false,
  modalshow55: false,
  modalshow56: false,
};

// here is the table blinking background
const colors = ["0.1", "0.3", "0.5", "0.7"];

var diceSound = new Audio("./cf/dice_ass/Rolling-Dice-Sound-effect1.mp3");

// here is the var used to get all modal trigger id
var allModalComputer = {
  myModalStart: bootstrap.Modal.getOrCreateInstance("#modalStart"),
  myModal1: bootstrap.Modal.getOrCreateInstance("#modal1"),
  myModal2: bootstrap.Modal.getOrCreateInstance("#modal2"),
  myModal3: bootstrap.Modal.getOrCreateInstance("#modal3"),
  myModal4: bootstrap.Modal.getOrCreateInstance("#modal4"),
  myModal5: bootstrap.Modal.getOrCreateInstance("#modal5"),
  myModal6: bootstrap.Modal.getOrCreateInstance("#modal6"),
  myModal7: bootstrap.Modal.getOrCreateInstance("#modal7"),
  myModal8: bootstrap.Modal.getOrCreateInstance("#modal8"),
  myModal9: bootstrap.Modal.getOrCreateInstance("#modal9"),
  myModal10: bootstrap.Modal.getOrCreateInstance("#modal10"),
  myModal11: bootstrap.Modal.getOrCreateInstance("#modal11"),
  myModal12: bootstrap.Modal.getOrCreateInstance("#modal12"),
  myModal13: bootstrap.Modal.getOrCreateInstance("#modal13"),
  myModal14: bootstrap.Modal.getOrCreateInstance("#modal14"),
  myModal15: bootstrap.Modal.getOrCreateInstance("#modal15"),
  myModal16: bootstrap.Modal.getOrCreateInstance("#modal16"),
  myModal17: bootstrap.Modal.getOrCreateInstance("#modal17"),
  myModal18: bootstrap.Modal.getOrCreateInstance("#modal18"),
  myModal19: bootstrap.Modal.getOrCreateInstance("#modal19"),
  myModal20: bootstrap.Modal.getOrCreateInstance("#modal20"),
  myModal21: bootstrap.Modal.getOrCreateInstance("#modal21"),
  myModal22: bootstrap.Modal.getOrCreateInstance("#modal22"),
  myModal23: bootstrap.Modal.getOrCreateInstance("#modal23"),
  myModal24: bootstrap.Modal.getOrCreateInstance("#modal24"),
  myModal25: bootstrap.Modal.getOrCreateInstance("#modal25"),
  myModal26: bootstrap.Modal.getOrCreateInstance("#modal26"),
  myModal27: bootstrap.Modal.getOrCreateInstance("#modal27"),
  myModal28: bootstrap.Modal.getOrCreateInstance("#modal28"),
  myModal29: bootstrap.Modal.getOrCreateInstance("#modal29"),
  myModal30: bootstrap.Modal.getOrCreateInstance("#modal30"),
  myModal31: bootstrap.Modal.getOrCreateInstance("#modal31"),
  myModal32: bootstrap.Modal.getOrCreateInstance("#modal32"),
  myModal33: bootstrap.Modal.getOrCreateInstance("#modal33"),
  myModal34: bootstrap.Modal.getOrCreateInstance("#modal34"),
  myModal35: bootstrap.Modal.getOrCreateInstance("#modal35"),
  myModal36: bootstrap.Modal.getOrCreateInstance("#modal36"),
  myModal37: bootstrap.Modal.getOrCreateInstance("#modal37"),
  myModal38: bootstrap.Modal.getOrCreateInstance("#modal38"),
  myModal39: bootstrap.Modal.getOrCreateInstance("#modal39"),
  myModal40: bootstrap.Modal.getOrCreateInstance("#modal40"),
  myModal41: bootstrap.Modal.getOrCreateInstance("#modal41"),
  myModal42: bootstrap.Modal.getOrCreateInstance("#modal42"),
  myModal43: bootstrap.Modal.getOrCreateInstance("#modal43"),
  myModal44: bootstrap.Modal.getOrCreateInstance("#modal44"),
  myModal45: bootstrap.Modal.getOrCreateInstance("#modal45"),
  myModal46: bootstrap.Modal.getOrCreateInstance("#modal46"),
  myModal47: bootstrap.Modal.getOrCreateInstance("#modal47"),
  myModal48: bootstrap.Modal.getOrCreateInstance("#modal48"),
  myModal49: bootstrap.Modal.getOrCreateInstance("#modal49"),
  myModal50: bootstrap.Modal.getOrCreateInstance("#modal50")
};

const blinkBackground = ()=>{
  if (getBackComputerStoVar == 6) {
    let recentImgStart = document.getElementById("forImgStart");
    recentImgStart.style.display = "none";
    tableObjec.forStart.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/start.JPG")`;
    tableObjec.forStart.style.backgroundSize = `100% 100%`;
    tableObjec.forStart.style.backgroundRepeat = `no-repeat`;
    // tableObjec.for1.style.backgroundColor = colors[currentColorIndex]
  } else if (getBackComputerStoVar == 7) {
    let recentImg1 = document.getElementById("forImgOne");
    recentImg1.style.display = "none";
    tableObjec.for1.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/1.JPG")`;
    tableObjec.for1.style.backgroundRepeat = `no-repeat`;
    tableObjec.for1.style.backgroundSize = `100% 100%`;
    // for2.style.backgroundColor = colors[currentColorIndex]
  } else if (getBackComputerStoVar == 8) {
    let recentImg2 = document.getElementById("forImgTwo");
    recentImg2.style.display = "none";
    tableObjec.for2.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/2.JPG")`;
    tableObjec.for2.style.backgroundRepeat = `no-repeat`;
    tableObjec.for2.style.backgroundSize = `100% 100%`;
    // for2.style.backgroundColor = colors[currentColorIndex]
  } else if (getBackComputerStoVar == 9) {
    let recentImg3 = document.getElementById("forImgThree");
    recentImg3.style.display = "none";
    tableObjec.for3.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/3.JPG")`;
    tableObjec.for3.style.backgroundRepeat = `no-repeat`;
    tableObjec.for3.style.backgroundSize = `100% 100%`;
    // for2.style.backgroundColor = colors[currentColorIndex]
  } else if (getBackComputerStoVar == 10) {
    let recentImg4 = document.getElementById("forImgFour");
    recentImg4.style.display = "none";
    tableObjec.for4.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/4.JPG")`;
    tableObjec.for4.style.backgroundRepeat = `no-repeat`;
    tableObjec.for4.style.backgroundSize = `100% 100%`;
    // for2.style.backgroundColor = colors[currentColorIndex]
  } else if (getBackComputerStoVar == 11) {
    let recentImg5 = document.getElementById("forImgFive");
    recentImg5.style.display = "none";
    tableObjec.for5.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/5.JPG")`;
    tableObjec.for5.style.backgroundRepeat = `no-repeat`;
    tableObjec.for5.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 12) {
    let recentImg6 = document.getElementById("forImgSix");
    recentImg6.style.display = "none";
    tableObjec.for6.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/6.JPG")`;
    tableObjec.for6.style.backgroundRepeat = `no-repeat`;
    tableObjec.for6.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 13) {
    let recentImg7 = document.getElementById("forImgSeven");
    recentImg7.style.display = "none";
    tableObjec.for7.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/7.JPG")`;
    tableObjec.for7.style.backgroundRepeat = `no-repeat`;
    tableObjec.for7.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 14) {
    let recentImg8 = document.getElementById("forImgEight");
    recentImg8.style.display = "none";
    tableObjec.for8.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/8.JPG")`;
    tableObjec.for8.style.backgroundRepeat = `no-repeat`;
    tableObjec.for8.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 15) {
    let recentImg9 = document.getElementById("forImgNine");
    recentImg9.style.display = "none";
    tableObjec.for9.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/9.JPG")`;
    tableObjec.for9.style.backgroundRepeat = `no-repeat`;
    tableObjec.for9.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 16) {
    let recentImg10 = document.getElementById("forImgTen");
    recentImg10.style.display = "none";
    tableObjec.for10.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/10.JPG")`;
    tableObjec.for10.style.backgroundRepeat = `no-repeat`;
    tableObjec.for10.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 17) {
    let recentImg11 = document.getElementById("forImgEleven");
    recentImg11.style.display = "none";
    tableObjec.for11.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/11.JPG")`;
    tableObjec.for11.style.backgroundRepeat = `no-repeat`;
    tableObjec.for11.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 18) {
    let recentImg12 = document.getElementById("forImgTwelve");
    recentImg12.style.display = "none";
    tableObjec.for12.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/12.JPG")`;
    tableObjec.for12.style.backgroundRepeat = `no-repeat`;
    tableObjec.for12.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 19) {
    let recentImg13 = document.getElementById("forImgThirteen");
    recentImg13.style.display = "none";
    tableObjec.for13.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/13.JPG")`;
    tableObjec.for13.style.backgroundRepeat = `no-repeat`;
    tableObjec.for13.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 20) {
    let recentImg14 = document.getElementById("forImgFourteen");
    recentImg14.style.display = "none";
    tableObjec.for14.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/14.JPG")`;
    tableObjec.for14.style.backgroundRepeat = `no-repeat`;
    tableObjec.for14.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 21) {
    let recentImg15 = document.getElementById("forImgFiften");
    recentImg15.style.display = "none";
    tableObjec.for15.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/15.JPG")`;
    tableObjec.for15.style.backgroundRepeat = `no-repeat`;
    tableObjec.for15.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 22) {
    let recentImg16 = document.getElementById("forImgSixteen");
    recentImg16.style.display = "none";
    tableObjec.for16.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/16.JPG")`;
    tableObjec.for16.style.backgroundRepeat = `no-repeat`;
    tableObjec.for16.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 23) {
    let recentImg17 = document.getElementById("forImgSeventeen");
    recentImg17.style.display = "none";
    tableObjec.for17.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/17.JPG")`;
    tableObjec.for17.style.backgroundRepeat = `no-repeat`;
    tableObjec.for17.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 24) {
    let recentImg18 = document.getElementById("forImgEighteen");
    recentImg18.style.display = "none";
    tableObjec.for18.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/18.JPG")`;
    tableObjec.for18.style.backgroundRepeat = `no-repeat`;
    tableObjec.for18.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 25) {
    let recentImg19 = document.getElementById("forImgNineteen");
    recentImg19.style.display = "none";
    tableObjec.for19.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/19.JPG")`;
    tableObjec.for19.style.backgroundRepeat = `no-repeat`;
    tableObjec.for19.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 26) {
    let recentImg20 = document.getElementById("forImgTwenty");
    recentImg20.style.display = "none";
    tableObjec.for20.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/20.JPG")`;
    tableObjec.for20.style.backgroundRepeat = `no-repeat`;
    tableObjec.for20.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 27) {
    let recentImg21 = document.getElementById("forImgTwentyOne");
    recentImg21.style.display = "none";
    tableObjec.for21.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/21.JPG")`;
    tableObjec.for21.style.backgroundRepeat = `no-repeat`;
    tableObjec.for21.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 28) {
    let recentImg22 = document.getElementById("forImgTwentyTwo");
    recentImg22.style.display = "none";
    tableObjec.for22.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/22.JPG")`;
    tableObjec.for22.style.backgroundRepeat = `no-repeat`;
    tableObjec.for22.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 29) {
    let recentImg23 = document.getElementById("forImgTwentyThree");
    recentImg23.style.display = "none";
    tableObjec.for23.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/23.JPG")`;
    tableObjec.for23.style.backgroundRepeat = `no-repeat`;
    tableObjec.for23.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 30) {
    let recentImg24 = document.getElementById("forImgTwentyFour");
    recentImg24.style.display = "none";
    tableObjec.for24.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/24.JPG")`;
    tableObjec.for24.style.backgroundRepeat = `no-repeat`;
    tableObjec.for24.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 31) {
    let recentImg25 = document.getElementById("forImgTwentyFive");
    recentImg25.style.display = "none";
    tableObjec.for25.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/25.JPG")`;
    tableObjec.for25.style.backgroundRepeat = `no-repeat`;
    tableObjec.for25.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 32) {
    let recentImg26 = document.getElementById("forImgTwentySix");
    recentImg26.style.display = "none";
    tableObjec.for26.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/26.JPG")`;
    tableObjec.for26.style.backgroundRepeat = `no-repeat`;
    tableObjec.for26.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 33) {
    let recentImg27 = document.getElementById("forImgTwentySeven");
    recentImg27.style.display = "none";
    tableObjec.for27.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/27.JPG")`;
    tableObjec.for27.style.backgroundRepeat = `no-repeat`;
    tableObjec.for27.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 34) {
    let recentImg28 = document.getElementById("forImgTwentyEight");
    recentImg28.style.display = "none";
    tableObjec.for28.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/28.JPG")`;
    tableObjec.for28.style.backgroundRepeat = `no-repeat`;
    tableObjec.for28.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 35) {
    let recentImg29 = document.getElementById("forImgTwentyNine");
    recentImg29.style.display = "none";
    tableObjec.for29.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/29.JPG")`;
    tableObjec.for29.style.backgroundRepeat = `no-repeat`;
    tableObjec.for29.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 36) {
    let recentImg30 = document.getElementById("forImgThirty");
    recentImg30.style.display = "none";
    tableObjec.for30.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/30.JPG")`;
    tableObjec.for30.style.backgroundRepeat = `no-repeat`;
    tableObjec.for30.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 37) {
    let recentImg31 = document.getElementById("forImgThirtyOne");
    recentImg31.style.display = "none";
    tableObjec.for31.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/31.JPG")`;
    tableObjec.for31.style.backgroundRepeat = `no-repeat`;
    tableObjec.for31.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 38) {
    let recentImg32 = document.getElementById("forImgThirtyTwo");
    recentImg32.style.display = "none";
    tableObjec.for32.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/32.JPG")`;
    tableObjec.for32.style.backgroundRepeat = `no-repeat`;
    tableObjec.for32.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 39) {
    let recentImg33 = document.getElementById("forImgThirtyThree");
    recentImg33.style.display = "none";
    tableObjec.for33.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/33.JPG")`;
    tableObjec.for33.style.backgroundRepeat = `no-repeat`;
    tableObjec.for33.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 40) {
    let recentImg34 = document.getElementById("forImgThirtyFour");
    recentImg34.style.display = "none";
    tableObjec.for34.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/34.JPG")`;
    tableObjec.for34.style.backgroundRepeat = `no-repeat`;
    tableObjec.for34.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 41) {
    let recentImg35 = document.getElementById("forImgThirtyFive");
    recentImg35.style.display = "none";
    tableObjec.for35.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/35.JPG")`;
    tableObjec.for35.style.backgroundRepeat = `no-repeat`;
    tableObjec.for35.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 42) {
    let recentImg36 = document.getElementById("forImgThirtySix");
    recentImg36.style.display = "none";
    tableObjec.for36.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/36.JPG")`;
    tableObjec.for36.style.backgroundRepeat = `no-repeat`;
    tableObjec.for36.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 43) {
    let recentImg37 = document.getElementById("forImgThirtySeven");
    recentImg37.style.display = "none";
    tableObjec.for37.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/37.JPG")`;
    tableObjec.for37.style.backgroundRepeat = `no-repeat`;
    tableObjec.for37.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 44) {
    let recentImg38 = document.getElementById("forImgThirtyEight");
    recentImg38.style.display = "none";
    tableObjec.for38.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/38.JPG")`;
    tableObjec.for38.style.backgroundRepeat = `no-repeat`;
    tableObjec.for38.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 45) {
    let recentImg39 = document.getElementById("forImgThirtyNine");
    recentImg39.style.display = "none";
    tableObjec.for39.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/39.JPG")`;
    tableObjec.for39.style.backgroundRepeat = `no-repeat`;
    tableObjec.for39.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 46) {
    let recentImg40 = document.getElementById("forImgFourty");
    recentImg40.style.display = "none";
    tableObjec.for40.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/40.JPG")`;
    tableObjec.for40.style.backgroundRepeat = `no-repeat`;
    tableObjec.for40.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 47) {
    let recentImg41 = document.getElementById("forImgFourtyOne");
    recentImg41.style.display = "none";
    tableObjec.for41.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/41.JPG")`;
    tableObjec.for41.style.backgroundRepeat = `no-repeat`;
    tableObjec.for41.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 48) {
    let recentImg42 = document.getElementById("forImgFourtyTwo");
    recentImg42.style.display = "none";
    tableObjec.for42.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/42.JPG")`;
    tableObjec.for42.style.backgroundRepeat = `no-repeat`;
    tableObjec.for42.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 49) {
    let recentImg43 = document.getElementById("forImgFourtyThree");
    recentImg43.style.display = "none";
    tableObjec.for43.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/43.JPG")`;
    tableObjec.for43.style.backgroundRepeat = `no-repeat`;
    tableObjec.for43.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 50) {
    let recentImg44 = document.getElementById("forImgFourtyFour");
    recentImg44.style.display = "none";
    tableObjec.for44.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/44.JPG")`;
    tableObjec.for44.style.backgroundRepeat = `no-repeat`;
    tableObjec.for44.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 51) {
    let recentImg45 = document.getElementById("forImgFourtyFive");
    recentImg45.style.display = "none";
    tableObjec.for45.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/45.JPG")`;
    tableObjec.for45.style.backgroundRepeat = `no-repeat`;
    tableObjec.for45.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 52) {
    let recentImg46 = document.getElementById("forImgFourtySix");
    recentImg46.style.display = "none";
    tableObjec.for46.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/46.JPG")`;
    tableObjec.for46.style.backgroundRepeat = `no-repeat`;
    tableObjec.for46.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 53) {
    let recentImg47 = document.getElementById("forImgFourtySeven");
    recentImg47.style.display = "none";
    tableObjec.for47.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/47.JPG")`;
    tableObjec.for47.style.backgroundRepeat = `no-repeat`;
    tableObjec.for47.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 54) {
    let recentImg48 = document.getElementById("forImgFourtyEight");
    recentImg48.style.display = "none";
    tableObjec.for48.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/48.JPG")`;
    tableObjec.for48.style.backgroundRepeat = `no-repeat`;
    tableObjec.for48.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 55) {
    let recentImg49 = document.getElementById("forImgFourtyNine");
    recentImg49.style.display = "none";
    tableObjec.for49.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/49.JPG")`;
    tableObjec.for49.style.backgroundRepeat = `no-repeat`;
    tableObjec.for49.style.backgroundSize = `100% 100%`;
  } else if (getBackComputerStoVar == 56) {
    let recentImg50 = document.getElementById("forImgFifty");
    recentImg50.style.display = "none";
    tableObjec.for50.style.background = `linear-gradient( 120deg, rgba(180, 212, 26, ${colors[currentColorIndex]}), rgba(212, 23, 23, ${colors[currentColorIndex]}), rgba(29, 19, 19, ${colors[currentColorIndex]})),
  url("cf/50.JPG")`;
    tableObjec.for50.style.backgroundRepeat = `no-repeat`;
    tableObjec.for50.style.backgroundSize = `100% 100%`;
  }
  currentColorIndex = (currentColorIndex + 1) % colors.length;
};

var tableObjec = {
  forStart: document.getElementById("forStart"),
  for1: document.getElementById("for1"),
  for2: document.getElementById("for2"),
  for3: document.getElementById("for3"),
  for4: document.getElementById("for4"),
  for5: document.getElementById("for5"),
  for6: document.getElementById("for6"),
  for7: document.getElementById("for7"),
  for8: document.getElementById("for8"),
  for9: document.getElementById("for9"),
  for10: document.getElementById("for10"),
  for11: document.getElementById("for11"),
  for12: document.getElementById("for12"),
  for13: document.getElementById("for13"),
  for14: document.getElementById("for14"),
  for15: document.getElementById("for15"),
  for16: document.getElementById("for16"),
  for17: document.getElementById("for17"),
  for18: document.getElementById("for18"),
  for19: document.getElementById("for19"),
  for20: document.getElementById("for20"),
  for21: document.getElementById("for21"),
  for22: document.getElementById("for22"),
  for23: document.getElementById("for23"),
  for24: document.getElementById("for24"),
  for25: document.getElementById("for25"),
  for26: document.getElementById("for26"),
  for27: document.getElementById("for27"),
  for28: document.getElementById("for28"),
  for29: document.getElementById("for29"),
  for30: document.getElementById("for30"),
  for31: document.getElementById("for31"),
  for32: document.getElementById("for32"),
  for33: document.getElementById("for33"),
  for34: document.getElementById("for34"),
  for35: document.getElementById("for35"),
  for36: document.getElementById("for36"),
  for37: document.getElementById("for37"),
  for38: document.getElementById("for38"),
  for39: document.getElementById("for39"),
  for40: document.getElementById("for40"),
  for41: document.getElementById("for41"),
  for42: document.getElementById("for42"),
  for43: document.getElementById("for43"),
  for44: document.getElementById("for44"),
  for45: document.getElementById("for45"),
  for46: document.getElementById("for46"),
  for47: document.getElementById("for47"),
  for48: document.getElementById("for48"),
  for49: document.getElementById("for49"),
  for50: document.getElementById("for50"),
};

const getSelectedOption = () => {
  if (confirmAnsObj.modalshow11) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          $("#modal11").modal("hide");
          alert("You miss it! Its 1stTurn turn now");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          $("#modal11").modal("hide");
          alert("You miss it! Its 2ndTurn turn now");
        }
        confirmAnsObj.modalshow11 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = true;
          myTurn = false;
          $("#modal11").modal("hide");
          alert("You got it! 2ndTurn play once more");
        } else if (myTurn == true) {
          myTurn = true;
          computerTurn = false;
          $("#modal11").modal("hide");
          alert("You got it! 1stTurn once more");
        }
        confirmAnsObj.modalshow11 = false;
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow12) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          getBackComputerStoVar += 21;
          myTurn = true;
          computerTurn = false;
          alert("You got it! Its 1stTurn turn now");
        } else if (myTurn == true) {
          getBackMyStoVar += 21;
          computerTurn = true;
          myTurn = false;
          alert("You got it! Its 2ndTurn turn now");
        }
        blinkBackground();
        $("#modal12").modal("hide");
        confirmAnsObj.modalshow12 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You miss it! Its 1stTurn turn now");
          $("#modal12").modal("hide");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You miss it! Its 2ndTurn turn now");
          $("#modal12").modal("hide");
        }
        confirmAnsObj.modalshow12 = false;
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow13) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow13 = false;
      $("#modal13").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow13 = false;
      $("#modal13").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow14) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = false;
          $("#modal14").modal("hide");
          alert("You miss it! Its 1stTurn turn now");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          $("#modal14").modal("hide");
          alert("You miss it! Its 2ndTurn turn now");
        }
        confirmAnsObj.modalshow14 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = true;
          myTurn = false;
          $("#modal14").modal("hide");
          alert("You got it! 2ndTurn turn to play once more");
        } else if (myTurn == true) {
          myTurn = true;
          computerTurn = false;
          $("#modal14").modal("hide");
          alert("You got it! 1stTurn turn to play once more");
        }
        confirmAnsObj.modalshow14 = false;
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow15) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          getBackComputerStoVar += 25;
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar += 25;
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal15").modal("hide");
        confirmAnsObj.modalshow15 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        $("#modal15").modal("hide");
        confirmAnsObj.modalshow15 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow16) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow16 = false;
      alert("Its computerTurn turn");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow16 = false;
      alert("Its myTurnTurn turn");
    }
    $("#modal16").modal("hide");
  } else if (confirmAnsObj.modalshow17) {
    if (myTurn == true) {
      getBackMyStoVar += 3;
      myTurn = false;
      computerTurn = true;
      alert("Its computerTurn turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar += 3;
      computerTurn = false;
      myTurn = true;
      alert("Its myTurnTurn turn");
    }
    blinkBackground();
    confirmAnsObj.modalshow17 = false;
    $("#modal17").modal("hide");
  } else if (confirmAnsObj.modalshow18) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow18 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow18 = false;
      alert("Its myTurn turn now");
    }
    $("#modal18").modal("hide");
  } else if (confirmAnsObj.modalshow19) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        $("#modal19").modal("hide");
        confirmAnsObj.modalshow19 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          getBackComputerStoVar += 20;
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar += 20;
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal19").modal("hide");
        confirmAnsObj.modalshow19 = false;
        blinkBackground();
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow20) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow20 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow20 = false;
      alert("Its myTurn turn now");
    }
    $("#modal20").modal("hide");
  } else if (confirmAnsObj.modalshow21) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You miss it! Its 1stTurn turn now");
          $("#modal21").modal("hide");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You miss it! Its 2ndTurn turn now");
          $("#modal12").modal("hide");
        }
        confirmAnsObj.modalshow21 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          getBackComputerStoVar += 19;
          myTurn = true;
          computerTurn = false;
          alert("You got it! Its 1stTurn turn now");
          $("#modal21").modal("hide");
        } else if (myTurn == true) {
          getBackMyStoVar += 19;
          computerTurn = true;
          myTurn = false;
          alert("You got it! Its 2ndTurn turn now");
          $("#modal21").modal("hide");
        }
        blinkBackground();
        confirmAnsObj.modalshow21 = false;
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow22) {
    if (computerTurn == true) {
      computerTurn = true;
      myTurn = false;
      $("#modal22").modal("hide");
      alert("You Got it! Its 2ndTurn turn to play once more");
    } else if (myTurn == true) {
      myTurn = true;
      computerTurn = true;
      $("#modal22").modal("hide");
      alert("You you Got it! Its 1stTurn Play once more");
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow23) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        $("#modal23").modal("hide");
        confirmAnsObj.modalshow23 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          getBackComputerStoVar += 13;
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
          blinkBackground();
        } else if (myTurn == true) {
          getBackMyStoVar += 13;
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
          blinkBackground();
        }
        $("#modal23").modal("hide");
        confirmAnsObj.modalshow23 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow24) {
    blinkBackground();
    if (myTurn == true) {
      getBackMyStoVar = 11;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow24 = false;
      $("#modal24").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar = 11;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow24 = false;
      $("#modal24").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow25) {
    if (computerTurn == true) {
      computerTurn = true;
      myTurn = false;
      $("#modal25").modal("hide");
      alert("You Got it! Its 2ndTurn turn to play once more");
    } else if (myTurn == true) {
      myTurn = true;
      computerTurn = true;
      $("#modal25").modal("hide");
      alert("You you Got it! Its 1stTurn Play once more");
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow26) {
    blinkBackground();
    if (myTurn == true) {
      getBackMyStoVar += 7;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow26 = false;
      $("#modal26").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar += 7;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow26 = false;
      $("#modal26").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow27) {
    blinkBackground();
    if (myTurn == true) {
      getBackMyStoVar = 6;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow27 = false;
      $("#modal27").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar = 6;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow27 = false;
      $("#modal27").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow28) {
    if (computerTurn == true) {
      computerTurn = true;
      myTurn = false;
      $("#modal28").modal("hide");
      alert("You Got it! Its 2ndTurn turn to play once more");
    } else if (myTurn == true) {
      myTurn = true;
      computerTurn = true;
      $("#modal28").modal("hide");
      alert("You you Got it! Its 1stTurn Play once more");
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (confirmAnsObj.modalshow29) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          getBackComputerStoVar = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar = 10;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal29").modal("hide");
        confirmAnsObj.modalshow29 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal29").modal("hide");
        confirmAnsObj.modalshow29 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow30) {
    blinkBackground();
    if (myTurn == true) {
      getBackMyStoVar = 11;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow30 = false;
      $("#modal30").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar = 11;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow30 = false;
      $("#modal30").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow31) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow31 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow31 = false;
      alert("Its myTurn turn now");
    }
    $("#modal31").modal("hide");
  } else if (confirmAnsObj.modalshow32) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          getBackComputerStoVar = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar = 10;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal32").modal("hide");
        confirmAnsObj.modalshow32 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal32").modal("hide");
        confirmAnsObj.modalshow32 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow33) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow33 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow33 = false;
      alert("Its myTurn turn now");
    }
    $("#modal33").modal("hide");
  } else if (confirmAnsObj.modalshow34) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal34").modal("hide");
        confirmAnsObj.modalshow34 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal34").modal("hide");
        confirmAnsObj.modalshow34 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow35) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow35 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow35 = false;
      alert("Its myTurn turn now");
    }
    $("#modal35").modal("hide");
  } else if (confirmAnsObj.modalshow36) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow36 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow36 = false;
      alert("Its myTurn turn now");
    }
    $("#modal36").modal("hide");
  } else if (confirmAnsObj.modalshow37) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal37").modal("hide");
        confirmAnsObj.modalshow37 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          getBackComputerStoVar = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar = 10;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal37").modal("hide");
        confirmAnsObj.modalshow37 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow38) {
    blinkBackground();
    if (myTurn == true) {
      getBackMyStoVar = 12;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow38 = false;
      $("#modal38").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar = 12;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow38 = false;
      $("#modal38").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow39) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          // getBackComputerStoVar = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          // getBackMyStoVar = 10;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal39").modal("hide");
        confirmAnsObj.modalshow39 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal39").modal("hide");
        confirmAnsObj.modalshow39 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow40) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow40 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow40 = false;
      alert("Its myTurn turn now");
    }
    $("#modal40").modal("hide");
  } else if (confirmAnsObj.modalshow41) {
    blinkBackground();
    if (myTurn == true) {
      getBackMyStoVar = 12;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow41 = false;
      $("#modal41").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar = 12;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow41 = false;
      $("#modal41").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow42) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow42 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow42 = false;
      alert("Its myTurn turn now");
    }
    $("#modal42").modal("hide");
  } else if (confirmAnsObj.modalshow43) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow43 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow43 = false;
      alert("Its myTurn turn now");
    }
    $("#modal43").modal("hide");
  } else if (confirmAnsObj.modalshow44) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow44 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow44 = false;
      alert("Its myTurn turn now");
    }
    $("#modal44").modal("hide");
  } else if (confirmAnsObj.modalshow45) {
    if (myTurn == true) {
      getBackMyStoVar = 6;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow45 = false;
      $("#modal45").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      getBackComputerStoVar = 6;
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow45 = false;
      $("#modal45").modal("hide");
      alert("Its myTurn turn");
    }
  } else if (confirmAnsObj.modalshow46) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          getBackComputerStoVar = 6;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar = 6;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal46").modal("hide");
        confirmAnsObj.modalshow46 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal46").modal("hide");
        confirmAnsObj.modalshow46 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow47) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow47 = false;
      alert("Its computer turn now");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow47 = false;
      alert("Its myTurn turn now");
    }
    $("#modal47").modal("hide");
  } else if (confirmAnsObj.modalshow48) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal48").modal("hide");
        confirmAnsObj.modalshow48 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          getBackComputerStoVar = 6;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar = 6;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal48").modal("hide");
        confirmAnsObj.modalshow48 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (confirmAnsObj.modalshow49) {
    var selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          getBackComputerStoVar = 18;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          getBackMyStoVar = 18;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        blinkBackground();
        $("#modal49").modal("hide");
        confirmAnsObj.modalshow49 = false;
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        $("#modal49").modal("hide");
        confirmAnsObj.modalshow49 = false;
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  }
};

const forEntr = (e) => {
  if (e.key === "Enter") {
    // alert('work')
    rolDicePlayerOne();
  }
};
var correctAnswer;


const rolDicePlayerOne = () => {
  if (computerTurn == true) {
    $(".modalStarter").on("hidden.bs.modal", function (e) {
      // Handle the event after the modal is shown
      dispDiceHole.focus();
    });
    // This section is use to focus back on roll dice
    let dispDiceHole = $(".editable");
    window.addEventListener("DOMContentLoaded", () => {
      dispDiceHole.focus();
    });

    // this is to add onclick to all cont btn
    document.getElementById("btn-continue").addEventListener("click", () => {
      dispDiceHole.focus();
    });

    dispDiceRolOne.innerHTML = `<img style="width: 130px; height: 100px;" src='./cf/dice_ass/dice.gif'>`;

    diceSound.play();

    diceRandNoPlayerOne = Math.floor((Math.random() * 6 + 1)); ////
    // diceRandNoPlayerOne = 6;
    // computerTurnToSaveSessi = 11;
    getBackComputerStoVar = diceRandNoPlayerOne

    if(computerTurnToSaveSessi + diceRandNoPlayerOne >= 56){
      computerTurnToSaveSessi = 56
      alert("you won")
      restart = confirm("do you want to restart")
      if(restart){
        sessionStorage.clear()
        // setComputerSessStorFunc()
        window.location.reload()
      }
    }else if((computerTurnToSaveSessi == 50 && diceRandNoPlayerOne == 6) || (computerTurnToSaveSessi >= 51 && diceRandNoPlayerOne == 5)  || (computerTurnToSaveSessi >= 52 && diceRandNoPlayerOne == 4)  || (computerTurnToSaveSessi >= 53 && diceRandNoPlayerOne == 3)  || (computerTurnToSaveSessi >= 54 && diceRandNoPlayerOne == 2)  || (computerTurnToSaveSessi >= 55 && diceRandNoPlayerOne == 1)){
      computerTurnToSaveSessi += diceRandNoPlayerOne
      computerTurnToSaveSessi = 56
      alert("You WOn")
      restart = confirm("do you want to restart")
      if(restart){
        sessionStorage.clear()
        // setComputerSessStorFunc()
        window.location.reload()
      }
    }else if(diceRandNoPlayerOne == 6 && computerTurnToSaveSessi == 0){
      computerTurnToSaveSessi = diceRandNoPlayerOne
    }else if(computerTurnToSaveSessi >= 6){
      computerTurnToSaveSessi += diceRandNoPlayerOne
    }
    setComputerSessStorFunc();
    retriveComputerSessStorFunc();
    // getBackComputerStoVar = globeChangNum;
    // console.log(getBackComputerStoVar);
    setTimeout(function () {
      dispLuck();
      modalTrigFun();
      diceSound.pause();
      // ifSixLuck()
      myModal.show()
    }, 1100);

    const ifSixLuck = () => {
      if (getBackComputerStoVar == 6) {
        const blinkingInterval = setInterval(blinkBackground, 800);
        setTimeout(() => {
          clearInterval(blinkingInterval);
        }, 8000);
      } else if (getBackComputerStoVar >= 6) {
        const blinkingInterval = setInterval(blinkBackground, 800);
        setTimeout(() => {
          clearInterval(blinkingInterval);
        }, 8000);
      } else {
        setTimeout(()=>{
        alert("Hum! You Need 6 to get on road");
         }, 500)
      }
      // backgroundToBlink.style.backgroundColor = colors[currentColorIndex]
    };

    const timeOutIfSIxLuck = () => {
      setTimeout(() => {
        ifSixLuck();
      }, 400);
    };
    //  table object before
    const dispLuck = () => {
      if (diceRandNoPlayerOne == 1) {
        dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-one.png' style="width: 130px; height: 100px;">`;
        timeOutIfSIxLuck();
      } else if (diceRandNoPlayerOne == 2) {
        dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-two.png' style="width: 130px; height: 100px;">`;
        timeOutIfSIxLuck();
      } else if (diceRandNoPlayerOne == 3) {
        dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-three.png' style="width: 130px; height: 100px;">`;
        timeOutIfSIxLuck();
        // ifSixLuck();
        // dispDiceHole.focus()
        // myModal2.show()
        // trigClose()
      } else if (diceRandNoPlayerOne == 4) {
        dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-four.png' style="width: 130px; height: 100px;">`;
        timeOutIfSIxLuck();
      } else if (diceRandNoPlayerOne == 5) {
        dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-five.png' style="width: 130px; height: 100px;">`;
        timeOutIfSIxLuck();
      } else if (diceRandNoPlayerOne == 6) {
        dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-six.png' style="width: 130px; height: 100px;">`;
        timeOutIfSIxLuck();
      }
    };

    const modalTrigFun = () => {
      if (getBackComputerStoVar == 6) {
        // dispDiceHole.focus()
        // confirmAnsObj.modalshow1 = true;
        allModalComputer.myModalStart.show();
        trigClose();
      } else if (getBackComputerStoVar == 7) {
        confirmAnsObj.modalshow1 = true;
        // dispDiceHole.focus()
        allModalComputer.myModal1.show();
        trigClose();
      } else if (getBackComputerStoVar == 8) {
        confirmAnsObj.modalshow2 = true;
        allModalComputer.myModal2.show();
        trigClose();
      } else if (getBackComputerStoVar == 9) {
        confirmAnsObj.modalshow3 = true;
        allModalComputer.myModal3.show();
        trigClose();
      } else if (getBackComputerStoVar == 10) {
        confirmAnsObj.modalshow4 = true;
        allModalComputer.myModal4.show();
        trigClose();
      } else if (getBackComputerStoVar == 11) {
        confirmAnsObj.modalshow5 = true;
        allModalComputer.myModal5.show();
        trigClose();
      } else if (getBackComputerStoVar == 12) {
        confirmAnsObj.modalshow6 = true;
        allModalComputer.myModal6.show();
        trigClose();
      } else if (getBackComputerStoVar == 13) {
        confirmAnsObj.modalshow7 = true;
        allModalComputer.myModal7.show();
        trigClose();
      } else if (getBackComputerStoVar == 14) {
        confirmAnsObj.modalshow8 = true;
        allModalComputer.myModal8.show();
        trigClose();
      } else if (getBackComputerStoVar == 15) {
        confirmAnsObj.modalshow9 = true;
        allModalComputer.myModal9.show();
        trigClose();
      } else if (getBackComputerStoVar == 16) {
        confirmAnsObj.modalshow10 = true;
        allModalComputer.myModal10.show();
        trigClose();
      } else if (getBackComputerStoVar == 17) {
        // alert("ITs eleven")
        confirmAnsObj.modalshow11 = true;
        allModalComputer.myModal11.show();
        trigClose();
      } else if (getBackComputerStoVar == 18) {
        confirmAnsObj.modalshow12 = true;
        allModalComputer.myModal12.show();
        trigClose();
      } else if (getBackComputerStoVar == 19) {
        confirmAnsObj.modalshow13 = true;
        allModalComputer.myModal13.show();
        trigClose();
      } else if (getBackComputerStoVar == 20) {
        confirmAnsObj.modalshow14 = true;
        allModalComputer.myModal14.show();
        trigClose();
      } else if (getBackComputerStoVar == 21) {
        confirmAnsObj.modalshow15 = true;
        allModalComputer.myModal15.show();
        trigClose();
      } else if (getBackComputerStoVar == 22) {
        confirmAnsObj.modalshow16 = true;
        allModalComputer.myModal16.show();
        trigClose();
      } else if (getBackComputerStoVar == 23) {
        confirmAnsObj.modalshow17 = true;
        allModalComputer.myModal17.show();
        trigClose();
      } else if (getBackComputerStoVar == 24) {
        confirmAnsObj.modalshow18 = true;
        allModalComputer.myModal18.show();
        trigClose();
      } else if (getBackComputerStoVar == 25) {
        confirmAnsObj.modalshow19 = true;
        allModalComputer.myModal19.show();
        trigClose();
      } else if (getBackComputerStoVar == 26) {
        confirmAnsObj.modalshow20 = true;
        allModalComputer.myModal20.show();
        trigClose();
      } else if (getBackComputerStoVar == 27) {
        confirmAnsObj.modalshow21 = true;
        allModalComputer.myModal21.show();
        trigClose();
      } else if (getBackComputerStoVar == 28) {
        confirmAnsObj.modalshow22 = true;
        allModalComputer.myModal22.show();
        trigClose();
      } else if (getBackComputerStoVar == 29) {
        confirmAnsObj.modalshow23 = true;
        allModalComputer.myModal23.show();
        trigClose();
      } else if (getBackComputerStoVar == 30) {
        confirmAnsObj.modalshow24 = true;
        allModalComputer.myModal24.show();
        trigClose();
      } else if (getBackComputerStoVar == 31) {
        confirmAnsObj.modalshow25 = true;
        allModalComputer.myModal25.show();
        trigClose();
      } else if (getBackComputerStoVar == 32) {
        confirmAnsObj.modalshow26 = true;
        allModalComputer.myModal26.show();
        trigClose();
      } else if (getBackComputerStoVar == 33) {
        confirmAnsObj.modalshow27 = true;
        allModalComputer.myModal27.show();
        trigClose();
      } else if (getBackComputerStoVar == 34) {
        confirmAnsObj.modalshow28 = true;
        allModalComputer.myModal28.show();
        trigClose();
      } else if (getBackComputerStoVar == 35) {
        confirmAnsObj.modalshow29 = true;
        allModalComputer.myModal29.show();
        trigClose();
      } else if (getBackComputerStoVar == 36) {
        confirmAnsObj.modalshow30 = true;
        allModalComputer.myModal30.show();
        trigClose();
      } else if (getBackComputerStoVar == 37) {
        confirmAnsObj.modalshow31 = true;
        allModalComputer.myModal31.show();
        trigClose();
      } else if (getBackComputerStoVar == 38) {
        confirmAnsObj.modalshow32 = true;
        allModalComputer.myModal32.show();
        trigClose();
      } else if (getBackComputerStoVar == 39) {
        confirmAnsObj.modalshow33 = true;
        allModalComputer.myModal33.show();
        trigClose();
      } else if (getBackComputerStoVar == 40) {
        confirmAnsObj.modalshow34 = true;
        allModalComputer.myModal34.show();
        trigClose();
      } else if (getBackComputerStoVar == 41) {
        confirmAnsObj.modalshow35 = true;
        allModalComputer.myModal35.show();
        trigClose();
      } else if (getBackComputerStoVar == 42) {
        confirmAnsObj.modalshow36 = true;
        allModalComputer.myModal36.show();
        trigClose();
      } else if (getBackComputerStoVar == 43) {
        confirmAnsObj.modalshow37 = true;
        allModalComputer.myModal37.show();
        trigClose();
      } else if (getBackComputerStoVar == 44) {
        confirmAnsObj.modalshow38 = true;
        allModalComputer.myModal38.show();
        trigClose();
      } else if (getBackComputerStoVar == 45) {
        confirmAnsObj.modalshow39 = true;
        allModalComputer.myModal39.show();
        trigClose();
      } else if (getBackComputerStoVar == 46) {
        confirmAnsObj.modalshow40 = true;
        allModalComputer.myModal40.show();
        trigClose();
      } else if (getBackComputerStoVar == 47) {
        confirmAnsObj.modalshow41 = true;
        allModalComputer.myModal41.show();
        trigClose();
      } else if (getBackComputerStoVar == 48) {
        confirmAnsObj.modalshow42 = true;
        allModalComputer.myModal42.show();
        trigClose();
      } else if (getBackComputerStoVar == 49) {
        confirmAnsObj.modalshow43 = true;
        allModalComputer.myModal43.show();
        trigClose();
      } else if (getBackComputerStoVar == 50) {
        confirmAnsObj.modalshow44 = true;
        allModalComputer.myModal44.show();
        trigClose();
      } else if (getBackComputerStoVar == 51) {
        confirmAnsObj.modalshow45 = true;
        allModalComputer.myModal45.show();
        trigClose();
      } else if (getBackComputerStoVar == 52) {
        confirmAnsObj.modalshow46 = true;
        allModalComputer.myModal46.show();
        trigClose();
      } else if (getBackComputerStoVar == 53) {
        confirmAnsObj.modalshow47 = true;
        allModalComputer.myModal47.show();
        trigClose();
      } else if (getBackComputerStoVar == 54) {
        confirmAnsObj.modalshow48 = true;
        allModalComputer.myModal48.show();
        trigClose();
      } else if (getBackComputerStoVar == 55) {
        confirmAnsObj.modalshow49 = true;
        allModalComputer.myModal49.show();
        trigClose();
      } else if (getBackComputerStoVar == 56 || getBackComputerStoVar >= 56) {
        confirmAnsObj.modalshow50 = true;
        allModalComputer.myModal50.show();
        trigClose();
      }
      // confirmAnsObj.modalshow50 = true;
    };

    // below fuction help me to focus on continue btn
    // of triggered modal
    const trigClose = () => {
      setTimeout(function () {
        $(".contine-focus").focus();
      }, 700);
    };
    // This below function is use to check if the option selected is correct
  }
};
