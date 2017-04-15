$(document).ready(function() {
	// apprehension fruit
	$('.apprehensionFruit').one('click', addApprehensionPlus);
	function addApprehensionPlus() {
		addApprehension();
		hidePartThree();
		$('.apprehensionFruit').on('click', addApprehension);
	}

	// Part 1
	checkPartOne();

	// Part 2
	openCountText();
	checkHideOrShowToggle();

	// Part 3
	isDoorOpen();
	hollowCountButtons();
	hollowCountText();
	fuzzyButtonMemory();
	apprehensionFruitCheck();
	apprehensionFunCheck();

	// Move on text
	moveOnText();
	closeDoor();
})

////////////////////////////////////////////////////////////////////////////////////
// Stuff for Part 1
function checkPartOne() {
	if (sessionStorage.partOneProgress === undefined) {
		$("#firstLine").show();
		$("#secondLine").hide();
		$("#thirdLine").hide();
		$("#fourthLine").hide();
		$("#fifthLine").hide();
	} else if (sessionStorage.partOneProgress === 'showSecond') {
		$("#firstLine").show();
		$("#firstLineButton").hide();
		$("#secondLine").show();
		$("#thirdLine").hide();
		$("#fourthLine").hide();
		$("#fifthLine").hide();
	} else if (sessionStorage.partOneProgress === 'showThird') {
		$("#firstLine").show();
		$("#firstLineButton").hide();
		$("#secondLine").show();
		$("#secondLineButton").hide();
		$("#thirdLine").show();
		$("#fourthLine").hide();
		$("#fifthLine").hide();
	} else if (sessionStorage.partOneProgress === 'showFourth') {
		$("#firstLine").show();
		$("#firstLineButton").hide();
		$("#secondLine").show();
		$("#secondLineButton").hide();
		$("#thirdLine").show();
		$("#thirdLineButton").hide();
		$("#fourthLine").show();
		$("#fifthLine").hide();
	} else if (sessionStorage.partOneProgress === 'showFifth') {
		$("#firstLine").show();
		$("#firstLineButton").hide();
		$("#secondLine").show();
		$("#secondLineButton").hide();
		$("#thirdLine").show();
		$("#thirdLineButton").hide();
		$("#fourthLine").show();
		$("#fourthLineButton").hide();
		$("#fifthLine").show();
	} else {
		$('.goading').hide();
	}
}

function nextLineOne() {
	sessionStorage.partOneProgress = 'showSecond';
	checkPartOne();
}
function nextLineTwo() {
	sessionStorage.partOneProgress = 'showThird';
	checkPartOne();
}
function nextLineThree() {
	sessionStorage.partOneProgress = 'showFourth';
	checkPartOne();
}
function nextLineFour() {
	sessionStorage.partOneProgress = 'showFifth';
	checkPartOne();
}
function notSkipping() {
	sessionStorage.partOneProgress = 'determinedToDie';
	checkPartOne();
}

// (end) Stuff for Part 1
////////////////////////////////////////////////////////////////////////////////////
// Stuff for Part 2
function checkHideOrShowToggle() {
	if (sessionStorage.doorStuff === undefined) {
		$("#hideClick").hide();
		$("#showClick").hide();
	} else if (sessionStorage.doorStuff === 'unlock firstClick') {
		$("#hideClick").hide();
		$("#showClick").hide();
	} else if (sessionStorage.doorStuff === 'unlock secondClick') {
		$("#hideClick").hide();
		$("#showClick").hide();
	} else if (sessionStorage.doorStuff === 'unlock thirdClick') {
		$("#hideClick").hide();
		$("#showClick").hide();
	} else {
		$("#hideClick").show();
		$("#showClick").hide();
		sessionStorage.partTwoToggle === 'hide button';
		savePartTwoToggle();
	}
}

function openCountText() {
	if (sessionStorage.doorStuff === undefined) {
		$("#firstClick").hide();
		$("#secondClick").hide();
		$("#thirdClick").hide();
	} else if (sessionStorage.doorStuff === 'unlock firstClick') {
		$("#firstClick").show();
		$("#secondClick").hide();
		$("#thirdClick").hide();
	} else if (sessionStorage.doorStuff === 'unlock secondClick') {
		$("#firstClick").show();
		$("#secondClick").show();
		$("#thirdClick").hide();
	} else if (sessionStorage.doorStuff === 'unlock thirdClick') {
		$("#firstClick").show();
		$("#secondClick").show();
		$("#thirdClick").show();
	} else {
		$(".doorClosed").hide();
		checkHideOrShowToggle();
		isDoorOpen();
		closeDoor();
	}
}

function savePartTwoToggle() {
	if (sessionStorage.partTwoToggle === 'hide button') {
		$("#firstClick").show();
		$("#secondClick").show();
		$("#thirdClick").show();
		$("#hideClick").show();
		$("#showClick").hide();
	} else if (sessionStorage.partTwoToggle === 'show button') {
		$("#firstClick").hide();
		$("#secondClick").hide();
		$("#thirdClick").hide();
		$("#hideClick").hide();
		$("#showClick").show();
	}
}

function openCountTestHideToggle() {
	$("#firstClick").hide();
	$("#secondClick").hide();
	$("#thirdClick").hide();
	$("#hideClick").hide();
	$("#showClick").show();
	sessionStorage.partTwoToggle = 'show button';
}

function openCountTestShowToggle() {
	$("#firstClick").show();
	$("#secondClick").show();
	$("#thirdClick").show();
	$("#hideClick").show();
	$("#showClick").hide();
	sessionStorage.partTwoToggle = 'hide button';
}

function openCount() {
	if (sessionStorage.doorStuff === undefined) {
		sessionStorage.doorStuff = 'unlock firstClick';
		openCountText();
	} else if (sessionStorage.doorStuff === "unlock firstClick") {
		sessionStorage.doorStuff = 'unlock secondClick';
		openCountText();
	} else if (sessionStorage.doorStuff === "unlock secondClick") {
		sessionStorage.doorStuff = 'unlock thirdClick';
		openCountText();
	} else {
		sessionStorage.doorStuff = 'you opened the door';
		openCountText();
	}
}
// (end) Stuff for Part 2
////////////////////////////////////////////////////////////////////////////////////
// Stuff for Part 3
function hollowCount() {
	if (sessionStorage.fuzzyStuff === undefined) {
		sessionStorage.fuzzyStuff = 'unlock oneFuzzy';
		hollowCountText();
	} else if (sessionStorage.fuzzyStuff === "unlock oneFuzzy") {
		sessionStorage.fuzzyStuff = 'unlock twoFuzzy';
		hollowCountText();
	} else if (sessionStorage.fuzzyStuff === "unlock twoFuzzy") {
		sessionStorage.fuzzyStuff = 'unlock threeFuzzy';
		hollowCountText();
	} else if (sessionStorage.fuzzyStuff === "unlock threeFuzzy") {
		sessionStorage.fuzzyStuff = 'unlock fourFuzzy';
		hollowCountText();
	} else {
		sessionStorage.fuzzyStuff = 'unlock fiveFuzzy';
		hollowCountText();
		apprehensionFruitCheck();
	}
}
function hollowCountText() {
	if (sessionStorage.fuzzyStuff === undefined) {
		$("#oneFuzzy").hide();
		$("#twoFuzzy").hide();
		$("#threeFuzzy").hide();
		$("#fourFuzzy").hide();
		$("#fiveFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock oneFuzzy') {
		$("#oneFuzzy").show();
		$("#twoFuzzy").hide();
		$("#threeFuzzy").hide();
		$("#fourFuzzy").hide();
		$("#fiveFuzzy").hide();
		openCountTestHideToggle();
	} else if (sessionStorage.fuzzyStuff === 'unlock twoFuzzy') {
		$("#oneFuzzy").show();
		$("#twoFuzzy").show();
		$("#threeFuzzy").hide();
		$("#fourFuzzy").hide();
		$("#fiveFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock threeFuzzy') {
		$("#oneFuzzy").show();
		$("#twoFuzzy").show();
		$("#threeFuzzy").show();
		$("#fourFuzzy").hide();
		$("#fiveFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock fourFuzzy') {
		$("#oneFuzzy").show();
		$("#twoFuzzy").show();
		$("#threeFuzzy").show();
		$("#fourFuzzy").show();
		$("#fiveFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock fiveFuzzy') {
		$("#oneFuzzy").show();
		$("#twoFuzzy").show();
		$("#threeFuzzy").show();
		$("#fourFuzzy").show();
		$("#fiveFuzzy").show();
		hollowCountButtons();
		$("#firstDoorClosedLayer").off('click');
		$("#secondDoorClosedLayer").off('click');
		$('.doorHollow svg g:hover').css('cursor', 'default');
	}
}


function hollowCountButtons() {
	if (sessionStorage.fuzzyStuff === undefined) {
		$("#hideFuzzy").hide();
		$("#showFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock oneFuzzy') {
		$("#hideFuzzy").hide();
		$("#showFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock twoFuzzy') {
		$("#hideFuzzy").hide();
		$("#showFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock threeFuzzy') {
		$("#hideFuzzy").hide();
		$("#showFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock fourFuzzy') {
		$("#hideFuzzy").hide();
		$("#showFuzzy").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock fiveFuzzy') {
		$("#hideFuzzy").show();
		$("#showFuzzy").hide();
		sessionStorage.fuzzyButtonMemory = "hide button";
		notSkipping();
	}
}

function apprehensionFruitCheck() {
	if (sessionStorage.fuzzyStuff !== 'unlock fiveFuzzy') {
		$(".apprehensionFruit").hide();
	} else if (sessionStorage.fuzzyStuff === 'unlock fiveFuzzy') {
		$(".apprehensionFruit").show();
	} else {
		$(".apprehensionFruit").hide();
	}
}

function isDoorOpen() {
	if (sessionStorage.doorStuff === undefined) {
		$(".doorOpen").hide();
	} else if (sessionStorage.doorStuff === 'unlock firstClick') {
		$(".doorOpen").hide();
	} else if (sessionStorage.doorStuff === 'unlock secondClick') {
		$(".doorOpen").hide();
	} else if (sessionStorage.doorStuff === 'unlock thirdClick') {
		$(".doorOpen").hide();
	} else if ((sessionStorage.doorStuff === 'you opened the door') && (sessionStorage.fuzzyStuff === undefined) && (sessionStorage.funnyThat === undefined)) {
		$(".doorOpen").show();
	} else if ((sessionStorage.doorStuff === 'you opened the door') && (sessionStorage.fuzzyStuff !== undefined) && (sessionStorage.funnyThat === undefined)) {
		$(".doorOpen").show();
	} else if (sessionStorage.funnyThat === 'is closed') {
		$(".doorOpen").hide();
		$(".doorClosed").show();
	} else {
		$(".doorOpen").show();
		$(".doorClosed").hide();
	}
}


function hidePartThree() {
	forHidingFuzzies();
	fuzzyButtonMemory();
}
function showPartThree() {
	forShowingFuzzies();
	fuzzyButtonMemory();
}
function forHidingFuzzies() {
	$("#oneFuzzy").hide();
	$("#twoFuzzy").hide();
	$("#threeFuzzy").hide();
	$("#fourFuzzy").hide();
	$("#fiveFuzzy").hide();
	$("#hideFuzzy").hide();
	$("#showFuzzy").show();
	sessionStorage.fuzzyButtonMemory = "show button";
}
function forShowingFuzzies() {
	$("#oneFuzzy").show();
	$("#twoFuzzy").show();
	$("#threeFuzzy").show();
	$("#fourFuzzy").show();
	$("#fiveFuzzy").show();
	$("#showFuzzy").hide();
	$("#hideFuzzy").show();
	sessionStorage.fuzzyButtonMemory = "hide button";
}
function fuzzyButtonMemory() {
	if (sessionStorage.fuzzyButtonMemory === "hide button") {
		$("#oneFuzzy").show();
		$("#twoFuzzy").show();
		$("#threeFuzzy").show();
		$("#fourFuzzy").show();
		$("#fiveFuzzy").show();
		$("#hideFuzzy").show();
	} else if (sessionStorage.fuzzyButtonMemory === "show button") {
		$("#oneFuzzy").hide();
		$("#twoFuzzy").hide();
		$("#threeFuzzy").hide();
		$("#fourFuzzy").hide();
		$("#fiveFuzzy").hide();
		$("#showFuzzy").show();
	} else {
		hollowCountButtons();
	}
}
// (end) Stuff for Part 3
////////////////////////////////////////////////////////////////////////////////////
//apprehension

function apprehensionFunCheck() {
	if (sessionStorage.apprehension === '1') {
		hidePartThree();
	} else {
		return false;
	}
}
// (end) apprehension
////////////////////////////////////////////////////////////////////////////////////
// move on now!
function moveOnText() {
	if (sessionStorage.apprehension === '1') {
		$("#afterThing").show();
	} else {
		$("#afterThing").hide();
	}
}
// (end) move on now!
////////////////////////////////////////////////////////////////////////////////////
function closeDoor() {
	if (sessionStorage.doorStuff === 'you opened the door') {
		$('#firstDoorOpenLayer').on('click', function() {
			$('.doorOpen').hide();
			$('.doorClosed').show();
			sessionStorage.funnyThat = 'is closed';
		});
		$('#secondDoorOpenLayer').on('click', function() {
			$('.doorOpen').hide();
			$('.doorClosed').show();
			sessionStorage.funnyThat = 'is closed';
		});
		$('.doorClosed').attr("onclick", "newDoor()");
	} else {
		return false;
	}
}

function newDoor() {
	$('.doorOpen').show();
	$('.doorClosed').hide();
	sessionStorage.funnyThat = 'is open';
}