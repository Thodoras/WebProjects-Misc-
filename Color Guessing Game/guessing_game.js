var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var target;
var guess_input;
var guesses;
var plural;

function do_game() {
	
	var target_index = Math.random() * colors.length;
	target_index = Math.floor(target_index);
	target = colors[target_index];
	var finished = false;
	guesses = 0;
	plural="";

	while (!finished) {
		guess_input = prompt("I am thinking one of three colors \n\nblue, cyan, gold, gray, green, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
		guesses++;
		if (guesses === 2) {
			plural += "es";
		}
		finished = check_guess();
	}
}

function check_guess() {
	if (colors.indexOf(guess_input) === -1) {
		alert("Sorry I don't recognize your color.\n\nPlease try again.");
		return false;
	}
	if (guess_input < target) {
		alert("Sorry your guess is not correct!\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.");
		return false;
	}
	if (guess_input > target) {
		alert("Sorry your guess is not correct!\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.");
		return false;
	}
	var myBody = document.getElementsByTagName("body")[0];
	myBody.style.background = target;
	alert("Congratulations! You have guessed the color!\n\nIt took you " + guesses + " guess" + plural + " to finish the game!\n\nYou can see the color in the background.");
	return true;
}