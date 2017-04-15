$(document).ready(function() {
	linesCheck();
	fruitCheck();
	bindsCheck();
	shadowsCheck();
});

// Checks
function shadowsCheck() {
	if (sessionStorage.lineLevel === undefined) {
		$("#line1").css('text-shadow', 'none');
		$("#line2").css('text-shadow', 'none');
		$("#line3").css('text-shadow', 'none');
		$("#line4").css('text-shadow', 'none');
		$("#line5").css('text-shadow', 'none');
		$("#line6").css('text-shadow', 'none');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '1') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', 'none');
		$("#line3").css('text-shadow', 'none');
		$("#line4").css('text-shadow', 'none');
		$("#line5").css('text-shadow', 'none');
		$("#line6").css('text-shadow', 'none');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '2') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', 'none');
		$("#line4").css('text-shadow', 'none');
		$("#line5").css('text-shadow', 'none');
		$("#line6").css('text-shadow', 'none');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '3') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', 'none');
		$("#line5").css('text-shadow', 'none');
		$("#line6").css('text-shadow', 'none');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '4') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line5").css('text-shadow', 'none');
		$("#line6").css('text-shadow', 'none');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '5') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line5").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line6").css('text-shadow', 'none');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '6') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line5").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line6").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line7").css('text-shadow', 'none');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '7') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line5").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line6").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line7").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line8").css('text-shadow', 'none');
		$("#line9").css('text-shadow', 'none');
	} else if (sessionStorage.lineLevel === '8') {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line5").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line6").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line7").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line8").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line9").css('text-shadow', 'none');
	} else {
		$("#line1").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line2").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line3").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line4").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line5").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line6").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line7").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line8").css('text-shadow', '0px 5px 20px #FFFFFF');
		$("#line9").css('text-shadow', '0px 5px 20px #FFFFFF');
	}
}
function linesCheck() {
	if (sessionStorage.lineLevel === undefined) {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '0');
		$("#line3").css('opacity', '0');
		$("#line4").css('opacity', '0');
		$("#line5").css('opacity', '0');
		$("#line6").css('opacity', '0');
		$("#line7").css('opacity', '0');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '2') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '0');
		$("#line4").css('opacity', '0');
		$("#line5").css('opacity', '0');
		$("#line6").css('opacity', '0');
		$("#line7").css('opacity', '0');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '3') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '0');
		$("#line5").css('opacity', '0');
		$("#line6").css('opacity', '0');
		$("#line7").css('opacity', '0');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '4') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '0');
		$("#line6").css('opacity', '0');
		$("#line7").css('opacity', '0');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '5') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '1');
		$("#line6").css('opacity', '0');
		$("#line7").css('opacity', '0');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '6') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '1');
		$("#line6").css('opacity', '1');
		$("#line7").css('opacity', '0');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '7') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '1');
		$("#line6").css('opacity', '1');
		$("#line7").css('opacity', '1');
		$("#line8").css('opacity', '0');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '8') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '1');
		$("#line6").css('opacity', '1');
		$("#line7").css('opacity', '1');
		$("#line8").css('opacity', '1');
		$("#line9").css('opacity', '0');
	} else if (sessionStorage.lineLevel === '9') {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '1');
		$("#line6").css('opacity', '1');
		$("#line7").css('opacity', '1');
		$("#line8").css('opacity', '1');
		$("#line9").css('opacity', '1');
	} else {
		$("#line1").css('opacity', '1');
		$("#line2").css('opacity', '1');
		$("#line3").css('opacity', '1');
		$("#line4").css('opacity', '1');
		$("#line5").css('opacity', '1');
		$("#line6").css('opacity', '1');
		$("#line7").css('opacity', '1');
		$("#line8").css('opacity', '1');
		$("#line9").css('opacity', '1');
	}
}
function bindsCheck() {
	if (sessionStorage.lineLevel === undefined) {
		$("#line1Span").bind('click', line1);
	} else if (sessionStorage.lineLevel === '2') {
		$("#line1Span").unbind('click', line1);
		$("#line2Span").bind('click', line2);
	} else if (sessionStorage.lineLevel === '3') {
		$("#line2Span").unbind('click', line2);
		$("#line3Span").bind('click', line3);
	} else if (sessionStorage.lineLevel === '4') {
		$("#line3Span").unbind('click', line3);
		$("#line4").bind('click', line4);
	} else if (sessionStorage.lineLevel === '5') {
		$("#line4").unbind('click', line4);
		$("#line5").bind('click', line5);
	} else if (sessionStorage.lineLevel === '6') {
		$("#line5").unbind('click', line5);
		$("#line6").mouseenter(line6).mouseleave(line6);
	} else if (sessionStorage.lineLevel === '7') {
		$("#line6").off("mouseenter mouseleave");
		$("#line7Button1").bind('click', line7);
		$("#line7Button2").bind('click', line7);
		$("#line7Button3").bind('click', line7);
	} else if (sessionStorage.lineLevel === '8') {
		$("#line7Button1").unbind('click', line7);
		$("#line7Button2").unbind('click', line7);
		$("#line7Button3").unbind('click', line7);
		$("#line8").bind('click', line8);
	} else if (sessionStorage.lineLevel === '9') {
		$("#line8").unbind('click', line8);
		$("#line9Button").bind('click', line9);
	} else {
		$("#line9Button").unbind('click', line9);
		$(".theWholeUmbrella").bind('click', forFruit);
	}
}
function fruitCheck() {
	if (sessionStorage.lineLevel === '10') {
		$(".boredomFruit").show();
		$(".boredomFruit").css('z-index', '-1');
		$(".umPlastic").css('opacity', '.5');
		$(".theWholeUmbrella").css('z-index', '0');
	} else if (sessionStorage.lineLevel === 'showFruit') {
		$(".boredomFruit").show();
		$(".boredomFruit").css('z-index', '1');
		$(".umPlastic").css('opacity', '1');
		$(".theWholeUmbrella").css('z-index', '0');
	} else {
		$(".boredomFruit").hide();
	}
}
// click line9 to bind umbrella make showFruit
// (end) Checks

// line clicks functions

function line1() {
	sessionStorage.lineLevel = 2;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line2() {
	sessionStorage.lineLevel = 3;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line3() {
	sessionStorage.lineLevel = 4;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line4() {
	sessionStorage.lineLevel = 5;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line5() {
	sessionStorage.lineLevel = 6;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line6() {
	sessionStorage.lineLevel = 7;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line7() {
	sessionStorage.lineLevel = 8;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line8() {
	sessionStorage.lineLevel = 9;
	shadowsCheck();
	linesCheck();
	bindsCheck();
}
function line9() {
	sessionStorage.lineLevel = '10';
	shadowsCheck();
	linesCheck();
	bindsCheck();
	fruitCheck();
}
function forFruit() {
	if (sessionStorage.lineLevel === '10') {
		sessionStorage.lineLevel = 'showFruit';
		fruitCheck();
	} else {
		sessionStorage.lineLevel = '10';
		fruitCheck();
	}
}
// (end) line clicks functions
