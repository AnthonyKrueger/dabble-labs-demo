const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dabble-demo',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose.connection;