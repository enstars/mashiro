function colorFill() {
    $("[character]").toggleClass("fill");
    $("#dark-toggle").toggle();
    $("#light-toggle").toggle();
    mashiroConfig["darkColors"] = !mashiroConfig["darkColors"];
    localStorage.setItem("mashiroCookie", JSON.stringify(mashiroConfig));
}

function sliderDrop() {
    $(".slider-container").toggleClass();
}

$(document).ready(() => {
    const fontSizes = ["smallest", "smaller", "", "bigger", "biggest"];

    const handleSliderChange = event => {
        $("[character]").removeClass(fontSizes.filter(size => !!size));
        $("[character]").addClass(fontSizes[event.target.value - 1]);
    };
    $("input.slider").on("change", handleSliderChange);
});

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
