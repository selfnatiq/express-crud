const router = require('express').Router();
const People = require('../models/Crud-model');

router.get('/', async (req, res) => {
    try {
        const peoples = await People.find();
        res.render('index', { peoples, people: new People() });
    } catch (err) {
        console.log(err);
    }
    
});

router.post('/', async (req, res) => {
    try {
        await People.create(req.body);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await People.findOneAndDelete(id);
        res.json({cb: '/'});
    } catch (err) {
        console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const people = await People.findById(id);
        const peoples = await People.find();
        res.render('index', { peoples, people });
    } catch (err) {
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await People.findOneAndUpdate(id, req.body);
        res.json({cb: '/'});
    } catch (err) {
        console.log(err);
    }
})

module.exports= router;