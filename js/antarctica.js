$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
       });
      
      var message = ["is remote grandeur","is an ice-crowned wonder","an antipodal abode","is a land of fabled creatures"];
      var image = ["mountain.jpg","ice.jpg","mcmurdo.jpg","penguin.jpg"];
      var color = ["#fff","#000","#000","#fff"];
            var x = Math.floor(Math.random()*image.length);
            $(".imagemessage").html(message[x]).css("color",color[x]);
            $(".homeimage").css({"background-image":"url(image/"+image[x]+")"});
            
       $("#zero").click(function(){
            $("#home").show();
            $("#understand, #experience, #short, #long").hide();
            $("#one, #two, #three, #four").css({"text-decoration": "none"});           
      });     

      $("#one").click(function() {
            $("#one").css({"text-decoration": "underline","color":"#000"});
            $("#two, #three, #four").css({"text-decoration": "none"});
            $(".homeimage, #experience,#short,#long").hide();
            $("#understand").show();
      });

      $("#two").click(function() {
            $("#two").css({"text-decoration": "underline","color":"#000"});
            $("#one, #three, #four").css("text-decoration", "none");
            $(".homeimage, #understand,#short,#long").hide();
            $("#experience").show();
      });

      $("#three").click(function() {
            $("#three").css({"text-decoration": "underline","color":"#000"});
            $("#one, #two, #four").css("text-decoration", "none");
            $(".homeimage, #understand,#experience,#long").hide();
            $("#short").show();
      });

      $("#four").click(function() {
            $("#four").css({"text-decoration": "underline","color":"#000"});
            $("#one, #two, #three").css({"text-decoration": "none"});
            $(".homeimage, #understand,#experience,#short").hide();
            $("#long").show();
      });

});

$(document).scroll(function(){
      var y = $(document).scrollTop();
      var onetop = $('#exp_one').position().top
      var onebottom = $("#exp_one").position().top + $("#exp_one").outerHeight(true);
      var twotop = $('#exp_two').position().top
      var twobottom = $("#exp_two").position().top + $("#exp_two").outerHeight(true);
      var threetop = $('#exp_three').position().top
      var threebottom = $("#exp_three").position().top + $("#exp_three").outerHeight(true);
      var fourtop = $('#exp_four').position().top
      var fourbottom = $("#exp_four").position().top + $("#exp_four").outerHeight(true);
      if (y >=onetop && y<=onebottom){
            $("#exp_one").css("opacity","1");
            $(".leftmap").css({"background-image":"url(image/antarctica.svg)"});  
            $("#exp_two, #exp_three, #exp_four").css("opacity","0.5"); 
      }
      
      else if (y >= twotop && y<=twobottom){
            $("#exp_two").css("opacity","1");
            $(".leftmap").css({"background-image":"url(image/antarctica_2.svg)"});
            $("#exp_one, #exp_three, #exp_four").css("opacity","0.5");

      }
      else if (y >= threetop && y<=threebottom){
            $("#exp_three").css("opacity","1");
            $(".leftmap").css({"background-image":"url(image/antarctica_3.svg)"});
            $("#exp_one, #exp_two, #exp_four").css("opacity","0.5");

      }
      else if (y >= fourtop){
            $("#exp_four").css("opacity","1");
            $(".leftmap").css({"background-image":"url(image/antarctica_4.svg)"});
            $("#exp_one, #exp_two, #exp_three").css("opacity","0.5");

      }      

});
