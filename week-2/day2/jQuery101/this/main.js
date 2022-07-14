$(".feedme").on("click", function () {
  let divCopy = $("body").append(divCopy); //use template literals and $(this)
});
$(".feedme").on("click", function () {
  let divCopy = `<div class=feedme> ${$(this).text()} </div>`;

  $("body").append(divCopy);
});

// Notice the two dollar signs:

// 1. The first is for the template literal - this allows us to combine text and variables easily
// 2. The second is our normal jQuery function that converts this into a jQuery object
