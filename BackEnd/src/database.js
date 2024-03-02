const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/mean-items', {
    })
    .then(db => console.log('Db is connected'))
    .catch((err) => console.error(err));
