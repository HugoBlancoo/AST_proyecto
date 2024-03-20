const itemsCtrl = {}

const Item = require('../models/Item');


itemsCtrl.getItems = async (req, res) =>{
    const items = await Item.find()
    res.json(items)
    console.log("getItems")
};
itemsCtrl.createItems = async (req, res) =>{
    const newItem = new Item(req.body)
    await newItem.save()
    res.send({message: 'Item Created'})
};

itemsCtrl.getItem = async (req, res) => {
    const { id } = req.params; // Extract the id parameter
    
    const item = await Item.findById(id); // Find the item by id
    res.json(item); // Send the item as JSON response
    console.log(item.length);
};

itemsCtrl.updateItems = async(req, res) =>{
    await Item.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Item updated'});
};
itemsCtrl.deleteItems = async (req, res) =>{
    await Item.findByIdAndDelete(req.params.id)
    res.json({status: 'Item Deleted'});
};

module.exports = itemsCtrl; 