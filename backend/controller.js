const pool = require('./db')

const getData = (req,res) => {
    // console.log("getting data");
    pool.query("SELECT * FROM test",(error,results)=> {
        if(error) {
            console.log('error: ',error);
            throw error
        }
        res.status(200).json(results.rows);
    })
    // res.send("getting data" 
}

module.exports = {
    getData,
}