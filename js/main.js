function openNav() {
    document.getElementById("nv-sidenav").style.width = "560px";
    document.getElementById("nv-sidenav").style.backgroundImage = "url('../assets/images/bg/modal-bg.svg')";
    document.getElementById("nv-sidenav").style.backgroundRepeat = "no-repeat";
    document.getElementById("nv-sidenav").style.backgroundPosition = "bottom";
    document.getElementById("nv-sidenav").style.backgroundWidth = "contain";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("nv-sidenav").style.width = "0";
}

function changeBorderColor(details) {
    const accordion = details.parentElement;

    if (!details.open) {
        accordion.style.background = " linear-gradient(to bottom right,\n" +
            "            #292C31,\n" +
            "            rgba(38, 229, 161, 0.6) 50%,\n" +
            "            #292C31,\n" +
            "            rgba(38, 229, 161, 0.6) 50%,\n" +
            "            #292C31,\n" +
            "            #292C31)\n" +
            "            border-box"
    } else {
        accordion.style.background = "#212931"
    }
}
function setAuthStyles() {
    body.style.backgroundImage = "url('../assets/images/bg/auth-bg.png')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "0";
}
function setLandingStyles() {
    body.style.backgroundImage = "url('../assets/images/bg/about1-bg.svg')";
    body.style.backgroundSize = "1024px"
    body.style.backgroundPosition = "100% -90px";
}

function setOrderStyles() {
    body.style.backgroundImage = "none";
    body.style.backgroundPosition = "0";
}
function setFaqStyles() {
    body.style.backgroundImage = "none";
    body.style.backgroundPosition = "0";
}
function setProfileStyles() {
    body.style.backgroundImage = "none";
    body.style.backgroundPosition = "0";
    console.log(787878)
}




