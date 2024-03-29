const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


router.post('/job/create', isAuthenticated, isAdmin, createJob);
router.get('/job/:id', singleJob);
router.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
router.delete('/job/delete/:job_id', isAuthenticated, isAdmin, deleteJob);
router.get('/jobs/show', showJobs);



module.exports = router;