const mongoose = require('mongoose');

const Studio = require('../models/studioModel');

const studioCreate = (req, res) => {
    const { name,
            website,
            address,
            picture,
            cost,
            events,
            guestEvents,
            teachers,
            classes,
            tags
    } = req.body;

    const newStudio = new Studio(
        {name,
        website,
        address,
        picture,
        cost,
        events,
        guestEvents,
        teachers,
        classes,
        tags})
    newStudio.save( newStudio, (err, newStudio) =>{
        if(err) {
            res.status(500)
            res.json({errorMessage: err.message});
            return;
        }
        res.json(newStudio);
    });
};

module.exports = {
    studioCreate
}