const mongodb = require("mongodb");

//mongoDB client
const MongoClient = mongodb.MongoClient;

let _db;

//create function to connect into DB
//as argument takes callback to handle received client after setting up connection
const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://pskolorzynski:@Mleko-1234!@cluster-math-sprint-gam.zw3gjcx.mongodb.net/games?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      //connect with db, if not exist will be created
      _db = client.db();
      callback(client)
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

