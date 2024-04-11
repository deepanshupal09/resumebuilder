const getData = "SELECT *FROM users"
const getUserByEmail = "SELECT * FROM users WHERE email=$1"
const addUser = "INSERT INTO users (email,name,picture,password) VALUES ($1,$2,$3,$4)"
const getDetailsByDetailId = "SELECT * FROM Details where email=$1 and detailId=&2"
const getAllDetailsByEmail = "SELECT * FROM Details where email=$1"
const addDetails = "INSERT INTO Details (email, detailId, details) VALUES ($1,$2,$3)" 
const updateDetailsByDetailId = "UPDATE Details SET details=$1 WHERE detailId=$2"

module.exports = {
    getData,
    getUserByEmail,
    addUser,
    getDetailsByDetailId,
    getAllDetailsByEmail,
    addDetails,
    updateDetailsByDetailId
}