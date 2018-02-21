$(document).ready(function () {

   /* $(".layer-7").click(function () {

        $(".layer-6").hide();
        $(".layer-5").hide();
        $(".layer-4").hide();
        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).click(function () {
        $(".layer-6").fadeIn(100);
        $(".layer-5").fadeIn(100);
        $(".layer-4").fadeIn(100);
        $(".layer-3").fadeIn(100);
        $(".layer-2").fadeIn(100);
        $(".layer-1").fadeIn(100);
    });


    $(".layer-6").mouseover(function () {

        $(".layer-5").hide();
        $(".layer-4").hide();
        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-5").fadeIn(100);
        $(".layer-4").fadeIn(100);
        $(".layer-3").fadeIn(100);
        $(".layer-2").fadeIn(100);
        $(".layer-1").fadeIn(100);
    });

    $(".layer-5").mouseover(function () {

        $(".layer-4").hide();
        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-4").fadeIn(100);
        $(".layer-3").fadeIn(100);
        $(".layer-2").fadeIn(100);
        $(".layer-1").fadeIn(100);
    });

    $(".layer-4").mouseover(function () {


        $(".layer-3").hide();
        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-3").fadeIn(100);
        $(".layer-2").fadeIn(100);
        $(".layer-1").fadeIn(100);
    });

    $(".layer-3").mouseover(function () {

        $(".layer-2").hide();
        $(".layer-1").hide();


    }).mouseleave(function () {

        $(".layer-2").fadeIn(100);
        $(".layer-1").fadeIn(100);
    });

    $(".layer-2").mouseover(function () {


        $(".layer-1").hide();


    }).mouseleave(function () {


        $(".layer-1").fadeIn(100);
    });

*/
   $('#layer-7').click(function () {

       $("#layer-6").toggle();
       $("#layer-5").toggle();
       $("#layer-4").toggle();
       $("#layer-3").toggle();
       $("#layer-2").toggle();
       $("#layer-1").toggle();

       $(".dropdown-layer-7").toggle();


   });

    $('#layer-6').click(function () {

        $("#layer-5").toggle();
        $("#layer-4").toggle();
        $("#layer-3").toggle();
        $("#layer-2").toggle();
        $("#layer-1").toggle();

        $(".dropdown-layer-6").toggle();


    });

    $('#layer-5').click(function () {

        $("#layer-4").toggle();
        $("#layer-3").toggle();
        $("#layer-2").toggle();
        $("#layer-1").toggle();

        $(".dropdown-layer-5").toggle();


    });

    $('#layer-4').click(function () {

        $("#layer-3").toggle();
        $("#layer-2").toggle();
        $("#layer-1").toggle();

        $(".dropdown-layer-4").toggle();


    });

    $('#layer-3').click(function () {

        $("#layer-2").toggle();
        $("#layer-1").toggle();

        $(".dropdown-layer-3").toggle();

    });

    $('#layer-2').click(function () {

        $("#layer-1").toggle();

        $(".dropdown-layer-2").toggle();


    });

    $('#layer-1').click(function () {

        $(".dropdown-layer-1").toggle();


    });



});