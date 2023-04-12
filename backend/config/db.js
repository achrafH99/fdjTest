const mongoose = require('mongoose');

const DB_URI = 'mongodb://127.0.0.1:27017/fdj';

function connectToDatabase() {
    return mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to database'))
        .catch((err) => console.error('Error connecting to database:', err.message));
}

module.exports = connectToDatabase;