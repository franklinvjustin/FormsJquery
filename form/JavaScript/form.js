var value = false;
var submit = false;
var count = false;

function display() {
    submit = true;
    count = false;
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
}

function checkPassword() {
    var pass = document.getElementById("pass").value;
    if (pass == "" || (pass.length) < 6) {
        document.getElementById("pass").style.borderColor = "red";
        document.getElementById("error_message7").innerHTML = ("Password must be less than 6");
        count=true;
        return;
    } else {
        var b = document.getElementById("pass").value;
        if (!(b.includes("@") || b.includes("#") || b.includes("&") || b.includes("&"))) {
            document.getElementById("pass").style.borderColor = "red";
            document.getElementById("error_message7").innerHTML = ("Password must contain a special character");
            return;
        } else {
            document.getElementById("pass").style.borderColor = "black";
            document.getElementById("error_message7").innerHTML = ("");
            return;
        }
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var mail = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/
    if (mail.test(email)) {
        {
            document.getElementById("email").style.borderColor = "black";
            document.getElementById("error_message4").innerHTML = ("");
        }
        return;

    } else {
        document.getElementById("email").style.borderColor = "red";
        count=true;
        document.getElementById("error_message4").innerHTML = ("not a mail id");
        return;

    }
}

function checkName() {
    var name = document.getElementById("value").value;
    if (name.length < 6) {
        document.getElementById("value").style.borderColor = "red";
        document.getElementById("error_message2").innerHTML = ("Name  Must contains atleast 6 Chracters");
        count=true;
        return;
    } else if (/^[a-zA-Z]+$/.test(name)) {
        document.getElementById("value").style.borderColor = "black";
        document.getElementById("error_message2").innerHTML = ("");
        return;
    } else {
        document.getElementById("value").style.borderColor = "red";
        document.getElementById("error_message2").innerHTML = ("Name  Must contains No Numbers");
        return;
    }


}

function checkNumber() {
    var mobile = document.getElementById("mobile").value;
    if (mobile.length != 10) {
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("error_message11").innerHTML = ("Mobile Number Must contains 10 Numbers");
        count=true;
        return;
    } else {
        document.getElementById("error_message11").innerHTML = ("");
        document.getElementById("mobile").style.borderColor = "black";

        return;
    }

}


function checkPin() {
    var pin = document.getElementById("pin").value;
    if (pin.length != 6) {
        document.getElementById("pin").style.borderColor = "red";
        document.getElementById("error_message1").innerHTML = ("Pin Code Must contains 6 Numbers");
        count = true;
        return;


    } else {
        document.getElementById("pin").style.borderColor = "black";
        document.getElementById("error_message1").innerHTML = ("");
        return;
    }

}

/* 
function checkDate() {
    var date = document.getElementById("date").value;
    if (date == "") {
        document.getElementById("date").style.borderColor = "red";
        document.getElementById("error_message6").innerHTML = ("Date must not be empty");
    	count=true;
        return;
    } else {
        {
            document.getElementById("date").style.borderColor = "black";
            document.getElementById("error_message6").innerHTML = ("");
            return;
        }
    }

}

function checkMonth() {
    var month = document.getElementById("month").value;
    if (month == "") {
        document.getElementById("month").style.borderColor = "red";
        document.getElementById("error_message5").innerHTML = ("Month must not be empty");
        return;
    } else {
        {
            document.getElementById("month").style.borderColor = "black";
            document.getElementById("error_message5").innerHTML = ("");
        }
        return;
    }


}
 */

function checkAddress() {
    var address = document.getElementById("adress").value;
    if (address == "") {
        document.getElementById("adress").style.borderColor = "red";
        document.getElementById("error_message3").innerHTML = ("Address must not be empty");
        return;
    } else {
        {
            document.getElementById("adress").style.borderColor = "black";
            document.getElementById("error_message3").innerHTML = ("");
        }
        return;

    }

}

function checkFile() {
    var img = document.getElementById("file").value;

    if (img == "") {
        document.getElementById("file").style.borderColor = "red";
        document.getElementById("error_message8").innerHTML = ("Image File must be selected");
        return;

    } else {
        {
            document.getElementById("error_message8").innerHTML = ("");
            document.getElementById("file").style.borderColor = "black";

            return;
        }


    }


}

function checkRadio() {
    if (!(document.getElementById("rad1").checked || document.getElementById("rad2").checked)) {
        document.getElementById("error_message9").innerHTML = ("One Radio Button must be selected");
        return;
    } else {
        document.getElementById("error_message9").innerHTML = (""); 
        return;
    }

}

function checkCheck() {
    if (!(document.getElementById("vehicle1").checked || document.getElementById("vehicle2").checked)) {
        document.getElementById("error_message10").innerHTML = ("One Check Box must be selected");
        return;
    } else {
        {
            document.getElementById("error_message10").innerHTML = ("");
            if(count)
            {
            	alert("Not Validated")
            }
            else
            {
            	alert("All Values are Validated")
            }
        }
        return;
    }

}