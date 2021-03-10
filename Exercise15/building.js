
function windowCreate() {
    const NewWindow = document.createElement("div");

    NewWindow.className = "window";
    NewWindow.style.display = "inline-block";
    NewWindow.style.margin = "25px";
    NewWindow.style.width = "50px";
    NewWindow.style.height = "50px";

    building.append(NewWindow);    
}

const building = document.getElementById("building");

for (var i = 0; i < 9; i++) {
    windowCreate();
}

document.addEventListener("keydown", event => {
    
    if (event.key === "ArrowUp") {
        windowCreate();
    
    } else if (event.key === "ArrowDown") {
        if (building.hasChildNodes()) {
            building.removeChild(building.lastChild);
        }
    
    } else if (event.key === "ArrowRight") {
        building.style.left = (building.offsetLeft + 50) + "px";
    } else if (event.key === "ArrowLeft") {
        building.style.left = (building.offsetLeft - 50) + "px";
    }
});

document.addEventListener("mousedown", () => {
    const body = document.body;
    if (body.hasAttribute("night")) {
        body.removeAttribute("night");
    } else {
        body.setAttribute("night", "");
    }
});

