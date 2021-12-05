const express        = require('express')
const authRoutes     = require('./routes/auth.js');
const mongoose       = require('mongoose')
const {ApolloServer} = require('apollo-server-express')
const {resolvers}    = require('./resolvers')
const {types}        = require('./types')

const { tokenVerify, admin, leader, student } = require('./routes/tokenValidate');

// **********.env parameters definition ****************/

require('dotenv').config()

const PORT     = process.env.PORT || 8002
const DBNAME   = process.env.DBNAME
const PASSWORD = process.env.PASSWORD
const USER     = process.env.USER

// *****************************************************/

const app = express()
const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers
})

/**
 * ! I am having issues to get connected to the DB when I use the parameters from .env file. So at this moment I cannot hide the database's password
const uriDb = `mongodb+srv://${USER}:${PASSWORD}@cluster0.ip3os.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;
 */

const uriDb = 'mongodb+srv://oscarTest:myTest123*@cluster0.ip3os.mongodb.net/Proyectos_Investigacion?retryWrites=true&w=majority';

mongoose
    .connect(uriDb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log(`Successfully connected to database ${DBNAME} in Mongo Atlas`);
        app.listen(`${PORT}`, async () => {
            await server.start()
            server.applyMiddleware({app})
            console.log(`Server listening on port ${PORT}`)
        })
    })
    .catch((e) => {
        console.log('Database error', e)
    })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', authRoutes);
app.get('/api/dashboard/admin', [tokenVerify, admin], (req, res) => {
    res.json("Soy el dashboard")
})

app.get('/api/dashboard/leader', [tokenVerify, leader], (req, res) => {
    res.json("Soy el dashboard")
})

app.get('/api/dashboard/student', [tokenVerify, student], (req, res) => {
    res.json("Soy el dashboard")
})

app.get('/', (req, res) => {
    res.json({
        message: 'Auth Api REST'
    })
})
