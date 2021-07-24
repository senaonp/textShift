// --------------------------------
// charShift

var charShiftElem = `
    <label class="optionsItem">shift text by number </label>
    <input id="option1" type="number" value="0"></input>
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
    <input id="option2" type="number" value="1"></input>
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
    <label class="optionsItem">reverse text  </label>
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
    <input id="option4_1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option4_1_info')">info</span><br />
	<div id="option4_1_info"></div>
    
    <label class="optionsItem">for every nth character where n is </label>
    <input id="option4_2" type="number" value="1" min="1"></input>
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
	<input id="option5_1" type="number" value="1"></input>
	<span class="infoIcon" onclick="toggleInfo('multiple', '#option5_1_info')">info</span><br />
	<div id="option5_1_info"></div>
	
    <label class="optionsItem">for every nth character where n is </label>
    <input id="option5_2" type="number" value="1" min="1"></input>
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
    <input id="option6_1" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('shift', '#option6_1_info')">info</span><br />
	<div id="option6_1_info"></div>
    
    <label class="optionsItem">for every nth character where n is </label>
    <input id="option6_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option6_2_info')">info</span><br />
	<div id="option6_2_info"></div>
    
    <label class="optionsItem">with an offset of </label>
    <input id="option6_3" type="number" value="0"></input>
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
    <input id="option7_1" type="number" value="1"></input>
    <span class="infoIcon" onclick="toggleInfo('multiple', '#option7_1_info')">info</span><br />
    <div id="option7_1_info"></div>
    
    <label class="optionsItem">for every nth character where n is </label>
    <input id="option7_2" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option7_2_info')">info</span><br />
	<div id="option7_2_info"></div>
    
    <label class="optionsItem">with an offset of </label>
    <input id="option7_3" type="number" value="0"></input>
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
    <input id="option8_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option8_1_info')">info</span><br />
	<div id="option8_1_info"></div>

    <label class="optionsItem">swap at an offset of </label>
    <input id="option8_2" type="number" value="0"></input>
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
    <input id="option9_1" type="number" value="1" min="1"></input>
    <span class="infoIcon" onclick="toggleInfo('nthChar', '#option9_1_info')">info</span><br />
	<div id="option9_1_info"></div>

    <label class="optionsItem">with an offset of </label>
    <input id="option9_2" type="number" value="0"></input>
    <span class="infoIcon" onclick="toggleInfo('offset', '#option9_2_info')">info</span><br />
	<div id="option9_2_info"></div>

    <label class="optionsItem">swap at a relative offset of </label>
    <input id="option9_3" type="number" value="0"></input>
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

// -------------------------
// ----- ciphers setup -----
// -------------------------

var infoMapping = {
	"shift": "<small class='note'>shifts the character's Unicode value by a set integer</small><br /><br />",
    "multiple": "<small class='note'>multiplies the character Unicode by a multiple<br />for encoding and decoding, the multiple should be non-zero; for accurate decoding, cipher text Unicode value(s) should be divisible by a factor since this cipher encodes by a multiple</small><br /><br />",
    "reverse": "<small class='note'>reverses the ordering of the characters; reversing is applied as text is entered into the text or cipher fields (this also includes re-copying and re-pasting text back to the fields in case the fields have already been populated)<br /><br />",
	"nthChar": "<small class='note'>encodes / decodes the nth characters of text<br />for encoding and decoding, n should be an integer greater than or equal to 1</small><br /><br />",
    "offset": "<small class='note'>a number offset from n; negative integers apply to characters offset to the left of each nth character, positive integers apply to characters offset to the right of each nth character</small><br /><br />",
    "swapOffset": "<small class='note'>a number offset from n; negative integers apply to characters offset to the left of each nth character, positive integers apply to characters offset to the right of each nth character;<br />for accurate encoding and decoding, the absolute value of the offset should be less than n</small><br /><br />",
    "swapOffsetOffset": "<small class='note'>a number offset relative to the nth offset; negative integers apply to characters offset to the left of each nth character, positive integers apply to characters offset to the right of each nth character;<br />for accurate encoding and decoding, the absolute value of the offset should be less than n</small><br /><br />"
}; // template "<small class='note'></small><br /><br />"
var ciphers = {
    "shift each character by number": [charShiftElem, charShiftEncode, charShiftDecode],
	"shift each character by multiple": [charShiftMultipleElem, charShiftMultipleEncode, charShiftMultipleDecode],
    "reverse the text": [reverseElem, reverseEncode, reverseDecode],
    "swap nth character with offset": [charSwapNthOffsetElem, charSwapNthOffsetEncode, charSwapNthOffsetDecode],
    "shift nth character by number": [charShiftNthElem, charShiftNthEncode, charShiftNthDecode],
	"shift nth character by multiple": [charShiftNthMultipleElem, charShiftNthMultipleEncode, charShiftNthMultipleDecode],
    "shift offset nth character by number": [charShiftOffsetNthElem,charShiftOffsetNthEncode, charShiftOffsetNthDecode],
    "shift offset nth character by multiple": [charShiftOffsetNthMultipleElem,charShiftOffsetNthMultipleEncode, charShiftOffsetNthMultipleDecode],
    "swap nth offset character with offset": [charSwapNthOffsetOffsetElem, charSwapNthOffsetOffsetEncode, charSwapNthOffsetOffsetDecode],
};
var setCipher = function(elem) { 
    elemSelector("#optionsCipher").innerHTML = ciphers[elem.value][0];
    setEncode = ciphers[elem.value][1];
    setDecode = ciphers[elem.value][2];
}