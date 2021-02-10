'use strict';

var Autor = require('../model/autorModel.js');

exports.list_all_Autors = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Autor successfully' });
  
  Autor.getAllAutor(function(err, Autor) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Autor);
    res.send(Autor);
  });
  
};



exports.create_a_Autor = function(req, res) {
  var new_Autor = new Autor(req.body);

  //handles null error 
  /*
   if(!new_Autor.Autor || !new_Autor.status){

            res.status(400).send({ error:true, message: 'Please provide Autor/status' });

        }
else{
  */
  Autor.createAutor(new_Autor, function(err, Autor) {
    
    if (err)
      res.send(err);
    res.json(Autor);
  });
//}
};


exports.read_a_Autor = function(req, res) {
  Autor.getAutorById(req.params.id, function(err, Autor) {
    if (err)
      res.send(err);
    res.json(Autor);
  });
};


exports.update_a_Autor = function(req, res) {
  Autor.updateById(req.params.id, new Autor(req.body), function(err, Autor) {
    if (err)
      res.send(err);
    res.json(Autor);
  });
};


exports.delete_a_Autor = function(req, res) {


  Autor.remove( req.params.id, function(err, Autor) {
    if (err)
      res.send(err);
    res.json({ message: 'Autor successfully deleted' });
  });
};
