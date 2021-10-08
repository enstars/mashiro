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
    const fontSizes = ["smallest", "smaller", "", "bigger", "biggest"];

    if (!mashiroCookie) {
        const defaultMashiroConfig = {
            darkColors: false,
            // Slider range is 1-5, but font size array indices are 0-4
            fontSize: fontSizes.indexOf("") + 1,
        };
        mashiroConfig = defaultMashiroConfig;
        saveConfig();
        mashiroCookie = JSON.stringify(defaultMashiroConfig);
    }

    mashiroConfig = JSON.parse(mashiroCookie);

    const handleSliderChange = (event) => {
        const fontSize = fontSizes[event.target.value - 1];
        $("[character]").removeClass(fontSizes.filter((size) => !!size));
        $("[character]").addClass(fontSize);
        mashiroConfig.fontSize = event.target.value;
        saveConfig();
    };
    $("input.slider").on("change", handleSliderChange);

    if (mashiroConfig.darkColors) {
        colorFill();
    }
    if (mashiroConfig.fontSize) {
        $("input.slider").val(mashiroConfig.fontSize);
        // Need to manually invoke event listener
        $("input.slider").change();
    }
});
