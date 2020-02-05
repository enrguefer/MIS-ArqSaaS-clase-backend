var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActorSchema = new Schema({

    name: {
        type: String,
        required: 'Kindly enter the name of the actor'
    },
    surname: {
        type: String,
        required: 'Kindly enter the surname of the actor'
    },
    email: {
        type: String,
        required: 'Kindly enter the email of the actor'
    },
    password: {
        type: String,
        minLength: 5,
        required: 'Kindly enter the password of the actor'
    },
    address: {
        type: String,
        required: 'Kindly enter the address of the actor'
    },
    language: {
        type: String,
        default: 'es'
    },
    phone: {
        type: String,
        required: 'Kindly enter the phone of the actor'
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    validated: {
        type: Boolean,
        default: false
    },
    role: [{
        type: String,
        required: 'Kindly enter the role of the actor',
        enum: ['CUSTOMER','CLERK','ADMINISTRATOR']
    }]

},{strict: false, timestamps: true});

module.exports = mongoose.model ('Actors', ActorSchema);