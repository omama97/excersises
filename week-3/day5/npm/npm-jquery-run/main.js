$("body").append(
  `<div class="divr" style="color:white; background:black;width:100px;hight:100px;"> hello </p>`
);

$(".divr").on("click", function () {
  console.log("llllllllll");
  $(".divr").css("color", "blue");

  $.ajax({
    url: "http://data.nba.net/10s/prod/v1/2016/players.json",
    dataType: "json",
    success: (user) => console.log(user._internal),
    error: "Uh oh, something has gone wrong.",
  });
});
