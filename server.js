//dotenv
require('dotenv').config()

//external mods
const express = require('express')

const routes = require('./routes')

//import cors
const cors = require('cors')

const session = require('express-session')


//PORT
const PORT = process.env.PORT || 3001

//DB here
const MongoDBStore = require('connect-mongodb-session')(session)



//express instance
app = express()

//app.use & middleware here
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/db.connection')

const whitelist = ['http://localhost:3000', `${process.env.FRONTEND_URL}`]
const corsOptions = {
	origin: (origin, callback) => {
		console.log(whitelist, "WHITELIST")
		console.log(origin, "ORIGIN")
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
//accept credentials
	credentials: true,
}

app.use(cors(corsOptions));

app.set('trust proxy', 1)

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		store: new MongoDBStore({
			uri: process.env.MONGODB_URI,
			collection: 'users'
		  }),
		  cookie: {
			sameSite: 'none',
			secure: true
		  }
	})
)

const isAuthenticated = (req, res, next) => {
	if (req.session.currentUser) {
		return next();
	} else {
		res.status(403).json({ msg: 'login required' })
	}
}
//routes


app.get('/', function (req, res) {

    res.send('Stuff Goes Here')
console.log("working")
})

// app.use('/scripts', routes.scripts)
app.use('/users', routes.users)

//listener

app.listen(PORT, () => {
    console.log('listening to port', PORT)
})