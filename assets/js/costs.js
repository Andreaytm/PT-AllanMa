/*formatted script from http://javascript-coder.com*/

function getSessionPrice() {

	var session_prices = new Array();
	session_prices["5*45mins"]=50;
	session_prices["8*45mins"]=80;
	session_prices["10*45mins"]=100;
	session_prices["5*1hour"]=75;
	session_prices["8*1hour"]=120;
	session_prices["10*1hour"]=150;

	var SessionPrice=0;
	
	var theForm = document.forms["contactForm"];

	var selectedSession= theForm.elements["selectedSession"];
	/*selectedSession.length=6*/
	for (var i = 0; i< selectedSession.length; i++) {

		if(selectedSession[i].checked) {

			SessionPrice = session_prices[selectedSession[i].value];
		}   
	}
	return SessionPrice;
}


function calculateTotal() {
	var SessionPriceTotal= getSessionPrice();
	document.getElementById("totalPrice").innerHTML= "Total Price for Session £"+SessionPriceTotal;
}

