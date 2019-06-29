const server = require('server');
const dataStore = require('nedb')
const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
console.log("Server Initialized");


// const database = new dataStore('database.db');
// database.loadDatabase();
// //console.log("Song Database Initialized");
// const played = new dataStore('played.db');
// console.log("Played Database Initialized")


const path = require('path');
const fs = require('fs');
// //joining path of directory 
// const directoryPath = path.join(__dirname, '/public/songs');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file);
//         songList.push(file);
//     });
//     console.log('SongList')
//     console.log(songList);
// });