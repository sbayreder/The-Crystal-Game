$(document).ready(function() {
  //arrays
  var wins = [];
  var loss = [];
  var counter = 0;
  
  // random number generator
  var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
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
      $('#player').text("Player Score :" + counter);
    if (counter > random) {
      loss++;
      
			alert("You lost!!");
			random = randomGenerator(120,19);
			$("#tNum").text(random);
    } else if (counter == random) {
      wins++;
      alert("You Win!!");
      $('#win').text("Wins :" + wins);
	
    }
  });

  $("#gemG").on("click", function() {
    counter += gemsG;
      $('#player').text("Player Score :" + counter);
         if (counter > random) {
           loss++;
			alert("You lost!!");
			random = randomGenerator(120,19);
			$("#tNum").text(random);
    } else if (counter == random) {
      wins++;
      alert("You Win!!");
      $('#win').text("Wins :" + wins);
	
    }
	});
	$("#gemP").on("click", function() {
    counter += gemsP;
    $('#player').text("Player Score :" + counter);
    if (counter > random) {
      loss++;
			alert("You lost!!");
			random = randomGenerator(120,19);
			$("#tNum").text(random);
    } else if (counter == random) {
      wins++;
      alert("You Win!!");
      $('#win').text("Wins :" + wins);
	
    }
	});
	$("#gemR").on("click", function() {
    counter += gemsR;
    $('#player').text("Player Score :" + counter);
    if (counter > random) {
      loss++;
			alert("You lost!!");
			random = randomGenerator(120,19);
			$("#tNum").text(random);
    } else if (counter == random) {
      wins++;
      alert("You Win!!");
      $('#win').text("Wins :" + wins);
	
    }
   
  });
  
	
});
