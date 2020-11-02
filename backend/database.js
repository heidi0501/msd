const mongoose = require('mongoose');
const connection = 'mongodb+srv://heidi:heidi123@msd.av8f8.mongodb.net/test';
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
