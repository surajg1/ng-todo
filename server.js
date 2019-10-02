//express requrire for access the index.html in dist folder.dist folder is created by ng build command
const express = require('express');

path = require('path');

const app = express()

app.use(express.static('./dist/todo-app'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/todo-app/index.html'))

});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is started");
})