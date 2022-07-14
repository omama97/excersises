function hello() {
  alert($("input").val());
}
$("button").on("click", hello);
