var weight = 0;
// Display weight by adding Input field
var showWeight = $('#weightInfo').after('<input type="text" id="weight" ' + 'value="' + weight + '">');

// Increase weight
var addWeight = $('#WeightIncrease').click(function() {
    weight = weight + 5;
    $('#weight').val(weight);
});  

// Decrease weight
var subtractWeight = $('#WeightDecrease').click(function() {
    weight = weight - 5;
    $('#weight').val(weight);
});  
