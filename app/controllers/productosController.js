'use strict';

var Pedidos = require('../model/PedidosModel.js');

exports.list_all_Pedidoss = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Pedidos successfully' });
  
  Pedidos.getAllPedidos(function(err, Pedidos) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Pedidos);
    res.send(Pedidos);
  });
  
};

exports.list_all_PedidossApp = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Pedidos successfully' });
  
  Pedidos.getAllPedidosApp(req.params.app,function(err, Pedidos) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Pedidos);
    res.send(Pedidos);
  });
  
};



exports.create_a_Pedidos = function(req, res) {
  var new_Pedidos = new Pedidos(req.body);

  //handles null error 
  /*
   if(!new_Pedidos.Pedidos || !new_Pedidos.status){

            res.status(400).send({ error:true, message: 'Please provide Pedidos/status' });

        }
else{
  */
  Pedidos.createPedidos(new_Pedidos, function(err, Pedidos) {
    
    if (err)
      res.send(err);
    res.json(Pedidos);
  });
//}
};


exports.read_a_Pedidos = function(req, res) {
  Pedidos.getPedidosById(req.params.PedidosId, function(err, Pedidos) {
    if (err)
      res.send(err);
    res.json(Pedidos);
  });
};
exports.read_a_Pedidos_usuario = function(req, res) {
  Pedidos.getPedidosByUsuario(req.params.usuarioId, function(err, Pedidos) {
    if (err)
      res.send(err);
  
    res.json(Pedidos);
  });
};

exports.update_a_Pedidos = function(req, res) {
  Pedidos.updateById(req.params.id, new Pedidos(req.body), function(err, Pedidos) {
    if (err)
      res.send(err);
    res.json(Pedidos);
  });
};

exports.caducar_a_Pedidos = function(req, res) {
  Pedidos.caducarById(req.params.id, new Pedidos(req.body), function(err, Pedidos) {
    if (err)
      res.send(err);
    res.json(Pedidos);
  });
};

exports.delete_a_Pedidos = function(req, res) {


  Pedidos.remove( req.params.id, function(err, Pedidos) {
    if (err)
      res.send(err);
    res.json({ message: 'Pedidos successfully deleted' });
  });
};
