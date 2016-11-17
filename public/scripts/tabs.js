function openWorkout(evt, workoutName) {
    // Declare all variables
    var i, buttoncontent, tablinks;

    // Get all elements with class="workoutButton" and Hide them
    buttoncontent = document.getElementsByClassName("workoutButton");
        for (i = 0; i < buttoncontent.length; i++) {
        buttoncontent[i].style.display = "none";
    } 

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(workoutName).style.display = "block";
    evt.currentTarget.className += " active";
}
