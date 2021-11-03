function lifeInWeeks(age) {
var yearsRemaining= 90-age;
var x=(365*yearsRemaining);
var y=(52*yearsRemaining);
var z=(12*yearsRemaining);
    console.log("You have "+x+" days, "+y+" weeks, and "+z+" months left.");
    }

lifeInWeeks(12);