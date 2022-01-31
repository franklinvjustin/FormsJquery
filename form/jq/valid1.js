$(document).ready(function () {
	var value = false;
	var submit = false;
	var count = false;
	var count1=false;
	$("#hiding").click(function () {
		$("form").toggle();
	});
	$("#submit").click(function () {
			submit = true; {
			count=false;
			var count1=false;
			checkPin();
			checkName();
			checkAddress();
			checkEmail();
			//checkMonth();
			//checkDate();
			checkPassword();
			checkNumber();
			checkFile();
			checkCheck();
			checkRadio();
			submit = false;
			count=false;
		}
	});
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
            count1 = true;
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
        count1 = true;
        $("#error_message4").text("not a mail id");
        return;

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
        count1 = true;
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
        return;
    }


}

function checkNumber() {
    var mobile = $("#mobile").val();
    if (mobile.length != 10) {
        $("#error_message11").text("Mobile Number Must contains 10 Numbers");
        $("#mobile").css({
            "border": "1px solid red"
        });
        count1 = true;
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
    var pin = $("#pin").val();
    if (pin.length != 6) {
        $("#error_message1").text("Pin Code Must contains 6 Numbers");
        $("#pin").css({
            "border": "1px solid red"
        });
        count1 = true;
        return;


    } else {
        {
            $("#error_message1").text("");
        }
        $("#pin").css({
            "border": "1px solid black"
        });
        count1 = false;
        return;
    }

}

/* 
function checkDate() {
    var date = $("#date").val();
    if (date == "") {
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
    var month = $("#month").val();
    if (month == "") {
        $("#error_message5").text("Month must not be empty");
        return;
    } else {
        {
            $("#error_message5").text("");
        }
        return;
    }


}
 */

function checkAddress() {
    var address = $("#adress").val();
    if (address == "") {
        $("#error_message3").text("Address must not be empty");
        count1 = true;
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
        count1 = true;
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
    if (!(document.getElementById("rad1").checked || document.getElementById("rad2").checked)) {
        $("#error_message9").text("One Radio Button must be selected");
        return;
    } else {
            $("#error_message9").text("");
            if(count1)
            {
            }
            else
            {
                alert("All Values are Validated")
            }
        return;
    }

}

function checkCheck() {
    if (!(document.getElementById("vehicle1").checked || document.getElementById("vehicle2").checked)) {
        $("#error_message10").text("One Check Box must be selected");
        return;
    } else {
        {
            $("#error_message10").text("");
        }
        return;
    }

}