$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");

    var stepNumber = $(this).index() + 1;
    var progressBarWidth =
      (stepNumber - 1) * (100 / $(".step").length) + "%";
    $("#line-progress").css("width", progressBarWidth);

    $(".section-content").removeClass("active");
    $(".section-content." + stepNumber).addClass("active");
  });

  $(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
  });

  $(".step01").click(function () {
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
  });

  $(".step02").click(function () {
    $("#line-progress").css("width", "23%");
    $(".strategy").addClass("active").siblings().removeClass("active");
  });

  $(".step03").click(function () {
    $("#line-progress").css("width", "45%");
    $(".creative").addClass("active").siblings().removeClass("active");
  });

  $(".step04").click(function () {
    $("#line-progress").css("width", "65%");
    $(".production").addClass("active").siblings().removeClass("active");
  });

  $(".step05").click(function () {
    $("#line-progress").css("width", "87%");
    $(".analysis").addClass("active").siblings().removeClass("active");
  });

  $(".step06").click(function () {
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active").siblings().removeClass("active");
  });