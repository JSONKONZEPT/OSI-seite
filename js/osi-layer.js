$(document).ready(function () {


    $('#mySelectBox').change(function () {
        var value = $("#mySelectBox option:selected").val();
        var theDiv = $(".is" + value);

        theDiv.slideDown().removeClass("hidden");
        theDiv.siblings('[class*=is]').slideUp(function () {
            $(this).addClass("hidden");
        });
    });



$('#layer-7, #schicht-7').click(function () {

    $("#layer-6, #schicht-6").toggle();
    $("#layer-5, #schicht-5").toggle();
    $("#layer-4, #schicht-4").toggle();
    $("#layer-3, #schicht-3").toggle();
    $("#layer-2, #schicht-2").toggle();
    $("#layer-1, #schicht-1").toggle();

    $(".dropdown-layer-7").toggle();


});

$('#layer-6, #schicht-6').click(function () {

    $("#layer-5, #schicht-5").toggle();
    $("#layer-4, #schicht-4").toggle();
    $("#layer-3, #schicht-3").toggle();
    $("#layer-2, #schicht-2").toggle();
    $("#layer-1, #schicht-1").toggle();

    $(".dropdown-layer-6").toggle();


});

$('#layer-5, #schicht-5').click(function () {

    $("#layer-4, #schicht-4").toggle();
    $("#layer-3, #schicht-3").toggle();
    $("#layer-2, #schicht-2").toggle();
    $("#layer-1, #schicht-1").toggle();

    $(".dropdown-layer-5").toggle();


});

$('#layer-4, #schicht-4').click(function () {

    $("#layer-3, #schicht-3").toggle();
    $("#layer-2, #schicht-2").toggle();
    $("#layer-1, #schicht-1").toggle();

    $(".dropdown-layer-4").toggle();


});

$('#layer-3, #schicht-3').click(function () {

    $("#layer-2, #schicht-2").toggle();
    $("#layer-1, #schicht-1").toggle();

    $(".dropdown-layer-3").toggle();

});

$('#layer-2, #schicht-2').click(function () {

    $("#layer-1, #schicht-1").toggle();

    $(".dropdown-layer-2").toggle();


});

$('#layer-1, #schicht-1').click(function () {

    $(".dropdown-layer-1").toggle();


});


})
;