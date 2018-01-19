
const mongoose = require('mongoose');

const Teacher = require('../models/teacherModel');

const teacherCreate = (req, res) => {
    const {name, websites, picture, bio, events, studios, classes, tags} = req.body;
    const newTeacher = new Teacher({name, websites, picture, bio, events, studios, classes, tags});
    newTeacher.save( newTeacher, (err, newTeacher) => {
        if(err) {
            res.status(500)
            res.json({errorMessage: err.message});
            return;
        }
        res.json(newTeacher);
    });
};

const teacherGetALL = (res, req) => {
    Teacher.find({})
    .then(teachers => {
        res.json(teachers);
    })
    .catch (err => res.status(422).json(err));
};

const teacherFilter = (req, res) => {
    Teacher.find({$and:
        [ {name : { $eq : req.query.name}},
         {studios : { $eq: req.query.studios}},
         {tags : { $eq: req.query.tags}},
         ]})
    .then (teachers => {
        res.json(teachers);
    })
    .catch (err = res.status(422).json(err));
};

module.exports = {
    teacherCreate,
    teacherGetALL,
    teacherFilter
}