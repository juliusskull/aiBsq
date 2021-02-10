'user strict';
var sql = require('../db.js');

//Post object constructor
var Post = function(Post){
	this.id = Post.id;
	this.red_id = Post.red_id;
	this.autor_id = Post.autor_id;
    this.titulo = Post.titulo;
	this.contenido = Post.contenido;   
    this.fchalta = Post.fchalta;
};
Post.createPost = function (newPost, result) {    
        sql.query("INSERT INTO Post set ?", newPost, function (err, res) {
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
Post.getPostById = function (PostId, result) {
        sql.query("Select id from Post where id = ? ", PostId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Post.getAllPost = function (result) {
        sql.query("Select * from Post", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Posts : ', res);  

                 result(null, res);
                }
            });   
};
Post.updateById = function(id, Post, result){
  sql.query("UPDATE Post SET nombre = ? WHERE id = ?", [Post.nombre, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Post.remove = function(id, result){
     sql.query("DELETE FROM Post WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Post;