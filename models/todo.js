const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required : true
    },

    category: {
        type: String,
        required : true
    },

    dueD: {
        type: String,
        required: true
    }

})

const Todo = mongoose.model('TodoLists', todoSchema); // Sending contactScheme data to Contact

module.exports = Todo; // To export this data
