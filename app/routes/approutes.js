'use strict';
module.exports = function(app) {
  
  var jwt = require('jsonwebtoken');
  
  const fileUpload = require('express-fileupload')
  
var autorList = require('../controllers/autorController');
var postList = require('../controllers/postController');
var comentarioList = require('../controllers/comentarioController');
var reaccionList = require('../controllers/reaccionController');

  app.route('/autor')
    .get(autorList.list_all_Autors)
    .post(autorList.create_a_Autor);
	
  app.route('/post')
    .get(postList.list_all_Posts)
    .post(postList.create_a_Post);
  
  app.route('/comentario')
    .get(comentarioList.list_all_Comentarios)
    .post(comentarioList.create_a_Comentario);

  app.route('/reaccion')
    .get(reaccionList.list_all_Reaccions)
    .post(reaccionList.create_a_Reaccion);
	
  

  };