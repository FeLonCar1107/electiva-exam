const mongoose = require('mongoose')
const person_schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('PersonCollectionn')
