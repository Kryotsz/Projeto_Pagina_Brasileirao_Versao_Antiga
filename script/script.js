function abreFechaMenu() {
    var menu = document.getElementById("menu-container");

    if (menu.getAttribute("class") == "displayNone") {
        menu.classList.remove("displayNone");
        menu.classList.add("displayBlock");
    }else {
        menu.classList.remove("displayBlock");
        menu.classList.add("displayNone");
    }
}