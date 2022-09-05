const express = require("express");
const fs = require('fs')



const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    let writer = fs.createWriteStream('uploadfolder/current_date_time.txt') 
    let date = new Date;
    writer.write('Date & Time: '+date);
    res.send(date)
});
var server = app.listen(8085, () => {
    var port = server.address().port;
    console.log('listening on port '+port)
});