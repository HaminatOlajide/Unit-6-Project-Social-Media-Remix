       $(".suggest1").hide();
       $(".foryou").hide();
       $(".famenames1").hide();
       $(".suggest2").hide();
       $(".up").hide();
       $(".down").hide();
       $(".famenames2").hide();


       $(".follow").click(function() {
           $(".follow").show();
           $(".follow").css("background-color", "grey");
           $(".follow").text("Unfollow");
       });
       $(".follow").dblclick(function() {
           $(".follow").show();
           $(".follow").css("background-color", "blue");
           $(".follow").text("Follow");

       });

       $(".press").mouseenter(function() {
           $(".friends1").slideDown();
       });

       $(".press").click(function() {
           $(".friends1").hide();
       });

       $(".suggest").click(function() {
           $(".suggest").text("^");
           $(".foryou").show();
           $(".suggest1").slideDown();
           $(".famenames1").show();
           $(".followbutton").show();
           $(".up").show();

       });

       $(".suggest").dblclick(function() {
           $(".suggest").text("ˇ");
           $(".foryou").hide();
           $(".suggest1").slideUp();
           $(".famenames1").hide();
           $(".up").hide();

       });

       $(".up").click(function() {
           $(".suggest1").hide();
           $(".famenames1").hide();
           $(".up").text("^");
           $(".suggest2").show();
           $(".famenames2").show();

       });

       $(".up").dblclick(function() {
           $(".suggest1").show();
           $(".famenames1").show();
           $(".up").text("ˇ");
           $(".suggest2").hide();
           $(".famenames2").hide();

       });