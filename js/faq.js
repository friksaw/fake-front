body = document.querySelector('body');
body.style.backgroundImage = "url('../assets/images/bg/faq-light.png')";
body.style.backgroundSize = "contain";

function changeBorderColor(details) {
    const accordion = details.parentElement;

    if (!details.open) {
        accordion.style.background = "black";
    } else {
        accordion.summary.style.backgroundColor = "red"
    }
}

