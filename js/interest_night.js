/*
ids(lines):
line1
line2
line3
line4
line5
line6
line7
line8
line9
line10

ids(line#buttons):
line1(no buttons) --> Hover, show line2
line2buttons
line3buttons
line4buttons
line5buttons
line6buttons
line7buttons
line8buttons
line9(no buttons) --> Hover, show line10
line10(no buttons) --> is fruit

ids(line#yes, line#no)
line1(no buttons) --> Hover, show line2
line2yes, line2no
line3yes, line3no
line4yes, line4no
line5yes, line5no
line6yes, line6no
line7yes, line7no
line8yes, line8no
line9(no buttons) --> Hover, show line10
line10(no buttons) --> is fruit

sessionStorage.[]:
lineInterestLevel = undefined, 2, 3, 4, 5, 6, 7, 8, 9, 10
isItAborted = yes, no }if === no && lineInterestLevel === # then show line# and bind.
isItUnbound

functions:
checkBind() } if undefined, bind everything. If isItUnbound [] unbind [][][][]
checkAborter() } if yes && line# is [] do []. If no,  unbind everything.
*/

$(document).ready(function() {
	checkWhatShows();
	checkWhatBinds();
})


function line1() {
	sessionStorage.lineInterestLevel = 'line2';
	checkWhatShows();
	checkWhatBinds();
}
function line2no() {
	sessionStorage.lineInterestLevel = 'line2abort';
	checkWhatShows();
	checkWhatBinds();
}
function line2yes() {
	sessionStorage.lineInterestLevel = 'line3';
	checkWhatShows();
	checkWhatBinds();
}
function line3no() {
	sessionStorage.lineInterestLevel = 'line3abort';
	checkWhatShows();
	checkWhatBinds();
}
function line3yes() {
	sessionStorage.lineInterestLevel = 'line4';
	checkWhatShows();
	checkWhatBinds();
}
function line4no() {
	sessionStorage.lineInterestLevel = 'line4abort';
	checkWhatShows();
	checkWhatBinds();
}
function line4yes() {
	sessionStorage.lineInterestLevel = 'line5';
	checkWhatShows();
	checkWhatBinds();
}
function line5no() {
	sessionStorage.lineInterestLevel = 'line5abort';
	checkWhatShows();
	checkWhatBinds();
}
function line5yes() {
	sessionStorage.lineInterestLevel = 'line6';
	checkWhatShows();
	checkWhatBinds();
}
function line6no() {
	sessionStorage.lineInterestLevel = 'line6abort';
	checkWhatShows();
	checkWhatBinds();
}
function line6yes() {
	sessionStorage.lineInterestLevel = 'line7';
	checkWhatShows();
	checkWhatBinds();
}
function line7no() {
	sessionStorage.lineInterestLevel = 'line7abort';
	checkWhatShows();
	checkWhatBinds();
}
function line7yes() {
	sessionStorage.lineInterestLevel = 'line8';
	checkWhatShows();
	checkWhatBinds();
}
function line8no() {
	sessionStorage.lineInterestLevel = 'line8abort';
	checkWhatShows();
	checkWhatBinds();
}
function line8yes() {
	sessionStorage.lineInterestLevel = 'line9';
	checkWhatShows();
	checkWhatBinds();
}
function line9() {
	sessionStorage.lineInterestLevel = 'line10';
	checkWhatShows();
	checkWhatBinds();
}

function checkWhatShows() {
	if (sessionStorage.lineInterestLevel === undefined) {
		$("#line1").show();

		$("#line2").hide();
		$("#line2buttons").hide();
		$("#line2yes").hide();
		$("#line2no").hide();

		$("#line3").hide();
		$("#line3buttons").hide();
		$("#line3yes").hide();
		$("#line3no").hide();

		$("#line4").hide();
		$("#line4buttons").hide();
		$("#line4yes").hide();
		$("#line4no").hide();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();

		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line2') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").show();

		$("#line3").hide();
		$("#line3buttons").hide();
		$("#line3yes").hide();
		$("#line3no").hide();

		$("#line4").hide();
		$("#line4buttons").hide();
		$("#line4yes").hide();
		$("#line4no").hide();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line2abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").hide();
		$("#line2no").show();

		$("#line3").hide();
		$("#line3buttons").hide();
		$("#line3yes").hide();
		$("#line3no").hide();

		$("#line4").hide();
		$("#line4buttons").hide();
		$("#line4yes").hide();
		$("#line4no").hide();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line3') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").show();

		$("#line4").hide();
		$("#line4buttons").hide();
		$("#line4yes").hide();
		$("#line4no").hide();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line3abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").hide();
		$("#line3no").show();

		$("#line4").hide();
		$("#line4buttons").hide();
		$("#line4yes").hide();
		$("#line4no").hide();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line4') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").show();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line4abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").hide();
		$("#line4no").show();

		$("#line5").hide();
		$("#line5buttons").hide();
		$("#line5yes").hide();
		$("#line5no").hide();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line5') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").show();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line5abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").hide();
		$("#line5no").show();

		$("#line6").hide();
		$("#line6buttons").hide();
		$("#line6yes").hide();
		$("#line6no").hide();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line6') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").show();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line6abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").hide();
		$("#line6no").show();

		$("#line7").hide();
		$("#line7buttons").hide();
		$("#line7yes").hide();
		$("#line7no").hide();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line7') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").hide();

		$("#line7").show();
		$("#line7buttons").show();
		$("#line7yes").show();
		$("#line7no").show();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line7abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").hide();

		$("#line7").show();
		$("#line7buttons").show();
		$("#line7yes").hide();
		$("#line7no").show();

		$("#line8").hide();
		$("#line8buttons").hide();
		$("#line8yes").hide();
		$("#line8no").hide();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line8') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").hide();

		$("#line7").show();
		$("#line7buttons").show();
		$("#line7yes").show();
		$("#line7no").hide();

		$("#line8").show();
		$("#line8buttons").show();
		$("#line8yes").show();
		$("#line8no").show();

		$("#line9").hide();
		
		$("#line10").hide();
	} else if (sessionStorage.lineInterestLevel === 'line8abort') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").hide();

		$("#line7").show();
		$("#line7buttons").show();
		$("#line7yes").show();
		$("#line7no").hide();

		$("#line8").show();
		$("#line8buttons").show();
		$("#line8yes").hide();
		$("#line8no").show();

		$("#line9").hide();
		
		$("#line10").show();
	} else if (sessionStorage.lineInterestLevel === 'line9') {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").hide();

		$("#line7").show();
		$("#line7buttons").show();
		$("#line7yes").show();
		$("#line7no").hide();

		$("#line8").show();
		$("#line8buttons").show();
		$("#line8yes").show();
		$("#line8no").hide();

		$("#line9").show();
		
		$("#line10").hide();
	} else {
		$("#line1").show();

		$("#line2").show();
		$("#line2buttons").show();
		$("#line2yes").show();
		$("#line2no").hide();

		$("#line3").show();
		$("#line3buttons").show();
		$("#line3yes").show();
		$("#line3no").hide();

		$("#line4").show();
		$("#line4buttons").show();
		$("#line4yes").show();
		$("#line4no").hide();

		$("#line5").show();
		$("#line5buttons").show();
		$("#line5yes").show();
		$("#line5no").hide();

		$("#line6").show();
		$("#line6buttons").show();
		$("#line6yes").show();
		$("#line6no").hide();

		$("#line7").show();
		$("#line7buttons").show();
		$("#line7yes").show();
		$("#line7no").hide();

		$("#line8").show();
		$("#line8buttons").show();
		$("#line8yes").show();
		$("#line8no").hide();

		$("#line9").show();
		
		$("#line10").show();
	}
}

function checkWhatBinds() {
	if (sessionStorage.lineInterestLevel === undefined) {
		$("#line1").bind('click', line1);
	} else if (sessionStorage.lineInterestLevel === 'line2') {
		$("#line1").unbind('click', line1);
		$("#line2no").bind('click', line2no);
		$("#line2yes").bind('click', line2yes);
	} else if (sessionStorage.lineInterestLevel === 'line2abort') {
		$("#line2no").unbind('click', line2no);
		$("#line2yes").unbind('click', line2yes);
	} else if (sessionStorage.lineInterestLevel === 'line3') {
		$("#line2no").unbind('click', line2no);
		$("#line2yes").unbind('click', line2yes);
		$("#line3no").bind('click', line3no);
		$("#line3yes").bind('click', line3yes);
	} else if (sessionStorage.lineInterestLevel === 'line3abort') {
		$("#line3no").unbind('click', line3no);
		$("#line3yes").unbind('click', line3yes);
	} else if (sessionStorage.lineInterestLevel === 'line4') {
		$("#line3no").unbind('click', line3no);
		$("#line3yes").unbind('click', line3yes);
		$("#line4no").bind('click', line4no);
		$("#line4yes").bind('click', line4yes);
	} else if (sessionStorage.lineInterestLevel === 'line4abort') {
		$("#line4no").unbind('click', line4no);
		$("#line4yes").unbind('click', line4yes);
	} else if (sessionStorage.lineInterestLevel === 'line5') {
		$("#line4no").unbind('click', line4no);
		$("#line4yes").unbind('click', line4yes);
		$("#line5no").bind('click', line5no);
		$("#line5yes").bind('click', line5yes);
	} else if (sessionStorage.lineInterestLevel === 'line5abort') {
		$("#line5no").unbind('click', line5no);
		$("#line5yes").unbind('click', line5yes);
	} else if (sessionStorage.lineInterestLevel === 'line6') {
		$("#line5no").unbind('click', line5no);
		$("#line5yes").unbind('click', line5yes);
		$("#line6no").bind('click', line6no);
		$("#line6yes").bind('click', line6yes);
	} else if (sessionStorage.lineInterestLevel === 'line6abort') {
		$("#line6no").unbind('click', line6no);
		$("#line6yes").unbind('click', line6yes);
	} else if (sessionStorage.lineInterestLevel === 'line7') {
		$("#line6no").unbind('click', line6no);
		$("#line6yes").unbind('click', line6yes);
		$("#line7no").bind('click', line7no);
		$("#line7yes").bind('click', line7yes);
	} else if (sessionStorage.lineInterestLevel === 'line7abort') {
		$("#line7no").unbind('click', line7no);
		$("#line7yes").unbind('click', line7yes);
	} else if (sessionStorage.lineInterestLevel === 'line8') {
		$("#line7no").unbind('click', line7no);
		$("#line7yes").unbind('click', line7yes);
		$("#line8no").bind('click', line8no);
		$("#line8yes").bind('click', line8yes);
	} else if (sessionStorage.lineInterestLevel === 'line8abort') {
		$("#line8no").unbind('click', line8no);
		$("#line8yes").unbind('click', line8yes);
	} else if (sessionStorage.lineInterestLevel === 'line9') {
		$("#line8no").unbind('click', line8no);
		$("#line8yes").unbind('click', line8yes);
		$("#line9").bind('mouseenter mouseleave', line9);
	} else {
		$("#line9").unbind('mouseenter mouseleave', line9);
	}
}