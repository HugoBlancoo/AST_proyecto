const { Schema, model}= require('mongoose')

const itemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: true},
}, { 
    timestamps: true,
    versionKey: false
})

module.exports = model('Item', itemSchema);
