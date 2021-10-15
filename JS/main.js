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
	var opeA = 115;
	document.getElementById("operator1").innerHTML = (x === "115");
	console.log(115 == 115);
	//should be true
	console.log(0 == false);
	//should also be true
	var opeB = 115
	if(opeB > 100) { 
		document.getElementById("operator1").style.color = 'green';
	}
	else if (opeB < 100) {
		document.getElementById("operator1").style.color = 'red'
	}
	if (opeB > 100 && opeA > 100) {
		document.getElementById("operator1").style.color = 'lime'
	}
	else if (opeB < 100 || opeA < 100) {
		document.getElementById("operator1").style.color = 'purple'
	}
