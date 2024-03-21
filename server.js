//DEPENDENCIES
const app = require('./app');

//CONFIG
require('dotenv').config()
const PORT = process.env.PORT;

//LISTEN
app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`)
});