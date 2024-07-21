function redirectAuth() {
    location.href = "../pages/auth.html";
}

function redirectHome() {
    location.href = "../pages/index.html";
}

function redirectProfile() {
    location.href = "../pages/profile-tickets.html";
}

function redirectFaq() {
    location.href = "../pages/faq.html";
}
function redirectOrder() {
    location.href = "../pages/order.html";
}

function changeFaqBorder(details) {
    const accordion = details.parentElement;

    if (!details.open) {
        accordion.style.background = "black";
    } else {
        accordion.style.background = "#212931";
    }
}
