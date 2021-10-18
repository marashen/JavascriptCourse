//running relativity clocks with a while loop instead of a timer. Deft still think I prefer the timer but I do like while loops might research a way to add a delay to them.
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
//stopping the while loop
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
//just a planets list utilizing the for loop & a constant
const planetsL = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
var planetsC = "";
var counter;
function planets() {
	for (counter = 0; counter < planetsL.length; counter++) {
		planetsC += counter + 1 + ".) " + planetsL[counter] + "<br>";
	}
	document.getElementById("planetsN").innerHTML = planetsC;
}
//Naming & information mechanism for images
var galaxiesN = [];
function galaxy(Name, Distance, Diameter, Stars) {
	this.galaxyN = Name;
	this.galaxyT = Distance;
	this.galaxyL = Diameter;
	this.galaxyS = Stars;
	galaxiesT();
}
var g1 = new galaxy("The Milky Way", "26,000 ly", "100,000 ly's", "100 billion");
var g2 = new galaxy("Andromeda", "2.537m ly", "260,000 ly's", "1 trillion");
var g3 = new galaxy("Triangulum", "2.723m ly", "60,000 ly's", "40 billion");
var g4 = new galaxy("NGC 6822", "1.631m ly", "7,000 ly's", "10 million");
//setting up the name array
function galaxiesT() {
	galaxiesN[0] = "The Milky Way";
	galaxiesN[1] = "Andromeda";
	galaxiesN[2] = "Triangulum";
	galaxiesN[3] = "NGC 6822";
}
//adding names to images by value in array 
function g1click() {
	document.getElementById("mway").innerHTML = "This is "+g1.galaxyN +". The galactic center is located about "+g1.galaxyT +" from our Solar System. With a diameter of "+g1.galaxyL +", it's estimated to have over "+g1.galaxyS +" stars!";
	document.getElementById("titles0").innerHTML = galaxiesN[0];
}
function g2click() {
	document.getElementById("andro").innerHTML = "This is "+g2.galaxyN +". It is located about "+g2.galaxyT +" from our own galaxy! It has a massive range with a diameter nearing "+g2.galaxyL +" & contains over "+g2.galaxyS +" stars!";
	document.getElementById("titles1").innerHTML = galaxiesN[1];
}
function g3click() {
	document.getElementById("trig").innerHTML = "This is "+g3.galaxyN +". The galactic center is located about "+g3.galaxyT +" from our Solar System. With a diameter of "+g3.galaxyL +", it's estimated to have over "+g3.galaxyS +" stars!";
	document.getElementById("titles2").innerHTML = galaxiesN[2];
}
function g4click() {
	document.getElementById("ngc").innerHTML = "This is "+g4.galaxyN +". It is located about "+g4.galaxyT +" from our own galaxy! It has a massive range with a diameter nearing "+g4.galaxyL +" & contains over "+g4.galaxyS +" stars!";
	document.getElementById("titles3").innerHTML = galaxiesN[3];
}
