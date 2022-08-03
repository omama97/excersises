const complaintType = require("./consts");
let complaints = complaintType.complaints;

let complaint = { text: "string", type: complaintType.FINANCE };

const handleComplaints = function (complaint) {
  if (complaint.type === c.complaints.FINANCE) {
    return console.log("Money doesn't grow on trees, you know.");
  } else if (complaint.type === c.complaints.WEATHER) {
    return console.log("It is the way of nature. Not much to be done.");
  } else if (complaint.type === c.complaints.EMOTIONS) {
    return console.log("It'll pass, as all things do, with time.");
  }
};

module.exports.handleComplaint = handleComplaints;
