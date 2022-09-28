const Issue = require('../model/schema');
const SingleIssues = require('../model/projectSchema');
/* Home Controller*/
module.exports.home = async function(req , res){
  
    try{
    Issue.find({},function(err,issues){
        if(err){
            console.log(err);
            return;
        }    
    return res.render('home',{
        title:'Issue Tracker',
        issues:issues
       })
    })
    }catch(err){
        console.log('********',err);
        return;
    }
  
}
/* Project Create Controller*/
module.exports.issueCreate =  function(req, res){
    Issue.create({
        issuename:req.body.issuename,
        authorname:req.body.authorname,
        description:req.body.description
    },function(err,newIssue){
        if(err){console.log('error',err); return;}
        console.log('***',newIssue);
        return res.redirect('back');
    })
}
/* Issues Create Controller */
module.exports.singleIssueCreate =  function(req, res){
    SingleIssues.create({
        title:req.body.title,
        labels:req.body.labels,
        author:req.body.author,
        description:req.body.description,
        issue_id:req.body.issue_id
    },function(err,newIssue){
        if(err){console.log('error',err); return;}
        console.log('***',newIssue);
        return res.redirect('back');
    })
}
/* Details Page Controller*/
module.exports.project = async function(req,res){
    try{
     Issue.findById(req.params.id,function(err,project){  
        SingleIssues.find({},function(err,allissues){
        SingleIssues.find({issue_id:req.params.id},function(err,issues){
    return res.render('project',{
        title:'single-issue',
        project:project,
        issues:issues,
        allissues:allissues
    });
});
});
    }); 
    }catch(err){
        console.log('error',err);
        return;
    }
}
/* Search Controller*/
module.exports.search = async function(req,res){
    try{
    
    SingleIssues.find({},function(err,allissues){
    SingleIssues.find({$or:[{"title":req.body.title},{"labels":req.body.tags},{"author":req.body.author},{"description":req.body.description}]},function(err,issues){
        Issue.find({id:'633028ccf9e5075f9c3aabe5'},function(err,project){ 
           console.log(req.body);
        return res.render('project',{
            title:'single-issue',
            project:project,
            allissues:allissues,
            issues:issues
          
        });
    });
    });
    })
}
catch(err){
    console.log(err);
    return;
}
    
}