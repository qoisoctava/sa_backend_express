const youtubePredictedModel = require('../models/youtube_predicted')
const youtubeHistoryModel = require('../models/youtube_history')
//POST Data
const postData = async (req,res)=>{
    
    const {body} = req
    console.log(body)
    try{
        await youtubePredictedModel.postData(body)
        res.json({
            message: 'POST success',
            data: body
        })
        
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

//GET All Data
const getTopics = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getTopics()
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getAllData = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getAllData()
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getAllCount = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getAllCount()
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getAllSummary = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getAllSummary()
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

//GET Data by History
const getDataByHistory = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getDataByHistory(req)
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getCountByHistory = async (req,res)=>{
    try{
        const [data] = await youtubePredictedModel.getCountByHistory(req)
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getSummaryByHistory = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getSummaryByHistory(req)
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

//GET Data by Id
const getDataById = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getDataById(req)
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getCountById = async (req,res)=>{
    try{
        const [data] = await youtubePredictedModel.getCountById(req)
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getSummaryById = async (req,res)=>{
    
    try{
        const [data] = await youtubePredictedModel.getSummaryById(req)
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

//PROGRESS aka History
const newProgress = async (req,res)=>{
    
    const {body} = req

    try{
        await youtubeHistoryModel.newProgress(body)
        res.json({
            message: 'POST success',
            data: body
        })
        
    } catch(error){
        // console.log(error)
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getProgress = async (req,res)=>{
    
    try{
        const [data] = await youtubeHistoryModel.getProgress()
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getProgressId = async (req,res)=>{
    
    const {body} = req
    
    try{
        const [data] = await youtubeHistoryModel.getProgressId(body)
        // console.log(data)
        res.send(data)
    } catch(error){
        // console.log(error)
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const updateProgress = async (req,res)=>{
    const {body} = req

    try{
        await youtubeHistoryModel.updateProgress(body)
        res.json({
            message: 'POST success',
            data: body
        })
        
    } catch(error){
        // console.log(error)
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}
const updateDetail = async (req,res)=>{
    const {body} = req

    try{
        await youtubeHistoryModel.updateDetail(body)
        res.json({
            message: 'POST success',
            data: body
        })
        
    } catch(error){
        console.log(error)
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const getProgressById = async (req,res)=>{
    
    try{
        const [data] = await youtubeHistoryModel.getProgressById(req)
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        console.log(error)
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}


module.exports = {
    postData,
    getAllData,
    getAllCount,
    getAllSummary,
    getDataByHistory,
    getCountByHistory,
    getSummaryByHistory,
    getDataById,
    getCountById,
    getSummaryById,
    newProgress,
    getProgress,
    getProgressId,
    updateProgress,
    getTopics,
    updateDetail,
    getProgressById

}