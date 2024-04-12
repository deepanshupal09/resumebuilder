const getData = "SELECT * FROM users"
const getUserByEmail = "SELECT * FROM users WHERE email=$1"
const addUser = "INSERT INTO users (email,name,picture,password) VALUES ($1,$2,$3,$4)"
const getDetailsByDetailId = "SELECT * FROM details where email=$1 and detailid=$2"
const getAllDetailsByEmail = "SELECT * FROM details where email=$1"
const addDetails = "INSERT INTO details (email, detailId, details, modified) VALUES ($1,$2,$3,$4)" 
const updateDetailsByDetailId = "UPDATE details SET details=$1,modified=$4 WHERE detailid=$2 and email=$3"

module.exports = {
    getData,
    getUserByEmail,
    addUser,
    getDetailsByDetailId,
    getAllDetailsByEmail,
    addDetails,
    updateDetailsByDetailId
}