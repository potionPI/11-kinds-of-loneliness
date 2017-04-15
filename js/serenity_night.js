var aSerenity = 0;
var aJoy = 0;
var aEcstacy = 0;
var bSerenity = 0;
var bJoy = 0;
var bEcstacy = 0;

$(document).ready(function() {
	showSecret();
	keepOpacity();
})

function keepOpacity() {
	if (sessionStorage.aSerenity !== undefined) {
		$("#poem").css("opacity", "+=.1");
	}
	if (sessionStorage.bSerenity !== undefined) {
		$("#poem").css("opacity", "+=.1");
	}
	if (sessionStorage.aJoy !== undefined) {
		$("#poem").css("opacity", "+=.1");
	}
	if (sessionStorage.bJoy !== undefined) {
		$("#poem").css("opacity", "+=.1");
	}
	if (sessionStorage.aEcstacy !== undefined) {
		$("#poem").css("opacity", "+=.1");
	}
	if (sessionStorage.bEcstacy !== undefined) {
		$("#poem").css("opacity", "+=.1");
	}
}

function showSecret() {
	if ((sessionStorage.aSerenity !== undefined) && (sessionStorage.bSerenity !== undefined) && (sessionStorage.aJoy !== undefined) && (sessionStorage.bJoy !== undefined) && (sessionStorage.aEcstacy !== undefined) && (sessionStorage.bEcstacy !== undefined)) {
		$(":button").css("display", "block");
	} else {
		$(":button").css("display", "none");
	}
}

function addaSerenity() {
	sessionStorage.aSerenity = .1;
	$("#poem").css("opacity", "+=.1");
	showSecret();
}

function addaJoy() {
	sessionStorage.aJoy = .1;
	$("#poem").css("opacity", "+=.1");
	showSecret();
}

function addaEcstacy() {
	sessionStorage.aEcstacy = .1;
	$("#poem").css("opacity", "+=.1");
	showSecret();
}

function addbSerenity() {
	sessionStorage.bSerenity = .1;
	$("#poem").css("opacity", "+=.1");
	showSecret();
}

function addbJoy() {
	sessionStorage.bJoy = .1;
	$("#poem").css("opacity", "+=.1");
	showSecret();
}

function addbEcstacy() {
	sessionStorage.bEcstacy = .1;
	$("#poem").css("opacity", "+=.1");
	showSecret();
}