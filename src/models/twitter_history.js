const dbPool = require('../config/database')


//POST New Progress
const newProgress = (body)=>{
    
    const SQLQuery = `INSERT INTO twitter_history (get_date, keyword,since_date,until_date, status) VALUES ('${body.dateGet}', '${body.keyword}','${body.dateSince}','${body.dateUntil}', '${body.status}')`
    
    return dbPool.execute(SQLQuery)
}

//GET All Progress
const getProgress = ()=>{
    const SQLQuery = `SELECT id,DATE_FORMAT(get_date,"%Y-%m-%d %h:%m") as dateGet,
    keyword,DATE_FORMAT(since_date,"%Y-%m-%d") as dateSince,
    DATE_FORMAT(until_date,"%Y-%m-%d") as dateUntil,
    status FROM twitter_history ORDER BY id DESC`;
  
    return dbPool.execute(SQLQuery)
}

//GET Progress id
const getProgressId = (req)=>{
    const dateGet = req.params.dateGet;
    const SQLQuery = `SELECT id FROM twitter_history WHERE get_date = '${dateGet}'`
    
    
    return dbPool.execute(SQLQuery)
}

//UPDATE Progress
const updateProgress = (body)=>{
    // const { id, status } = req.body;
    const SQLQuery = `UPDATE twitter_history SET status = '${body.status}' WHERE id = ${body.id}`
    
    
    return dbPool.execute(SQLQuery)
}

//GET Progress by Id
const getProgressById = (req)=>{
    const id = req.params.id;
    const SQLQuery = `SELECT DATE_FORMAT(get_date,"%Y-%m-%d %h:%m") as dateGet,keyword,
    DATE_FORMAT(since_date,"%Y-%m-%d") as dateSince,
    DATE_FORMAT(until_date,"%Y-%m-%d") as dateUntil 
    FROM twitter_history WHERE id = ${id}`;
  
    return dbPool.execute(SQLQuery)
}


module.exports = {
    newProgress,
    getProgress,
    getProgressId,
    updateProgress,
    getProgressById
}