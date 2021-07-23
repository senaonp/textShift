var textArray = [];
var cipherArray = [];
var options = "";
var textElem = document.getElementById("textInput");
var cipherElem = document.getElementById("cipherTextInput");

var setOptions = [[charShiftElem, charShiftEncode, charShiftDecode]];

var evalText = function(elem) {
    cipherArray = Array(elem.length);
    for (var a = 0; a < setOptions.length; a+=1) { setOptions[a][1](elem); }
    cipherElem.value = cipherArray.join("");
}

var evalCipher = function(elem) {
    textArray = Array(elem.length);
    for (var b = 0; b < setOptions.length; b+=1) { setOptions[b][2](elem); }
    textElem.value = textArray.join("");
}

var renderOptions = function() {
    options = "";
    for (var e = 0; e < setOptions.length; e+=1) { 
        options += "<div class='option'>" + setOptions[e][0] + "</div>";
    }
    elemSelector("#options").innerHTML = options;
}

var clearInputs = function() {
    document.getElementById("option1").value = 0;
    textElem.value = '';
    cipherElem.value = '';
}

renderOptions();
clearInputs();