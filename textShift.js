var textArray = [];
var cipherArray = [];
var options = "";
var selectElem = "";
var textElem = elemSelector("#textInput");
var cipherElem = elemSelector("#cipherTextInput");

var setElem = charShiftElem;
var setEncode = charShiftEncode;
var setDecode = charShiftDecode;

var evalText = function(elem) {
    cipherArray = Array(elem.length);
    setEncode(elem);
    cipherElem.value = cipherArray.join("");
	afterCipher();
}

var evalCipher = function(elem) {
    textArray = Array(elem.length);
    setDecode(elem);
    textElem.value = textArray.join("");
	afterCipher();
}

var afterCipher = function() {
	elemSelector("#textL").innerText = "text length: " + textElem.value.length;
	elemSelector("#cipherL").innerText = "cipher text length: " + cipherElem.value.length;
    validateEncoding();
}

var renderOptions = function() {
    selectElem = "<select id='selectCipher' onchange='setCipher(this)'>";
    for (var c = 0; c < Object.keys(ciphers).length; c+=1) {
        selectElem += "<option>" + Object.keys(ciphers)[c] + "</option>";
    }
    selectElem += "</select>";
    elemSelector("#optionsSelect").innerHTML = '<span class="optionsItem">cipher options</span> &nbsp' + selectElem;
    elemSelector("#options").innerHTML = "<div id='optionsCipher'>" + setElem + "</div>";
}

var clearInputs = function() {
    textElem.value = '';
    cipherElem.value = '';
}

var getNotes = function() {
	elemSelector("#notesText").value = window.localStorage.getItem('notes');
}

var validateEncoding = function() {
    var unicodeList = [];
    var errors = {};
	var inputField = elemSelector("#cipherTextInput");
    for (var x = 0; x < inputField.value.length; x+=1) {
		unicodeList.push(inputField.value.charCodeAt(x));
	}
    aggregateErrorTypes(unicodeList, errors);
    if (Object.keys(errors).length > 0) {
        elemSelector("#encodingWarning").innerHTML = Object.values(errors).join("<br /><hr />");
    } else {
        elemSelector("#encodingWarning").innerHTML = "";
    }
}

var aggregateErrorTypes = function(unicodeList, errors) {
    if (unicodeList.includes(160)) {
        errors["160"] = "- warning: a non-breaking space (unicode character 160) is in the cipher text output and may not decode properly; \
            please use a different parameter or cipher option to avoid unexpected decoding.<br />for more details, refer to (<a target='_blank' href='https://github.com/senaonp/textShift/issues/1'>https://github.com/senaonp/textShift/issues/1</a>)"; 
    }
	if (unicodeList.includes(0)) {
        errors["0"] = "- warning: a null character (unicode character 0) is in the cipher text output and may not decode properly; \
            please use a different parameter or cipher option to avoid unexpected decoding.<br />for more details, refer to (<a target='_blank' href='https://github.com/senaonp/textShift/issues/2'>https://github.com/senaonp/textShift/issues/2</a>)"; 
    }
}

renderOptions();
clearInputs();
getNotes();