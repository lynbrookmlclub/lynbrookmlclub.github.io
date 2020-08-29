const nav = document.querySelector("nav");
const blackout = document.querySelector(".blackout");

blackout.addEventListener("click", () => {
    nav.classList.remove("open");
    blackout.style.visibility = "hidden";
});

document.querySelector("#menu-activate").addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        blackout.style.visibility = "visible";
        blackout.style.opacity = "1";
    } else {
        blackout.style.visibility = "hidden";
        blackout.style.opacity = "0";
    }
    document.querySelectorAll("nav a").forEach(it => {
        const listener = () => {
            nav.classList.remove("open");
            blackout.style.visibility = "hidden";
            blackout.style.opacity = "0";
            it.removeEventListener("click", listener);
        };
        it.addEventListener("click", listener);
    });
});

document.querySelectorAll("#hero-img path").forEach(it => {
    it.style.strokeDasharray = it.getTotalLength();
    it.style.strokeDashoffset = it.getTotalLength();
});

let iframe = document.getElementById("videoEmbed");
iframe.onload = () => {
    iframe.style.height = iframe.offsetWidth * 0.5625 + "px";
}