// --------------- elements helpers ---------------

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
	var infoElem = elemSelector(elementId);
	if (infoElem.innerHTML === '') {
		infoElem.innerHTML = infoMapping[type];
	} else {
		infoElem.innerHTML = '';
	}
};

// updates notes
var updateNotes = function(elem) {
	var noteStorage = window.localStorage;
	noteStorage.setItem('notes', elem.value);
}

// --------------- cipher helpers ---------------

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

// partition a list and get it's partition lengths
var getPartitionSizes = function(ls, s) {
	var r = {};
	var n = Math.floor(ls.length / s);
	var z = ls.length % s;
	for (var x = 0; x < s; x += 1) {
		r[x] = n;
	}
	for (var y = 0; y < z; y += 1) {
		r[y] += 1;
	}
	return r;
}

// reorder partitions
var reorderPartitions = function(charList, partitions, sequence, type) {
	var r = Array(partitions.length);
	var charPartitions = partitionList(charList, partitions);
	if (type === "encode") {
		for (var x = 0; x < partitions; x += 1) {
			r[x] = charPartitions[sequence[x]-1];
		}
		return r;
	} else {
		var i = 0;
		var pSizes = getPartitionSizes(charList, partitions);
		var encodedPartitions = {};
		for (var x = 0; x < partitions; x += 1) {
			encodedPartitions[sequence[x]] = charList.slice(i, pSizes[sequence[x]-1]+i);
			i += pSizes[sequence[x]-1];
		}
		for (var y = 0; y < partitions; y += 1) {
			r[y] = encodedPartitions[y+1];
		}
		return r;
	}
}

// get number of items in a partition size
var getNumberItemsInPartitions = function(size, s) {
	var r = [];
	var n = Math.floor(size / s);
	var z = size % s;
	for (var x = 0; x < s; x += 1) {
		r.push(n);
	}
	for (var y = 0; y < z; y += 1) {
		r[y] += 1;
	}
	return r;
}

// set of s characters - partitioned form
var setOfChars = function(ls, s) {
	var r = [];
	var i = 0;
	while (i+s < ls.length) {
		r.push(ls.slice(i, i+s));
		i += s;
	}
	if (i < ls.length) {
		r.push(ls.slice(i, ls.length));
	}
	return r;
}

// sequence and reverse-sequence a list
var sequenceList = function(ls, seq, type) {
	var r = Array(ls.length);
	// check if ls is less than seq (e.g. for partial sets)
	if (ls.length < seq.length) {
		var limitSeq = [];
		for (var z = 0; z<seq.length; z+=1) {
			if (seq[z]-1 < ls.length) {
				limitSeq.push(seq[z]);
			}
		}
		seq = limitSeq;
	}
	// sequence and reverse-sequence
	if (type === "encode") {
		for (var x=0; x<seq.length; x+=1) {
			r[seq[x]-1] = ls[x];
		}
	} else {
		for (var x=0; x<seq.length; x+=1) {
			r[x] = ls[seq[x]-1];
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

// shift Unicode number in char array by multiple (mutating)
var shiftArrayUnicodeByMultiple = function(ls, n, type) {
	if (type === "encode") {
		for (var i=0; i < ls.length; i+=1) {
			ls[i] = String.fromCharCode(ls[i].charCodeAt(0) * n);
		}
	} else {
		for (var i=0; i < ls.length; i+=1) {
			ls[i] = String.fromCharCode(Math.floor(ls[i].charCodeAt(0) / n));
		}
	}
}

// shift text subset (mutating)
var shiftTextSubset = function(ls, index, size, shift) {
	var s = size;
	for (var y = 0; y < ls.length; y += 1) {
		if (s > 0 && y >= index) {
			ls[y] = String.fromCharCode(ls[y].charCodeAt(0) + shift);
			s -= 1;
		}
    }
	return ls;
}

// shift text subset by multiple (mutating)
var shiftTextSubsetByMultiple = function(ls, index, size, shift, type) {
	var s = size;
	if (type === "encode") {
		for (var y = 0; y < ls.length; y += 1) {
			if (s > 0 && y >= index) {
				ls[y] = String.fromCharCode(ls[y].charCodeAt(0) * shift);
				s -= 1;
			}
		}
	} else {
		for (var y = 0; y < ls.length; y += 1) {
			if (s > 0 && y >= index) {
				ls[y] = String.fromCharCode(Math.floor(ls[y].charCodeAt(0) / shift));
				s -= 1;
			}
		}
	}
	return ls;
}

// insert or delete text at index (mutating)
var updateAtIndex = function(list, listIndex, text, type) {
	var index = listIndex;
	if (type === "encode") {
		for (var x=0; x < text.length; x+=1) {
			list.splice(index, 0, text[x]);
			index += 1;
		}
	} else {
		list.splice(index, text.length);
	}
}

// get random character within set Unicode range
var getRandomChar = function(min, max) {
	if (isNaN(min)) { min = 20; }
	if (isNaN(max)) { max = 65000; }
	return String.fromCharCode(Math.floor(Math.random()*(max-min+1)+min));
}

// get list that has an even number of items
var getList2 = function(ls) {
	var r = [];
	if (ls.length % 2 != 0) {
		r = ls.slice(ls, -1);
	} else {
		r = ls;
	}
	return r;
}

// get list sum
var getListSum = function(ls) {
	var sum = 0;
	for (var x = 0; x < ls.length; x += 1) {
		sum += parseInt(ls[x]);
	}
	return sum;
}

// generates random text of a specified size and Unicode range
var generateRandomText = function(size, min, max) {
	var r = "";
	for (var x = 0; x < size; x += 1) {
		r += String.fromCharCode(Math.floor(Math.random()*(max-min+1)+min));
	}
	return r;
}

// sorting list algorithm (mutating)
var sortList = function(ls) {
	var c = 1;
	while (c > 0) {
		c = 0;
		for (var i = 0; i < ls.length-1; i += 1) {
			if (ls[i] > ls[i+1]) {
				var temp = ls[i];
				ls[i] = ls[i+1];
				ls[i+1] = temp;
				c = 1;
			}
		}
	}
	return ls;
}

// move list items to index (mutating)
var moveTextToIndex = function(ls, index, targetIndex, size, type) {
	if (type === "encode") {
		var listSubset = ls.slice(index, index+size);
		ls.splice(index, size);
		for (var x = 0; x < size; x += 1) {
			ls.splice(targetIndex + x, 0, listSubset[x]);
		}
	} else {
		var listSubset = ls.slice(targetIndex, targetIndex+size);
		ls.splice(targetIndex, size);
		for (var x = 0; x < size; x += 1) {
			ls.splice(index + x, 0, listSubset[x]);
		}
	}
}

// get a list of indices selected by step sequence
var getIndicesFromSequence = function(indexArray, size) {
	var r = [];
	var c = -1;
	var x = 0;
	while (c < size) {
		c += indexArray[x];
		if (c >= size) { return r; }
		r.push(c);
		x += 1;
		if (x == indexArray.length) { x = 0; }
	}
	return r;
}

// ----------------- debug helpers -----------------
var getUnicode = function() {
	var textUnicodeList = [];
	var cipherTextUnicodeList = [];
	for (var x = 0; x < elemSelector("#textInput").value.length; x+=1) {
		textUnicodeList.push(elemSelector("#textInput").value.charCodeAt(x));
	}
	for (var y = 0; y < elemSelector("#cipherTextInput").value.length; y+=1) {
		cipherTextUnicodeList.push(elemSelector("#cipherTextInput").value.charCodeAt(y));
	}
	console.log(textUnicodeList);
	console.log(cipherTextUnicodeList);
}
