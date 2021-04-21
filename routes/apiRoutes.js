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

router.post('/api/workouts', (req, res) => {
  db.Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  console.log("hello")
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
