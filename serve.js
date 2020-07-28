/*
 * @Name: First Vue-Router
 * @Author: Max Base
 * @Repository: https://github.com/BaseMax/FirstVueRouter
 * @Date: 2020-07-27
*/
const express = require('express');
const app = express();

app.use("/asset", express.static(__dirname + "/asset"));
app.use(function(req, res, next) {
    // res.sendFile('/home/max/Desktop/FirstVueRouter/index.html');
    res.sendFile('index.html'); // Change Path
});
app.listen(8282, () => console.log('App listening on port 8282!'));
