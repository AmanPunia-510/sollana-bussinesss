let accord_item = document.querySelectorAll(".accordian-content");

accord_item.forEach(element => {
    let click = element.querySelector(".accordian-title");
    let paragraph = element.querySelector(".accordian-discrpition");
    let svg = element.querySelector(".svg");

    click.addEventListener("click", () => {
        accord_item.forEach(other => {
            if (other !== element) {
                let para = other.querySelector(".accordian-discrpition");
                let svg = other.querySelector(".svg");
                para.style.display = "none";
                svg.style.transform = "rotate(0deg)";
            }
        });

        if (paragraph.style.display === "none") {
            paragraph.style.display = "block"
            svg.style.transform = "rotate(180deg)"
        }
        else {
            paragraph.style.display = "none"
            svg.style.transform = "rotate(0deg)"
        }
    })
});


// navbar

let menubar = document.querySelector(".menubar");
let navbar_items = document.querySelector(".navbar-items");

menubar.addEventListener("click", () => {
    navbar_items.classList.toggle("show");
})