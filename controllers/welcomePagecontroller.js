//IMPORTS

const express = require('express');
const {getAllHistory, newHistory} = require('../Queries/history')
const welcome = express.Router();
const {
   // getAllHistory,
    getOneHistory,
    //newHistory,
    updateOneHistory,
    deleteOneHistory
} = require('../Queries/history')


function validateInfo(req, res, next) {
    const body = req.body
    if (!body.name || !body.description) {
        res.status(404).json ({payload:"please make sure you have the right info"})
    }
    next()
}

//GET ALL RESOURCE
welcome.get("/", async (req, res) => {
    try {
        const history = await getAllHistory()
        res.status(200).json({payload: "aqui esta todo"})
    }
    catch (error) {
        res.status(404).json({payload: "❌❌❌"})
    }
});


//GET one individual resource
welcome.get(':welId',async (req, res) => {
    const id = req.params.welId
    console.log(`aqui esta una otra con id de: ${id} `)

    try {
        const history = await getOneHistory()
        res.status(200).json({ payload: `aqui esta una otra con id de: ${id} ` })
    }
    catch (error) {
        res.status(404).json({payload: "we couldnt find the what you were looking for 😅😅"})
    }
});

//CREATE OR POST a new resource
welcome.post('/:welId', async (req, res) => {
    const body = req.body
    //console.log(`Algo nuevo esta aqui`)
    try {
        const newHistory = await newHistory(body)
        res.status(201).json({ payload: `YOUR NEW ANIME WAS CREATED` })
    }
    catch (error) {
        res.status(404).json({payload:`ERROR⛔️🛑🚫`})
    }

});

//UPDATE an exisiting resource
welcome.put('/:welId', async (req, res) => {
    const id = req.params.welId
    const body = req.body
   // console.log(`la information de: ${id} fue cambada`)
    
    try {
        const updated = await updateOneHistory(id, body)
        res.status(202).json({payload:"new information updated"})
    }
    catch (error) {
        res.status(404).json({payload:`Error`})
    }
});
//DELETE an individual resource
welcome.delete('/:welId', async (req, res) => {
    const id = req.params.welId

    //console.log(`los datos con el ID de: ${id},a cido borrado`)
    try {
        const deletedHistory = await deleteOneHistory(welId)
        res.status(200).json({payload:`the information nad been deleted`})
    } catch (error) {
        res.status(404).json ({payload:`error`})
    }
});

module.exports = welcome;