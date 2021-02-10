'use strict';

var Post = require('../model/postModel.js');

exports.list_all_Posts = function(req, res) {
  console.log('res aqui');
 // res.json({ message: 'Post successfully' });
  
  Post.getAllPost(function(err, Post) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Post);
    res.send(Post);
  });
  
};



exports.create_a_Post = function(req, res) {
  var new_Post = new Post(req.body);

  //handles null error 
  /*
   if(!new_Post.Post || !new_Post.status){

            res.status(400).send({ error:true, message: 'Please provide Post/status' });

        }
else{
  */
  Post.createPost(new_Post, function(err, Post) {
    
    if (err)
      res.send(err);
    res.json(Post);
  });
//}
};


exports.read_a_Post = function(req, res) {
  Post.getPostById(req.params.id, function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};


exports.update_a_Post = function(req, res) {
  Post.updateById(req.params.id, new Post(req.body), function(err, Post) {
    if (err)
      res.send(err);
    res.json(Post);
  });
};


exports.delete_a_Post = function(req, res) {


  Post.remove( req.params.id, function(err, Post) {
    if (err)
      res.send(err);
    res.json({ message: 'Post successfully deleted' });
  });
};
