// ----- charShift -----

var charShiftElem = `<label class="optionsItem">shift text by number </label><input id="option1" type="number" value="0"></input>`;
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

// charShift every nth char

var charShiftNthElem = `
    <label class="optionsItem">shift text by number </label><input id="option2_1" type="number" value="0"></input><br />
    <label class="optionsItem extraParam">for every nth character where n is </label><input id="option2_2" type="number" value="1" min="1"></input><br /><small class='note'>for accurate encoding / decoding, n should be an integer greater than or equal to 1</small>`;
var charShiftNthEncode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        if (((i+1) % elemSelector("#option2_2").value) == 0) { 
            cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) + parseInt(elemSelector("#option2_1").value));
        } else {
            cipherArray[i] = elem.value[i];
        }
    }
}
var charShiftNthDecode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        if (((i+1) % elemSelector("#option2_2").value) == 0) { 
            textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) - parseInt(elemSelector("#option2_1").value));
        } else {
            textArray[i] = elem.value[i];
        }
    }
}

// charShift by multiple

var charShiftMultipleElem = `<label class="optionsItem">shift text by multiple  </label><input id="option3" type="number" value="1"></input><br /><small class='note'>for encoding and decoding, the multiple should also be non-zero. for decoding, cipher text should be divisible by a factor since this cipher encodes by a multiple</small>`;
var charShiftMultipleEncode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        cipherArray[i] = String.fromCharCode(elem.value.charCodeAt(i) * parseInt(elemSelector("#option3").value));
    }
}
var charShiftMultipleDecode = function(elem) {
    for (var i = 0; i < elem.value.length; i += 1) {
        textArray[i] = String.fromCharCode(elem.value.charCodeAt(i) / parseInt(elemSelector("#option3").value));
    }
}

// cipher elements

var ciphers = {
    "shift each character by number": [charShiftElem, charShiftEncode, charShiftDecode], 
    "shift every nth character by number": [charShiftNthElem, charShiftNthEncode, charShiftNthDecode],
	"shift each character by multiple": [charShiftMultipleElem, charShiftMultipleEncode, charShiftMultipleDecode]
};
var setCipher = function(elem) { 
    elemSelector("#optionsCipher").innerHTML = ciphers[elem.value][0];
    setEncode = ciphers[elem.value][1];
    setDecode = ciphers[elem.value][2];
}