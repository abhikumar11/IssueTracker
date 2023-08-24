const express = require('express');
const router = express.Router();
const {createSession,projectDetails,deleteProject,createIssueSession,deleteIssue}= require('../controllers/ProjectController');

router.post('/create',createSession);
router.get('/delete',deleteProject);
router.get('/:id',projectDetails);
router.post('/:id',createIssueSession);
router.get('/issue/delete',deleteIssue);

module.exports = router;