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
        <div id="optionsSelect"></div>
        <div id="options"></div>
    </div>
    <div id="text">
		<div id="textMeta">
			<p class="textareaName" id="textT">text</p>
			<small id="textL">text length: 0</small>
		</div>
        <small id="encodingWarning"></small>
        <textarea id="textInput" oninput="evalText(this)"></textarea>
    </div>
    <div id="cipherText">
        <div id="cipherTextMeta">
			<p class="textareaName" id="cipherT">cipher text</p>
			<small id="cipherL">cipher text length: 0</small>
		</div>
        <textarea id="cipherTextInput" oninput="evalCipher(this)"></textarea>
    </div>`;

elemSelector("#notes").innerHTML = `
	<div id="notesElem">
		<p class="textareaName">notes</p>
		<small>you can add any notes here; this field uses the browser's localStorage, so information is saved between browser sessions</small>
		<textarea id="notesText" oninput="updateNotes(this)"></textarea>
	</div>`;

elemSelector("#textShiftDescription").innerHTML = `
    <span id="version">textShift ver.1.2.0</span><br /><br />textShift is an online ciphertext tool with various cipher options for encoding and decoding text.<br />Encoding is applied when text is entered into the "text" field. Decoding is applied when text is entered into the "cipher text" field.<br /><br />The main cipher types are shifting and positioning ciphers. Shifting ciphers modify the Unicode values of selected characters. Positioning ciphers modify the ordering of the selected characters. 
	<br /><br />
    <div id="features">
	<span class="feature_title">the current features of textShift are:</span><br /><br />
	<span class="feature">cipher options for encoding and decoding</span>
	<span class="feature_detail">cipher text functions such as shift, swap, insert, move, reverse, multiply, sequence</span>
	<span class="feature_detail">cipher text selection such as by partition, nth chars, index range, step sequence, character set, offset</span>
    <span class="feature">responsive output when entering either text input or cipherText input</span>
    <span class="feature">usage information on input fields</span>
	<span class="feature">error handling for specific Unicode characters</span>
	<span class="feature">a notes section</span>
    <span class="feature">responsive styling for mobile devices</span>
    <span class="feature">a demo of using sequence ciphers for encoding and decoding is available here: <a target='_blank' href='https://fbacarisas.xyz/video/#textshift_sequencing_demo'>https://fbacarisas.xyz/video/#textshift_sequencing_demo</a></span>
	
    </div>
	<br>
	my other programming projects can also be viewed here: (<a target="_blank" href="https://fbacarisas.xyz/video/#programming_playlist">fbacarisas.xyz/video/#programming_playlist</a>)
	<br><br>`;

elemSelector("#footer").innerHTML = `
    <span>developed by senaonp</span>
    <br><br>
    <span>textShift code is available on <a target="_blank" href="https://github.com/senaonp/textShift">GitHub</a><br />(･‿･✿)</span>
    <br><br>
    <span>email: <a href="mailto:dev@greentea.moe">(dev@greentea.moe)</a></span>`;
