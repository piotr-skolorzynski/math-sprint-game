const mongodb = require("mongodb");

//mongoDB client
const MongoClient = mongodb.MongoClient;

//set connection
MongoClient.connect(
  "mongodb+srv://pskolorzynski:@Mleko-1234!@cluster-math-sprint-gam.zw3gjcx.mongodb.net/?retryWrites=true&w=majority"
)
  .then((result) => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
