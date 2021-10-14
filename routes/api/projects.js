//ROUTER that handles requests to /api/projects
const express = require('express');
const router = express.Router();
const Project = require('../../models/project')
/////////////////////////////////
//Configure your routes by adding handlers 
//GET handler for /api/projects
//Goal: View a list of peojects
router.get('/',(req,res,next) => {
    //the difference betweenweb app and web api is what we return
    // web app >> res.render('view', data)
    // web api return Json
    //res.json('success');
    Project.find((err, projects) => {
        if(err){
            console.log(error);
            res.status(500).json('Error')
        }else{
            res.status(200).json(projects)
        }
    })
})

//POST /api/projects > Input: Json Object containing information about the project
router.post('/', (req, res, next)=>{
    // for testing
    // console.log(req.body)
    // res.status(200).json(req.body)
    Project.create({ 
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    },//project info add to the database 
    (error, newProject)=>{
         if(error){
             console.log(error);
             res.status(500).json(`ErrorMessgae: ${error}`);
         }else{
             res.status(200).json(newProject)
         }
    })//call back function to handle the new Project 
})

//PUT /api/projects/:_id > Input: Json Object containing information about the project
router.put('/:_id', (req,res,next) => {
    Project.findOneAndUpdate(
        { _id:req.params._id}, //filter query
        {
            name: req.body.name,
            dueDate: req.body.dueDate,
            course: req.body.course,
            status: req.body.status
        },//updated information 
        (error, updatedProject)=>{
            if(error){
                console.log(error),
                res.status(500).json(`Error Message: ${error}`)
            }else{
                res.status(200).json(updatedProject)
            }
        }
    );
})

router.delete('/:_id', (req,res,next)=>{
    Project.remove(
        {_id:req.params._id},// filter query
        (error)=>{
            if(error){
                res.status(500).json(`Error: ${error}`);
                console.log(error);
            }else res.status(200).json({'success': 'true'})
        }
    );
})


// export this router

module.exports =router;
