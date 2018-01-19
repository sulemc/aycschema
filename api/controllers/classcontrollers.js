const mongoose = require('mongoose');

const Class = require('../models/classModel');

const classCreate = (req, res) => {
    const {startTime, endTime, day, style, teacher, studio, tags} = req.body;
    const newClass = new Class({startTime, endTime, day, style, teacher, studio, tags});
    newClass.save( newClass, (err, newClass) => {
        if(err) {
            res.status(500)
            res.json({errorMessage: err.message});
            return;
        }
        res.json(newClass);
    });
};

function today (){
    const today = new Date();
    const check = today.getDay();
    return check;
}

const classGetToday = (req, res) => {
   const check = today();
    Class.find({day: { $eq: check}})
    .then(classes => {
        res.json(classes);
    })
    .catch (err => res.status(422).json(err));
};

const classFilter = (req, res) => {
    Class.find({$and:
        [ {startTime : { $eq : req.query.startTime}},
         {endTime : { $eq: req.query.endTime}},
         {day : { $eq: req.query.day}},
         {style : {$eq : req.query.style}},
         {teacher : {$eq : req.query.teacher}},
         {tags : { $eq : req.query.tags}}
         ]})
    .then (classes => {
        res.json(classes);
    })
    .catch (err = res.status(422).json(err));
};


module.exports = {
    classCreate,
    classGetToday,
    classFilter
}