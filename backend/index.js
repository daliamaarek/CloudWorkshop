var apiai = require('apiai');
const express = require('express')
var cors = require('cors')
const serverApp = express()
var app = apiai("8e8734539f7a4f5b9aca18477baab3ea");
var bodyParser = require('body-parser');
const port = process.env.VCAP_APP_PORT || 3000;

serverApp.use(bodyParser.json()); // support json encoded bodies
serverApp.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

serverApp.use(cors());

serverApp.get('', function (req, res) {
  console.log("GETTING")
  var request = app.textRequest('req', {
      sessionId: '<unique session id>'
  });


  request.on('response', function(response) {
    // var speech = response.result['fulfillment']['speech']
    console.log(response.result['fulfillment']['speech']);
    res.send({message : response.result['fulfillment']['speech']});
  });

  request.on('error', function(error) {
    console.log(error);
    res.send(error);
  });

  request.end();
  // res.status(200).send({message: "this is the message"})

})

serverApp.post('/', function (req, res) {
  console.log("REQ MESSAGE: "+ JSON.stringify(req.body.message));

  var request = app.textRequest(req.body.message, {
      sessionId: '<unique session id>'
  });


  request.on('response', function(response) {
    // var speech = response.result['fulfillment']['speech']
    console.log(response.result['fulfillment']['speech']);
    res.send({message: response.result['fulfillment']['speech']});
  });

  request.on('error', function(error) {
    console.log("ERROR: " + error);
    res.send(error);
  });

  request.end();

})


serverApp.listen(port, () => {
  console.log('App listening on port ' +port);
})

module.exports = {serverApp}
