'use strict';

var Reaccion = require('../model/reaccionModel.js');

exports.list_all_Reaccions = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Reaccion successfully' });
  
  Reaccion.getAllReaccion(function(err, Reaccion) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Reaccion);
    res.send(Reaccion);
  });
  
};



exports.create_a_Reaccion = function(req, res) {
  var new_Reaccion = new Reaccion(req.body);

  //handles null error 
  /*
   if(!new_Reaccion.Reaccion || !new_Reaccion.status){

            res.status(400).send({ error:true, message: 'Please provide Reaccion/status' });

        }
else{
  */
  Reaccion.createReaccion(new_Reaccion, function(err, Reaccion) {
    
    if (err)
      res.send(err);
    res.json(Reaccion);
  });
//}
};


exports.read_a_Reaccion = function(req, res) {
  Reaccion.getReaccionById(req.params.id, function(err, Reaccion) {
    if (err)
      res.send(err);
    res.json(Reaccion);
  });
};


exports.update_a_Reaccion = function(req, res) {
  Reaccion.updateById(req.params.id, new Reaccion(req.body), function(err, Reaccion) {
    if (err)
      res.send(err);
    res.json(Reaccion);
  });
};


exports.delete_a_Reaccion = function(req, res) {


  Reaccion.remove( req.params.id, function(err, Reaccion) {
    if (err)
      res.send(err);
    res.json({ message: 'Reaccion successfully deleted' });
  });
};
