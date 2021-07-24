// shorthand selector by class or id
var elemSelector = function(elemString) {
	return {
		".": document.getElementsByClassName(elemString.slice(1)),
		"#": document.getElementById(elemString.slice(1)),
	}[elemString[0]];
};

// pseudo-href for navbar elements
var navi = function(path) {
	location.href = path;
};

// hide an element (e.g. closing a banner)
var hideElem = function(elem) {
	elem.style.display = 'none';
};

// close banner if open
var toggleBanner = function() {
	if (elemSelector('#banner').style.display == 'inline-block') {
		elemSelector('#banner').style.display='none';
	} else {
		elemSelector('#banner').style.display='inline-block'
	}
};

// toggleInfo
var toggleInfo = function(type, elementId) {
	console.log(elementId);
	var infoElem = elemSelector(elementId);
	if (infoElem.innerHTML === '') {
		infoElem.innerHTML = infoMapping[type];
	} else {
		infoElem.innerHTML = '';
	}
};