elemSelector("#navbar").innerHTML = `
    <img src="assets/logo.png" />
    <ul>
        <li onclick="navi('https://github.com/senaonp/textShift')"><a href="https://github.com/senaonp/textShift">Github Repo</a></li>
        <li onclick="toggleBanner()">About</li>
    </ul>
    <div id="banner" style="display:none">
        <p id="textShiftDescription"></p>
        <button onclick="hideElem(elemSelector('#banner'))">close</button>
    </div>`;

elemSelector("#content").innerHTML = `
    <p>content</p>
    `;

elemSelector("#footer").innerHTML = `
    <span>developed by senaonp</span>
    <br><br>
    <span>textShift source code is available on <a target="_blank" href="https://github.com/senaonp/textShift">GitHub</a> (･‿･✿)</span>
    <br><br>
    <span>email: <a href="mailto:senaonp.dev@gmail.com">(senaonp.dev@gmail.com)</a></span>`;
