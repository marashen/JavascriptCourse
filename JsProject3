// calculating special relativty based on numbers entered by website user
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
// calculating amount of years website user enters into seconds (accounting for leap years)
		function calcY() {
			var yearsV = document.getElementById("years").value;
			var yearsL = parseFloat(yearsV) / 4
			var yearsD = parseFloat(yearsV) * 365
			var yearsDL = yearsL + yearsD
			var yearsH = yearsDL * 24
			var yearsM = yearsH * 60
			var yearsS = yearsM * 60
			var yearR = Math.round(yearsS)
			
			if(!isNaN(yearR)) {
				document.getElementById("years2s").innerHTML = yearsV+" years in seconds = "+yearR;
				document.getElementById("years2s").style.color = 'darkgreen';
				document.getElementById("years2s").style.fontFamily = 'Courier';
				document.getElementById("years2s").style.fontStyle = 'italic';

			}	
			else {
				document.getElementById("years2s").innerHTML = "Try double checking your numbers!"
				document.getElementById("years2s").style.color = 'red';
			}
		}
// calculating amount of seconds website user enters into years (accounting for leap years)
		function calcS() {
			var secV = document.getElementById("seconds").value;
			var secMa = parseFloat(secV) / 60
			var secHa = secMa / 60
			var secDa = secHa / 24
			var secYa = secDa / 365
			var secL = secYa / 4
			var secMb = parseFloat(secV) / 60
			var secHb = secMb / 60
			var secDb = secHb / 24
			var secDL = secDb - secL
			var secYT = secDL / 365
			var secR = Math.ceil(secYT)
			
			
			if(!isNaN(secR)) {
				document.getElementById("seconds2y").innerHTML = secV+" seconds in years = "+secR;
				document.getElementById("seconds2y").style.color = 'darkgreen';
				document.getElementById("seconds2y").style.fontFamily = 'Courier';
				document.getElementById("seconds2y").style.fontStyle = 'italic';

			}	
			else {
				document.getElementById("seconds2y").innerHTML = "Try double checking your numbers!"
				document.getElementById("seconds2y").style.color = 'red';
			}
		}
// calculating gravitational time dialtion based on website users entered numbers
		function calcG() {
			var time2V = document.getElementById("time2").value;
			var kgV = document.getElementById("mass").value;
			var expoV = document.getElementById("exop").value;
			var distV = document.getElementById("dist").value;
			var gconsV = document.getElementById("gcons").value;
			var light2V = document.getElementById("light2").value;
			var expoVT = parseFloat(expoV);
			var exp = Math.pow(10,expoVT)
			var massV = parseFloat(kgV) * exp
			var gp1 = parseFloat(light2V) * parseFloat(light2V)
			var gp2 = parseFloat(distV) * gp1
			var gp3 = parseFloat(gconsV) * massV
			var gp4 = 2 * gp3
			var gp5 = gp4 / gp2
			var gp6 = 1 - gp5
			var gp7 = Math.sqrt(gp6)
			var gp8 = parseFloat(time2V) / gp7
			var gpR = Math.round(gp8)

			if(!isNaN(gpR)) {
				document.getElementById("gtdans").innerHTML = "Time Dilation in seconds = "+gpR;
				document.getElementById("gtdans").style.color = 'darkgreen';
				document.getElementById("gtdans").style.fontFamily = 'Courier';
				document.getElementById("gtdans").style.fontStyle = 'italic';

			}	
			else {
				document.getElementById("gtdans").innerHTML = "Try double checking your numbers!"
				document.getElementById("gtdans").style.color = 'red';
			}
		}
