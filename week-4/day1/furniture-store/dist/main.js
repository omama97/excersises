const fetchPriceData = function () {
  console.log("iiiiiiii");
  let input = $("#price-input").val();

  $.get(`/priceCheck/${input}`, function (priceObj) {
    $("body").append(`<div>${priceObj.price}`);
  });
};
