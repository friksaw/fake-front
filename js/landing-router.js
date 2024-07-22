const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "pages/404.html",
    "/fake-front/": "pages/landing.html",
    "/fake-front/auth": "pages/auth.html",
    "/fake-front/faq": "pages/faq.html",
    "/fake-front/order": "pages/order.html",
    "/fake-front/profile": "pages/profile.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    if (routes[path] === "pages/landing.html") {
        setLandingStyles()
    } else if (routes[path] === "pages/auth.html") {
        setAuthStyles()
    } else if (routes[path] === "pages/faq.html") {
        setFaqStyles()
    } else if (routes[path] === "pages/order.html") {
        setOrderStyles()
    } else if (routes[path] === "pages/profile.html") {
        window.location = "pages/profile.html"
    }
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

