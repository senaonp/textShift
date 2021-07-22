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

// elemSelector("#content").innerHTML = ``;

elemSelector("#footer").innerHTML = `
    <span>developed by senaonp</span>
    <br><br>
    <span>textShift source code is available on <a target="_blank" href="https://github.com/senaonp/textShift">GitHub</a> (･‿･✿)</span>
    <br><br>
    <span>email: <a href="mailto:senaonp.dev@gmail.com">(senaonp.dev@gmail.com)</a></span>`;
