function getExercise() {
    return function (activity) {
        return "Today's exercise: " + activity;
    };
}
const exercise = getExercise();
console.log(exercise("Running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));