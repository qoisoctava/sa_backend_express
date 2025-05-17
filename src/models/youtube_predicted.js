const dbPool = require('../config/database')


//POST Predicted Data
const postData = (body)=>{
    // console.log(body)
    const SQLQuery = `INSERT INTO youtube_predicted (get_date, video_date, title, channel_name, comment_date, content, like_count, commentator,  sentiment, topic, batch_id) 
    VALUES ('${body.get_date}', '${body.video_date}', "${body.title}", '${body.channel_name}', '${body.comment_date}', '${body.content}', '${body.like_count}', '${body.commentator}', '${body.sentiment}', '${body.topic}', '${body.batch_id}')`;
    
    
    return dbPool.execute(SQLQuery)
}

//GET All Data
const getTopics = ()=>{
    const SQLQuery = `SELECT  DISTINCT topic FROM youtube_predicted`

    
    return dbPool.execute(SQLQuery)
}

const getAllData = ()=>{
    const SQLQuery = 'SELECT * ,DATE_FORMAT(comment_date,"%d %M %Y") as comment_date FROM youtube_predicted ORDER BY like_count DESC'
    
    
    return dbPool.execute(SQLQuery)
}

const getAllCount = ()=>{
    const SQLQuery = `SELECT COUNT(content) AS 'total',
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
FROM youtube_predicted`
    
    
    return dbPool.execute(SQLQuery)
}

const getAllSummary = ()=>{
    const SQLQuery =  `SELECT  DATE_FORMAT(comment_date,"%d %M %Y") as comment_date,
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
FROM youtube_predicted
GROUP BY comment_date
ORDER BY comment_date`
    
    
    return dbPool.execute(SQLQuery)
}

//GET Data by History
const getDataByHistory = (req)=>{
    const keyword = req.params.keyword;
    const startdate = req.params.startdate;
    const enddate = req.params.enddate;
    const SQLQuery = `SELECT * FROM youtube_predicted WHERE keyword = '${keyword}' and comment_date between '${startdate}' and '${enddate}' ORDER BY like_count DESC`
    
    return dbPool.execute(SQLQuery)
}

const getCountByHistory = (req)=>{
    const keyword = req.params.keyword;
    const startdate = req.params.startdate;
    const enddate = req.params.enddate;
    const SQLQuery = `SELECT  COUNT(comment) AS 'total',
    COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
    COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
    COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
    FROM youtube_predicted
    WHERE keyword = '${keyword}' and comment_date between '${startdate}' and '${enddate}'`;
    
    
    
    return dbPool.execute(SQLQuery)
}

const getSummaryByHistory = (req)=>{
    const keyword = req.params.keyword;
    const startdate = req.params.startdate;
    const enddate = req.params.enddate;
    const SQLQuery =  `SELECT DATE_FORMAT(comment_date,"%d %M %Y") as comment_date,
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
  FROM youtube_predicted WHERE keyword = '${keyword}' AND comment_date between '${startdate}' and '${enddate}'
  GROUP BY comment_date 
  ORDER BY comment_date`
    
    
    return dbPool.execute(SQLQuery)
}

//GET Data by Id
const getDataById = (req)=>{
    const id = req.params.id;
    
    const SQLQuery = `SELECT *,DATE_FORMAT(comment_date,"%d %M %Y") as comment_date FROM youtube_predicted WHERE batch_id = '${id}' ORDER BY like_count DESC`
    
    return dbPool.execute(SQLQuery)
}

const getCountById = (req)=>{
    const id = req.params.id;

    const SQLQuery = `SELECT  COUNT(content) AS 'total',
    COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
    COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
    COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
    FROM youtube_predicted
    WHERE batch_id = '${id}'`;
    
    
    
    return dbPool.execute(SQLQuery)
}

const getSummaryById = (req)=>{
    const id = req.params.id;
    
    const SQLQuery =  `SELECT DATE_FORMAT(comment_date,"%d %M %Y") as commentDate,
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
    FROM youtube_predicted
    WHERE batch_id = '${id}'
  GROUP BY commentDate 
  ORDER BY commentDate ASC`
    
    
    return dbPool.execute(SQLQuery)
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
    getTopics,
}