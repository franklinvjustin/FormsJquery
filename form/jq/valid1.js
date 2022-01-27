$(document).ready(function () {
	var value = false;
	var submit = false;
	$("#SubjectsList").change(function () {
		var selectedSubject = $("#SubjectsList option:selected").val();
		alert("You have selected the country - " + selectedSubject);
	});
	$("#hiding").click(function () {
		$("form").toggle();

	});
	$("#submit").click(function () {
		var b = $("#pass").val();
		var hey = 0;
		submit = true; {
			checkPin();
			checkName();
			checkAddress();
			checkEmail();
			checkMonth();
			checkDate();
			checkPassword();
			checkNumber();
			checkFile();
			checkRadio();
			window.alert("All Values are Validated");
			$("#error_message").text("");
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
		$("#error_message").text("Password must be less than 6");
		$("#pass").css({
			"border": "1px solid red"
		});

		hey++;
	} else {
		var b = $("#pass").val();
		if (!(b.includes("@") || b.includes("#") || b.includes("&") || b.includes("&"))) {
			$("#error_message").text("Password must contain a special character");
			$("#pass").css({
				"border": "1px solid red"
			});

			hey++;
		} else {
			 {
				$("#error_message").text("");
			}
			$("#pass").css({
				"border": "1px solid black"
			});
		}
	}
}

function checkEmail() {
	var email = $("#email").val();
	var mail = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/
	if (mail.test(email)) {
		 {
			$("#error_message").text("");
		}
		$("#email").css({
			"border": "1px solid black"
		});
	} else {
		$("#email").css({
			"border": "1px solid red"
		});
		$("#error_message").text("not a mail id");
		hey++;
	}
}

function checkName() {
	var name = $("#value").val();
	if (name.length < 6) {
		$("#error_message").text("Name  Must contains atleast 6 Chracters");
		$("#value").css({
			"border": "1px solid red"
		});
		hey++;
	} else if (/^[a-zA-Z]+$/.test(name)) {
		 {
			$("#error_message").text("");
		}
			$("#value").css({
			"border": "1px solid black"
		});

	} else {
		$("#value").css({
			"border": "1px solid red"
		});
		$("#error_message").text("Name  Must contains No Numbers");
		hey++;
	}


}

function checkNumber() {
	var y = $("#mobile").val();
	if (y.length != 10) {
		$("#error_message").text("Mobile Number Must contains 10 Numbers");
		$("#mobile").css({
			"border": "1px solid red"
		});
		hey++;
	} else {
		 {
			$("#error_message").text("");
		}
			$("#mobile").css({
			"border": "1px solid black"
		});
	}

}


function checkPin() {
	var y = $("#pin").val();
	if (y.length != 6) {
		$("#error_message").text("Pin Code Must contains 6 Numbers");
		$("#pin").css({
			"border": "1px solid red"
		});


		hey++;
	} else {
		 {
			$("#error_message").text("");
		}
			$("#pin").css({
			"border": "1px solid black"
		});
	}

}

function checkDate() {
	var k = $("#date").val();
	if (k == "") {
		$("#error_message").text("Date must not be empty");
		hey++;
		$("#date").css({
			"border": "1px solid red"
		});
	} else {
		 {
			$("#error_message").text("");
		}
	}

}

function checkMonth() {
	var a = $("#month").val();
	if (a == "") {
		$("#error_message").text("Month must not be empty");
		hey++;
		$("#month").css({
			"border": "1px solid red"
		});
	} else {
		 {
			$("#error_message").text("");
		}
			$("#month").css({
			"border": "1px solid black"
		});
	}


}

function checkAddress() {
	var z = $("#adress").val();
	if (z == "") {
		$("#error_message").text("Address must not be empty");
		hey++;
		$("#adress").css({
			"border": "1px solid red"
		});

	} else {
		 {
			$("#error_message").text("");
		}
		$("#adress").css({
			"border": "1px solid black"
		});

	}

}

function checkFile() {
	var img = $("#file").val();

	if (img == "") {
		$("#error_message").text("Image File must be selected");
		hey++;
		$("#file").css({
			"border": "1px solid red"
		});

	} else {
		 {
			$("#error_message").text("");
		$("#file").css({
			"border": "1px solid black"
		});		}

	}


}

function checkRadio() {
	if (!(document.getElementById("rad1").checked || document.getElementById("rad1").checked)) {
		$("#error_message").text("One Radio Button must be selected");
		hey++;
	} else {
		if (!submit) {
			$("#error_message").text("");
		}
	}

}