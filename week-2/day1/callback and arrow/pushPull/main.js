const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};
const pushPull = (name, title) => console.log(title + name);

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"
