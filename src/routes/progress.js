const express = require('express')

const twitterController = require('../controller/twitterController.js')
const youtubeController = require('../controller/youtubeController.js')

const router = express.Router();



router.post('/twitter/new', twitterController.newProgress)
router.put('/twitter/update', twitterController.updateProgress)
router.get('/twitter', twitterController.getProgress)
router.get('/twitter/id/:dateGet', twitterController.getProgressId)
router.get('/twitter/:id', twitterController.getProgressById)

router.post('/youtube/new', youtubeController.newProgress)
router.put('/youtube/update', youtubeController.updateProgress)
router.put('/youtube/detail', youtubeController.updateDetail)
router.get('/youtube', youtubeController.getProgress)
router.post('/youtube/id', youtubeController.getProgressId)
router.get('/youtube/:id', youtubeController.getProgressById)

module.exports = router;