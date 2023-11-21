const studentRouter = require('./student');
const siteRouter = require('./site');


function route(app) {

    app.use('/', siteRouter)
    app.use('/students', studentRouter)

    // app.use('/', siteRouter)

}

module.exports = route;