'user strict';
var sql = require('../db.js');

//Reaccion object constructor
var Reaccion = function(Reaccion){
	this.id = Reaccion.id;	
	this.post_id = Reaccion.post_id;
	this.comentario_id = Reaccion.comentario_id;
	this.tipo_reaccion = Reaccion.tipo_reaccion;   
    this.fchalta = Reaccion.fchalta;
};
Reaccion.createReaccion = function (newReaccion, result) {    
        sql.query("INSERT INTO Reaccion set ?", newReaccion, function (err, res) {
            console.log("error: -----------");
                if(err) {
                    console.log("error: "+ err.message, err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Reaccion.getReaccionById = function (ReaccionId, result) {
        sql.query("Select id from Reaccion where id = ? ", ReaccionId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Reaccion.getAllReaccion = function (result) {
        sql.query("Select * from Reaccion", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Reaccions : ', res);  

                 result(null, res);
                }
            });   
};
Reaccion.updateById = function(id, Reaccion, result){
  sql.query("UPDATE Reaccion SET nombre = ? WHERE id = ?", [Reaccion.nombre, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Reaccion.remove = function(id, result){
     sql.query("DELETE FROM Reaccion WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Reaccion;