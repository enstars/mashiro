function colorFill() {
    $("[character]").toggleClass("fill");
    $("#dark-toggle").toggle();
    $("#light-toggle").toggle();
    mashiroConfig["darkColors"] = !mashiroConfig["darkColors"];
    localStorage.setItem("mashiroCookie", JSON.stringify(mashiroConfig));
}

function sliderDrop() {
    $(".slider-container").toggle();
}

mashiroConfig = {
    darkColors: false
};

const mashiroCookie = localStorage.getItem("mashiroCookie");
if (mashiroCookie == null) {
    mashiroCookie = JSON.stringify(mashiroConfig);
    localStorage.setItem("mashiroCookie", mashiroCookie);
}

mashiroConfig = JSON.parse(mashiroCookie);

if (mashiroConfig["darkColors"]) {
    colorFill();
}
