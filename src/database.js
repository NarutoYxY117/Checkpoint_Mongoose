let mongoose = require('mongoose');
let dotenv = require('dotenv').config({ path: './../.env' });

class Database{
    constructor(){
        this._connect()
    }

    _connect(){
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Connected successfuly")
            })

            .catch(err => {
                console.error(err)
            })

    }
}

module.exports = new Database();

