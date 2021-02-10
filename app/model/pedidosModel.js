'user strict';
var sql = require('../db.js');

//Pedidos object constructor
var Pedidos = function(Pedidos){
    this.id = Pedidos.id;
    this.id_producto = Pedidos.id_producto;
    this.id_usuario = Pedidos.id_usuario;
    this.id_cadete = (Pedidos.id_cadete)?Pedidos.id_cadete:null;

};
Pedidos.createPedidos = function (newPedidos, result) {    
        sql.query("INSERT INTO Pedidos set ?", newPedidos, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Pedidos.getPedidosById = function (PedidosId, result) {
        sql.query("select * from pedidos where id=? ", PedidosId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });
};
Pedidos.getPedidosByUsuario = function (UsuarioId, result) {
    sql.query("select * from pedidos where id_usuario=?", UsuarioId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Pedidos.getAllPedidos = function (result) {
        sql.query("Select * from Pedidos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Pedidoss : ', res);  

                 result(null, res);
                }
            });   
};
Pedidos.updateById = function(id, Pedidos, result){
  sql.query("UPDATE Pedidos SET nro_Pedidos = ? WHERE id = ?", [Pedidos.Pedidos, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Pedidos.remove = function(id, result){
     sql.query("DELETE FROM Pedidos WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Pedidos;