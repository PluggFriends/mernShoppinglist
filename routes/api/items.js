const express = require('express');
const item = require('../../models/Item');
const router = express.Router();

const Item = require('../../models/Item'); //import Item model

//@route GET api/items
//@desc Get all items
//@access Public
router.get('/', (req, res) => {   //find() gives us a promise, fetches items
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//@route POST api/items
//@desc Create an item
//@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item));
})

//@route DELETE api/items/:id
//@desc Delete an item
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true }))
        ).catch(err => res.status(404).json({ success: false }));
})

module.exports = router;
