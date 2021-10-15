function fsen() {
	var p1 = "I ";
	var p2 = "am ";
	var p3 = "ali";
	var p4 = "ve.":
	var wS = p1.concat(p2, p3, p4);
	document.getElementById("conca").innerHTML = wS;
}
function sliceR() {
	var sen = "If time is infinite are we alive?"
	var sec = sen.slice(0,33);
	document.getElementById("slice").innerHTML = sec;
}
function stringM() {
	var num = 115;
	document.getElementById("string").innerHTML = num.toString();
}
Function priceM() {
	var numx = 115.115115115
	document.getElementById("price").innerHTML = numx.toPrecision(3);
}
