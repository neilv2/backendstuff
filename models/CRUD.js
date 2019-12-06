
var db = require('../dbconnection'); //reference of dbconnection.js
var Crud = {
    
    
    procedure: function(procedureName, parameters, callback){

        var str;

        var parsedInt; 
       


        if (parameters.length == 0){
            str= "CALL " + procedureName + "()";
            return db.query( str, callback);
        }


        //check for if parameter is an int, and concatenating passed arguments
        parsedInt = parseFloat(parameters[0].parameter);


        str= "CALL " + procedureName + "(";
        
        if (!isNaN(parsedInt))
        str+= parameters[0].parameter;
        else    
        str+="\""+parameters[0].parameter+"\"";

		for (let index = 1; index < parameters.length; index++) {
            parsedInt = parseFloat(parameters[index].parameter);
            if (!isNaN(parsedInt))
                str+=", "+parsedInt;
            else    
                str+=", \""+parameters[index].parameter+"\"";
                
        }   
        str += ")";
        return db.query( str, callback);
    },
    
    get: function (table, callback) {
        return db.query("SELECT * FROM " + table, callback);
    },
    getByParams: function (values, table, callback) {


        return db.query("SELECT * FROM " + table + " WHERE ?", [values], callback);
    },
    insert: function (values, table, callback) {
        return db.query("INSERT INTO " + table + " SET ?", [values], callback);
    },
    delete: function (values, table, callback) {
        return db.query("DELETE FROM " + table + " WHERE ?", [values], callback);
    },
    update: function (valuesB, table, valuesA, callback) {
        return db.query("UPDATE " + table + " SET ? WHERE ?", [valuesA, valuesB], callback);
    }
};
module.exports = Crud;