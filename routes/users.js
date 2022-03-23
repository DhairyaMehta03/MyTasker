let mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/task');

mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/task?retryWrites=true&w=majority');

let schema = mongoose.Schema(
  {
    content:{
      type:String,
      required:true
    }
  }
)

module.exports = mongoose.model('tasks', schema);