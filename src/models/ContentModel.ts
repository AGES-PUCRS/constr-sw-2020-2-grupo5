const mongoose = require('mongoose');

const ContentModel = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
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
})

mongoose.model('Content', ContentModel);