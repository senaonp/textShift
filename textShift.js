var shift = 0;
var textArray = [];
var cipherArray = [];

var textElem = document.getElementById("textInput");
var cipherElem = document.getElementById("cipherTextInput");
var shiftElem = document.getElementById("textShift");

window.onload = function() {
    textElem.value = '';
    cipherElem.value = '';
    shiftElem.value = 0;
}

var evalText = function(elem) {
    cipherArray = [];
    for (var i = 0; i < elem.value.length; i += 1) {
        cipherArray.push(String.fromCharCode(elem.value.charCodeAt(i) + shift));
    }
    cipherElem.value = cipherArray.join("");
}

var evalCipher = function(elem) {
    textArray = [];
    for (var i = 0; i < elem.value.length; i += 1) {
        textArray.push(String.fromCharCode(elem.value.charCodeAt(i) - shift));
    }
    textElem.value = textArray.join("");
}

var setShift = function(elem) {
    shift = parseInt(elem.value);
}