		function calcR() {
			var timeV = document.getElementById("time1").value;
			var velV = document.getElementById("vel").value;
			var lightV = document.getElementById("light1").value;
			var eqp1 = parseFloat(lightV) * parseFloat(lightV)
			var eqp2 = parseFloat(velV) * parseFloat(velV)
			var eqp3 = eqp2 / eqp1
			var eqp4 = 1 - eqp3
			var eqp5 = Math.sqrt(eqp4)
			var answerS = parseFloat(timeV) * eqp5
			var answerSR = Math.round(answerS)

			if(!isNaN(answerSR)) {
				document.getElementById("srans").innerHTML = "Time Dilation in seconds = "+answerSR;
				document.getElementById("srans").style.color = 'darkgreen';
				document.getElementById("srans").style.fontFamily = 'Courier';
				document.getElementById("srans").style.fontStyle = 'italic';

			}	
			else {
				document.getElementById("srans").innerHTML = "Try double checking your numbers!"
				document.getElementById("srans").style.color = 'red';
			}
		}
		function galaxy(Name, Distance, Diameter, Stars) {
			this.galaxyN = Name;
			this.galaxyT = Distance;
			this.galaxyL = Diameter;
			this.galaxyS = Stars;
		}

		var g1 = new galaxy("The Milky Way", "26,000 ly", "100,000 ly's", "100 billion");
		var g2 = new galaxy("Andromeda", "2.537m ly", "260,000 ly's", "1 trillion");
		var g3 = new galaxy("Triangulum", "2.723m ly", "60,000 ly's", "40 billion");
		var g4 = new galaxy("NGC 6822", "1.631m ly", "7,000 ly's", "10 million");

		function g1click() {
			document.getElementById("mway").innerHTML = "This is "+g1.galaxyN +". The galactic center is located about "+g1.galaxyT +" from our Solar System. With a diameter of "+g1.galaxyL +", it's estimated to have over "+g1.galaxyS +" stars!";
		}
		function g2click() {
			document.getElementById("andro").innerHTML = "This is "+g2.galaxyN +". It is located about "+g2.galaxyT +" from our own galaxy! It has a massive range with a diameter nearing "+g2.galaxyL +" & contains over "+g2.galaxyS +" stars!";
		}
		function g3click() {
			document.getElementById("trig").innerHTML = "This is "+g3.galaxyN +". The galactic center is located about "+g3.galaxyT +" from our Solar System. With a diameter of "+g3.galaxyL +", it's estimated to have over "+g3.galaxyS +" stars!";
		}
		function g4click() {
			document.getElementById("ngc").innerHTML = "This is "+g4.galaxyN +". It is located about "+g4.galaxyT +" from our own galaxy! It has a massive range with a diameter nearing "+g4.galaxyL +" & contains over "+g4.galaxyS +" stars!";
		}
