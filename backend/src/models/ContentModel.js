const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requires: true
    },
    material: {
        type: Array,
        required: false
    },
    
    bibliography: {
        type: Array,
        requires: false
    },

    aulas: {
        type: Array,
        requires: false,
    }
})

module.exports = mongoose.model('Content', ContentSchema);