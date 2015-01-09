// Require needed modules
var Project = require('../models/project');

// Export functions
module.exports = {

    createProject: function(req, res, next) {

      if (req.body.name === undefined || req.body.name.trim() == '') {
        return res.json(400,{ error: true, message: "name not found"});
      }
      if (req.body.description === undefined || req.body.description.trim() == '') {
        return res.json(400,{ error: true, message: "Description not found"});
      }
      
      Project.findOne({description : req.body.description}, function (err, project){
          
        if(err){ res.json(500, { message: err }); }

        if (!project) {
              
          var newProject = new Project ({
              name : req.body.name,
              description  : req.body.description
          });
          
          newProject.save(function(err, c){
              if (err) {
                res.json(422,{ error: true, message: err.errors.description.message});
              } else {
                res.json(201,{error: false, message: "Project created", Project:c});
              }
          });
              
        } else {
            res.json(409,{ error: true, message: "Project already exists"});            
        }        
      });

    },
    
    readJSONProjects: function(req, res, next) {        
      Project.find({},'name description -_id', function(err, projects) {
        if(err){return next(err);
        } else {
          res.json(200,projects);
        }
      });
    },

    readProjects: function(callback) {        
      Project.find({},'name description -_id', function(err, projects) {
        if(err){return next(err);
        } else {
          callback(null,projects);
        }
      });
    },

    readProject: function(req, res, next) {
        
      Project.findOne({description : req.params.description},'name description -_id', function(err, Project) {
          if (err) {throw err;}
          if(!Project){
              res.json(404,{ error:true , message: "Project not found"}); 
          } else {
              res.json(200,{ error:false , Project: Project });
          }
      });
    },
    
    updateProject: function(req, res, next) {

      if ( (req.body.name === undefined || req.body.name.trim() == '') && (req.body.description.trim() === undefined || req.body.description == '' ) ) {
            res.json(204,{ error: true ,message: "No content"});
      } else {

        Project.findOne({description : req.params.description}, function(err, Project) {
          
          if(err){
              res.json(404,{ error:true ,message: "Project not found"});
          }

          if (!Project) {
              res.json(404,{ error:true ,message: 'Project not found'});
          } else {
            
            Project.name = req.body.name || Project.name; 
            Project.description = req.body.description || Project.description;
            
            Project.save(function (err, updatedProject){
              if (err){
                res.send(err);
              }
              res.json(200,{ error:false, message:'Project has been updated', Project:{name:updatedProject.name, description:updatedProject.description} });
            });
          }
        }); 

      }     
              
    },
    
    deleteProject: function(req, res, next) {

         Project.findOne( {description: req.params.description }, function(err, Project) {
            if(err){
                res.json(404,{error:true , message: err});
            }
            
            if (!Project) {
                res.json(404,{error:true , message:"Project not Found"});
            } else {

              Project.remove({
                  description: req.params.description
              }, function(err, Project) {
                  if (err){
                    res.json(404, {error: true , message: err});
                  } else {
                    res.json({ error:false , message: 'Project successfully deleted' });
                  }
              });
            }
         });
    }

};