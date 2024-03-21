const db = require('../DB/DbConfig')

const getAllHistory = async() => {
    try {
        const history = await db.any("SELECT * FROM history")
        return history
    } catch (error) {
        return error
    }
}

const getOneHistory = async (welId) => {
    try {
        const history = await db.one('SELECT history WHERE welId=$1', welId)
        return history
    } catch (error) {
        return error
    }
}

//create
const newHistory = async ({ year, description }) => {
    try {
        const newHistory = await db.one("INSERT INTO history (year, description) VALUES ($1, $2) RETURNING *", [year, description])
        return newHistory
    } catch (error) {
        return error
    }
}

const updateOneHistory = async (id, body) => {
    const { year, description } = body
    try {
        const updatedhistory = await db.one("UPDATE history SET year=$2, description=$3, WHERE id=$1 RETURNING *", [id, year, description])
        return updatedhistory
    } catch (error) {
        return error
    }
}
const deleteOneHistory = async (welId) => {
    try {
        const deletedHistory = db.one("DELETE FROM history WHERE id=$1 RETURNING *", id)
        return deletedHistory
    }
    catch (error) {
        return (error)
    }
}




module.exports = {
    getAllHistory,
    getOneHistory,
    newHistory,
    updateOneHistory,
    deleteOneHistory
}