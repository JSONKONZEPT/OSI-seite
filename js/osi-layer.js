$(document).ready(function () {

    $(".layer-7").mouseenter(function () {

        $(".layer-6").hide();
        $(".layer-5").hide();
        $(".layer-4").hide();
        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {
        $(".layer-6").fadeIn();
        $(".layer-5").fadeIn();
        $(".layer-4").fadeIn();
        $(".layer-3").fadeIn();
        $(".layer-2").fadeIn();
        $(".layer-1").fadeIn();
    });


    $(".layer-6").mouseenter(function () {

        $(".layer-5").hide();
        $(".layer-4").hide();
        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-5").fadeIn();
        $(".layer-4").fadeIn();
        $(".layer-3").fadeIn();
        $(".layer-2").fadeIn();
        $(".layer-1").fadeIn();
    });

    $(".layer-5").mouseenter(function () {

        $(".layer-4").hide();
        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-4").fadeIn();
        $(".layer-3").fadeIn();
        $(".layer-2").fadeIn();
        $(".layer-1").fadeIn();
    });

    $(".layer-4").mouseenter(function () {


        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-3").fadeIn();
        $(".layer-2").fadeIn();
        $(".layer-1").fadeIn();
    });

    $(".layer-3").mouseenter(function () {

        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-2").fadeIn();
        $(".layer-1").fadeIn();
    });

    $(".layer-2").mouseenter(function () {


        $(".layer-1").hide();


    }).mouseleave(function () {


        $(".layer-1").fadeIn();
    });


});