const mongoose = require('mongoose');
/* issues Schema */
const projectSchema = new mongoose.Schema({
       title:{
         type:String,
         require:true
       },
       labels:{
        type:String,
        require:true
       },
       author:{
        type:String,
        required:true
       },
       description:{
        type:String,
       },
       issue_id:{
        type:String,
        required:true
       }
})

const ProjectSchema = mongoose.model('singleIssues',projectSchema);

module.exports = ProjectSchema;
