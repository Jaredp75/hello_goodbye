const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.send('Hello there!');
});

app.get('/goodbye', function (req, res) {
  res.send('See you later!');
});

app.listen(3000, function () {
  console.log('Successfully started hello-goodbye application!')
});



//app.listen(3000, function () {
//  console.log('Successfully ended hello-goodbye application!')
//});
