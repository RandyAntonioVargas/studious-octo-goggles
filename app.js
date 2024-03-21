//DEPENDENIES
const express = require('express');
const welcomepageController = require('./controllers/welcomePagecontroller');

//CONFIG
const app = express();


//MIDDLEWARE

app.use(express.json())


//ROUTES
app.use('/welcome', welcomepageController);


app.get('/', (_, res) => {
    res.send("Welcome,BUITI ACHULURUNI")
});

app.get('/history', (_, res) => {
    
 res.send("joseph was the king 🇻🇨🇻🇨")
});
app.get('/modtime', (req, res) => {
    res.send("in modern times the garifuna live in central america,north america and even UK and EU")
})

app.get("*", (_, res) => {
    res.status(404).send("THE REQUEST YOU ARE LOOKING FOR DOSE NOT EXIST!!🛑🛑🛑🚫🚫⛔️")
});

//


//EXPORTS
module.exports = app;
