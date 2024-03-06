const { Schema, model}= require('mongoose')

const itemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
    color: {type: String, require:true},
    electric: {type: String, require:true},
    shape: {type: String, require:false},
    space: {type: String, require:true},
    quantity: {type: String, require: true},

}, { 
    timestamps: true,
    versionKey: false
})

module.exports = model('Item', itemSchema);
