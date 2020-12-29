console.log("Your index.js file is loaded correctly!");
$("button").on("click", function () {
    console.log("Hey a click occurred!");
});
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);