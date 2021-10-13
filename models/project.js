// Import mongoose
const mongoose = require('mongoose');

// create a definition object using mapping notation
const schemaDefinition = {
    name:{
        type: String,
        required: true
    },
    duedate:{
        type: Date
    },
    course:{
        type: String,
        required: true
    },
    status:{
        type:String,
        defult: 'To do'
    }
}

// creat a schema using definition object
let schemaObject = new mongoose.Schema(schemaDefinition);

// create model using schema and exports it
module.exports = mongoose.model('Project', schemaObject);

