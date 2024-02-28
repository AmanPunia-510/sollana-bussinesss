let accord_item = document.querySelectorAll(".accordian-content");

accord_item.forEach(element => {
    let click = element.querySelector(".accordian-title");
    let paragraph = element.querySelector(".accordian-discrpition");
    let svg = element.querySelector(".svg");

    click.addEventListener("click", () => {
        accord_item.forEach(other => {
            if (other !== element) {
                let para = other.querySelector(".accordian-discrpition");
                para.style.display = "none";
                svg.classList.add("rotate")
            }
        });

        if (paragraph.style.display === "none") {
            paragraph.style.display = "block"
            svg.classList.add("rotate")
        }
        else {
            paragraph.style.display = "none"
            svg.classList.remove("rotate")
        }
    })
});
