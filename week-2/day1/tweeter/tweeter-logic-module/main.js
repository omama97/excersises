let Tweeter = function () {
  let arrayOfPosts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 0;
  for (const objArray of arrayOfPosts) {
    postIdCounter = objArray.id.substring(1);
  }
  postIdCounter = parseInt(postIdCounter);
  let commentIdCounter = 0;
  // for (const itemObj of arrayOfPosts) {
  //   if (itemObj.id == postId) {
  //     let commentArray = itemObj.comments;
  //     console.log(commentArray);
  //     let lastElement = commentArray.pop();
  //     console.log(lastElement);
  //     const lastKey = Object.keys(lastElement);
  //     console.log(lastKey);
  // console.log(lastElement);

  // let commentIdCounter = parseInt(lastElement.id.substring(1));
  // commentIdCounter += 1;
  // itemObj.comments.push({ id: "c" + commentIdCounter, text: textTest });
  const getPosts = function () {
    console.log("getPosts");
    for (const post in arrayOfPosts) {
      const element = arrayOfPosts[post];
      console.log(element);
    }
  };

  const addPost = function (textTest) {
    console.log("addPost");
    postIdCounter++;
    arrayOfPosts.push({
      text: textTest,
      id: "p" + postIdCounter,
      comments: [],
    });
  };
  const removePost = function (postId) {
    console.log("removePost");
    postIdCounter--;

    arrayOfPosts = arrayOfPosts.filter((data) => data.id != postId);

    console.log(arrayOfPosts);
    console.log(postIdCounter);
  };
  const addComment = function (textTest, postId) {
    console.log("addComment");

    for (const objComment of arrayOfPosts) {
      console.log(objComment);
      if (objComment.id == postId) {
        commentIdCounter++;
        objComment.comments.push({
          id: "c" + commentIdCounter,
          text: textTest,
        });
      }
    }
  };

  const removeComment = function (postId, commentId) {
    commentIdCounter--;
    for (const iterator of arrayOfPosts) {
      if (iterator.id == postId) {
        let commentArray = iterator.comments;
        for (const commentitem of commentArray) {
          if (commentitem.id == commentId) {
            commentArray.filter((data) => data.id != commentId);
          }
        }
      }
    }
  };

  return {
    addPost: addPost,
    removePost: removePost,
    getPosts: getPosts,
    addComment: addComment,
    removePost: removePost,
    removeComment: removeComment,
  };
};

const tweeter = Tweeter();

tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1");
console.log(tweeter.getPosts());
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3");
tweeter.addComment("Second the best!", "p2");
console.log(tweeter.getPosts());
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
