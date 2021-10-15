function update() {
      var dt = new Date();
			var he = dt.getHours()
			var hm = he + 10
			if (hm >= 24) {
				hm -= 24;
			}
			var me = dt.getMinutes()
			var mm = me - 11
			if (mm < 0) {
				mm += 11;
			}
			var se = dt.getSeconds()
			var sm = se - 3
			if (sm < 0) {
				sm += 3;
			}
			document.getElementById('hour').innerHTML = hm;
			document.getElementById('min').innerHTML = mm;
			document.getElementById('sec').innerHTML = sm;
			document.getElementById("hour").style.color = 'red';
			document.getElementById("min").style.color = 'red';
			document.getElementById("sec").style.color = 'red';
			document.getElementById("hid1").style.color = 'black';
			document.getElementById("hid2").style.color = 'black';
		}
