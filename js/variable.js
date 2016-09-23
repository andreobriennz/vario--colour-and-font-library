// var background;
// var main;
// var hierarchy; 

var background = document.querySelector('.background');
var main = document.querySelector('.main');
var hierarchy = document.querySelector('.hierarchy');

window.onload=function(){
	// var background = document.querySelector('.background');
	// var main = document.querySelector('.main');
	// var hierarchy = document.querySelector('.hierarchy');

	// background.style.setProperty('--base', background);
	// main.style.setProperty('--main', main);
	// hierarchy.style.setProperty('--hierarchy', hierarchy);
	darkTheme();
// alert('hello');
};


function darkTheme() {
	background.style.backgroundColor = "var(--dark-grey)";
	main.style.color = "var(--light-grey)";
	hierarchy.style.color = "var(--amber)";
}

function lightTheme() {
	background.style.backgroundColor = "var(--light-grey)";
	main.style.color = "var(--dark-grey)";
	hierarchy.style.color = "var(--dark-grey)";
}





