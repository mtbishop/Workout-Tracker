const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
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

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
