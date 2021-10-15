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
