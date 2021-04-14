const router = require('express').Router();
let db = require('../models');

router.get('/api/workouts', (req, res) => {
  db.Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
router.get('/api/workouts/:id', (req, res) => {
  db.Workout.updateOne({
      _id: req.params.id
  },{
    $push:{exercises: req.body}
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;
