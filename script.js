// jquery





// $(document).ready(function() {
//     $("h1, p").css("color", "red").text("this was changed via jquery");
//     $("p.customClass").css("color", "blue").text("this was changed via jquery #2");
//     $("#custom").html("<h1>h1 created via <span class='span'>Jqeuery</span></h1>");

//     const value = $("input").val();
//     console.log(value);
// });

// $(document).ready(function() {

//     $("section")
//         .css("color", "#aaa")
//         .append("<p>paragraph appended via jquery</p>")
//         .prepend("<p>paragraph prepended via jquery</p>");

//     $("div#target")
//         .before("<p>paragraph before div</p>")
//         .after("<p>paragraph after div</p>");

//     $("div > *").css("color", "red");
//     $("div").empty();

// });

// $(document).ready(function() {
//             $("#btn").click(function() {
//                 console.log("button clicked");
//             });

// $(document).on("click", "button", function() {
//     console.log("button clicked");
// });

// const $btn = $("div");
// $btn.html("<button>Dynamic button</button>");

// $(document).ready(function() {
//     $("#box")
//         .on("mouseenter", function() {
//             console.log("mouse entered");
//         })
//         .on("mouseleave", function() {
//             console.log("mouse left");
//         });
// });

// $(document).ready(function() {
//     $(".select-me")
//         .on("keyup", function() {
//             console.log($(this).val());
//         })
//         .on("focus", function() {
//             console.log("focus");
//         })
//         .on("blur", function() {
//             console.log("blur");
//         });
// });

// $(document).ready(function() {
//     // $("form").on("submit", function(e) {
//     //     e.preventDefault();
//     //     console.log("form submitted");
//     // });
//     $("button").on("click", function(e) {
//         e.preventDefault();
//         console.log("button does not submit");
//     });
// });

$(document).ready(function() {
    $("#show").hide();
    $("#hide").on("click", function(e) {
        e.preventDefault();
        $("#box").hide()
        $("#hide").hide()
        $("#show").show()
        $("#style").hide()
        $("#remove").hide()
        $("#toggle").hide()
        $("#fade").hide()
        $("#slide").hide()
        $("#callback").hide()
        $("#animate").hide()
    });
    $("#show").on("click", function(e) {
        e.preventDefault();
        $("#box").show()
        $("#hide").show()
        $("#show").hide()
        $("#style").show()
        $("#remove").show()
        $("#toggle").show()
        $("#fade").show()
        $("#slide").show()
        $("#callback").show()
        $("#animate").show()
    });
    $("#style").on("click", function(e) {
        e.preventDefault();
        $("#box").addClass("red");
    });
    $("#remove").on("click", function(e) {
        e.preventDefault();
        $("#box").removeClass("red");
    });
    $("#toggle").on("click", (e) => {
        e.preventDefault();
        $("#box").toggleClass("red");
    });
    $("#fade").on("click", (e) => {
        e.preventDefault();
        $("#box").fadeToggle(2000);
    });
    $("#slide").on("click", (e) => {
        e.preventDefault();
        $("#box").slideToggle(2000);
    });
    $("#callback").on("click", (e) => {
        e.preventDefault();
        $("#box").fadeToggle(2000, function() {
            console.log("Fade complete");
        });
    });
    $("#animate").on("click", (e) => {
        e.preventDefault();
        $("#box").animate({
            "width": "500px",
            "height": "500px",
            "opacity": "0.5"
        }, 2000);
    });

    // $(window).on("resize", function() {
    //     if ($(window).width() < 500) {
    //         $("body").css("background", "red");
    //     } else {
    //         $("body").css("background", "white");
    //     }
    // });

    // $("li").each(function(index, element) {
    //     $(element).text("item " + index)
    //     if (index === 2) {
    //         $(element).css("color", "red")
    //     } else {
    //         $(element).css("color", "black")
    //     }
    // })
    $("#text").attr("type", "password")

    const random = Math.ceil(Math.random() * 88);

    $.get('https://swapi.dev/api/people/1/', function(data) {
        console.log(data);
    });
    $.post('https://httpbin.org/post', { name: 'John', time: '2pm' }, function(data) {
        console.log("Post was complete with this data:" + data);
    });

    $("#generate").on("click", function(e) {
        $.getJSON('https://swapi.dev/api/people/' + random + '/', function(data) {
            console.log(data);
            $("#name").text("imie: " + data.name);
            $("#height").text("wzrost: " + data.height);
            $("#hair_color").text("kolor włosów: " + data.hair_color);
            if (data.mass === "unknown") {
                $("#mass").text("waga: " + data.mass);
            } else {
                $("#mass").text("waga; " + data.mass + " kg");
            }

        });
    });
});