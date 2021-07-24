// ----- charShift -----

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

// cipher elements

var infoMapping = {
	"shift": "<small class='note'>shifts the character's Unicode value by a set integer</small><br /><br />",
    "multiple": "<small class='note'>multiplies the character Unicode by a multiple<br />for encoding and decoding, the multiple should be non-zero; for accurate decoding, cipher text Unicode value(s) should be divisible by a factor since this cipher encodes by a multiple</small><br /><br />",
    "reverse": "<small class='note'>reverses the ordering of the characters; reversing is applied as text is entered into the text or cipher fields (this also includes re-copying and re-pasting text back to the fields in case the fields have already been populated)<br /><br />",
	"nthChar": "<small class='note'>encodes / decodes the nth characters of text<br />for encoding and decoding, n should be an integer greater than or equal to 1</small><br /><br />",
}; // template "<small class='note'></small><br /><br />"
var ciphers = {
    "shift each character by number": [charShiftElem, charShiftEncode, charShiftDecode],
	"shift each character by multiple": [charShiftMultipleElem, charShiftMultipleEncode, charShiftMultipleDecode],
    "reverse the text": [reverseElem, reverseEncode, reverseDecode],
    "shift every nth character by number": [charShiftNthElem, charShiftNthEncode, charShiftNthDecode],
	"shift every nth character by multiple": [charShiftNthMultipleElem, charShiftNthMultipleEncode, charShiftNthMultipleDecode],
};
var setCipher = function(elem) { 
    elemSelector("#optionsCipher").innerHTML = ciphers[elem.value][0];
    setEncode = ciphers[elem.value][1];
    setDecode = ciphers[elem.value][2];
}