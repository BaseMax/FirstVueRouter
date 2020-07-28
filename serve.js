const express = require('express');
const app = express();

app.use("/asset", express.static(__dirname + "/asset"));
app.use(function(req, res, next) {
    // res.status(404).send('Unable to find the requested resource!');
    res.sendFile('/home/max/Desktop/vuejs/vuejs.html');
});
// app.use(express.static('.'));
// app.get('*', (req, res) => {
//   res.sendFile('index.html');
// });
app.listen(8282, () => console.log('Gator app listening on port 8282!'));
