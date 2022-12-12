const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('person', aboutSchema);