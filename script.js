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

$(document).ready(function() {
    $(".select-me")
        .on("keyup", function() {
            console.log($(this).val());
        })
        .on("focus", function() {
            console.log("focus");
        })
        .on("blur", function() {
            console.log("blur");
        });
});

$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        console.log("form submitted");
    });
});