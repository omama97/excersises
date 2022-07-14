const getTime = function (a) {
  const time = new Date();
  a(time);
};

const returnTime = function (time) {
  alert("The current time is: " + time);
};

getTime(returnTime);
