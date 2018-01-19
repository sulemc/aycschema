

const studioControllers = require('../controllers/studiocontrollers');

module.exports = app => {
    app.route('/admin/addStudio')
    .post(studioControllers.studioCreate);
}