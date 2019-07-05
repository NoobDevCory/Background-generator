
var submit = document.getElementById('submit');


submit.onclick = function(){
	var emailAddress = document.getElementById('exampleFormControlInput1').value;
	var selectOne = document.getElementById('exampleFormControlSelect1').value;
	var selectTwo = document.getElementById('exampleFormControlSelect2').value;
	var selectTextArea = document.getElementById('exampleFormControlTextarea1').value;

	console.log('emailAddress');
	console.log('selectOne');
	console.log('selectTwo');
	console.log('selectTextArea');
}

