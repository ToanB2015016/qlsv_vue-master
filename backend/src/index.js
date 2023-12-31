const express = require('express');
const cors = require('cors')


const app = express()
const port = 3000
app.use(cors())

const route = require('./routes');
// const db = require('./config/db');


// Connect to DB
// db.connect();


// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// // template engine
// app.engine('hbs', handlebars.engine({
//   extname: '.hbs',
//   helpers: {
//     sum: (a,b) => a + b
//   }
// }));
// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'resources', 'views'))

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

