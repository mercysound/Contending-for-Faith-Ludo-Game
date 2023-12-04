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
          computerTurnToSaveSessi += 21;
          myTurn = true;
          computerTurn = false;
          alert("You got it! Its 1stTurn turn now");
        } else if (myTurn == true) {
          myTurnToSaveSessi += 21;
          computerTurn = true;
          myTurn = false;
          alert("You got it! Its 2ndTurn turn now");
        }
        setMySessStorFunc()
        setComputerSessStorFunc()
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
          computerTurnToSaveSessi += 25;
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi += 25;
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        setMySessStorFunc()
        setComputerSessStorFunc()
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
      myTurnToSaveSessi += 3;
      myTurn = false;
      computerTurn = true;
      alert("Its computerTurn turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi += 3;
      computerTurn = false;
      myTurn = true;
      alert("Its myTurnTurn turn");
    }
    setMySessStorFunc()
    setComputerSessStorFunc()
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
          computerTurnToSaveSessi += 20;
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi += 20;
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's 2ndTurn to Play");
        }
        setMySessStorFunc()
        setComputerSessStorFunc()
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
          computerTurnToSaveSessi += 19;
          myTurn = true;
          computerTurn = false;
          alert("You got it! Its 1stTurn turn now");
          $("#modal21").modal("hide");
        } else if (myTurn == true) {
          myTurnToSaveSessi += 19;
          computerTurn = true;
          myTurn = false;
          alert("You got it! Its 2ndTurn turn now");
          $("#modal21").modal("hide");
        }
        setMySessStorFunc()
        setComputerSessStorFunc()
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
          computerTurnToSaveSessi += 13;
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's 1stTurn to Play");
          blinkBackground();
        } else if (myTurn == true) {
          myTurnToSaveSessi += 13;
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
      myTurnToSaveSessi = 11;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow24 = false;
      $("#modal24").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 11;
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
      myTurnToSaveSessi += 7;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow26 = false;
      $("#modal26").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi += 7;
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
      myTurnToSaveSessi = 6;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow27 = false;
      $("#modal27").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 6;
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
          computerTurnToSaveSessi = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi = 10;
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's 2ndTurn to Play");
        }
        setMySessStorFunc()
        setComputerSessStorFunc()
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
      myTurnToSaveSessi = 11;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow30 = false;
      $("#modal30").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 11;
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
          computerTurnToSaveSessi = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi = 10;
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
          computerTurnToSaveSessi = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi = 10;
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
      myTurnToSaveSessi = 12;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow38 = false;
      $("#modal38").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 12;
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
          // computerTurnToSaveSessi = 10;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          // myTurnToSaveSessi = 10;
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
      myTurnToSaveSessi = 12;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow41 = false;
      $("#modal41").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 12;
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
      myTurnToSaveSessi = 6;
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow45 = false;
      $("#modal45").modal("hide");
      alert("Its computer turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 6;
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
          computerTurnToSaveSessi = 6;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi = 6;
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
          computerTurnToSaveSessi = 6;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi = 6;
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
          computerTurnToSaveSessi = 18;
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's 1stTurn to Play");
        } else if (myTurn == true) {
          myTurnToSaveSessi = 18;
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