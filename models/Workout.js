const mongoose = require('mongoose');

const Schema = mongoose.Schema;

<<<<<<< HEAD
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
=======
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter the type of exercise.',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter the exercise name.',
      },
      duration: {
        type: Number,
        required: 'Enter the duration in minutes.',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
>>>>>>> 322240cda236bc1b500512870d4f389e8ad28442
    },
    exercises: [
      {
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

workoutSchema.virtual('totalDuration').get(function () {
  let durate = 0;

  this.exercises.forEach((exercise) => {
    durate = durate + exercise.duration  
  });
  return durate
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
