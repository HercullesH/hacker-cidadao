var express = require('express');
var router = express.Router();
const db = require("../database/models/index");

// router.get('/findAll', agendamento.findAll);

router.get('/', (req,res) =>{
    res.send({message: 'funcionou'});
});

router.post('/', async (req,res) =>{
    try {
        const user = await db.User.create(req.body);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

router.post('/persons',async (req,res) =>{
    try {
        user = await db.User.findByPk(req.body.userId);
         db.Person.create({name:req.body.person.name}).then(section => {
            user.setPerson(section);
            res.status(201).send(section);
          })
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;