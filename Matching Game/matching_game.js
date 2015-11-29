var numberOfFaces = 5, theLeftSide, theRightSide, theBody;

function generateFaces() {
	theLeftSide = document.getElementById("leftSide");
	for (var i = 0; i < numberOfFaces; i++) {
		var img = document.createElement("img");
		img.src = "smile.png";
		img.style.top = Math.floor(Math.random()*400)+"px";
		img.style.left = Math.floor(Math.random()*400)+"px";
		theLeftSide.appendChild(img);
	}
	mainGame();
}

function mainGame() {
	theRightSide = document.getElementById("rightSide");
	theBody = document.getElementsByTagName("body")[0];
	cloneSide();
	theLeftSide.lastChild.onclick = function nextLevel(event){
		event.stopPropagation();
		numberOfFaces += 5;
		deleteFaces(theLeftSide);
		generateFaces();
	}
	theBody.onclick = function gameOver() {
		alert("Game Over");
		numberOfFaces = 5;
		theBody.onclick=null;
		theLeftSide.lastChild.onclick=null;
	}
}

function cloneSide() {
	var leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	deleteFaces(theRightSide);
	theRightSide.appendChild(leftSideImages);
}

function deleteFaces(node) {
	while(node.firstChild) {
		node.removeChild(node.firstChild);
	}
}