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

// export this router

module.exports =router;
