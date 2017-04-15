var tipAcceptance;
var tipTrust;
var tipAdmiration;
var safeThing;
var lampThing;
var reallyThing;
var acceptedGift;

$(document).ready(function() {
	showTextOrNot();
	giftYesNo();
	showAcceptYesNo();
})

function showAcceptYesNo() {
	if ((sessionStorage.tipAcceptance ==! undefined) && (sessionStorage.tipTrust ==! undefined) && (sessionStorage.tipAdmiration ==! undefined) && (sessionStorage.safeThing ==! undefined) && (sessionStorage.lampThing ==! undefined) && (sessionStorage.reallyThing ==! undefined)) {
		$("#giftPara").css('opacity', '1');
	} else {
		$("#giftPara").css('opacity', '0');
	}
}

function giftYesNo() {
	if (sessionStorage.acceptedGift !== undefined) {
		$(".giftContainer").css('opacity', '1');
	} else {
		$(".giftContainer").css('opacity', '0');
	}
}

function showTextOrNot() {
	if (sessionStorage.tipAcceptance !== undefined) {
		$("#tipAcceptanceP").css('opacity', '1');
		$("#tipAcceptanceP").css('text-shadow', '0px 5px 20px #FFFFFF')
		$("#tipAcceptanceP").css('transition', 'text-shadow 1s ease-out');
		$("#tipAcceptanceP").css('-webkit-transition', 'text-shadow 1s ease-out');
		$("#tipAcceptanceP").css('-moz-transition', 'text-shadow 1s ease-out');
		$("#tipAcceptanceP").css('-ms-transition', 'text-shadow 1s ease-out');
		$("#tipAcceptanceP").css('-o-transition', 'text-shadow 1s ease-out');
	} else {
		$("#tipAcceptanceP").css('opacity', '0');
	}
	if (sessionStorage.tipTrust !== undefined) {
		$("#tipTrustP").css('opacity', '1');
		$("#tipTrustP").css('text-shadow', '0px 5px 20px #FFFFFF')
		$("#tipTrustP").css('transition', 'text-shadow 1s ease-out');
		$("#tipTrustP").css('-webkit-transition', 'text-shadow 1s ease-out');
		$("#tipTrustP").css('-moz-transition', 'text-shadow 1s ease-out');
		$("#tipTrustP").css('-ms-transition', 'text-shadow 1s ease-out');
		$("#tipTrustP").css('-o-transition', 'text-shadow 1s ease-out');
	} else {
		$("#tipTrustP").css('opacity', '0');
	}
	if (sessionStorage.tipAdmiration !== undefined) {
		$("#tipAdmirationP").css('opacity', '1');
		$("#tipAdmirationP").css('text-shadow', '0px 5px 20px #FFFFFF')
		$("#tipAdmirationP").css('transition', 'text-shadow 1s ease-out');
		$("#tipAdmirationP").css('-webkit-transition', 'text-shadow 1s ease-out');
		$("#tipAdmirationP").css('-moz-transition', 'text-shadow 1s ease-out');
		$("#tipAdmirationP").css('-ms-transition', 'text-shadow 1s ease-out');
		$("#tipAdmirationP").css('-o-transition', 'text-shadow 1s ease-out');
	} else {
		$("#tipAdmirationP").css('opacity', '0');
	}
	if (sessionStorage.safeThing !== undefined) {
		$("#safeLine").css('opacity', '1');
		$("#safeLine").css('text-shadow', '0px 5px 20px #FFFFFF')
		$("#safeLine").css('transition', 'text-shadow 1s ease-out');
		$("#safeLine").css('-webkit-transition', 'text-shadow 1s ease-out');
		$("#safeLine").css('-moz-transition', 'text-shadow 1s ease-out');
		$("#safeLine").css('-ms-transition', 'text-shadow 1s ease-out');
		$("#safeLine").css('-o-transition', 'text-shadow 1s ease-out');
	} else {
		$("#safeLine").css('opacity', '0');
	}
	if (sessionStorage.lampThing !== undefined) {
		$("#lampLine").css('opacity', '1');
		$("#lampLine").css('text-shadow', '0px 5px 20px #FFFFFF')
		$("#lampLine").css('transition', 'text-shadow 1s ease-out');
		$("#lampLine").css('-webkit-transition', 'text-shadow 1s ease-out');
		$("#lampLine").css('-moz-transition', 'text-shadow 1s ease-out');
		$("#lampLine").css('-ms-transition', 'text-shadow 1s ease-out');
		$("#lampLine").css('-o-transition', 'text-shadow 1s ease-out');
	} else {
		$("#lampLine").css('opacity', '0');
	}
	if (sessionStorage.reallyThing !== undefined) {
		$("#reallyLine").css('opacity', '1');
		$("#reallyLine").css('text-shadow', '0px 5px 20px #FFFFFF')
		$("#reallyLine").css('transition', 'text-shadow 1s ease-out');
		$("#reallyLine").css('-webkit-transition', 'text-shadow 1s ease-out');
		$("#reallyLine").css('-moz-transition', 'text-shadow 1s ease-out');
		$("#reallyLine").css('-ms-transition', 'text-shadow 1s ease-out');
		$("#reallyLine").css('-o-transition', 'text-shadow 1s ease-out');
	} else {
		$("#reallyLine").css('opacity', '0');
	}
}

function showTipAcceptance() {
	sessionStorage.tipAcceptance = 1;
	$("#tipAcceptanceP").css('opacity', '1');
	$("#tipAcceptanceP").css('text-shadow', '0px 5px 20px #FFFFFF')
	$("#tipAcceptanceP").css('transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAcceptanceP").css('-webkit-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAcceptanceP").css('-moz-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAcceptanceP").css('-ms-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAcceptanceP").css('-o-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	showAcceptYesNo();
}

function showTipTrust() {
	sessionStorage.tipTrust = 1;
	$("#tipTrustP").css('opacity', '1');
	$("#tipTrustP").css('text-shadow', '0px 5px 20px #FFFFFF')
	$("#tipTrustP").css('transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipTrustP").css('-webkit-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipTrustP").css('-moz-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipTrustP").css('-ms-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipTrustP").css('-o-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	showAcceptYesNo();
}

function showTipAdmiration() {
	sessionStorage.tipAdmiration = 1;
	$("#tipAdmirationP").css('opacity', '1');
	$("#tipAdmirationP").css('text-shadow', '0px 5px 20px #FFFFFF')
	$("#tipAdmirationP").css('transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAdmirationP").css('-webkit-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAdmirationP").css('-moz-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAdmirationP").css('-ms-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#tipAdmirationP").css('-o-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	showAcceptYesNo();
}

function showSafeLine() {
	sessionStorage.safeThing = 1;
	$("#safeLine").css('opacity', '1');
	$("#safeLine").css('text-shadow', '0px 5px 20px #FFFFFF')
	$("#safeLine").css('transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#safeLine").css('-webkit-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#safeLine").css('-moz-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#safeLine").css('-ms-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#safeLine").css('-o-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	showAcceptYesNo();
}

function showLampLine() {
	sessionStorage.lampThing = 1;
	$("#lampLine").css('opacity', '1');
	$("#lampLine").css('text-shadow', '0px 5px 20px #FFFFFF')
	$("#lampLine").css('transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#lampLine").css('-webkit-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#lampLine").css('-moz-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#lampLine").css('-ms-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#lampLine").css('-o-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	showAcceptYesNo();
}

function showReallyLine() {
	sessionStorage.reallyThing = 1;
	$("#reallyLine").css('opacity', '1');
	$("#reallyLine").css('text-shadow', '0px 5px 20px #FFFFFF')
	$("#reallyLine").css('transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#reallyLine").css('-webkit-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#reallyLine").css('-moz-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#reallyLine").css('-ms-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	$("#reallyLine").css('-o-transition', 'opacity .1s ease-out, text-shadow 1s ease-out');
	showAcceptYesNo();
}

function showBox() {
	sessionStorage.acceptedGift = 1;
	$(".giftContainer").css('opacity', '1');
}

function openBox() {
	var f = !$(this).data("toggleFlag");
	if (f) {
		$(".boxLid").css('z-index', '-1');
		$(".boxLid").css('left', '70px');
		$(".boxLid").css('top', '10px');
		$(".boxLid").css('transition', '.5s linear');
	} else {
		$(".boxLid").css('z-index', '0');
		$(".boxLid").css('left', '0');
		$(".boxLid").css('top', '0');
	}
	$(this).data("toggleFlag", f);
}
