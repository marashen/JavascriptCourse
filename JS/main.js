var reset = 2;
function clocksA() {
	var light = document.getElementById("lightP").value;
	document.getElementById("lightX").style.color = 'green';
	document.getElementById("earthX").style.color = 'green';
	document.getElementById("lightX").innerHTML = light;
	document.getElementById("relativeX").style.color = 'green';
	var lightD = parseFloat(light) / 100;
	var earthT = 1;
	reset = 1;
	while (reset = 1) {
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
		earthT++;
		earthX.innerHTML = earthT;
		if (isNaN(light)) {
			reset = 0
			document.getElementById("lightX").innerHTML = "Reenter Light %";
			document.getElementById("lightX").style.color = 'red';
			document.getElementById("earthX").innerHTML = "Reenter Light %";
			document.getElementById("earthX").style.color = 'red';
			document.getElementById("relativeX").innerHTML = "Reenter Light %";
			document.getElementById("relativeX").style.color = 'red';
		}
		else if (light > 100 || light < 0) {
			reset = 0
			document.getElementById("lightX").innerHTML = "Reenter Light %";
			document.getElementById("lightX").style.color = 'red';
			document.getElementById("earthX").innerHTML = "Reenter Light %";
			document.getElementById("earthX").style.color = 'red';
			document.getElementById("relativeX").innerHTML = "Reenter Light %";
			document.getElementById("relativeX").style.color = 'red';						}
		}
	}
}
function clocksS() {
	reset = 0
	var earthT = 0
	var lightS = 0
	document.getElementById("lightX").innerHTML = "Reenter Light %";
	document.getElementById("lightX").style.color = 'red';
	document.getElementById("earthX").innerHTML = "Reenter Light %";
	document.getElementById("earthX").style.color = 'red';
	document.getElementById("relativeX").innerHTML = "Reenter Light %";
	document.getElementById("relativeX").style.color = 'red';
}
