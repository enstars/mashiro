let mashiroConfig;

function saveConfig() {
    localStorage.setItem("mashiroCookie", JSON.stringify(mashiroConfig));
}

function colorFill() {
    $("[character]").toggleClass("fill");
    $("#dark-toggle").toggle();
    $("#light-toggle").toggle();
    mashiroConfig.darkColors = !mashiroConfig.darkColors;
    saveConfig();
}

function sliderDrop() {
    $(".toolbar-wrapper").toggleClass("showSlider");
}

$(document).ready(() => {
    let mashiroCookie = localStorage.getItem("mashiroCookie");

    if (!mashiroCookie) {
        const defaultMashiroConfig = {
            darkColors: false,
            fontSize: "",
        };
        mashiroConfig = defaultMashiroConfig;
        saveConfig();
        mashiroCookie = JSON.stringify(defaultMashiroConfig);
    }

    mashiroConfig = JSON.parse(mashiroCookie);
    const fontSizes = ["smallest", "smaller", "", "bigger", "biggest"];

    if (mashiroConfig.darkColors) {
        colorFill();
    }
    if (mashiroConfig.fontSize) {
        $("[character]").removeClass(fontSizes.filter((size) => !!size));
        $("[character]").addClass(mashiroConfig.fontSize);
    }

    const handleSliderChange = (event) => {
        const fontSize = fontSizes[event.target.value - 1];
        $("[character]").removeClass(fontSizes.filter((size) => !!size));
        $("[character]").addClass(fontSize);
        mashiroConfig.fontSize = fontSize;
        saveConfig();
    };
    $("input.slider").on("change", handleSliderChange);
});
