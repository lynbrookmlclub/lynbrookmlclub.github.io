function toggleNav() {
    var hamburger = document.getElementById("menu-button"), current_class = hamburger.className;
    hamburger.className = (current_class == "open") ? "" : "open";

    var nav = document.getElementById("nav-container");
    var content = document.getElementById("content-container");

    if (nav.className != "nav-opened") {
        nav.className = "nav-opened";
        content.className = "nav-opened";
        document.body.style.overflowY = "hidden";
    } else {
        nav.className = "";
        content.className = "";
        document.body.style.overflowY = "scroll";
    }
}
