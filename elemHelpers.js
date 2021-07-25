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

// partition a list
var partitionList = function(ls, s) {
	var r = [];
	var i = 0;
	var n = Math.floor(ls.length / s);
	var z = ls.length % s;
	for (var a = 0; a < s; a += 1) {
		r.push(ls.slice(i, i+n))
		i += n;
		if (z != 0) {
			r[a].push(ls[i])
			z -= 1;
			i += 1;
		}
	}
	return r;
}

// merge inner list (single-merge)
var innerMergeList = function(ls) {
	var r = [];
	for (var x = 0; x < ls.length; x += 1) {
		for (var y = 0; y < ls[x].length; y += 1) {
			r.push(ls[x][y]);
		}
	}
	return r;
}

// reverse a list (non-mutating)
var reverseList = function(ls) {
	var r = Array(ls.length);
	var temp = null;
	for(var x = 0; x < Math.ceil(ls.length/2); x += 1) {
		r[x] = ls[ls.length-1 - x];
		r[ls.length-1 - x] = ls[x];
	}
	return r;
}