const express = require('express')

const twitterController = require('../controller/twitterController.js')
const youtubeController = require('../controller/youtubeController.js')

const router = express.Router();


router.get('/topics', twitterController.getTopics)
router.post('/twitter', twitterController.postData)

router.get('/twitter/all', twitterController.getAllData)
router.get('/twitter/all/count', twitterController.getAllCount)
router.get('/twitter/all/summary', twitterController.getAllSummary)
router.get('/twitter/:keyword/date/:startdate~:enddate', twitterController.getDataByHistory)
router.get('/twitter/:keyword/date/:startdate~:enddate/summary', twitterController.getSummaryByHistory)
router.get('/twitter/:keyword/date/:startdate~:enddate/count', twitterController.getCountByHistory)
router.get('/twitter/:id', twitterController.getDataById)
router.get('/twitter/:id/summary', twitterController.getSummaryById)
router.get('/twitter/:id/count', twitterController.getCountById)

router.get('/topics', youtubeController.getTopics)
router.post('/youtube', youtubeController.postData)

router.get('/youtube/all', youtubeController.getAllData)
router.get('/youtube/all/count', youtubeController.getAllCount)
router.get('/youtube/all/summary', youtubeController.getAllSummary)
router.get('/youtube/:keyword/date/:startdate~:enddate', youtubeController.getDataByHistory)
router.get('/youtube/:keyword/date/:startdate~:enddate/summary', youtubeController.getSummaryByHistory)
router.get('/youtube/:keyword/date/:startdate~:enddate/count', youtubeController.getCountByHistory)
router.get('/youtube/:id', youtubeController.getDataById)
router.get('/youtube/:id/summary', youtubeController.getSummaryById)
router.get('/youtube/:id/count', youtubeController.getCountById)


module.exports = router;