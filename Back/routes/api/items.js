const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET all items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create an item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    // saves to database
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc DELETE an item
router.delete('/:id', (req, res) => {
    // req.params.id fetches id from the uri
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;