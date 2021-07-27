var textArray = [];
var cipherArray = [];
var options = "";
var selectElem = "";
var textElem = document.getElementById("textInput");
var cipherElem = document.getElementById("cipherTextInput");

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

renderOptions();
clearInputs();
getNotes();