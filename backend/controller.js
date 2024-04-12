const pool = require('./db')
const queries = require('./queries')

const getData = (req,res) => {
    console.log("here")
    pool.query(queries.getData,(error,results)=> {
        if(error) throw error
        res.status(200).json(results.rows);
    })
}

const getUserByEmail = (req,res) => {
    const email = req.headers.email;
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


const updateDetailsByDetailId = (req, res) => {
    const { email, details, detailId } = req.body;
    console.log("detailId: ", detailId)

    console.log(`Updating details: ${details} for detailId: ${detailId} for email: ${email}`)

    pool.query(queries.updateDetailsByDetailId, [details, detailId, email], (error, results) => {
        if (error) throw error;
        res.status(200).send("Details updated successfully");
    });
}

const addDetails =(req,res) => {
    console.log(req.body);
    const {email, detailId, details} = req.body;
    pool.query(queries.addDetails, [email, detailId, details], (error,results)=>{
        if(error) throw error
        res.status(201).send("Details added successfully!")
    })
}

const getAllDetailsByEmail =(req,res) => {
    const email = req.headers.email;
    console.log("email: ",email);
    // res.send("abc");
    pool.query(queries.getAllDetailsByEmail,[email],(error,results)=>{
        if (error) throw error

        res.status(200).json(results.rows);
    })
}

const getDetailsByDetailId =(req,res) => {
    const email = req.headers.email;
    const detailId = req.headers.detailId;
    pool.query(queries.getDetailsByDetailId,[email,detailId],(error,results)=>{
        if (error) throw error

        res.status(200).json(results.row);
    })
}

module.exports = {
    getData,
    getUserByEmail,
    addUser,
    updateDetailsByDetailId,
    getDetailsByDetailId,
    getAllDetailsByEmail,
    addDetails
}