elemSelector("#navbar").innerHTML = `
    <img id="logo" src="../assets/logo.png" onclick="navi('../')" />
    <ul>
        <li onclick="navi('https://github.com/senaonp/textShift')"><a href="https://github.com/senaonp/textShift">Github Repo</a></li>
        <li onclick="navi('../')"><a href="../">Homepage</a></li>
		<li onclick="toggleElem('#banner')">About</li>
    </ul>
    <div id="banner" style="display:none">
        <p id="textShiftDescription"></p>
        <button onclick="hideElem(elemSelector('#banner'))">close</button>
    </div>`;

// elemSelector("#content").innerHTML = ``;

elemSelector("#textShiftDescription").innerHTML = `
    <span id="version">textShift ver.1.2.0</span><br /><br />textShift is an online ciphertext tool with various options for encoding and decoding. encoding and decoding is applied during input in the "text" and "cipher text" fields respectively.<br /><br />the main cipher types are shift (modify Unicode value), position (modify ordering), and append (add text) ciphers.
	<br /><br />
	<div id="features">
	<span>a demo of using sequence ciphers for encoding and decoding <a target='_blank' href='https://fbacarisas.xyz/video/#textshift_sequencing_demo'>is available here</a><br /><hr /><br />
	<span class="feature_title">the current features of textShift are:</span><br />
	<span class="feature">cipher options for encoding and decoding</span>
	<span class="feature_detail">cipher text functions such as shift, swap, insert, move, reverse, multiply, sequence</span>
	<span class="feature_detail">cipher text selection such as by partition, nth chars, index range, step sequence, character set, offset</span>
    <span class="feature">responsive output when entering either text input or cipherText input</span>
    <span class="feature">usage information on input fields</span>
	<span class="feature">error handling for specific Unicode characters</span>
	<span class="feature">a notes section</span>
    <span class="feature">responsive styling for mobile devices</span><br />
	<span class="feature_title">cipher tips:</span><br />
	<span class="feature">complex ciphers can be made by combining different ciphers together</span>
	<span class="feature_detail">to apply a combination of ciphers take the ciphertext output from one cipher and apply it as text input to another cipher.<br /><br />repeat the process for as many ciphers as needed</span>
	<span class="feature_detail">to decode text encoded by a combination of ciphers, apply decoding to the cipher text in the reverse order in which the ciphers were applied</span>
    </div>
	<br>
	my other programming projects <a target="_blank" href="https://fbacarisas.xyz/video/#programming_playlist">can be viewed here</a>
	<br><br>`;

elemSelector("#footer").innerHTML = `
    <span>developed by senaonp</span>
    <br><br>
    <span>textShift code is available on <a target="_blank" href="https://github.com/senaonp/textShift">GitHub</a><br />(･‿･✿)</span>
    <br><br>
    <span>email: <a href="mailto:dev@greentea.moe">(dev@greentea.moe)</a></span>`;
