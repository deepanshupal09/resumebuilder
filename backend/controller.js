const pool = require('./db')
const queries = require('./queries')

const getData = (req,res) => {
    pool.query(queries.getData,(error,results)=> {
        if(error) throw error
        res.status(200).json(results.rows);
    })
}

const getUserByEmail = (req,res) => {
    const email = req.params.email;
    pool.query(queries.getUserByEmail,[email],(error,results)=>{
        if (error) throw error

        res.status(200).json(results.rows);
    })
}

const addUser = (req,res) => {
    const {email,name,picture,password} = req.body;

    console.log(`email: ${email} name: ${name} pic: ${picture}`)

    pool.query(queries.getUserByEmail,[email],(error,results)=> {
        if(results.rowCount > 0) {
            console.log("user already exists");
            res.send("user already exists");
        } else {
            pool.query(queries.addUser, [email,name,picture,password], (error,results) => {
                if (error) throw error
                res.status(201).send("User added successfully");
            })
        }
    })

}

module.exports = {
    getData,
    getUserByEmail,
    addUser
}