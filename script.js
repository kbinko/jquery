// jquery

$(document).ready(function() {
    console.log("ready");
});



$(document).ready(function() {
    $("h1").ready(function() { // mozna uzyc "h1", ".customClass", "#customId" lub zeby zlapac wszystkie h1 z ta klasa/id to "h1.customClass" lub "h1#customId"
        $("h1").css("color", "red").text("this was changed via jquery");
    });
});