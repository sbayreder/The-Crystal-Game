$(document).ready(function() {
  //arrays
  var wins = [];
  var loss = [];
  var counter = 0;

  // random number generator
  var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(random);
  $("#tNum").text(random);
  
  //gem randomizer(repeat code for each gem)
  function randomGenerator(max, min) {
    var gems = Math.floor(Math.random() * (max - min + 1)) + min;
    return gems;
  }
  var gemsB = randomGenerator(12,1);
	var gemsG = randomGenerator(12,1);
	var gemsP = randomGenerator(12,1);
	var gemsR = randomGenerator(12,1);
  $("#gemB").on("click", function() {
    counter += gemsB;
    console.log(counter);
    if (counter > random) {
			alert("You lost!!");
			random = randomGenerator(120,19);
			$("#tNum").text(random);
    } else if (counter == random) {
      alert("You Win!!");
    }
  });

  $("#gemG").on("click", function() {
    counter += gemsG;
    console.log(counter);
	});
	$("#gemP").on("click", function() {
    counter += gemsP;
    console.log(counter);
	});
	$("#gemR").on("click", function() {
    counter += gemsR;
    console.log(counter);
  });

	$('#win').text("Wins :" + wins);
	$('#loss').text("Loss :" + loss);
});
