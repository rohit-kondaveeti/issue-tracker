const express = require('express');
const router = express.Router();

const homeController = require('../controllers/issue');
router.get('/',homeController.home);
router.post('/create-issue',homeController.issueCreate);
router.get('/project/:id',homeController.project);
router.post('/single-issue',homeController.singleIssueCreate);
router.post('/search',homeController.search);
module.exports = router;