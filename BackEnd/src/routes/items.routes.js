const{Router} = require('express');
const router = Router();

const itemsCtrl = require('../controllers/items.controller.js');
//const { ifError } = require('assert');

//CRUD
//CREATE - READ - UPDATE - DELETE


router.get('/', itemsCtrl.getItems);
router.post('/', itemsCtrl.createItems);
router.get('/:id', itemsCtrl.getItem);
router.put('/:id', itemsCtrl.updateItems);
router.delete('/:id', itemsCtrl.deleteItems);

module.exports = router;