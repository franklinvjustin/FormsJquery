$(document).ready(function()
	{
		$("#submit").click(function()
			{
				var name = $("#value").val();
					if (name.length < 6)
					{
						alert("Name size must be more than 6");
					} 
					else 
					{
        			var y = $("#pin").val();
        			if (y.length != 6) 
        			{
           			 	window.alert("Length of Pin must be eqaul to 6");
        			} 
        			else
        			{
        			 var z =  $("#adre").val();
            		if (z == "") {
                		window.alert("Address must not be empty");

            		} 
            		else
            		{
        			var a =  $("#month").val();
                	if (a == "") {
                    	window.alert("Month must not be empty");

                	} 
                	else 
                	{
                    var k =  $("#date").val();
                    if (k == "") {
                    	window.alert("Date must not be empty");

                    }
                    else
                    {
                    var b = $("#pass").val();
                    if (!(b.includes("@") || b.includes("#") || b.includes("&") || b.includes("&"))) {
					 	window.alert("Password must contain a special character");
					}
					else
					{
                    if (b.length < 8) {
                        window.alert("Password length must be more than 8");
                    } 
                    else 
                    {
                    if (!(document.getElementById("rad1").checked || document.getElementById("rad1").checked)) {
                        window.alert("One Radio Button must be selected");
                    } 
                    else
                    {
					var img = $("#file").val();
                    if (img == "")
                    {
                    	 window.alert("Image File must be selected");
                    } 
                    else 
                    {
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
        
				});
			});
		