const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
t;
const logData = function (data) {
  console.log(data);
};

displayData(alert, logData, "I like to party");
