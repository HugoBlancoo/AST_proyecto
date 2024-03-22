const itemsCtrl = {}

const Item = require('../models/Item');


itemsCtrl.getItems = async (req, res) =>{
    const items = await Item.find()
    res.json(items)
    //console.log("getItems")
};
itemsCtrl.createItems = async (req, res) =>{
    for (const key in req.body) {
        if(req.body[key] ==='' || req.body[key] === null && key!= '_id'){
            req.body[key] = ' ';
        }
    }
    const newItem = new Item(req.body)
    await newItem.save()
    res.send({message: 'Item Created'})
};

itemsCtrl.getItem = async (req, res) => {
    try{
        const { id } = req.params; // Extract the id parameter  
        const item = await Item.findById(id); // Find the item by id
        res.json(item); // Send the item as JSON response
    }
    //console.log(item.length);
    catch (error) {
        console.error(error);
        res.status(500).send('Error fetching items');
    }
};

itemsCtrl.getItemByPrice = async (req, res) => {
    try{
        const { price } = req.params; // Extract the price parameter
        const item = await Item.find({price: parseFloat(price)}); // Find the item by price
        res.json(item); // Send the item as JSON response
    }
    catch (error) {
    console.error(error);
    res.status(500).send('Error fetching items');
    }
};

itemsCtrl.getItemByColor = async (req, res) =>{
    const color = req.params.color
    try {
        const items = await Item.find({ color: color });
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching items');
    }
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
