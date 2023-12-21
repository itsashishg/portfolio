let isDarkModeSet = false;

function changeTheme() {
    isDarkModeSet = !isDarkModeSet;
    localStorage.setItem('mode', isDarkModeSet);
    updateMode();
}

function updateMode() {
    if (!isDarkModeSet) {
        // e3e3e5
        document.documentElement.style.cssText = "--background-color: #fff;--text-color: #5b5b5b;--texst-color: #24252a;--toggle-icon-url: url('../images/light-on.png')";
    }
    else {
        document.documentElement.style.cssText = "--background-color: #24252a;--text-color: aliceblue;--toggle-icon-url: url('../images/light-off.png')";
    }
}

function getPreviousSetTheme() {
    if (localStorage.getItem('mode') === null) {
        isDarkModeSet = true;
        return;
    }
    isDarkModeSet = localStorage.getItem('mode') == 'true' ? true : false;
    updateMode();
}