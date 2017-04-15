$(document).ready(function() {
  checkAbout();
  // alert('about');
  checkPuzzle();
  // alert('puzzle');
  checkSerenity();
  // alert('serenity');
  checkAcceptance();
  // alert('acceptance');
  checkApprehension();
  // alert('apprehension');
  checkDistraction();
  // alert('distraction');
  checkPensiveness();
  // alert('pensiveness');
  checkBoredom();
  // alert('boredom');
  checkAnnoyance();
  // alert('annoyance');
  checkInterest();
  // alert('interest');
  checkFinished();
})

function checkAbout() {
	var div = document.getElementById("aboutDiv");
	if (sessionStorage.about == 1) {
  		div.style.opacity = '1';
  } else {
  		div.style.opacity = '0';
  }
}

function checkPuzzle() {
	var div = document.getElementById("puzzleDiv");
  if (sessionStorage.puzzle == 1) {
  	div.style.opacity = '1';
  } else {
  	div.style.opacity = '0';
  }
}

function checkSerenity() {
  var div = document.getElementById("serenityDiv");
  if (sessionStorage.serenity == 1) {
    div.style.serenity = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkAcceptance() {
  var div = document.getElementById("acceptanceDiv");
  if (sessionStorage.acceptance == 1) {
    div.style.acceptance = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkApprehension() {
  var div = document.getElementById("apprehensionDiv");
  if (sessionStorage.apprehension == 1) {
    div.style.opacity = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkDistraction() {
  var div = document.getElementById("distractionDiv");
  if (sessionStorage.distraction == 1) {
    div.style.distraction = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkPensiveness() {
  var div = document.getElementById("pensivenessDiv");
  if (sessionStorage.pensiveness == 1) {
    div.style.opacity = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkBoredom() {
  var div = document.getElementById("boredomDiv");
  if (sessionStorage.boredom == 1) {
    div.style.opacity = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkAnnoyance() {
  var div = document.getElementById("annoyanceDiv");
  if (sessionStorage.annoyance == 1) {
    div.style.opacity = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkInterest() {
  var div = document.getElementById("interestDiv");
  if (sessionStorage.interest == 1) {
    div.style.opacity = '1';
  } else {
    div.style.opacity = '0';
  }
}

function checkFinished() {
  if ((sessionStorage.about !== undefined) && (sessionStorage.acceptance !== undefined) && (sessionStorage.annoyance !== undefined) && (sessionStorage.apprehension !== undefined) && (sessionStorage.boredom !== undefined) && (sessionStorage.distraction !== undefined) && (sessionStorage.interest !== undefined) && (sessionStorage.pensiveness !== undefined) && (sessionStorage.puzzle !== undefined) && (sessionStorage.serenity !== undefined)) {
    $("#afterImage1").show();
    $("#afterImage2").show();
  } else {
    $("#afterImage1").hide();
    $("#afterImage2").hide();
  }
}