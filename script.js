//The date we are counting down to
var count = new Date("Dec 8, 2020 14:00:00").getTime();

var x = setInterval(function() {
    // Today's date and time
    var now = new Date().getTime();
    // The duration between now and the date we're counting down to
    var d = count - now;

    // Calculations for each time instance (days, hours, mins, and seconds)
    var days = Math.floor(d / (1000 * 24 * 60 * 60 ));
    var hours = Math.floor((d % (1000 * 24 * 60 * 60 )) / (1000 * 60 * 60));
    var minutes =  Math.floor((d % (1000 * 60 * 60 )) / (1000 * 60));
    var seconds =  Math.floor((d % (1000 * 60 )) / 1000);

    // Grabbing each instance 
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

// When the countdown is over, write some text
if (d <= 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Event has started. Check your email for a link.";
}
}, 1000);
