Steps to run the server:

- npm i
- npm start

config.js defines accessToken, soap URL, route prefix and the server port.

Default routes are:

http://localhost:8080/api/getArrivalBoard

```
Request: POST
Content-Type: application/json
Raw payload: {
    "numRows": 10,
    "crs":"LDS",
    "timeWindowInMins": 120
}
```

http://localhost:8080/api/getServiceDetails
```
Request: POST
Content-Type: application/json
Raw payload: {
    "numRows": 3,
    "crs":"LDS",
    "timeWindowInMins": 120,
    "serviceID": "lZ2ciXjR/Lq0Z8xI4O0E3A=="

}
```

You can use: Advanced REST client to test requests:

https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo