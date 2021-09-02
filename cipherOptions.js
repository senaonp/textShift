// --------------------------------
// charShift

var charShiftElem = `
    <label class="optionsItem">shift text by number </label>
    <input size="8" id="option1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option1_info')">info</span><br />
	<div id="option1_info"></div>`;
var charShiftEncode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) + parseInt(elemSelector("#option1").value));
    }
}
var charShiftDecode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) - parseInt(elemSelector("#option1").value));
    }
}

// --------------------------------
// charShift by multiple

var charShiftMultipleElem = `
    <label class="optionsItem">shift text by multiple  </label>
    <input size="8" id="option2" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option2_info')">info</span><br />
	<div id="option2_info"></div>`;
var charShiftMultipleEncode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) * parseInt(elemSelector("#option2").value));
    }
}
var charShiftMultipleDecode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) / parseInt(elemSelector("#option2").value));
    }
}

// --------------------------------
// reverse text

var reverseElem = `
    <label class="optionsItem">reverse text </label>
    <span class="infoIcon" onclick="toggleInfo('reverse', '#option3_info')">info</span><br />
    <div id="option3_info"></div>`;
var reverseEncode = function(elem) {
    var oriLen = elem.value.length;
    for (var i = 0; i < oriLen; i += 1) {
        cipherArray[oriLen-i-1] = String.fromCharCode(elem.value.charCodeAt(i));
    }
}
var reverseDecode = function(elem) {
    var oriLen = elem.value.length;
    for (var i = 0; i < oriLen; i += 1) {
        textArray[oriLen-i-1] = String.fromCharCode(elem.value.charCodeAt(i));
    }
}

// --------------------------------
// charShift every nth char

var charShiftNthElem = `
    <label class="optionsItem">shift text by number </label>
    <input size="8" id="option4_1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option4_1_info')">info</span><br />
	<div id="option4_1_info"></div>
    
    <label class="optionsItem">for every nth character where n is </label>
    <input size="8" id="option4_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option4_2_info')">info</span><br />
	<div id="option4_2_info"></div>`;
var charShiftNthEncode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        if (((i+1) % elemSelector("#option4_2").value) == 0) { 
            cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) + parseInt(elemSelector("#option4_1").value));
        } else {
            cipherArray[i] = elem.value[i];
        }
    }
}
var charShiftNthDecode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        if (((i+1) % elemSelector("#option4_2").value) == 0) {
            textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) - parseInt(elemSelector("#option4_1").value));
        } else {
            textArray[i] = elem.value[i];
        }
    }
}

// --------------------------------
// charShift every nth char by multiple

var charShiftNthMultipleElem = `
    <label class="optionsItem">shift text by multiple </label>
	<input size="8" id="option5_1" type="number" value="1"></input>
	<span class="infoIcon" onclick="toggleInfo('multiple', '#option5_1_info')">info</span><br />
	<div id="option5_1_info"></div>
	
    <label class="optionsItem">for every nth character where n is </label>
    <input size="8" id="option5_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option5_2_info')">info</span><br />
	<div id="option5_2_info"></div>`;
var charShiftNthMultipleEncode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        if (((i+1) % elemSelector("#option5_2").value) == 0) { 
            cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) * parseInt(elemSelector("#option5_1").value));
        } else {
            cipherArray[i] = elem.value[i];
        }
    }
}
var charShiftNthMultipleDecode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        if (((i+1) % elemSelector("#option5_2").value) == 0) { 
            textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) / parseInt(elemSelector("#option5_1").value));
        } else {
            textArray[i] = elem.value[i];
        }
    }
}

// --------------------------------
// charShift every offset nth char

var charShiftOffsetNthElem = `
    <label class="optionsItem">shift text by number </label>
    <input size="8" id="option6_1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option6_1_info')">info</span><br />
	<div id="option6_1_info"></div>
    
    <label class="optionsItem">for every nth character where n is </label>
    <input size="8" id="option6_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option6_2_info')">info</span><br />
	<div id="option6_2_info"></div>
    
    <label class="optionsItem">with an offset of </label>
    <input size="8" id="option6_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('offset', '#option6_3_info')">info</span><br />
	<div id="option6_3_info"></div>`;
var charShiftOffsetNthEncode = function(elem) {
    var offset = parseInt(elemSelector("#option6_3").value);
    var nth = elemSelector("#option6_2").value;
    var shift = parseInt(elemSelector("#option6_1").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    for (var y = 0; y < cipherArray.length; y += 1) {
        if ((cipherArray[y+offset] != undefined) && ((y+1) % nth) == 0) { 
            cipherArray[y+offset] = String.fromCharCode(elem.value.charCodeAt(y+offset) + shift);
        }
    }
}
var charShiftOffsetNthDecode = function(elem) {
    var offset = parseInt(elemSelector("#option6_3").value);
    var nth = elemSelector("#option6_2").value;
    var shift = parseInt(elemSelector("#option6_1").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    for (var y = 0; y < textArray.length; y += 1) {
        if ((textArray[y+offset] != undefined) && ((y+1) % nth) == 0) { 
            textArray[y+offset] = String.fromCharCode(elem.value.charCodeAt(y+offset) - shift);
        }
    }
}

// --------------------------------
// charShift every offset nth char by multiple

var charShiftOffsetNthMultipleElem = `
    <label class="optionsItem">shift text by multiple </label>
    <input size="8" id="option7_1" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option7_1_info')">info</span><br />
    <div id="option7_1_info"></div>
    
    <label class="optionsItem">for every nth character where n is </label>
    <input size="8" id="option7_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option7_2_info')">info</span><br />
	<div id="option7_2_info"></div>
    
    <label class="optionsItem">with an offset of </label>
    <input size="8" id="option7_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('offset', '#option7_3_info')">info</span><br />
	<div id="option7_3_info"></div>`;
var charShiftOffsetNthMultipleEncode = function(elem) {
    var offset = parseInt(elemSelector("#option7_3").value);
    var nth = elemSelector("#option7_2").value;
    var shift = parseInt(elemSelector("#option7_1").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    for (var y = 0; y < cipherArray.length; y += 1) {
        if ((cipherArray[y+offset] != undefined) && ((y+1) % nth) == 0) { 
            cipherArray[y+offset] = String.fromCharCode(elem.value.charCodeAt(y+offset) * shift);
        }
    }
}
var charShiftOffsetNthMultipleDecode = function(elem) {
    var offset = parseInt(elemSelector("#option7_3").value);
    var nth = elemSelector("#option7_2").value;
    var shift = parseInt(elemSelector("#option7_1").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    for (var y = 0; y < textArray.length; y += 1) {
        if ((textArray[y+offset] != undefined) && ((y+1) % nth) == 0) { 
            textArray[y+offset] = String.fromCharCode(elem.value.charCodeAt(y+offset) / shift);
        }
    }
}

// --------------------------------
// swap every nth character with offset

var charSwapNthOffsetElem = `
    <label class="optionsItem">for every nth character where n is </label>
    <input size="8" id="option8_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option8_1_info')">info</span><br />
	<div id="option8_1_info"></div>

    <label class="optionsItem">swap at an offset of </label>
    <input size="8" id="option8_2" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('swapOffset', '#option8_2_info')">info</span><br />
	<div id="option8_2_info"></div>`;
    var charSwapNthOffsetEncode = function(elem) {
        var offset = parseInt(elemSelector("#option8_2").value);
        var nth = elemSelector("#option8_1").value;
        for (var x = 0; x < elem.value.length; x += 1) {
            cipherArray[x] = elem.value[x];
        }
        for (var y = 0; y < cipherArray.length; y += 1) {
            if ((cipherArray[y+offset] != undefined) && ((y+1) % nth) == 0) {
                var tempO = String.fromCharCode(elem.value.charCodeAt(y+offset)); 
                cipherArray[y+offset] = String.fromCharCode(elem.value.charCodeAt(y));
                cipherArray[y] = tempO;
            }
        }
    }
    var charSwapNthOffsetDecode = function(elem) {
        var offset = parseInt(elemSelector("#option8_2").value);
        var nth = elemSelector("#option8_1").value;
        for (var x = 0; x < elem.value.length; x += 1) {
            textArray[x] = elem.value[x];
        }
        for (var y = 0; y < textArray.length; y += 1) {
            if ((textArray[y+offset] != undefined) && ((y+1) % nth) == 0) {
                var tempO = String.fromCharCode(elem.value.charCodeAt(y+offset)); 
                textArray[y+offset] = String.fromCharCode(elem.value.charCodeAt(y));
                textArray[y] = tempO;
            }
        }
    }

// --------------------------------
// swap every nth offset character by an offset

var charSwapNthOffsetOffsetElem = `
    <label class="optionsItem">for every nth character where n is </label>
    <input size="8" id="option9_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option9_1_info')">info</span><br />
	<div id="option9_1_info"></div>

    <label class="optionsItem">with an offset of </label>
    <input size="8" id="option9_2" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('nthOffset', '#option9_2_info')">info</span><br />
	<div id="option9_2_info"></div>

    <label class="optionsItem">swap at a relative offset of </label>
    <input size="8" id="option9_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('swapOffsetOffset', '#option9_3_info')">info</span><br />
	<div id="option9_3_info"></div>`;
    var charSwapNthOffsetOffsetEncode = function(elem) {
        var offsetOfN = parseInt(elemSelector("#option9_2").value);
        var offset = parseInt(elemSelector("#option9_3").value);
        var nth = elemSelector("#option9_1").value;
        for (var x = 0; x < elem.value.length; x += 1) {
            cipherArray[x] = elem.value[x];
        }
        for (var y = 0; y < cipherArray.length; y += 1) {
            if ((cipherArray[y+offsetOfN] != undefined) && (cipherArray[y+offsetOfN+offset] != undefined) && ((y+1) % nth) == 0) {
                var tempO = String.fromCharCode(elem.value.charCodeAt(y+offset+offsetOfN)); 
                cipherArray[y+offsetOfN+offset] = String.fromCharCode(elem.value.charCodeAt(y+offsetOfN));
                cipherArray[y+offsetOfN] = tempO;
            }
        }
    }
    var charSwapNthOffsetOffsetDecode = function(elem) {
        var offsetOfN = parseInt(elemSelector("#option9_2").value);
        var offset = parseInt(elemSelector("#option9_3").value);
        var nth = elemSelector("#option9_1").value;
        for (var x = 0; x < elem.value.length; x += 1) {
            textArray[x] = elem.value[x];
        }
        for (var y = 0; y < textArray.length; y += 1) {
            if ((textArray[y+offsetOfN] != undefined) && (textArray[y+offsetOfN+offset] != undefined) && ((y+1) % nth) == 0) {
                var tempO = String.fromCharCode(elem.value.charCodeAt(y+offset+offsetOfN)); 
                textArray[y+offsetOfN+offset] = String.fromCharCode(elem.value.charCodeAt(y+offsetOfN));
                textArray[y+offsetOfN] = tempO;
            }
        }
    }

// --------------------------------
// reverse each partition

var reversePartitionItemsElem = `
    <label class="optionsItem">partitions </label>
    <input size="8" id="option10_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('partition', '#option10_1_info')">info</span><br />
    <div id="option10_1_info"></div>

    <label class="optionsItem">reverse text </label>
    <span class="infoIcon" onclick="toggleInfo('reverse', '#option10_2_info')">info</span><br />
    <div id="option10_2_info"></div>
    `;
var reversePartitionItemsEncode = function(elem) {
    var partitions = parseInt(elemSelector("#option10_1").value);
    var r = [];
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    var partitionedList = partitionList(cipherArray, partitions);
    for (var y = 0; y < partitionedList.length; y += 1) {
        r.push(reverseList(partitionedList[y]));
    }
    cipherArray = innerMergeList(r);
}
var reversePartitionItemsDecode = function(elem) {
    var partitions = parseInt(elemSelector("#option10_1").value);
    var r = [];
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    var partitionedList = partitionList(textArray, partitions);
    for (var y = 0; y < partitionedList.length; y += 1) {
        r.push(reverseList(partitionedList[y]));
    }
    textArray = innerMergeList(r);
}

// ----------------------------
// shift by partition

var charShiftPartitionsElem = `
    <label class="optionsItem">with a text shift of </label>
    <input size="8" id="option11_1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option11_1_info')">info</span><br />
	<div id="option11_1_info"></div>
	
	<label class="optionsItem">and considering the number of partitions </label>
    <input size="8" id="option11_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('partition', '#option11_2_info')">info</span><br />
    <div id="option11_2_info"></div>

    <label class="optionsItem">shift the partitional indices of </label>
	<input size="15" id="option11_3" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('partitionList', '#option11_3_info')">info</span><br />
    <div id="option11_3_info"></div>`;
var charShiftPartitionsEncode = function(elem) {
    var shift = parseInt(elemSelector("#option11_1").value);
	var partitions = parseInt(elemSelector("#option11_2").value);
	var selectedPartitions = textToArray(elemSelector("#option11_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
	if (cipherArray[0] === undefined) { return; }
    var partitionedList = partitionList(cipherArray, partitions);
	for (sp = 0; sp < selectedPartitions.length; sp += 1) {
		shiftArrayUnicode(partitionedList[selectedPartitions[sp]-1], shift);
	}
    cipherArray = innerMergeList(partitionedList);
}
var charShiftPartitionsDecode = function(elem) {
    var shift = parseInt(elemSelector("#option11_1").value);
	var partitions = parseInt(elemSelector("#option11_2").value);
	var selectedPartitions = textToArray(elemSelector("#option11_3").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
	if (textArray[0] === undefined) { return; }
    var partitionedList = partitionList(textArray, partitions);
    for (sp = 0; sp < selectedPartitions.length; sp += 1) {
		shiftArrayUnicode(partitionedList[selectedPartitions[sp]-1], -shift);
	}
    textArray = innerMergeList(partitionedList);
}

// ----------------------------
// insert text at index

var insertTextAtIndexElem = `
    <label class="optionsItem">insert the text </label>
    <input size="20" id="option12_1" type="text" value=""></input>
    <span class="infoIcon" onclick="toggleInfo('text', '#option12_1_info')">info</span><br />
	<div id="option12_1_info"></div>
	
    <label class="optionsItem">at the index of </label>
	<input size="8" id="option12_2" type="number" value="0" min="0"></input>
    <span class="infoIcon" onclick="toggleInfo('index', '#option12_2_info')">info</span><br />
    <div id="option12_2_info"></div>
    
    <hr />

    <label class="optionsItem">(optional) decode with a known text length of </label>
	<input size="8" id="option12_3" type="number"></input>
    <span class="infoIcon" onclick="toggleInfo('textLengthOptional', '#option12_3_info')">info</span><br />
    <div id="option12_3_info"></div>`;
var insertTextAtIndexEncode = function(elem) {
	var text = elemSelector("#option12_1").value;
	var index = parseInt(elemSelector("#option12_2").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    updateAtIndex(cipherArray, index, text, "encode");
}
var insertTextAtIndexDecode = function(elem) {
    var text = elemSelector("#option12_1").value;
	var index = parseInt(elemSelector("#option12_2").value);
    var textLengthDecode = parseInt(elemSelector("#option12_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    if (isNaN(textLengthDecode)) {
        updateAtIndex(textArray, index, text, "decode");
    } else {
        textArray.splice(index, textLengthDecode);
    }
}

// ----------------------------
// insert text at index

var insertRandomGenTextAtIndexElem = `
    <label class="optionsItem">while considering a Unicode range with a minimum of </label>
    <input size="8" id="option13_1_1" type="number" value="20"></input><label> and a maximum value of </label>
    <input size="8" id="option13_1_2" type="number" value="65000"></input>
    <span class="infoIcon" onclick="toggleInfo('unicodeRange', '#option13_1_info')">info</span><br />
	<div id="option13_1_info"></div>
	
	<label class="optionsItem">insert randomly generated text with a character length of </label>
    <input size="8" id="option13_2" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('randomTextLength', '#option13_2_info')">info</span><br />
	<div id="option13_2_info"></div>
	
    <label class="optionsItem">at the index of </label>
	<input size="8" id="option13_3" type="number" value="0" min="0"></input>
    <span class="infoIcon" onclick="toggleInfo('index', '#option13_3_info')">info</span><br />
    <div id="option13_3_info"></div>`;
var insertRandomGenTextAtIndexEncode = function(elem) {
	var text = "";
	var minUnicode = parseInt(elemSelector("#option13_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option13_1_2").value);
    var textLength = parseInt(elemSelector("#option13_2").value);
    var index = parseInt(elemSelector("#option13_3").value);
    for (var x = 0; x < textLength; x+=1) {
	    text += getRandomChar(minUnicode, maxUnicode);
    }
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    updateAtIndex(cipherArray, index, text, "encode");
}
var insertRandomGenTextAtIndexDecode = function(elem) {
    var text = "";
	var minUnicode = parseInt(elemSelector("#option13_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option13_1_2").value);
    var textLength = parseInt(elemSelector("#option13_2").value);
    var index = parseInt(elemSelector("#option13_3").value);
    for (var x = 0; x < textLength; x+=1) {
	    text += getRandomChar(minUnicode, maxUnicode);
    }
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    updateAtIndex(textArray, index, text, "decode");
}

// ----------------------------
// sequence text partitions

var partitionalSequencerElem = `
    <label class="optionsItem">while considering the number of partitions </label>
    <input size="8" id="option14_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('partition', '#option14_1_info')">info</span><br />
    <div id="option14_1_info"></div>
	
	<label class="optionsItem">order text using a partitional index sequence of </label>
    <input size="15" id="option14_2" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('partitionSequence', '#option14_2_info')">info</span><br />
    <div id="option14_2_info"></div>`;
var partitionalSequencerEncode = function(elem) {
	var partitions = parseInt(elemSelector("#option14_1").value);
	var sequence = textToArray(elemSelector("#option14_2").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
	cipherArray = innerMergeList(reorderPartitions(cipherArray, partitions, sequence, "encode"));
}
var partitionalSequencerDecode = function(elem) {
    var partitions = parseInt(elemSelector("#option14_1").value);
	var sequence = textToArray(elemSelector("#option14_2").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
	textArray = innerMergeList(reorderPartitions(textArray, partitions, sequence, "decode"));
}

// ----------------------------
// move text subset to index

var moveTextToIndexElem = `
    <label class="optionsItem">while considering the starting index </label>
    <input size="8" id="option15_1" type="number" value="0" min="0"></input>
    <span class="infoIcon" onclick="toggleInfo('indexLimit', '#option15_1_info')">info</span><br />
    <div id="option15_1_info"></div>
	
    <label class="optionsItem">and the number of characters to get </label>
    <input size="8" id="option15_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSize', '#option15_2_info')">info</span><br />
    <div id="option15_2_info"></div>

	<label class="optionsItem">move the selected text to index </label>
    <input size="8" id="option15_3" type="number" value="0" min="0"></input>
    <span class="infoIcon" onclick="toggleInfo('indexLimit', '#option15_3_info')">info</span><br />
    <div id="option15_3_info"></div>`;
var moveTextToIndexEncode = function(elem) {
	var index = parseInt(elemSelector("#option15_1").value);
    var targetIndex = parseInt(elemSelector("#option15_3").value);
	var size = parseInt(elemSelector("#option15_2").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
	moveTextToIndex(cipherArray, index, targetIndex, size, "encode");
}
var moveTextToIndexDecode = function(elem) {
    var index = parseInt(elemSelector("#option15_1").value);
    var targetIndex = parseInt(elemSelector("#option15_3").value);
	var size = parseInt(elemSelector("#option15_2").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
	moveTextToIndex(textArray, index, targetIndex, size, "decode");
}

// ----------------------------
// shift text subset at starting index

var shiftSubsetTextElem = `
    <label class="optionsItem">while considering the starting index </label>
    <input size="8" id="option16_1" type="number" value="0" min="0"></input>
    <span class="infoIcon" onclick="toggleInfo('indexLimit', '#option16_1_info')">info</span><br />
    <div id="option16_1_info"></div>
	
    <label class="optionsItem">and the number of characters to get </label>
    <input size="8" id="option16_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSize', '#option16_2_info')">info</span><br />
    <div id="option16_2_info"></div>

	<label class="optionsItem">shift the text using a value of </label>
    <input size="8" id="option16_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option16_3_info')">info</span><br />
	<div id="option16_3_info"></div>`;
var shiftSubsetTextEncode = function(elem) {
	var index = parseInt(elemSelector("#option16_1").value);
    var size = parseInt(elemSelector("#option16_2").value);
    var shift = parseInt(elemSelector("#option16_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
        if (size > 0 && x >= index) {
            cipherArray[x] = String.fromCharCode(elem.value.charCodeAt(x) + shift);
            size -= 1;
        }
    }
}
var shiftSubsetTextDecode = function(elem) {
    var index = parseInt(elemSelector("#option16_1").value);
    var size = parseInt(elemSelector("#option16_2").value);
    var shift = parseInt(elemSelector("#option16_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
        if (size > 0 && x >= index) {
            textArray[x] = String.fromCharCode(elem.value.charCodeAt(x) - shift);
            size -= 1;
        }
    }
}

// ----------------------------
// multiply text subset at starting index

var multiplySubsetTextElem = `
    <label class="optionsItem">while considering the starting index </label>
    <input size="8" id="option17_1" type="number" value="0" min="0"></input>
    <span class="infoIcon" onclick="toggleInfo('indexLimit', '#option17_1_info')">info</span><br />
    <div id="option17_1_info"></div>
	
    <label class="optionsItem">and the number of characters to get </label>
    <input size="8" id="option17_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSize', '#option17_2_info')">info</span><br />
    <div id="option17_2_info"></div>

    <label class="optionsItem">shift text by multiple </label>
    <input size="8" id="option17_3" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option17_3_info')">info</span><br />
	<div id="option17_3_info"></div>`;
var multiplySubsetTextEncode = function(elem) {
	var index = parseInt(elemSelector("#option17_1").value);
    var size = parseInt(elemSelector("#option17_2").value);
    var multiple = parseInt(elemSelector("#option17_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
        if (size > 0 && x >= index) {
            cipherArray[x] = String.fromCharCode(elem.value.charCodeAt(x) * multiple);
            size -= 1;
        }
    }
}
var multiplySubsetTextDecode = function(elem) {
    var index = parseInt(elemSelector("#option17_1").value);
    var size = parseInt(elemSelector("#option17_2").value);
    var multiple = parseInt(elemSelector("#option17_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
        if (size > 0 && x >= index) {
            textArray[x] = String.fromCharCode(elem.value.charCodeAt(x) / multiple);
            size -= 1;
        }
    }
}

// ----------------------------
// shift text subsets at indices

var shiftSubsetsTextElem = `
    <label class="optionsItem">while considering the indices </label>
    <input size="8" id="option18_1" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('indexSequence', '#option18_1_info')">info</span><br />
    <div id="option18_1_info"></div>
	
    <label class="optionsItem">and the number of characters to get </label>
    <input size="8" id="option18_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSize', '#option18_2_info')">info</span><br />
    <div id="option18_2_info"></div>

	<label class="optionsItem">shift the text using a value of </label>
    <input size="8" id="option18_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option18_3_info')">info</span><br />
	<div id="option18_3_info"></div>`;
var shiftSubsetsTextEncode = function(elem) {
	var indices = textToArray(elemSelector("#option18_1").value);
    var shift = parseInt(elemSelector("#option18_3").value);
	for (var z = 0; z < elem.value.length; z += 1) {
        cipherArray[z] = elem.value[z];
    }
    for (var x = 0; x < indices.length; x += 1) {
        var index = indices[x];
        var size = parseInt(elemSelector("#option18_2").value);
        if (cipherArray[0] == undefined) { break; }
        for (var y = 0; y < cipherArray.length; y += 1) {
            if (size > 0 && y >= index) {
                cipherArray[y] = String.fromCharCode(cipherArray[y].charCodeAt(0) + shift);
                size -= 1;
            }
        }
    }
}
var shiftSubsetsTextDecode = function(elem) {
	var indices = textToArray(elemSelector("#option18_1").value);
    var shift = parseInt(elemSelector("#option18_3").value);
	for (var z = 0; z < elem.value.length; z += 1) {
        textArray[z] = elem.value[z];
    }
    for (var x = 0; x < indices.length; x += 1) {
        var index = indices[x];
        var size = parseInt(elemSelector("#option18_2").value);
        if (textArray[0] == undefined) { break; }
        for (var y = 0; y < textArray.length; y += 1) {
            if (size > 0 && y >= index) {
                textArray[y] = String.fromCharCode(textArray[y].charCodeAt(0) - shift);
                size -= 1;
            }
        }
    }
}

// ----------------------------
// shift text subsets at indices by multiple

var shiftSubsetsMultipleTextElem = `
    <label class="optionsItem">while considering the indices </label>
    <input size="8" id="option19_1" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('indexSequence', '#option19_1_info')">info</span><br />
    <div id="option19_1_info"></div>
	
    <label class="optionsItem">and the number of characters to get </label>
    <input size="8" id="option19_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSize', '#option19_2_info')">info</span><br />
    <div id="option19_2_info"></div>

	<label class="optionsItem">shift the text by a multiple of </label>
    <input size="8" id="option19_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option19_3_info')">info</span><br />
	<div id="option19_3_info"></div>`;
var shiftSubsetsMultipleTextEncode = function(elem) {
	var indices = textToArray(elemSelector("#option19_1").value);
    var shift = parseInt(elemSelector("#option19_3").value);
	for (var z = 0; z < elem.value.length; z += 1) {
        cipherArray[z] = elem.value[z];
    }
    for (var x = 0; x < indices.length; x += 1) {
        var index = indices[x];
        var size = parseInt(elemSelector("#option19_2").value);
        if (cipherArray[0] == undefined) { break; }
        for (var y = 0; y < cipherArray.length; y += 1) {
            if (size > 0 && y >= index) {
                cipherArray[y] = String.fromCharCode(cipherArray[y].charCodeAt(0) * shift);
                size -= 1;
            }
        }
    }
}
var shiftSubsetsMultipleTextDecode = function(elem) {
	var indices = textToArray(elemSelector("#option19_1").value);
    var shift = parseInt(elemSelector("#option19_3").value);
	for (var z = 0; z < elem.value.length; z += 1) {
        textArray[z] = elem.value[z];
    }
    for (var x = 0; x < indices.length; x += 1) {
        var index = indices[x];
        var size = parseInt(elemSelector("#option19_2").value);
        if (textArray[0] == undefined) { break; }
        for (var y = 0; y < textArray.length; y += 1) {
            if (size > 0 && y >= index) {
                textArray[y] = String.fromCharCode(textArray[y].charCodeAt(0) / shift);
                size -= 1;
            }
        }
    }
}

// ----------------------------
// sequence every set of x chars

var sequenceCharSetsElem = `
    <label class="optionsItem">while considering characters sets of size x, where x is </label>
    <input size="8" id="option20_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSizeSet', '#option20_1_info')">info</span><br />
    <div id="option20_1_info"></div>

	<label class="optionsItem">order the indexed sequence of each set as </label>
    <input size="8" id="option20_2" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('indexSequenceSet', '#option20_2_info')">info</span><br />
    <div id="option20_2_info"></div>`;
var sequenceCharSetsEncode = function(elem) {
	var size = parseInt(elemSelector("#option20_1").value);
    var sequence = textToArray(elemSelector("#option20_2").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    var charSets = setOfChars(cipherArray, size);
    for (var y = 0; y < charSets.length; y += 1) {
        charSets[y] = sequenceList(charSets[y], sequence, "encode");
    }
    cipherArray = innerMergeList(charSets);
}
var sequenceCharSetsDecode = function(elem) {
	var size = parseInt(elemSelector("#option20_1").value);
    var sequence = textToArray(elemSelector("#option20_2").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    var charSets = setOfChars(textArray, size);
    for (var y = 0; y < charSets.length; y += 1) {
        charSets[y] = sequenceList(charSets[y], sequence, "decode");
    }
    textArray = innerMergeList(charSets);
}

// ----------------------------
// shift by step sequence

var shiftStepSequenceElem = `
	<label class="optionsItem">while considering the step sequence </label>
    <input size="8" id="option21_1" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('stepSequence', '#option21_1_info')">info</span><br />
    <div id="option21_1_info"></div>
    
    <label class="optionsItem">shift the step sequence characters by number </label>
    <input size="8" id="option21_2" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option21_2_info')">info</span><br />
	<div id="option21_2_info"></div>`;
var shiftStepSequenceEncode = function(elem) {
	var sequence = textToArray(elemSelector("#option21_1").value);
    var shift = parseInt(elemSelector("#option21_2").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    var i = -1;
    var loopCount = 0;
    var maxLoops = Math.ceil(cipherArray.length / sequence.length);
    while (i < cipherArray.length && loopCount < maxLoops && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > cipherArray.length-1 || sequence[x] <= 0) { return; }
            cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) + shift);
        }
        loopCount += 1;
    }
}
var shiftStepSequenceDecode = function(elem) {
	var sequence = textToArray(elemSelector("#option21_1").value);
    var shift = parseInt(elemSelector("#option21_2").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    var i = -1;
    var loopCount = 0;
    var maxLoops = Math.ceil(textArray.length / sequence.length);
    while (i < textArray.length && loopCount < maxLoops && sequence.length > 0 && textArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > textArray.length-1 || sequence[x] <= 0) { return; }
            textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) - shift);
        }
        loopCount += 1;
    }
}

// ----------------------------
// shift multiply by step sequence

var shiftMultiplyStepSequenceElem = `
	<label class="optionsItem">while considering the step sequence </label>
    <input size="8" id="option22_1" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('stepSequence', '#option22_1_info')">info</span><br />
    <div id="option22_1_info"></div>
    
    <label class="optionsItem">shift the step sequence characters by multiple </label>
    <input size="8" id="option22_2" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option22_2_info')">info</span><br />
	<div id="option22_2_info"></div>`;
var shiftMultiplyStepSequenceEncode = function(elem) {
	var sequence = textToArray(elemSelector("#option22_1").value);
    var shift = parseInt(elemSelector("#option22_2").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    var i = -1;
    var loopCount = 0;
    var maxLoops = Math.ceil(cipherArray.length / sequence.length);
    while (i < cipherArray.length && loopCount < maxLoops && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > cipherArray.length-1 || sequence[x] <= 0) { return; }
            cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) * shift);
        }
        loopCount += 1;
    }
}
var shiftMultiplyStepSequenceDecode = function(elem) {
	var sequence = textToArray(elemSelector("#option22_1").value);
    var shift = parseInt(elemSelector("#option22_2").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    var i = -1;
    var loopCount = 0;
    var maxLoops = Math.ceil(textArray.length / sequence.length);
    while (i < textArray.length && loopCount < maxLoops && sequence.length > 0 && textArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > textArray.length-1 || sequence[x] <= 0) { return; }
            textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) / shift);
        }
        loopCount += 1;
    }
}

// ----------------------------
// insert randomized text using step sequence

var insertRandomGenTextAtStepSequenceElem = `
    <label class="optionsItem">while considering a Unicode range with a minimum of </label>
    <input size="8" id="option23_1_1" type="number" value="20"></input><label> and a maximum value of </label>
    <input size="8" id="option23_1_2" type="number" value="65000"></input>
    <span class="infoIcon" onclick="toggleInfo('unicodeRange', '#option23_1_info')">info</span><br />
	<div id="option23_1_info"></div>
	
	<label class="optionsItem">insert randomly generated text with a character length of </label>
    <input size="8" id="option23_2" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('randomTextLength', '#option23_2_info')">info</span><br />
	<div id="option23_2_info"></div>
	
    <label class="optionsItem">for indices with the step sequence </label>
    <input size="8" id="option23_3" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('stepSequence', '#option23_3_info')">info</span><br />
    <div id="option23_3_info"></div>`;
var insertRandomGenTextAtStepSequenceEncode = function(elem) {
	var minUnicode = parseInt(elemSelector("#option23_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option23_1_2").value);
    var textLength = parseInt(elemSelector("#option23_2").value);
    var sequence = textToArray(elemSelector("#option23_3").value);
    var i = -1;
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    while (i < cipherArray.length && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > cipherArray.length-1 || sequence[x] <= 0) { return; }
            updateAtIndex(cipherArray, i, generateRandomText(textLength, minUnicode, maxUnicode), "encode");
            i += textLength;
        }
    }
}
var insertRandomGenTextAtStepSequenceDecode = function(elem) {
    var minUnicode = parseInt(elemSelector("#option23_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option23_1_2").value);
    var textLength = parseInt(elemSelector("#option23_2").value);
    var sequence = textToArray(elemSelector("#option23_3").value);
    var i = -1;
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    while (i < textArray.length && sequence.length > 0  && textArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > textArray.length-1 || sequence[x] <= 0) { return; }
            updateAtIndex(textArray, i, generateRandomText(textLength, minUnicode, maxUnicode), "decode");
        }
    }
}

// ----------------------------
// insert variable-sized, randomized text using step sequence

var insertVarRandomTextAtStepSequenceElem = `
    <label class="optionsItem">while considering a Unicode range with a minimum of </label>
    <input size="8" id="option24_1_1" type="number" value="20"></input><label> and a maximum value of </label>
    <input size="8" id="option24_1_2" type="number" value="65000"></input>
    <span class="infoIcon" onclick="toggleInfo('unicodeRange', '#option24_1_info')">info</span><br />
	<div id="option24_1_info"></div>
	
	<label class="optionsItem">insert randomly generated text with variable character lengths </label>
    <input size="8" id="option24_2" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('varTextLengths', '#option24_2_info')">info</span><br />
	<div id="option24_2_info"></div>
	
    <label class="optionsItem">for indices with the step sequence </label>
    <input size="8" id="option24_3" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('stepSequence', '#option24_3_info')">info</span><br />
    <div id="option24_3_info"></div>`;
var insertVarRandomTextAtStepSequenceEncode = function(elem) {
	var minUnicode = parseInt(elemSelector("#option24_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option24_1_2").value);
    var textLengths = textToArray(elemSelector("#option24_2").value);
    var sequence = textToArray(elemSelector("#option24_3").value);
    var i = -1;
    var j = 0;
    for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    while (i < cipherArray.length && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > cipherArray.length-1 || sequence[x] <= 0) { return; }
            updateAtIndex(cipherArray, i, generateRandomText(textLengths[j], minUnicode, maxUnicode), "encode");
            i += textLengths[j];
            if (j === textLengths.length-1) { j = 0; }
            else { j += 1; }
        }
    }
}
var insertVarRandomTextAtStepSequenceDecode = function(elem) {
	var minUnicode = parseInt(elemSelector("#option24_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option24_1_2").value);
    var textLengths = textToArray(elemSelector("#option24_2").value);
    var sequence = textToArray(elemSelector("#option24_3").value);
    var i = -1;
    var j = 0;
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    while (i < textArray.length && sequence.length > 0  && textArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > textArray.length-1 || sequence[x] <= 0) { return; }
            updateAtIndex(textArray, i, generateRandomText(textLengths[j], minUnicode, maxUnicode), "decode");
            if (j === textLengths.length-1) { j = 0; }
            else { j += 1; }
        }
    }
}

// ----------------------------
// shift text subset using step sequence

var shiftTextSubsetSequenceElem = `
    <label class="optionsItem">while considering text subsets with a character length of </label>
    <input size="8" id="option25_1" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSizeSet', '#option25_1_info')">info</span><br />
	<div id="option25_1_info"></div>

    <label class="optionsItem">starting with indices using the step sequence </label>
    <input size="8" id="option25_2" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('stepSequence', '#option25_2_info')">info</span><br />
    <div id="option25_2_info"></div>
	
	<label class="optionsItem">shift character subsets by number </label>
    <input size="8" id="option25_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option25_3_info')">info</span><br />
	<div id="option25_3_info"></div>`;
var shiftTextSubsetSequenceEncode = function(elem) {
	var size = parseInt(elemSelector("#option25_1").value);
	var sequence = textToArray(elemSelector("#option25_2").value);
	var shift = parseInt(elemSelector("#option25_3").value);
    var i = -1;
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    while (i < cipherArray.length && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > cipherArray.length-1 || sequence[x] <= 0) { return; }
            shiftTextSubset(cipherArray, i, size, shift);
        }
    }
}
var shiftTextSubsetSequenceDecode = function(elem) {
	var size = parseInt(elemSelector("#option25_1").value);
	var sequence = textToArray(elemSelector("#option25_2").value);
	var shift = parseInt(elemSelector("#option25_3").value);
    var i = -1;
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    while (i < textArray.length && sequence.length > 0  && textArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > textArray.length-1 || sequence[x] <= 0) { return; }
            shiftTextSubset(textArray, i, size, -shift);
        }
    }
}

// ----------------------------
// shift text subset by multiple using step sequence

var shiftTextSubsetSequenceByMultipleElem = `
    <label class="optionsItem">while considering text subsets with a character length of </label>
    <input size="8" id="option26_1" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('charSizeSet', '#option26_1_info')">info</span><br />
	<div id="option26_1_info"></div>

    <label class="optionsItem">starting with indices using the step sequence </label>
    <input size="8" id="option26_2" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('stepSequence', '#option26_2_info')">info</span><br />
    <div id="option26_2_info"></div>
	
	<label class="optionsItem">shift character subsets by number </label>
    <input size="8" id="option26_3" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option26_3_info')">info</span><br />
	<div id="option26_3_info"></div>`;
var shiftTextSubsetSequenceByMultipleEncode = function(elem) {
	var size = parseInt(elemSelector("#option26_1").value);
	var sequence = textToArray(elemSelector("#option26_2").value);
	var shift = parseInt(elemSelector("#option26_3").value);
    var i = -1;
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    while (i < cipherArray.length && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > cipherArray.length-1 || sequence[x] <= 0) { return; }
            shiftTextSubsetByMultiple(cipherArray, i, size, shift, "encode");
        }
    }
}
var shiftTextSubsetSequenceByMultipleDecode = function(elem) {
	var size = parseInt(elemSelector("#option26_1").value);
	var sequence = textToArray(elemSelector("#option26_2").value);
	var shift = parseInt(elemSelector("#option26_3").value);
    var i = -1;
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    while (i < textArray.length && sequence.length > 0  && textArray[0] != undefined) {
        for (var x = 0; x < sequence.length; x += 1) {
            i += sequence[x];
            if (i > textArray.length-1 || sequence[x] <= 0) { return; }
            shiftTextSubsetByMultiple(textArray, i, size, shift, "decode");
        }
    }
}

// ----------------------------
// shift by partition using multiple

var charShiftPartitionsByMultipleElem = `
    <label class="optionsItem">with a text shift multiple of </label>
    <input size="8" id="option27_1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option27_1_info')">info</span><br />
	<div id="option27_1_info"></div>
	
	<label class="optionsItem">and considering the number of partitions </label>
    <input size="8" id="option27_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('partition', '#option27_2_info')">info</span><br />
    <div id="option27_2_info"></div>

    <label class="optionsItem">shift the partitional indices of </label>
	<input size="15" id="option27_3" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('partitionList', '#option27_3_info')">info</span><br />
    <div id="option27_3_info"></div>`;
var charShiftPartitionsByMultipleEncode = function(elem) {
    var shift = parseInt(elemSelector("#option27_1").value);
	var partitions = parseInt(elemSelector("#option27_2").value);
	var selectedPartitions = textToArray(elemSelector("#option27_3").value);
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    var partitionedList = partitionList(cipherArray, partitions);
	if (cipherArray[0] == undefined) { return; }
	for (sp = 0; sp < selectedPartitions.length; sp += 1) {
		shiftArrayUnicodeByMultiple(partitionedList[selectedPartitions[sp]-1], shift, "encode");
	}
    cipherArray = innerMergeList(partitionedList);
}
var charShiftPartitionsByMultipleDecode = function(elem) {
    var shift = parseInt(elemSelector("#option27_1").value);
	var partitions = parseInt(elemSelector("#option27_2").value);
	var selectedPartitions = textToArray(elemSelector("#option27_3").value);
    for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    var partitionedList = partitionList(textArray, partitions);
	if (textArray[0] == undefined) { return; }
    for (sp = 0; sp < selectedPartitions.length; sp += 1) {
		shiftArrayUnicodeByMultiple(partitionedList[selectedPartitions[sp]-1], shift, "decode");
	}
    textArray = innerMergeList(partitionedList);
}

// ----------------------------
// swap character pairs by step sequence

var swapCharPairsBySequenceElem = `
    <label class="optionsItem">while considering character pairs using the sequence </label>
	<input size="15" id="option28_1" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('charPairSequence', '#option28_1_info')">info</span><br />
    <div id="option28_1_info"></div>
    
    <label class="optionsItem">swap the character pairs </label>
    <span class="infoIcon" onclick="toggleInfo('charPairSwap', '#option28_2_info')">info</span><br />
    <div id="option28_2_info"></div>`;
var swapCharPairsBySequenceEncode = function(elem) {
	var sequence = getList2(textToArray(elemSelector("#option28_1").value));
    var charPairs = setOfChars(sequence, 2);
    var i = 0;
	for (var x = 0; x < elem.value.length; x += 1) {
        cipherArray[x] = elem.value[x];
    }
    while (i < cipherArray.length && sequence.length > 0  && cipherArray[0] != undefined) {
        for (var x = 0; x < charPairs.length; x += 1) {
			if (i+charPairs[x][0]+charPairs[x][1] > cipherArray.length) { return; }
            swapItems(cipherArray, i+charPairs[x][0], i+charPairs[x][0]+charPairs[x][1]);
            i = i + charPairs[x][0] + charPairs[x][1];
        }
    }
}
var swapCharPairsBySequenceDecode = function(elem) {
    var sequence = getList2(textToArray(elemSelector("#option28_1").value));
    var charPairs = setOfChars(sequence, 2);
    var i = 0;
	for (var x = 0; x < elem.value.length; x += 1) {
        textArray[x] = elem.value[x];
    }
    while (i < textArray.length && sequence.length > 0  && textArray[0] != undefined) {
        for (var x = 0; x < charPairs.length; x += 1) {
			if (i+charPairs[x][0]+charPairs[x][1] > textArray.length) { return; }
            swapItems(textArray, i+charPairs[x][0], i+charPairs[x][0]+charPairs[x][1]);
            i = i + charPairs[x][0] + charPairs[x][1];
        }
    }
}

// ----------------------------
// insert distributed text at indices

var insertDistTextIndicesElem = `
	<label class="optionsItem">insert the text </label>
    <textarea id="option29_1" value=""></textarea>
    <span class="infoIcon" onclick="toggleInfo('text', '#option29_1_info')">info</span><br />
	<div id="option29_1_info"></div>

    <label class="optionsItem">by distributing it at the indices of </label>
    <input size="8" id="option29_2" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('indices', '#option29_2_info')">info</span><br />
    <div id="option29_2_info"></div>
	
	<hr />

    <label class="optionsItem">(optional) decode with a known text length of </label>
	<input size="8" id="option29_3" type="number"></input>
    <span class="infoIcon" onclick="toggleInfo('textLengthOptional', '#option29_3_info')">info</span><br />
    <div id="option29_3_info"></div>`;
var insertDistTextIndicesEncode = function(elem) {
	var text = elemSelector("#option29_1").value;
	var indices = textToArray(elemSelector("#option29_2").value);
	var partitionedText = partitionList(text.split(""), indices.length);
	for (var x = 0; x < elem.value.length; x+=1) {
        cipherArray[x] = elem.value[x];
    }
	for (var y = indices.length-1; y > -1; y-=1) {
		updateAtIndex(cipherArray, indices[y], partitionedText[y], "encode");
	}
}
var insertDistTextIndicesDecode = function(elem) {
    var text = elemSelector("#option29_1").value;
	var indices = textToArray(elemSelector("#option29_2").value);
	var partitionedText = partitionList(text.split(""), indices.length);
	var textLengthDecode = parseInt(elemSelector("#option29_3").value);
    for (var x = 0; x < elem.value.length; x+=1) {
        textArray[x] = elem.value[x];
    }
	if (isNaN(textLengthDecode)) {
        for (var y = 0; y < indices.length; y+=1) {
			updateAtIndex(textArray, indices[y], partitionedText[y], "decode");
		}
    } else {
		for (var y = 0; y < indices.length; y+=1) {
			textArray.splice(indices[y], getNumberItemsInPartitions(textLengthDecode, indices.length)[y]);
		}
    }
}

// ----------------------------
// insert randomized distributed text at indices

var insertRandomDistTextIndicesElem = `
	<label class="optionsItem">while considering a Unicode range with a minimum of </label>
    <input size="8" id="option30_1_1" type="number" value="20"></input><label> and a maximum value of </label>
    <input size="8" id="option30_1_2" type="number" value="65000"></input>
    <span class="infoIcon" onclick="toggleInfo('unicodeRange', '#option30_1_info')">info</span><br />
	<div id="option30_1_info"></div>
	
	<label class="optionsItem">insert randomly generated text with a character length of </label>
    <input size="8" id="option30_2" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('randomTextLength', '#option30_2_info')">info</span><br />
	<div id="option30_2_info"></div>

    <label class="optionsItem">by distributing it at the indices of </label>
    <input size="8" id="option30_3" type="text"></input>
    <span class="infoIcon" onclick="toggleInfo('indices', '#option30_3_info')">info</span><br />
    <div id="option30_3_info"></div>
	`;
var insertRandomDistTextIndicesEncode = function(elem) {
    var minUnicode = parseInt(elemSelector("#option30_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option30_1_2").value);
	var size = parseInt(elemSelector("#option30_2").value);
	var indices = textToArray(elemSelector("#option30_3").value);
	var partitionedText = partitionList(generateRandomText(size, minUnicode, maxUnicode).split(""), indices.length);
	for (var x = 0; x < elem.value.length; x+=1) {
        cipherArray[x] = elem.value[x];
    }
	for (var y = indices.length-1; y > -1; y-=1) {
		updateAtIndex(cipherArray, indices[y], partitionedText[y], "encode");
	}
}
var insertRandomDistTextIndicesDecode = function(elem) {
    var minUnicode = parseInt(elemSelector("#option30_1_1").value);
	var maxUnicode = parseInt(elemSelector("#option30_1_2").value);
	var size = parseInt(elemSelector("#option30_2").value);
	var indices = textToArray(elemSelector("#option30_3").value);
	var partitionedText = partitionList(generateRandomText(size, minUnicode, maxUnicode).split(""), indices.length);
	for (var x = 0; x < elem.value.length; x+=1) {
        textArray[x] = elem.value[x];
    }
	for (var y = 0; y < indices.length; y+=1) {
		updateAtIndex(textArray, indices[y], partitionedText[y], "decode");
	}
}

// -------------------------
// ----- ciphers setup -----
// -------------------------

var infoMapping = {
    "shift": "<small class='note'>shifts the character's Unicode value by a set integer</small><br /><br />",
    "multiple": "<small class='note'>multiplies the character Unicode by a multiple<br />for encoding and decoding, the multiple should be non-zero;<br />note: as Unicode values are up to 65535, this cipher is recommended to be used with low-value Unicode characters and multiples<br />tip: a value of -1 can be used for any text since all character values will be within the Unicode range</small><br /><br />",
    "reverse": "<small class='note'>reverses the ordering of the characters; reversing is applied as text is entered into the text or cipher fields (this also includes re-copying and re-pasting text back to the fields in case the fields have already been populated)<br /><br />",
    "charPairSwap": "<small class='note'>swaps the positions of the character pairs; swapping is applied as text is entered into the text or cipher fields (this also includes re-copying and re-pasting text back to the fields in case the fields have already been populated)<br /><br />",
    "nthChar": "<small class='note'>encodes / decodes the nth characters of text<br />for encoding and decoding, n should be an integer greater than or equal to 1</small><br /><br />",
    "offset": "<small class='note'>a number offset from n; negative integers apply to characters offset to the left of each nth character, positive integers apply to characters offset to the right of each nth character</small><br /><br />",
    "swapOffset": "<small class='note'>a number offset from n; negative integers apply to characters offset to the left of each nth character, positive integers apply to characters offset to the right of each nth character;<br />for accurate encoding and decoding, the absolute value of the offset should be less than n</small><br /><br />",
    "nthOffset": "<small class='note'>a number offset from n; negative integers apply to characters offset to the left of each nth character, positive integers apply to characters offset to the right of each nth character</small><br /><br />",
    "swapOffsetOffset": "<small class='note'>a number offset relative to the nth offset; negative integers apply to characters offset to the left of each nth offset character, positive integers apply to characters offset to the right of each nth offset character;<br />for accurate encoding and decoding, the absolute value of this offset should be less than n</small><br /><br />",
    "partition": "<small class='note'>the number of partitions; if a text input cannot be partitioned evenly, the remaining text input will be distributed within the partitions<br />for encoding and decoding, this number should be greater than zero and less than the number of input characters</small><br /><br />",
    "partitionList": "<small class='note'>a comma separated list of partition indices; specifies the partitions to encode / decode (indices start at 1); <br />for accurate encoding / decoding, the numbers should be greater than zero and less than or equal to the number of partitions.<br />example: in an input with 5 partitions, the first, second, and fifth partitions can be selected with an input value of: 1,2,5</small><br /><br />",
    "partitionSequence": "<small class='note'>a comma separated list of partition indices; specifies the sequence to order the partitions (indices start at 1); <br />for accurate encoding / decoding, the numbers should be greater than zero and less than or equal to the number of partitions; additionally all possible, unique indices should be included<br />example: in an input with 5 partitions, one possible sequence can be an input value of: 2,1,4,5,3</small><br /><br />",
    "text": "<small class='note'>text, a sequence of characters</small><br /><br />",
    "index": "<small class='note'>a non-negative integer that is less than or equal to the text length</small><br /><br />",
	"indices": "<small class='note'>a comma separated list of indices; an index should be a non-negative integer that is within the range of text input (e.g. a value of 0,5,10,25 will specify the indices of 0, 5, 10, and 25)</small><br /><br />",
    "indexLimit": "<small class='note'>a non-negative integer that is less than or equal to (the text length minus the number of characters to get)</small><br /><br />",
    "indexSequence": "<small class='note'>a comma separated list of indices; an index should be a non-negative integer that is less than or equal to (the text length minus the number of characters to get)<br />intersecting text subsets are valid; the shift behavior will be applied based on the number of occurances a character is included across all subsets</small><br /><br />",
	"indexSequenceSet": "<small class='note'>a comma separated list of indices to describe the sequence of each element in a set; each index should be used once<br />example: in sets with 4 characters, one possible sequence can be an input value of: 4,3,1,2</small><br /><br />",
    "randomTextLength": "<small class='note'>the length of text to randomly generate; the number should be greater than zero</small><br /><br />",
    "charSize": "<small class='note'>the number of characters to get starting from the index; the number should be greater than zero</small><br /><br />",
	"charSizeSet": "<small class='note'>the number of characters for each set of text; the number should be greater than zero</small><br /><br />",
    "stepSequence": "<small class='note'>a comma separated list of integers greater than 0 which describes the step sequence of each character index to apply the cipher; <br />example: in a step sequnce of 1,1,4,8,5 the cipher will be applied to the first character index, then the following character index, then the fourth following character index, then the eighth following character index, and then the fifth following character index; the process repeats until outside of the text range</small><br /><br />",
	"unicodeRange": "<small class='note'>two numbers that represent the range of Unicode character values to generate from; default values are a minimum of 20 and a maximum of 65000.<br />if the minimum or maximum field values are blank or not a number, their default values are assumed<br /><br />",
    "varTextLengths": "<small class='note'>a comma separated list of integers greater than 0 which describes the length of each character subset to generate; <br />example: with a value of 3,4,6 the cipher will generate text lengths of 3, then 4, then 6, and the process will repeat until outside the text range</small><br /><br />",
    "charPairSequence": "<small class='note'>a comma separated list of integers greater than 0 which describes the step sequence of each character pair to swap (the list must have an even number of items in order to form pairs, otherwise the last item will be ignored); <br />example: in a step sequnce of 1,1,2,4,1,5 the first character and following character will be swapped (1,1), then the second following and fourth following characters will be swapped (2,4), and then the first and fifth following characters (1,5) will be swapped; the process repeats until outside of the text range",
    "textLengthOptional": "<small class='note'>(optional field - only used in decoding) if the inserted text length is known (the difference between text length and cipher text length fields), <br />you can enter the number here for decoding rather than having to input the original inserted text (for convenience)</small><br /><br />"
};
var ciphers = {
    "(1) shift each character by number": [charShiftElem, charShiftEncode, charShiftDecode],
    "(2) reverse the text": [reverseElem, reverseEncode, reverseDecode],
    "(3) reverse text within each partition": [reversePartitionItemsElem, reversePartitionItemsEncode, reversePartitionItemsDecode],
    "(4) swap nth character with offset": [charSwapNthOffsetElem, charSwapNthOffsetEncode, charSwapNthOffsetDecode],
    "(5) swap offset nth character with offset": [charSwapNthOffsetOffsetElem, charSwapNthOffsetOffsetEncode, charSwapNthOffsetOffsetDecode],
    "(6) swap character pairs using step sequence": [swapCharPairsBySequenceElem, swapCharPairsBySequenceEncode, swapCharPairsBySequenceDecode],
    "(7) move text subset to index": [moveTextToIndexElem, moveTextToIndexEncode, moveTextToIndexDecode],
    "(8) sequence by partition": [partitionalSequencerElem, partitionalSequencerEncode, partitionalSequencerDecode],
    "(9) sequence by every set of x characters": [sequenceCharSetsElem, sequenceCharSetsEncode, sequenceCharSetsDecode],
    "(10) insert text at index": [insertTextAtIndexElem, insertTextAtIndexEncode, insertTextAtIndexDecode],
	"(11) insert distributed text at indices": [insertDistTextIndicesElem, insertDistTextIndicesEncode, insertDistTextIndicesDecode],
    "(12) insert randomized text at index": [insertRandomGenTextAtIndexElem, insertRandomGenTextAtIndexEncode, insertRandomGenTextAtIndexDecode],
	"(13) insert randomized distributed text at indices": [insertRandomDistTextIndicesElem, insertRandomDistTextIndicesEncode, insertRandomDistTextIndicesDecode],
    "(14) insert randomized text using step sequence": [insertRandomGenTextAtStepSequenceElem, insertRandomGenTextAtStepSequenceEncode, insertRandomGenTextAtStepSequenceDecode],
    "(15) insert variable-sized, randomized text using step sequence": [insertVarRandomTextAtStepSequenceElem, insertVarRandomTextAtStepSequenceEncode, insertVarRandomTextAtStepSequenceDecode],
    "(16) shift text subset": [shiftSubsetTextElem, shiftSubsetTextEncode, shiftSubsetTextDecode],
    "(17) shift multiple text subsets": [shiftSubsetsTextElem, shiftSubsetsTextEncode, shiftSubsetsTextDecode],
	"(18) shift nth character by number": [charShiftNthElem, charShiftNthEncode, charShiftNthDecode],
    "(19) shift offset nth character by number": [charShiftOffsetNthElem,charShiftOffsetNthEncode, charShiftOffsetNthDecode],
    "(20) shift step sequence characters": [shiftStepSequenceElem, shiftStepSequenceEncode, shiftStepSequenceDecode],
    "(21) shift text subsets using step sequence": [shiftTextSubsetSequenceElem, shiftTextSubsetSequenceEncode, shiftTextSubsetSequenceDecode],
    "(22) shift characters by partition indices": [charShiftPartitionsElem, charShiftPartitionsEncode, charShiftPartitionsDecode],
    "(23) shift each character by multiple": [charShiftMultipleElem, charShiftMultipleEncode, charShiftMultipleDecode],
    "(24) shift subset of text by multiple": [multiplySubsetTextElem, multiplySubsetTextEncode, multiplySubsetTextDecode],
	"(25) shift multiple subsets of text by multiple": [shiftSubsetsMultipleTextElem, shiftSubsetsMultipleTextEncode, shiftSubsetsMultipleTextDecode],
	"(26) shift nth character by multiple": [charShiftNthMultipleElem, charShiftNthMultipleEncode, charShiftNthMultipleDecode],
	"(27) shift offset nth character by multiple": [charShiftOffsetNthMultipleElem,charShiftOffsetNthMultipleEncode, charShiftOffsetNthMultipleDecode],
	"(28) shift step sequence characters by multiple": [shiftMultiplyStepSequenceElem, shiftMultiplyStepSequenceEncode, shiftMultiplyStepSequenceDecode],
	"(29) shift text subsets by multiple using step sequence": [shiftTextSubsetSequenceByMultipleElem, shiftTextSubsetSequenceByMultipleEncode, shiftTextSubsetSequenceByMultipleDecode],
	"(30) shift characters by partition indices by multiple": [charShiftPartitionsByMultipleElem, charShiftPartitionsByMultipleEncode, charShiftPartitionsByMultipleDecode],
};
var setCipher = function(elem) { 
    elemSelector("#optionsCipher").innerHTML = ciphers[elem.value][0];
    setEncode = ciphers[elem.value][1];
    setDecode = ciphers[elem.value][2];
}
