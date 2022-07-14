// $(".btn").on("click", () => {
//   alert($(this).closest(".container").find(".username").val());
// });

// $(".btn").on("click", function () {
//   alert($(this).closest(".container").find(".username").val());
// });
//JS

// $(".generator").on("click", function () {
//   let processor = $(this).closest(".processor").attr("id");
//   let dataId = $(this).closest(".computer").data().id;
//   let busNum = $(this).closest(".computer").find(".BUS").text();

//   console.log(
//     `Processor ID: ${processor}\nComputer's data-id: ${dataId}\nBUS: ${busNum}`
//   );
// });

// $(".validator").on("click", function () {
//   let generatorText = $(this).closest(".computer").find(".generator").text();
//   let mb = $(this).closest(".computer").find(".MB").text();
//   let qr1 = $(this).closest(".computer").find(".QR:first-child").text();
//   let qr2 = $(this).closest(".computer").find(".QR:nth-child(2)").text();
//   //  let qr1 = $(this).closest(".computer").find(".QR")[0].text();

//   console.log(`Text: ${generatorText}\nMB: ${mb}\nQR 1: ${qr1}\nQR 2: ${qr2}`);
// });

$(".generator").on("click", function name() {
  let processorID = $(this).closest(".processor").attr("id");
  let dataId = $(this).closest(".computer").data().id;
  let bUSNumber = $(this).closest(".computer").find(".BUS").text();
  console.log(
    `processorID =${processorID}\n DataId =${dataId}\n bUSNumber=${bUSNumber}`
  );
});

$(".validator ").on("click", function names() {
  let generator = $(this).closest(".computer").find("generator").text();

  let MB = $(this).closest(".computer").find(".MB").text();
  let QR1 = $(this).closest(".computer").find(".QR:first-child").text();
  let QR2 = $(this).closest(".computer").find(".QR:nth-child(2)").text();
  console.log(`generator= ${generator}\nMB= ${MB}\n QR1=${QR1}\n QR2=${QR2}`);
});
