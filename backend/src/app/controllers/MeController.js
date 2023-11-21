const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');

class MeController {

    // [GET] /me/stored/course
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDeleted()])
            .then(([courses,deletedCount]) => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses),
                deletedCount
            }))
            .catch(next)
        // res.render('/me/stored-courses');
    }
    // [GET] /me/trash/course
    trashCourses(req, res, next) {
        Course.findDeleted()
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new MeController();