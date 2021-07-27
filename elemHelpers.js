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

// swap array items by index (mutating, index starts at 1)
var swapItems = function(ls, p1, p2) {
	if (ls[p1-1] == undefined || ls[p1-1] == undefined) {
		return ls;
	}
	var temp = ls[p1-1];
	ls[p1-1] = ls[p2-1];
	ls[p2-1] = temp;
	return ls;
}

// parse comma separated integers string into array of integers
var textToArray = function(s) {
	var r = s.split(",");
	for (var i=0; i < r.length; i+=1) {
		r[i] = parseInt(r[i].trim());
	}
	return r;
}

// add number to each array item (mutating)
var shiftArray = function(ls, n) {
	for (var i=0; i < ls.length; i+=1) {
		ls[i] = parseInt(ls[i]) + n;
	}
}

// shift Unicode number in char array (mutating)
var shiftArrayUnicode = function(ls, n) {
	for (var i=0; i < ls.length; i+=1) {
		ls[i] = String.fromCharCode(ls[i].charCodeAt(0) + n);
	}
}

// insert or delete text at index (mutating)
var updateAtIndex = function(list, listIndex, text, type) {
	var index = listIndex;
	if (type === "encode") {
		for (var i=0; i < text.length; i+=1) {
			list.splice(index, 0, text[i]);
			index += 1;
		}
	} else {
		list.splice(index, text.length);
	}
}

// get random character within set Unicode range of 20 to 65000
var getRandomChar = function() {
	return String.fromCharCode(Math.floor(Math.random()*(65000-20+1)+20));
}