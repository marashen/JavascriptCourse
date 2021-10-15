//function that calculates relative year for every earth year based on website users input 
var time;
function clocksA() {
	var light = document.getElementById("lightP").value;
	document.getElementById("lightX").style.color = 'green';
	document.getElementById("earthX").style.color = 'green';
	document.getElementById("lightX").innerHTML = light;
	document.getElementById("relativeX").style.color = 'green';
	var lightD = parseFloat(light) / 100;
	var earthT = 1;
		function timers() {
			var lightS = earthT * 31557600;
			var lqp1 = 299792458 * 299792458;
			var lqp2 = lightD * 299792458;
			var lqp3 = lqp2 * lqp2;
			var lqp4 = lqp3 / lqp1;
			var lqp5 = 1 - lqp4;
			var lqp6 = Math.sqrt(lqp5);
			var lqp7 = lightS * lqp6;
			var lqpM = lqp7 / 60;
			var lqpH = lqpM / 60;
			var lqpD = lqpH / 24;
			var lqpY = lqpD / 365;
			var relLX = Math.floor(lqpY)
			relativeX.innerHTML = relLX;
			earthT = earthT + 1;
			earthX.innerHTML = earthT;
			time = setTimeout(timers, 250);
			if (isNaN(light)) {
				clearTimeout(time);
				document.getElementById("lightX").innerHTML = "Reenter Light %";
				document.getElementById("lightX").style.color = 'red';
				document.getElementById("earthX").innerHTML = "Reenter Light %";
				document.getElementById("earthX").style.color = 'red';
				document.getElementById("relativeX").innerHTML = "Reenter Light %";
				document.getElementById("relativeX").style.color = 'red';
			}
			else if (light > 100 || light < 0) {
				clearTimeout(time);
				document.getElementById("lightX").innerHTML = "Reenter Light %";
				document.getElementById("lightX").style.color = 'red';
				document.getElementById("earthX").innerHTML = "Reenter Light %";
				document.getElementById("earthX").style.color = 'red';
				document.getElementById("relativeX").innerHTML = "Reenter Light %";
				document.getElementById("relativeX").style.color = 'red';						
			}
		}
		timers();
	}
//resets counting mechanism & initial variables to allow another input to be entered by the user
function clocksS() {
	clearTimeout(time);
	var earthT = 0
	var lightS = 0
	document.getElementById("lightX").innerHTML = "Reenter Light %";
	document.getElementById("lightX").style.color = 'red';
	document.getElementById("earthX").innerHTML = "Reenter Light %";
	document.getElementById("earthX").style.color = 'red';
	document.getElementById("relativeX").innerHTML = "Reenter Light %";
	document.getElementById("relativeX").style.color = 'red';
}
//slideshow picture change
var slideI2 = 1;
slidesS2(slideI2);
function slidesP(n) {
	slidesS2(slideI2 += n);
}
function slideC(n) {
	slidesS2(slideI2 = n);
}
function slidesS2(n) {
	var num;
	var slidesV = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");
	if (n > slidesV.length) {slideI2 = 1}
	if (n < 1) {slideI2 = slidesV.length}
	for (num = 0; num < slidesV.length; num++) {
		slidesV[num].style.display = "none";
	}
	for (num = 0; num < dots.length; num++) {
		dots[num].className = dots[num].className.replace(" active", "");
	}
	slidesV[slideI2-1].style.display = "block";
	dots[slideI2-1].className += " active";
}
