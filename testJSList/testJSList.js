/*
These methods alter the info <p> tag in the html page.

Upon user clicking on the button, the respective class' information
appears on the screen.
*/

//EDIT: STICK TO BUTTONS, ITS EASIER AND LOOKS BETTER


//calls info of a class, given by classKey, formats the info, and outputs the info onto the screen
function fillInfo(classKey) {
	var myList = getClass(String(classKey));

	if(myList == undefined) {
		document.getElementById("info").innerHTML = "undefined class";
	}
	if(myList != undefined) {
		var text = document.getElementById(myList[0]).innerHTML;
		for(var i = 1; i < myList.length; i++) {
			text += myList[i] + "</br>";
		}		

		if(document.getElementById(myList[0]).innerHTML.localeCompare("") == 0) { //will only display if not displayed already (prevent dupes)
			document.getElementById(myList[0]).innerHTML = text;
		}
	}
}

//calls the class requested through comparisons with classKey - returns the classList requested, or undefined if classList not found 
function getClass(classKey) {
	for(var i = 0; i < classList.length; i++) {
		if(classList[i][0].localeCompare(classKey) == 0) {
			return classList[i];
		}
	}

	return undefined;
}

function clr() {
	for(var i = 0; i < classList.length; i++) {
		document.getElementById(classList[i][0]).innerHTML = "";
	}
}

function show(ID, buttonID) {
	var element = document.getElementById(String(ID));
	element.style.display = "block";

	var button = document.getElementById(String(buttonID));
	button.onclick = function() {
		hide(ID, buttonID);
	};
	button.style.backgroundColor = "#5a5a57";
}

function hide(ID, buttonID) {
	var element = document.getElementById(String(ID));
	element.style.display = "none";

	var button = document.getElementById(String(buttonID));
	button.onclick = function() {
		show(ID, buttonID);
	};
	button.style.backgroundColor = "#393939";
}