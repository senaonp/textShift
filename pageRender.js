elemSelector("#navbar").innerHTML = `
    <img id="logo" src="assets/logo.png" />
    <ul>
        <li onclick="navi('https://github.com/senaonp/textShift')"><a href="https://github.com/senaonp/textShift">Github Repo</a></li>
        <li onclick="toggleBanner()">About</li>
    </ul>
    <div id="banner" style="display:none">
        <p id="textShiftDescription"></p>
        <button onclick="hideElem(elemSelector('#banner'))">close</button>
    </div>`;

elemSelector("#content").innerHTML = `
    <div id="optionsElem">
        <small id="optionsTitle">cipher option(s)</small>
        <div id="options"></div>
        <div class="option">
            <small class="optionNote">this website is a work-in-progress; additional cipher options will be added in future updates</small>
        </div>
    </div>
    <div id="text">
        <p class="textareaName">text</p>
        <textarea id="textInput" oninput="evalText(this)"></textarea>
    </div>
    <div id="cipherText">
        <p class="textareaName">cipher text</p>
        <textarea id="cipherTextInput" oninput="evalCipher(this)"></textarea>
    </div>
`;

elemSelector("#textShiftDescription").innerHTML = `
    <span id="version">textShift ver.1.0.11</span><br /><br />
    textShift is a development side project i'm currently working on during free time;<br>any updates to the website will be added to the Github repository (<a target="_blank" href="https://github.com/senaonp/textShift">https://github.com/senaonp/textShift</a>).
	<br><hr><br>the current features of textShift are<br>
	<span class="feature">encrypt and decrypt text by shifting each character's Unicode value by a set integer</span>
	<span class="feature">responsive output when entering either text input or cipherText input</span>
    <span class="feature">responsive styling for mobile devices</span>
	<br><br>
	my other programming projects can also be viewed here: (<a target="_blank" href="https://fbacarisas.xyz/video/#programming_playlist">fbacarisas.xyz/video/#programming_playlist</a>)
	<br><br>`;

elemSelector("#footer").innerHTML = `
    <span>developed by senaonp</span>
    <br><br>
    <span>textShift source code is available on <a target="_blank" href="https://github.com/senaonp/textShift">GitHub</a> (･‿･✿)</span>
    <br><br>
    <span>email: <a href="mailto:senaonp.dev@gmail.com">(senaonp.dev@gmail.com)</a></span>`;
