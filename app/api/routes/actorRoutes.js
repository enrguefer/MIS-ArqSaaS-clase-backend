'use strict';
var actors = require('../controllers/actorController');

module.exports = function(app) {

    app.get('/',(req,res) => {
        res.send('Welcome to ACME-Market API!');
    })
    
    app.route('/actors')
        .get(actors.list_all_actors)
        .post(actors.create_an_actor)

    app.route('/actors/:actorId')
        .get(actors.read_an_actor)
        .put(actors.update_an_actor)
        .delete(actors.delete_an_actor)
}