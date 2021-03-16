const mongoose = require('mongoose');
const User = require('../models/user');
const accounts = require('./accounts');


mongoose.connect('mongodb://localhost:27017/bank-sys', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database connected");   // we're connected!
});

const seedDB = async () => {
    await User.deleteMany({});
    for (let i=0; i<15; i++) {
        const cust = new User({
            Sno: `${accounts[i].sno}`, 
            name: `${accounts[i].user_name}`,
            email: `${accounts[i].user_email}`,
            balance: `${accounts[i].current_Bal}`
        })
        await cust.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
