const dbPool = require('../config/database')


//POST Predicted Data
const postData = (body)=>{
    // console.log(body)
    const SQLQuery = `INSERT INTO twitter_predicted (get_date, keyword, content_date, username, tweet, like_count, retweet_count, reply_count, popularity_score, sentiment, topic, batch_id) VALUES ('${body.dateGet}', '${body.keyword}', '${body.contentDate}', '${body.username}', '${body.tweet}', '${body.likeCount}', '${body.retweetCount}', '${body.replyCount}', '${body.popularityScore}', '${body.sentiment}', '${body.topic}', '${body.batch_id}')`;
    
    
    return dbPool.execute(SQLQuery)
}

//GET All Data
const getTopics = ()=>{
    const SQLQuery = `SELECT  DISTINCT topic FROM twitter_predicted`

    
    return dbPool.execute(SQLQuery)
}

const getAllData = ()=>{
    const SQLQuery = 'SELECT * ,DATE_FORMAT(content_date,"%d %M %Y") as content_date FROM twitter_predicted ORDER BY popularity_score DESC'
    
    
    return dbPool.execute(SQLQuery)
}

const getAllCount = ()=>{
    const SQLQuery = `SELECT COUNT(tweet) AS 'total',
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
FROM twitter_predicted`
    
    
    return dbPool.execute(SQLQuery)
}

const getAllSummary = ()=>{
    const SQLQuery =  `SELECT  DATE_FORMAT(content_date,"%d %M %Y") as contentDate,
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
FROM twitter_predicted
GROUP BY contentDate
ORDER BY contentDate`
    
    
    return dbPool.execute(SQLQuery)
}

//GET Data by History
const getDataByHistory = (req)=>{
    const keyword = req.params.keyword;
    const startdate = req.params.startdate;
    const enddate = req.params.enddate;
    const SQLQuery = `SELECT * FROM twitter_predicted WHERE keyword = '${keyword}' and content_date between '${startdate}' and '${enddate}' ORDER BY popularity_score DESC`
    
    return dbPool.execute(SQLQuery)
}

const getCountByHistory = (req)=>{
    const keyword = req.params.keyword;
    const startdate = req.params.startdate;
    const enddate = req.params.enddate;
    const SQLQuery = `SELECT  COUNT(tweet) AS 'total',
    COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
    COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
    COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
    FROM twitter_predicted
    WHERE keyword = '${keyword}' and content_date between '${startdate}' and '${enddate}'`;
    
    
    
    return dbPool.execute(SQLQuery)
}

const getSummaryByHistory = (req)=>{
    const keyword = req.params.keyword;
    const startdate = req.params.startdate;
    const enddate = req.params.enddate;
    const SQLQuery =  `SELECT DATE_FORMAT(content_date,"%d %M %Y") as contentDate,
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
  FROM twitter_predicted WHERE keyword = '${keyword}' AND content_date between '${startdate}' and '${enddate}'
  GROUP BY contentDate 
  ORDER BY contentDate`
    
    
    return dbPool.execute(SQLQuery)
}

//GET Data by Id
const getDataById = (req)=>{
    const id = req.params.id;
    
    const SQLQuery = `SELECT *,DATE_FORMAT(content_date,"%d %M %Y") as content_date FROM twitter_predicted WHERE batch_id = '${id}' ORDER BY popularity_score DESC`
    
    return dbPool.execute(SQLQuery)
}

const getCountById = (req)=>{
    const id = req.params.id;

    const SQLQuery = `SELECT  COUNT(tweet) AS 'total',
    COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
    COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
    COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
    FROM twitter_predicted
    WHERE batch_id = '${id}'`;
    
    
    
    return dbPool.execute(SQLQuery)
}

const getSummaryById = (req)=>{
    const id = req.params.id;
    
    const SQLQuery =  `SELECT DATE_FORMAT(content_date,"%d %M %Y") as contentDate,
	COUNT( IF( sentiment = 'Positive',1,  NULL) ) AS 'positive',
	COUNT( IF( sentiment = 'Neutral',1, NULL) ) AS 'neutral',
	COUNT( IF( sentiment = 'Negative',1, Null) ) AS 'negative'
    FROM twitter_predicted
    WHERE batch_id = '${id}'
  GROUP BY contentDate 
  ORDER BY contentDate ASC`
    
    
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