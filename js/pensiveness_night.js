$(document).ready(function() {
	bottomsUp();
	curtainCheck();
	$(".curtainPole").bind("click", closeCurtains);
	scrollerThing();
	ftChecker();
})

function bottomsUp() {
	var d = $('.pensWinWrapper')
	d.scrollTop(d.prop("scrollHeight"));
}

function openCurtains() {
	$('.closedCloth').hide();
	$('.closedRings').hide();
	sessionStorage.curtainsOpened = 'opened';
	curtainCheck();
}

function curtainCheck() {
	if (sessionStorage.curtainsOpened !== 'opened') {
		$(".curtainCloth").hide();
		$(".curtainRings").hide();
	} else {
		$(".curtainCloth").show();
		$(".curtainRings").show();
		$('.closedCloth').hide();
		$('.closedRings').hide();
	}
}

function closeCurtains() {
	$('.closedCloth').show();
	$('.closedRings').show();
	sessionStorage.curtainsOpened = 'closed';
	curtainCheck();
}

// pensWinWrapper
function scrollerThing() {
	$('.pensWinWrapper').scroll(function() {
		if ($('.pensWinWrapper').scrollTop() === 0) {
			sessionStorage.scrolledUp = 'done_it';
			ftChecker();
		} else {
			return false;
		}
	})
}

function ftChecker() {
	if (sessionStorage.scrolledUp === undefined) {
		$("#lastThing").hide();
		$('.pensiveFruit').hide();
	} else {
		$("#lastThing").show();
		$('.pensiveFruit').show();
	}
}