const mongoose = require('mongoose');

mongoos.connect (
    process.env.MONGODB_URI || 'mongodb://localhost:27017/your_db_name',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;