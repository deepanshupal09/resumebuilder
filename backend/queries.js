const getData = "SELECT *FROM users"
const getUserByEmail = "SELECT *FROM users WHERE email=$1"
const addUser = "INSERT INTO users (email,name,picture) VALUES ($1,$2,$3)"

module.exports = {
    getData,
    getUserByEmail,
    addUser
}