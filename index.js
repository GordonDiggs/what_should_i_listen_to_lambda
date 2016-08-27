const env = require("node-env-file");

env(`${__dirname}/.env`);
process.env.NODE_CONFIG_DIR = "/var/task/config";

const twilio = require("twilio")(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
    , getJSON = require("get-json");

const getRecord = function(callback) {
  getJSON("https://rayons.info/items/random.json", function(err, item) {
    if (err) {
      console.log("got an error: ", err);
      callback(null);
    } else {
      const itemURL = `https://rayons.info/items/${item.id}`;
      callback(`You should listen to "${item.title}" by ${item.artist}: ${itemURL}`);
    }
  });
};

const sendSMS = function(message, callback) {
  twilio.sendMessage(
    {
      body: message,
      from: process.env.FROM_NUMBER,
      to: process.env.TO_NUMBER
    },
    function(err, responseData) {
      console.log("Twilio response:", responseData);
      if (err) {
        callback("API request completed with error(s).");
      } else {
        callback("API request sent successfully.");
      }
    }
  );
};

exports.handler = function (event, context) {
  getRecord(function(message) {
    if (message) {
      sendSMS(message, function(status) {
        context.done(null, status);
      });
    } else {
      context.done();
    }
  });
};
