$(document).ready(function() {
	moveCar();
	scrollerThing();
	aFruitChecker();
	opCar1Check();
	opCar2Check();
	opCar3Check();
	bindsChecker();
})

function moveCar() {
	var pane = $('#pane'),
	box = $('#box'),
	wh = pane.width() - box.width(),
	wv = pane.height() - box.height(),
	d = {},
	x = 5;

	function newh(v,a,b) {
		var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
		return n < 0 ? 0 : n > wh ? wh : n;
	}

	function newv(v,a,b) {
		var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
		return n < 0 ? 0 : n > wv ? wv : n;
	}

	$(window).keydown(function(e) { d[e.which] = true; });
	$(window).keyup(function(e) { d[e.which] = false; });

	setInterval(function() {
		box.css({
		left: function(i,v) { return newh(v, 37, 39); },
		//top: function(i,v) { return newv(v, 38, 40); }
		//enable top to move up and down
		});
		wh = pane.width() - box.width();
		wv = pane.height() - box.height();
	}, 20);
}

function scrollerThing() {
	$('.theWholeCity').scroll(function() {
		if ($('.theWholeCity').scrollLeft() > 1325 ) {
			sessionStorage.thereIsFruit = 'yes';
			aFruitChecker();
		} else {
			return false;
		}
	})
}

function aFruitChecker() {
	if (sessionStorage.thereIsFruit === 'yes') {
		$('#fruitText').show();
	} else {
		$('#fruitText').hide();
	}
}


function opCar1Check() {
	if (sessionStorage.opCar1 === undefined) {
		return false;
	} else {
		$("#box").css("opacity", "+=.1");
	}
}
function opCar2Check() {
	if (sessionStorage.opCar2 === undefined) {
		return false;
	} else {
		$("#box").css("opacity", "+=.1");
	}
}
function opCar3Check() {
	if (sessionStorage.opCar3 === undefined) {
		return false;
	} else {
		$("#box").css("opacity", "+=.1");
	}
}
function bindsChecker() {
	if (sessionStorage.opCar1 === undefined) {
		$("#car1OP").bind('click', annoyanceOP);
	} else {
		$("#car1OP").unbind('click', annoyanceOP);
	}
	if (sessionStorage.opCar2 === undefined) {
		$("#car2OP").bind('click', angerOP);
	} else {
		$("#car2OP").unbind('click', angerOP);
	}
	if (sessionStorage.opCar3 === undefined) {
		$("#car3OP").bind('click', rageOP);
	} else {
		$("#car3OP").unbind('click', rageOP);
	}
}

function annoyanceOP() {
	sessionStorage.opCar1 = 'clicked';
	opCar1Check();
	bindsChecker();
}
function angerOP() {
	sessionStorage.opCar2 = 'clicked';
	opCar2Check();
	bindsChecker();
}
function rageOP() {
	sessionStorage.opCar3 = 'clicked';
	opCar3Check();
	bindsChecker();
}
