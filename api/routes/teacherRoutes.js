const teacherControllers = require('../controllers/teachercontrollers');

module.exports = app => {
    app.routes('/admin/newTeacher')
    .post(teacherControllers.teacherCreate);
    app.routes('/teachers')
    .get(teacherControllers.teacherGetALL);
    app.routes('/teachers*')
    .get(teacherControllers.teacherFilter);
}