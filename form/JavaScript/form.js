function display() {
    var x = document.getElementById("value").value;
    if (x.length < 6) {
        window.alert("Length of Name must be more than 6");
    } else {
        var y = document.getElementById("pin").value;
        if (y.length != 6) {
            window.alert("Length of Pin must be eqaul to 6");
        } else {
            var z = document.getElementById("adre").value;
            if (z == "") {
                window.alert("Address must not be empty");

            } else {

                var a = document.getElementById("month").value;
                if (a == "") {
                    window.alert("Month must not be empty");

                } else {
                    var k = document.getElementById("date").value;
                    if (k == "") {
                        window.alert("Date must not be empty");

                    } else {

                        var b = document.getElementById("pass").value;
                        if (!(b.includes("@") || b.includes("#") || b.includes("&") || b.includes("&"))) {

                            window.alert("Password must contain a special character");

                        } else {
                            if (b.length < 8) {
                                window.alert("Password length must be more than 8");

                            } else {
                                if (!(document.getElementById("rad1").checked || document.getElementById("rad1").checked)) {
                                    window.alert("One Radio Button must be selected");
                                } else {

                                    var img = document.getElementById('file').value;
                                    if (img == "") {
                                        window.alert("Image File must be selected");

                                    } else {
                                        window.alert("All Values are Validated");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
