'user strict';
var sql = require('../db.js');

//Comentario object constructor
var Comentario = function(Comentario){
	this.id = Comentario.id;	
	this.autor_id = Comentario.autor_id;
	this.comentario_id = Comentario.comentario_id;
	this.contenido = Comentario.contenido;   
    this.fchalta = Comentario.fchalta;
};
Comentario.createComentario = function (newComentario, result) {    
        sql.query("INSERT INTO Comentario set ?", newComentario, function (err, res) {
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
Comentario.getComentarioById = function (ComentarioId, result) {
        sql.query("Select id from Comentario where id = ? ", ComentarioId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Comentario.getAllComentario = function (result) {
        sql.query("Select * from Comentario", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Comentarios : ', res);  

                 result(null, res);
                }
            });   
};
Comentario.updateById = function(id, Comentario, result){
  sql.query("UPDATE Comentario SET nombre = ? WHERE id = ?", [Comentario.nombre, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Comentario.remove = function(id, result){
     sql.query("DELETE FROM Comentario WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Comentario;