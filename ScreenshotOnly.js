const express = require('express')

const twitterController = require('../controller/twitterController.js')
const youtubeController = require('../controller/youtubeController.js')

const router = express.Router();

//Twitter
router.post('/twitter', twitterController.postData)
router.get('/twitter/:id', twitterController.getDataById)
router.get('/twitter/:id/summary', twitterController.getDailySummaryById)
router.get('/twitter/:id/count', twitterController.getCountById)

//YouTube
router.post('/youtube', youtubeController.postData)
router.get('/youtube/:id', youtubeController.getDataById)
router.get('/youtube/:id/summary', youtubeController.getSummaryById)
router.get('/youtube/:id/count', youtubeController.getCountById)


module.exports = router;a


