console.log("render");
import { getPosts, getPosts, arrayOfPosts } from "./logic.js";
console.log(arrayOfPosts);

let input = $("#input");
let post = $("#post");
let posts = $("#posts");
let title = $("#title");
let container = $("#container");

const renderer = function () {
  const renderPosts = function (arrayOfPosts) {
    $("#posts").empty();
    for (const postitem of posts) {
      $("posts").append(`<div data-id=${postitem.id}>${postitem.text}</div>`);
    }
  };

  renderer();
};
