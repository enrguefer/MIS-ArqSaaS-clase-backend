'use strict';

var mongoose = require('mongoose'),
Actor = mongoose.model('Actors');

exports.list_all_actors = function(req, res){
    Actor.find({}, function(err, actors){
        if(err){
                console.log(err);
                console.log(Date() + ` ERROR: -GET /actors , Some error occurred while retrieving actors`);
            res.send(err);
        }else{
            res.json(actors);
        }
    });
}

exports.create_an_actor = function(req, res){
    var new_actor = new Actor(req.body)
    new_actor.save(function(err, actor){
        if(err){
                console.log(err);
                console.log(Date() + ` ERROR: -POST /actors , Some error occurred while saving the actor: ${new_actor}`);
            res.send(err);
        }else{
            res.json(actor);
        }
    });
}

exports.read_an_actor = function(req, res){
    Actor.findById(req.params.actorId, function(err, actor){
        if(err){
                console.log(err);
                console.log(Date() + ` ERROR: -GET /actors/:actorId , Some error occurred while retrieving the actor with id: ${req.params.actorId}`);
            res.send(err);
        }else{
            res.json(actor);
        }
    });
}

exports.update_an_actor = function(req, res){
    Actor.findOneAndUpdate({_id:req.params.actorId}, req.body, {new:true},
        function(err, actor){
            if(err){
                console.log(err);
                console.log(Date() + ` ERROR: -PUT /actors/:actorId , Some error occurred while updating the actor with id: ${req.params.actorId}`);
                res.send(err);
            }else{
                res.json(actor);
            }
    });
}

exports.delete_an_actor = function(req, res){
    Actor.remove({_id:req.params.actorId}, req.body, {new:true},
        function(err, actor){
            if(err){;
                console.log(err);
                console.log(Date() + ` ERROR: -DELETE /actors/:actorId , Some error occurred while deleting the actor with id: ${req.params.actorId}`);
                res.send(err);
            }else{
                res.json({ message: 'Actor successfully deleted'});
            }
    });
}