var weight = 0;
var workout = "";

/* Display weight by adding Input field
var showWeight = $('#chooseWorkout').after('<input type="text" id="weight" ' + 'value="' + weight + '">');
*/

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

// Show selected dropdown list and update the default weight
$('.workoutTab').change(function (){
    $(".tablinks: active").each(function() {
        workout += $(this).val();
        if( workout == "BenchPress" || workout == "Squat" || workout == "DeadLift" ){
            $('#weight').val(weight += 45);
            console.log(weight);
        } else if ( workout == "Curls" ){
            $('#weight').val(weight += 10);
        }
    }); // end each function
}); // end change function

