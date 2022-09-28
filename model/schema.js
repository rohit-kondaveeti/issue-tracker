const mongoose = require('mongoose');
/* Project Schema*/
const issueSchema = new mongoose.Schema({
       issuename:{
         type:String,
         require:true
       },
       authorname:{
        type:String,
        require:true
       },
       description:{
        type:String,
       }
})

const Issue = mongoose.model('issue',issueSchema);

module.exports = Issue;
