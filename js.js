	
var temporalResult;
var	resultList = [];
var classItem;
function constructor(o1, o2, op, r) {
	this.operand1 = o1;
	this.operand2 = o2;
	this.operation = op;
	this.result = r;
}
function takeit() {
	var x = document.getElementById("myText").value;
	var y = document.getElementById("myText2").value;
	var e =  document.getElementById("selection").value;
	switch (e) {
		case "+" :
		temporalResult = parseInt(x) + parseInt(y);
		break; 
		case "-" :
		temporalResult = parseInt(x) - parseInt(y);
		break;
		case "/" :
		temporalResult = parseInt(x) / parseInt(y);
		break;
		case "*" :
		temporalResult = parseInt(x) * parseInt(y);
		break;
	}
	resultList.push(new constructor(x, y, e, temporalResult));
	document.getElementById("myUl").innerHTML = "";
	for (var i = resultList.length - 1; i >= 0; i--) {

		document.getElementById("myUl").innerHTML += "<li>" + resultList[i].operand1 + " " + resultList[i].operation + " " + resultList[i].operand2 + " = " + resultList[i].result + "</li>";
	}
}
