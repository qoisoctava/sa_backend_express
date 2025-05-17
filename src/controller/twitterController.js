const twitterPredictedModel = require('../models/twitter_predicted')
const twitterHistoryModel = require('../models/twitter_history')
//POST Data
const postData = async (req,res)=>{
    
    const {body} = req
    console.log(body)
    try{
        await twitterPredictedModel.postData(body)
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
        const [data] = await twitterPredictedModel.getTopics()
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
        const [data] = await twitterPredictedModel.getAllData()
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
        const [data] = await twitterPredictedModel.getAllCount()
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
        const [data] = await twitterPredictedModel.getAllSummary()
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
        const [data] = await twitterPredictedModel.getDataByHistory(req)
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
        const [data] = await twitterPredictedModel.getCountByHistory(req)
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
        const [data] = await twitterPredictedModel.getSummaryByHistory(req)
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
        const [data] = await twitterPredictedModel.getDataById(req)
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
        const [data] = await twitterPredictedModel.getCountById(req)
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
        const [data] = await twitterPredictedModel.getSummaryById(req)
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
        await twitterHistoryModel.newProgress(body)
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

const getProgress = async (req,res)=>{
    
    try{
        const [data] = await twitterHistoryModel.getProgress()
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
    
    try{
        const [data] = await twitterHistoryModel.getProgressId(req)
        // console.log(json({data}))
        res.send(data)
    } catch(error){
        res.status(500).json({
            message: "server error",
            serverMessage: error
        })
    }
}

const updateProgress = async (req,res)=>{
    const {body} = req

    try{
        await twitterHistoryModel.updateProgress(body)
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

const getProgressById = async (req,res)=>{

    try{
        const [data] = await twitterHistoryModel.getProgressById(req)
        // console.log(json({data}))
        res.send(data)
    } catch(error){
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
    getProgressById

}