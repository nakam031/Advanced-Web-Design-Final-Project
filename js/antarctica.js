$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });

      var message = ["is remote grandeur","is an ice-crowned wonder","an antipodal abode","is a land of fabled creatures"];
      var image = ["mountain.jpg","ice.jpg","mcmurdo.jpg","penguin.jpg"];
            var x = Math.floor(Math.random()*image.length);
            $(".imagemessage").html(message[x]);
            $(".homeimage").css({"background-image":"url(image/"+image[x]+")"});

       $("#home").click(function(){
            $(".homeimage").css({"display":"inline-block"});
            $("#understand").css({"display":"none"});
            $("#one, #two, #three, #four").css({"text-decoration": "none"});           
      });     

      $("#one").click(function() {
            $("#one").css({"text-decoration": "underline","color":"#000"});
            $("#two, #three, #four").css({"text-decoration": "none"});
            $(".homeimage").css({"display":"none"});
            $("#understand").css({"display":"inline-block"});
      });

      $("#two").click(function() {
            $("#two").css({"text-decoration": "underline","color":"#000"});
            $("#one, #three, #four").css("text-decoration", "none");
      });

      $("#three").click(function() {
            $("#three").css({"text-decoration": "underline","color":"#000"});
            $("#one, #two, #four").css("text-decoration", "none");
      });

      $("#four").click(function() {
            $("#four").css({"text-decoration": "underline","color":"#000"});
            $("#one, #two, #three").css({"text-decoration": "none"});
      });

});

// Scrolling Effect

// $(window).on("scroll", function() {
//       if($(window).scrollTop()) {
//             $('nav').addClass('black');
//       }

//       else {
//             $('nav').removeClass('black');
//       }
// });

