const path = require('path');

module.exports = (app) => {

app.get('/exercise',
  (req, res) => {
    res.sendFile(path.resolve('public/exercise.html'));
  });
app.get('/stats',
  (req, res) => {
    res.sendFile(path.resolve('public/stats.html'));
  });
app.get('/',
  (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });
}

