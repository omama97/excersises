console.log("hiiiiiiiiiiiiii");
let people = [
  { name: "sally", old: 20 },
  { name: "omama", old: 24 },
];

const render = function name(people) {
  const source = $("#post-template").html();
  console.log(source);
  const Template = Handlebars.compile(source);
  console.log(Template);

  for (let person of people) {
    let someHtml = Template(person);
    console.log(someHtml);
    $(".post").append(someHtml);
  }
};
render(people);
