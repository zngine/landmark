config = {
  "env" : {
    "master" : false,
    "type" : {
      "mongo" : false,
      "ds" : false,
      "web" : false,
      "api" : false,
      "oms" : false,
      "redis" : false,
      "lb" : false
    },
    "port" : 1337,
    "hostname" : "Pierce_MBP.local"
  },
  "build" : {
    "js" : {
      "outfile" : "zngine.js",
      "minify" : true
    },
    "css" : {
      "outfile" : "zngine.css",
      "minify" : true
    },
    "test" : true
  },
  "deploy" : {
    //
  },
  "servers" : {
    "mongo" : [
      "123.45.67.89:1337",
      "234.56.78.90:1337",
      "173.113.241.98:1337"
    ],
    "ds" : [
      "12.34.56.78:1337"
    ],
    "web" : [
      "98.76.54.321:1337"
    ],
    "redis" : [
      "14.91.233.19:1337"
    ],
    "api" : [
      "51.123.92.623:1337"
    ],
    "email" : [
      "81.318.137.182:1337"
    ]
  }
}

module.exports = config