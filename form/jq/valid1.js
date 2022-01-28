$(document).ready(function () {
	var value = false;
	var submit = false;
	var count = 0;
	$("#SubjectsList").change(function () {
		var selectedSubject = $("#SubjectsList option:selected").val();
		alert("You have selected the country - " + selectedSubject);
	});
	$("#hiding").click(function () {
		$("form").toggle();

	});
	$("#submit").click(function () {
		var b = $("#pass").val();
		submit = true; {
			count=0;
			checkPin();
			checkName();
			checkAddress();
			checkEmail();
			checkMonth();
			checkDate();
			checkPassword();
			checkNumber();
			checkFile();
			checkCheck();
			checkRadio();
			if(count==0){
				window.alert("All Values are Validated");
				$("#error_message").text("");
			}
			submit = false;
		}


	});
	var myModal = document.getElementById("modalDemo");
	var myButton = document.getElementById("modalBtn");
	var exitBtn = document.getElementsByClassName("exit")[0];
	myButton.onclick = function () {
		myModal.style.display = "block";
	}
	exitBtn.onclick = function () {
		myModal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == myModal) {
			myModal.style.display = "none";
		}
	}
});

function checkPassword() {
	var pass = $("#pass").val();
	if (pass == "" || (pass.length) < 6) {
		$("#error_message7").text("Password must be less than 6");
		return;
	} else {
		var b = $("#pass").val();
		if (!(b.includes("@") || b.includes("#") || b.includes("&") || b.includes("&"))) {
			$("#error_message7").text("Password must contain a special character");
			$("#pass").css({
				"border": "1px solid red"
			});

			count++;
			return;
		} else {
			 {
				$("#error_message7").text("");
			}
			$("#pass").css({
				"border": "1px solid black"
			});
			return;
		}
	}
}

function checkEmail() {
	var email = $("#email").val();
	var mail = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/
	if (mail.test(email)) {
		 {
			$("#error_message4").text("");
		}
		$("#email").css({
			"border": "1px solid black"
		});
		return;
	
	} else {
		$("#email").css({
			"border": "1px solid red"
		});
		$("#error_message4").text("not a mail id");
		return;
		count++;
		
	}
}

function checkName() {
	var name = $("#value").val();
	if (name.length < 6) {
		$("#error_message2").text("Name  Must contains atleast 6 Chracters");
		return;
		$("#value").css({
			"border": "1px solid red"
		});
		count++;
	} else if (/^[a-zA-Z]+$/.test(name)) {
			$("#error_message2").text("");
			$("#value").css({
			"border": "1px solid black"
		});
		return;
	} else {
		$("#value").css({
			"border": "1px solid red"
		});
		$("#error_message2").text("Name  Must contains No Numbers");
		count++;
		return;
	}


}

function checkNumber() {
	var y = $("#mobile").val();
	if (y.length != 10) {
		$("#error_message11").text("Mobile Number Must contains 10 Numbers");
		$("#mobile").css({
			"border": "1px solid red"
		});
		return;
	} else {
		 {
			$("#error_message11").text("");
		}
			$("#mobile").css({
			"border": "1px solid black"
		});
		return;
	}

}


function checkPin() {
	var y = $("#pin").val();
	if (y.length != 6) {
		$("#error_message1").text("Pin Code Must contains 6 Numbers");
		$("#pin").css({
			"border": "1px solid red"
		});
		return;


		count++;
	} else {
		 {
			$("#error_message1").text("");
		}
			$("#pin").css({
			"border": "1px solid black"
		});
		return;
	}

}

function checkDate() {
	var k = $("#date").val();
	if (k == "") {
		$("#error_message6").text("Date must not be empty");
		return;
	} else {
		 {
			$("#error_message6").text("");
			return;
		}
	}

}

function checkMonth() {
	var a = $("#month").val();
	if (a == "") {
		$("#error_message5").text("Month must not be empty");
		return;
	} else {
		 {
			$("#error_message5").text("");
		}
		return;
	}


}

function checkAddress() {
	var z = $("#adress").val();
	if (z == "") {
		$("#error_message3").text("Address must not be empty");
		return;
	} else {
		 {
			$("#error_message3").text("");
		}
		return;

	}

}

function checkFile() {
	var img = $("#file").val();

	if (img == "") {
		$("#error_message8").text("Image File must be selected");
		$("#file").css({
			"border": "1px solid red"
		});
		return;

	} else {
		 {
			$("#error_message8").text("");
		$("#file").css({
			"border": "1px solid black"
		});	
		return;	
		}
		

	}


}

function checkRadio() {
	if (!(document.getElementById("rad1").checked || document.getElementById("rad1").checked)) {
		$("#error_message9").text("One Radio Button must be selected");
		count++;
		return;
	} else {
	 {
			$("#error_message9").text("");
		}
		return;
	}

}
function checkCheck() {
	if (!(document.getElementById("vehicle1").checked || document.getElementById("vehicle2").checked)) {
		$("#error_message10").text("One Check Box must be selected");
		count++;
		return;
	} else {
	 {
			$("#error_message10").text("");
		}
		return;
	}

}