
const classControllers = require('../controllers/classcontrollers');

module.exports = app => {
    app.route('/admin/newClass')
        .post(classControllers.classCreate);
    app.route('/classes')
        .get(classControllers.classGetToday);
    app.route('/classes/filter*')
        .get(classControllers.classFilter);
}