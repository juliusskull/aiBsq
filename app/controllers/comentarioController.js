'use strict';

var Comentario = require('../model/comentarioModel.js');

exports.list_all_Comentarios = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Comentario successfully' });
  
  Comentario.getAllComentario(function(err, Comentario) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Comentario);
    res.send(Comentario);
  });
  
};



exports.create_a_Comentario = function(req, res) {
  var new_Comentario = new Comentario(req.body);

  //handles null error 
  /*
   if(!new_Comentario.Comentario || !new_Comentario.status){

            res.status(400).send({ error:true, message: 'Please provide Comentario/status' });

        }
else{
  */
  Comentario.createComentario(new_Comentario, function(err, Comentario) {
    
    if (err)
      res.send(err);
    res.json(Comentario);
  });
//}
};


exports.read_a_Comentario = function(req, res) {
  Comentario.getComentarioById(req.params.id, function(err, Comentario) {
    if (err)
      res.send(err);
    res.json(Comentario);
  });
};


exports.update_a_Comentario = function(req, res) {
  Comentario.updateById(req.params.id, new Comentario(req.body), function(err, Comentario) {
    if (err)
      res.send(err);
    res.json(Comentario);
  });
};


exports.delete_a_Comentario = function(req, res) {


  Comentario.remove( req.params.id, function(err, Comentario) {
    if (err)
      res.send(err);
    res.json({ message: 'Comentario successfully deleted' });
  });
};
