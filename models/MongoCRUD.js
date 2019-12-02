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
  dbo.createCollection("plans", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
