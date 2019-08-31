const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Narciso:@KmH6934@2018@cluster0-5vhmw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

module.exports = mongoose;
