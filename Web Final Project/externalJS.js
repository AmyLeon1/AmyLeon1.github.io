
// alert("this file is now working");



function validate(){
	var x = document.getElementById("name").value;
	var y = document.getElementById("email").value;
	var z = document.getElementById("phoneNumber").value;
	var a = document.getElementById("time").value;

	if (x == ""){
	alert("Please provide a name");
	return false
    }


	if (y == ""){
		alert("Please provide an email address");
		return false
    }

    if (z == ""){
			alert("Please provide a phone number");
			return false
	    }

	    if (a == ""){
			alert("Please let us know what is your preferred date");
			return false
	    }

	    else
		   		 {
		   		 alert('Thank you, please check your email for the booking confirmation');
   		 }

	  }


 function totalCost(){
	 var dive = document.getElementById("diveChoice").value;
	 var amount = document.getElementById("quantity").value;

	 if (dive === "cenote"){
		 document.getElementById("total").value =
		 amount * 150;
		 }

	if (dive === "shark"){
		 document.getElementById("total").value =
		 amount * 200;
		 }

	if (dive === "reef"){
		 document.getElementById("total").value =
		 amount * 100;
	 }
  }

 document.getElementById('diveChoice').addEventListener('change', totalCost);
 document.getElementById('quantity').addEventListener('change', totalCost);

  function hasBloodPressure(){
 	  	 var positive = document.getElementById("bloodPressure").value;

 	  	 if(positive === "yes"){
 	  		 alert("Due to health and safety reasons, people with high blood pressure cannot dive. Please consult with your doctor for more information.");

 	  		 }

 	  	 }
 	  	 document.getElementById('bloodPressure').addEventListener('change', hasBloodPressure);


