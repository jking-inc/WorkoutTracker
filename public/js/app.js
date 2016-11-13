var weight = 0;
var workout = "";
var workoutSelection = "";

$('#weight').val(weight);

// Increase weight
var addWeight = $('.weightIncrease').click(function() {
        weight = weight + 5;
    $('#weight').val(weight);
});  

// Decrease weight
var subtractWeight = $('.weightDecrease').click(function() {
    if(weight <= 0){
        weight = 0;
    } else{
        weight = weight - 5;
    }
    $('#weight').val(weight);
});  

// Show workout based off the button selection
var selectWeight = $('.buttonContent > p').click(function() {
    workoutSelection = $(this).text();
    if ( workoutSelection == "Bench Press" || workoutSelection == "Incline Bench Press" || workoutSelection == "Decline Bench Press" || workoutSelection == "Dead Lifts" || workoutSelection == "Squats"){
        weight = 45;
    } else if ( workoutSelection == "Barbell Curls" || workoutSelection == "Tricep Cable Pushdowns" || workoutSelection == "EZ-Bar Curls" ){
            weight = 15;
        } else if ( workoutSelection == "Situps" || workoutSelection == "Crunches" || workoutSelection == "Hyperextensions" ) {
                    weight = 0;
                } $('#weight').val(weight);
});


