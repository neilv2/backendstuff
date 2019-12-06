var express = require('express');
var router = express.Router({mergeParams: true});
var crud = require('../models/CRUD');
var mongo_crud = require('../models/MongoCRUD');
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request - exemplo: ?t=nametable - more info in www.mycrosan.com.br'
    }
};

router.get('/', function (req, res, next) {


    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }


    if (Object.keys(req.body).length != 0) {



        //if the request type is CRUD, do the CRUD operation
        if (req.body.ProcedureType == "CRUD"){
        crud.getByParams(req.body.parameters[0], req.query.t, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })}
        else if(req.body.ProcedureType == "MongoCRUD"){
          mongo_crud.getByParams(req.body.parameters[0], req.query.t, function (err, rows) {
              if (err) {
                  res.json(err);
              }
              else {
                  res.json(rows);
              }
        })}
        else {
            crud.procedure(req.body.ProcedureType, req.body.parameters, function (err, rows) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            })
        }
        ;


    }
    //if the get request did not have a body, get all.
    else {
        crud.get(req.query.t, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
})

router.post('/', function (req, res, next) {
    //errors
    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }

    //if the request type is CRUD, do the CRUD operation
    if (req.body.ProcedureType == "CRUD"){
    crud.insert(req.body.parameters[0], req.query.t, function (err, results) {
        //catch errors
        if (err) {
            res.json(err);
        }
        else {
            res.json({id: results.insertId, values: req.body.parameters[0]});//or return count for 1 &amp;amp;amp; 0
        }
    })}
    else if (req.body.ProcedureType == "MongoCRUD"){

        mongo_crud.insert(req.body.parameters[0], req.query.t, function (err, results) {
        //catch errors
        if (err) {
            res.json(err);
        }
        else {
            res.json({id: results.insertId, values: req.body.parameters[0]});//or return count for 1 &amp;amp;amp; 0
        }
    })}
    else if (req.body.ProcedureType == "MySQL_find"){
        if (req.body.parameters.length != 0){
        crud.getByParams(req.body.parameters[0], req.query.t, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {  
                res.json(rows);
            }
        })

        
    }
    else {
        crud.get(req.query.t, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    }
    else if(req.body.ProcedureType == "Mongo_find"){
          mongo_crud.getByParams(req.body.parameters[0], req.query.t, function (err, rows) {
              if (err) {
                  res.json(err);
              }
              else {
                  res.json(rows);
              }
        })}




    else{

        crud.procedure(req.body.ProcedureType, req.body.parameters, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }

    ;
});

router.delete('/', function (req, res, next) {


    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }


    //if the request type is CRUD, do the CRUD operation
    if (req.body.ProcedureType == "CRUD"){
    crud.delete(req.body.parameters[0], req.query.t, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {

            res.json({id: results.insertId, values: req.body.parameters[0]});
        }

    })}
    else if (req.body.ProcedureType == "MongoCRUD"){
    mongo_crud.delete(req.body.parameters[0], req.query.t, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {

            res.json({id: results.insertId, values: req.body.parameters[0]});
        }

    })}
    else{

        crud.procedure(req.body.ProcedureType, req.body.parameters, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
    ;
});

router.put('/', function (req, res, next) {

    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }


    //if the request type is CRUD, do the CRUD operation
    if (req.body.ProcedureType == "CRUD"){
    crud.update(req.body.parameters[1], req.query.t, req.body.parameters[0], function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(results);
        }
    })}
    else if (req.body.ProcedureType == "MongoCRUD"){
    mongo_crud.update(req.body.parameters[1], req.query.t, req.body.parameters[0], function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(results);
        }
    })}
    else{

        crud.procedure(req.body.ProcedureType, req.body.parameters, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }

    ;
});


module.exports = router;
