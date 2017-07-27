const soap = require('soap');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const config = require('../config');
const app = express();

const soapHeader = `<AccessToken><TokenValue>${config.source.accessToken}</TokenValue></AccessToken>`;

app.use(bodyParser.json());

// GetArrivalBoard
router.post('/getArrivalBoard', (req, res) => {
  soap.createClient(config.source.soapUrl, (err, client) => {
    client.addSoapHeader(soapHeader);
    client.GetArrivalBoard(req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.json(result);
      }
    });
  });
});

// GetServiceDetails
router.post('/getServiceDetails', (req, res) => {
  soap.createClient(config.source.soapUrl, (err, client) => {
    client.addSoapHeader(soapHeader);
    client.GetServiceDetails(req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.json(result);
      }
    });
  });
});

app.use(config.server.routePrefix, router);

app.listen(config.server.port, () => {
  console.log(`listening at ${config.server.port}`);
});
