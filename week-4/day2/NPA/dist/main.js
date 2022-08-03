const fetchBookData = function () {
  console.log("iiiiiiii");
  let input = $("#book-input").val();

  $.get(`/books/${input}`, function (bookData) {
    $("body").append(`<div>${bookData.title} - ${bookData.author}`);
  });
};
