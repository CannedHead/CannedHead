// Require needed modules
var Task = require('../models/Task');

// Export functions
module.exports = {

    createTask: function(req, res, next) {

      if (req.body.name === undefined || req.body.name.trim() == '') {
        return res.json(400,{ error: true, message: "name not found"});
      }
      if (req.body.description === undefined || req.body.description.trim() == '') {
        return res.json(400,{ error: true, message: "Description not found"});
      }
      
      Task.findOne({description : req.body.description}, function (err, Task){
          
        if(err){ res.json(500, { message: err }); }

        if (!Task) {
              
          var newTask = new Task ({
              name : req.body.name,
              description  : req.body.description
          });
          
          newTask.save(function(err, c){
              if (err) {
                res.json(422,{ error: true, message: err.errors.description.message});
              } else {
                res.json(201,{error: false, message: "Task created", Task:c});
              }
          });
              
        } else {
            res.json(409,{ error: true, message: "Task already exists"});            
        }        
      });

    },
    
    readJSONTasks: function(req, res, next) {        
      Task.find({},'name description -_id', function(err, Tasks) {
        if(err){return next(err);
        } else {
          res.json(200,Tasks);
        }
      });
    },

    readTasks: function(callback) {        
      Task.find({},'name description -_id', function(err, Tasks) {
        if(err){return next(err);
        } else {
          callback(null,Tasks);
        }
      });
    },

    readTask: function(req, res, next) {
        
      Task.findOne({description : req.params.description},'name description -_id', function(err, Task) {
          if (err) {throw err;}
          if(!Task){
              res.json(404,{ error:true , message: "Task not found"}); 
          } else {
              res.json(200,{ error:false , Task: Task });
          }
      });
    },
    
    updateTask: function(req, res, next) {

      if ( (req.body.name === undefined || req.body.name.trim() == '') && (req.body.description.trim() === undefined || req.body.description == '' ) ) {
            res.json(204,{ error: true ,message: "No content"});
      } else {

        Task.findOne({description : req.params.description}, function(err, Task) {
          
          if(err){
              res.json(404,{ error:true ,message: "Task not found"});
          }

          if (!Task) {
              res.json(404,{ error:true ,message: 'Task not found'});
          } else {
            
            Task.name = req.body.name || Task.name; 
            Task.description = req.body.description || Task.description;
            
            Task.save(function (err, updatedTask){
              if (err){
                res.send(err);
              }
              res.json(200,{ error:false, message:'Task has been updated', Task:{name:updatedTask.name, description:updatedTask.description} });
            });
          }
        }); 

      }     
              
    },
    
    deleteTask: function(req, res, next) {

         Task.findOne( {description: req.params.description }, function(err, Task) {
            if(err){
                res.json(404,{error:true , message: err});
            }
            
            if (!Task) {
                res.json(404,{error:true , message:"Task not Found"});
            } else {

              Task.remove({
                  description: req.params.description
              }, function(err, Task) {
                  if (err){
                    res.json(404, {error: true , message: err});
                  } else {
                    res.json({ error:false , message: 'Task successfully deleted' });
                  }
              });
            }
         });
    }

};