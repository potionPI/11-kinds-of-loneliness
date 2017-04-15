/* id  HERE:
Line ids: lineOne, lineTwo, lineThree, lineFour, lineFiveFirst, lineFiveSecond;
Line button ids: lineOneButton, lineTwoButton, lineThreeButton, lineFourButton, lineFiveButton;

[...] ids: eOne, eTwo, eThree, eFour, eFive, eSix;
[...] button ids: eOneB, eTwoB, eThreeB, eFourB, eFiveB, eSixB;

OK id: conK;
OK button id: conKB;

yarn div id: yarnDip;
yarn div button id: yarnPie;
*/



/* sessionStorage HERE:
sessionStorage.lineUnlock
		= 'uLineTwo'   >> + $('#lineTwo').show()
		= 'uLineThree' >> + $('#lineThree').show()
		= 'uLineFour'  >> + $('#lineFour').show()
		= 'uLineFive'  >> + $('#lineFiveFirst').show() && $('#lineFiveSecond').show()

***id:lineFiveButton will make 'uEOne' to unlock id:eOne***

sessionStorage.eUnlock
		= 'uEOne'      >> + $('#eOne').show()
		= 'uETwo'      >> + $('#eTwo').show()
		= 'uEThree'    >> + $('#eThree').show()
		= 'uEFour'     >> + $('#eFour').show()
		= 'uEFive'     >> + $('#eFive').show()
		= 'uESix'      >> + $('#eSix').show()

***id:eSixB will make 'uConK' to unlock id:conK***

sessionStorage.conKUnlock
		= 'uConk'      >> $('#conK').show()


sessionStorage.dialogueButton
>>>>This one will be added by conKB

sessionStorage.yarnButton
>>>>This one will be added by yarnPie

***trigger yarnPie() whenever press id:yarnPie***
if yarnPie() when (sessionStorage.dialogueButton !== undefined) say "Wow, you got both"
else if yarnPie() when (sessionStorage.lineUnlock === undefined) || (sessionStorage.lineUnlock !== 'uLineFive')) say "Wow, you found it fast"
else if yarnPie() when ((sessionStorage.lineUnlock === 'uLineFive') && (sessionStorage.eUnlock === undefined)) say "See, there's something there!"
else say "You got a piece of fruit!"

***trigger conKB() whenever press id:conKB***
if conKB() when (sessionStorage.yarnButton !== undefined) say "Wow, you got both"
else "You got a piece of fruit!"

*/

$(document).ready(function() {
	lineCheck();
	eCheck();
	conKCheck();
	yarnPieCheck();
	finishCheck();
});

function lineCheck() {
	if (sessionStorage.lineUnlock === undefined) {
		$('#lineOne').show();
		$('#lineTwo').hide();
		$('#lineThree').hide();
		$('#lineFour').hide();
		$('#lineFiveFirst').hide();
		$('#lineFiveSecond').hide();
	} else if (sessionStorage.lineUnlock === 'uLineTwo') {
		$('#lineOne').show();
		$('#lineTwo').show();
		$('#lineThree').hide();
		$('#lineFour').hide();
		$('#lineFiveFirst').hide();
		$('#lineFiveSecond').hide();
		$('#lineOneButton').removeAttr('onclick');
	} else if (sessionStorage.lineUnlock === 'uLineThree') {
		$('#lineOne').show();
		$('#lineTwo').show();
		$('#lineThree').show();
		$('#lineFour').hide();
		$('#lineFiveFirst').hide();
		$('#lineFiveSecond').hide();
		$('#lineOneButton').removeAttr('onclick');
		$('#lineTwoButton').removeAttr('onclick');
	} else if (sessionStorage.lineUnlock === 'uLineFour') {
		$('#lineOne').show();
		$('#lineTwo').show();
		$('#lineThree').show();
		$('#lineFour').show();
		$('#lineFiveFirst').hide();
		$('#lineFiveSecond').hide();
		$('#lineOneButton').removeAttr('onclick');
		$('#lineTwoButton').removeAttr('onclick');
		$('#lineThreeButton').removeAttr('onclick');
	} else {
		$('#lineOne').show();
		$('#lineTwo').show();
		$('#lineThree').show();
		$('#lineFour').show();
		$('#lineFiveFirst').show();
		$('#lineFiveSecond').show();
		$('#lineOneButton').removeAttr('onclick');
		$('#lineTwoButton').removeAttr('onclick');
		$('#lineThreeButton').removeAttr('onclick');
		$('#lineFourButton').removeAttr('onclick');
	}
}
function lineOneButton() {
	sessionStorage.lineUnlock = 'uLineTwo';
	lineCheck();
}
function lineTwoButton() {
	sessionStorage.lineUnlock = 'uLineThree';
	lineCheck();
}
function lineThreeButton() {
	sessionStorage.lineUnlock = 'uLineFour';
	lineCheck();
}
function lineFourButton() {
	sessionStorage.lineUnlock = 'uLineFive';
	lineCheck();
}
function lineFiveButton() {
	sessionStorage.eUnlock = 'uEOne';
	eCheck();
}

function eCheck() {
	if (sessionStorage.eUnlock === undefined) {
		$('#eOne').hide();
		$('#eTwo').hide();
		$('#eThree').hide();
		$('#eFour').hide();
		$('#eFive').hide();
		$('#eSix').hide();
	} else if (sessionStorage.eUnlock === 'uEOne') {
		$('#eOne').show();
		$('#eTwo').hide();
		$('#eThree').hide();
		$('#eFour').hide();
		$('#eFive').hide();
		$('#eSix').hide();
		$('#lineFiveButton').removeAttr('onclick');
	} else if (sessionStorage.eUnlock === 'uETwo') {
		$('#eOne').show();
		$('#eTwo').show();
		$('#eThree').hide();
		$('#eFour').hide();
		$('#eFive').hide();
		$('#eSix').hide();
		$('#lineFiveButton').removeAttr('onclick');
		$('#eOneB').removeAttr('onclick');
	} else if (sessionStorage.eUnlock === 'uEThree') {
		$('#eOne').show();
		$('#eTwo').show();
		$('#eThree').show();
		$('#eFour').hide();
		$('#eFive').hide();
		$('#eSix').hide();
		$('#lineFiveButton').removeAttr('onclick');
		$('#eOneB').removeAttr('onclick');
		$('#eTwoB').removeAttr('onclick');
	} else if (sessionStorage.eUnlock === 'uEFour') {
		$('#eOne').show();
		$('#eTwo').show();
		$('#eThree').show();
		$('#eFour').show();
		$('#eFive').hide();
		$('#eSix').hide();
		$('#lineFiveButton').removeAttr('onclick');
		$('#eOneB').removeAttr('onclick');
		$('#eTwoB').removeAttr('onclick');
		$('#eThreeB').removeAttr('onclick');
	} else if (sessionStorage.eUnlock === 'uEFive') {
		$('#eOne').show();
		$('#eTwo').show();
		$('#eThree').show();
		$('#eFour').show();
		$('#eFive').show();
		$('#eSix').hide();
		$('#lineFiveButton').removeAttr('onclick');
		$('#eOneB').removeAttr('onclick');
		$('#eTwoB').removeAttr('onclick');
		$('#eThreeB').removeAttr('onclick');
		$('#eFourB').removeAttr('onclick');
	} else {
		$('#eOne').show();
		$('#eTwo').show();
		$('#eThree').show();
		$('#eFour').show();
		$('#eFive').show();
		$('#eSix').show();
		$('#lineFiveButton').removeAttr('onclick');
		$('#eOneB').removeAttr('onclick');
		$('#eTwoB').removeAttr('onclick');
		$('#eThreeB').removeAttr('onclick');
		$('#eFourB').removeAttr('onclick');
		$('#eFiveB').removeAttr('onclick');
	}
}
function eOneB() {
	sessionStorage.eUnlock = 'uETwo';
	eCheck();
}
function eTwoB() {
	sessionStorage.eUnlock = 'uEThree';
	eCheck();
}
function eThreeB() {
	sessionStorage.eUnlock = 'uEFour';
	eCheck();
}
function eFourB() {
	sessionStorage.eUnlock = 'uEFive';
	eCheck();
}
function eFiveB() {
	sessionStorage.eUnlock = 'uESix';
	eCheck();
}
function eSixB() {
	sessionStorage.conKUnlock = 'uConK';
	conKCheck();
}

function conKCheck() {
	if (sessionStorage.conKUnlock !== undefined) {
		$('#conK').show();
		$('#eSixB').removeAttr('onclick');
	} else {
		$('#conK').hide();
	}
}

function conKB() {
	addDistraction();
	sessionStorage.dialogueButton = 'tesseract';
	yarnPieCheck();
}
function yarnPie() {
	addDistraction();
	sessionStorage.yarnButton = 'yumPi!';
	yarnPieCheck();
}
function yarnPieCheck() {
	if ((sessionStorage.dialogueButton !== undefined) && (sessionStorage.yarnButton !== undefined)) {
		$('#gotBoth').show();
		$('#gotFast').hide();
		$('#gotSee').hide();
		$('#gotFruit').hide();
	} else if (((sessionStorage.lineUnlock === undefined) && (sessionStorage.distraction !== undefined)) || ((sessionStorage.lineUnlock !== 'uLineFive') && (sessionStorage.distraction !== undefined)) ) {
		$('#gotBoth').hide();
		$('#gotFast').show();
		$('#gotSee').hide();
		$('#gotFruit').hide();
	} else if ((sessionStorage.lineUnlock === 'uLineFive') && (sessionStorage.eUnlock === undefined)) {
		$('#gotBoth').hide();
		$('#gotFast').hide();
		$('#gotSee').show();
		$('#gotFruit').hide();
	} else if (((sessionStorage.dialogueButton !== undefined) && (sessionStorage.yarnButton === undefined)) || ((sessionStorage.dialogueButton === undefined) && (sessionStorage.yarnButton !== undefined))) {
		$('#gotBoth').hide();
		$('#gotFast').hide();
		$('#gotSee').hide();
		$('#gotFruit').show();
	} else {
		$('#gotBoth').hide();
		$('#gotFast').hide();
		$('#gotSee').hide();
		$('#gotFruit').hide();
	}
}

function finishCheck() {
	if (sessionStorage.dialogueButton !== undefined) {
		$('#conKB').removeAttr('onclick');
	} else {
		return false;
	}

	if (sessionStorage.yarnButton !== undefined) {
		$('#yarnPie').removeAttr('onclick');
	} else {
		return false;
	}
}