var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { userID: '1', PlanName: 'A', PlanID: '12', ActivityIDs: '121'},
    { userID: '2', PlanName: 'B', PlanID: '23', ActivityIDs: '122'},
    { userID: '3', PlanName: 'C', PlanID: '34', ActivityIDs: '123'},
    { userID: '4', PlanName: 'D', PlanID: '45', ActivityIDs: '124'},
    { userID: '5', PlanName: 'E', PlanID: '56', ActivityIDs: '125'},
    { userID: '6', PlanName: 'F', PlanID: '67', ActivityIDs: '126'},
    { userID: '7', PlanName: 'G', PlanID: '78', ActivityIDs: '127'},
    { userID: '8', PlanName: 'H', PlanID: '89', ActivityIDs: '128'},
    { userID: '9', PlanName: 'I', PlanID: '90', ActivityIDs: '129'},
    { userID: '10', PlanName: 'J', PlanID: '01', ActivityIDs: '130'}
  ];

  //Create collection
  dbo.createCollection("plans", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });


  //Find all of a user's "plans" based on their username
  dbo.collection("plans").find({}, {match: userID = }, {projection: {_id: 0, userID: 1, PlanName: 1, PlanID: 1, ActivityIDs: 1}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });


  //Insert activities into a specific plan (this can be by index or by name)
  var myobj = ; //User input goes here for the specific plan
  dbo.collection("plans").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

  //Delete activities from a specific plan
  var myquery = ; // User input goes here
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });

  //Delete a plan by name
  var myquery = ; // User input goes here
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
