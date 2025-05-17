const dbPool = require('../config/database')


//POST New Progress
const newProgress = (body)=>{
    const SQLQuery = `INSERT INTO youtube_history (get_date, channel_name,title,video_date, status) VALUES ('${body.get_date}', '${body.channel_name}','${body.title}','${body.video_date}', '${body.status}')`
    
    return dbPool.execute(SQLQuery)
}

//GET All Progress
const getProgress = ()=>{
    const SQLQuery = `SELECT id,DATE_FORMAT(get_date,"%Y-%m-%d %h:%m") as get_date, channel_name, title,DATE_FORMAT(video_date,"%Y-%m-%d") as video_date,status FROM youtube_history ORDER BY id DESC`;
  
    
    
    return dbPool.execute(SQLQuery)
}

//GET Progress id
const getProgressId = (body)=>{

    const SQLQuery = `SELECT id FROM youtube_history WHERE get_date = '${body.get_date}'`
    
    
    return dbPool.execute(SQLQuery)
}

//UPDATE Progress
const updateProgress = (body)=>{
    // const { id, status } = req.body;
    const SQLQuery = `UPDATE youtube_history SET status = '${body.status}' WHERE id = ${body.id}`
    
    
    return dbPool.execute(SQLQuery)
}

const updateDetail = (body)=>{
   
    const SQLQuery = `UPDATE youtube_history SET 
    channel_name = '${body.channel_name}',
    title = "${body.title}",
    video_date = '${body.video_date}'
     WHERE id = ${body.id}`
    
    
    return dbPool.execute(SQLQuery)
}

//GET Progress by Id
const getProgressById = (req)=>{
    const id = req.params.id;
    const SQLQuery = `SELECT DATE_FORMAT(get_date,"%Y-%m-%d %h:%m") as dateGet,channel_name,title,DATE_FORMAT(video_date,"%Y-%m-%d") as videoDate FROM youtube_history WHERE id = ${id}`;
    
    
    
    return dbPool.execute(SQLQuery)
}


module.exports = {
    newProgress,
    getProgress,
    getProgressId,
    updateProgress,
    updateDetail,
    getProgressById
}