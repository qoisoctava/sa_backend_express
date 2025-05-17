const express = require('express')

const twitterController = require('../controller/twitterController.js')
const youtubeController = require('../controller/youtubeController.js')

const router = express.Router();

//Twitter
///Front End
router.get('/twitter', twitterController.getProgress)

///Model Prediction API
router.post('/twitter/new', twitterController.newProgress)
router.put('/twitter/update', twitterController.updateProgress)
router.get('/twitter/id/:dateGet', twitterController.getProgressId)
router.get('/twitter/:id', twitterController.getProgressById)

//YouTube
///Front End
router.get('/youtube', youtubeController.getProgress)

///Model Prediction API
router.post('/youtube/new', youtubeController.newProgress)
router.put('/youtube/detail', youtubeController.updateDetail)
router.put('/youtube/update', youtubeController.updateProgress)
router.post('/youtube/id', youtubeController.getProgressId)
router.get('/youtube/:id', youtubeController.getProgressById)

module.exports = router;