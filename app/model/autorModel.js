'user strict';
var sql = require('../db.js');

//Autor object constructor
var Autor = function(Autor){
    this.nombre = Autor.nombre;
    this.id = Autor.id;
    this.fchalta = Autor.fchalta;
};
Autor.createAutor = function (newAutor, result) {    
        sql.query("INSERT INTO Autor set ?", newAutor, function (err, res) {
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
Autor.getAutorById = function (AutorId, result) {
        sql.query("Select id from Autor where id = ? ", AutorId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Autor.getAllAutor = function (result) {
        sql.query("Select * from Autor", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Autors : ', res);  

                 result(null, res);
                }
            });   
};
Autor.updateById = function(id, Autor, result){
  sql.query("UPDATE Autor SET nombre = ? WHERE id = ?", [Autor.nombre, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Autor.remove = function(id, result){
     sql.query("DELETE FROM Autor WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Autor;