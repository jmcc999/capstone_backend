const mongoose = require('mongoose');

//connect to mongo
const connectionStr = process.env.MONGODB_URI

//set up connection

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => console.log('mongodb connected :)'));

mongoose.connection.on('error', (error) => console.log('mongodb error', error));

mongoose.connection.on('disconnected', () => console.log('mongodb disconnected :('));
