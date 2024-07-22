const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const profileRoutes = {
    404: "/pages/404.html",
    "/fake-front/": "pages/profile.html",
    "/fake-front/profile-account": "pages/profile-account",
    "/fake-front/profile-adresses": "../pages/profile-adresses.html",
    "/fake-front/profile-orders": "../pages/profile-orders.html",
    "/fake-front/profile-referrals": "pages/profile-referrals.html",
    "/fake-front/profile-reseller": "pages/profile-reseller.html",
    "/fake-front/profile-settings": "pages/profile-settings.html",
    "/fake-front/profile-tickets": "pages/profile-tickets.html",
    "/fake-front/profile-wallet": "pages/profile-wallet.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = profileRoutes[path] || profileRoutes[404];

    if (profileRoutes[path] === "pages/landing.html") {
        setLandingStyles()
    } else if (profileRoutes[path] === "pages/auth.html") {
        setAuthStyles()
    } else if (profileRoutes[path] === "pages/faq.html") {
        setFaqStyles()
    } else if (profileRoutes[path] === "pages/order.html") {
        setOrderStyles()
    } else if (profileRoutes[path] === "pages/profile.html") {
        window.location = "pages/profile.html"
    }

    console.log(route)
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

