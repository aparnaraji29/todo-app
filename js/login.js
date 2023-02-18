// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let pswrderror = document.getElementById("pswrd-error");
// let usererror = document.getElementById("user-error");
// let successIcon = document.getElementsByClassName("success-icon");
// let failureIcon = document.getElementsByClassName("failure-icon");

// function validateName(){
//     if(username.value.trim()==""){
//         usererror.innerHTML="username cannot be empty"
//         usererror.style.color="red"
//         username.style.border = "2px solid red";
//         failureIcon.username.style.opacity = "1";
//         successIcon.style.opacity = "0";
//         return false
//     }


//     else if(username.value!=="admin"){
//         usererror.innerHTML=" invalid username"
//         usererror.style.color="red"
//         username.style.border = "2px solid red";
//         failureIcon.style.opacity = "1";
//         successIcon.style.opacity = "0";
//         return false
//     }

//     else if(username.value==="admin"){
//         usererror.innerHTML=" valid username"
//         usererror.style.color="green"
//         username.style.border = "2px solid green";
//         failureIcon.style.opacity = "0";
//         successIcon.style.opacity = "1";
//         return true
//     }


// }



// function validatePassword(){
//     if(password.value.trim()==""){
//         pswrderror.innerHTML="password cannot be empty"
//         password.style.border = "2px solid red";
//         pswrderror.style.color="red"
//         return false
//     }

//     else if(password.value!=="12345"){
//         pswrderror.innerHTML="invalid password"
//         password.style.border = "2px solid red";
//         pswrderror.style.color="red"
//         return false
//     }
//     else if(password.value==="12345"){
//         pswrderror.innerHTML="valid password"
//         password.style.border = "2px solid green";
//         pswrderror.style.color="green"
//         return true
//     }

// }


// function validateForm(){
//     if(!validateName() || !validatePassword()){
//         return false
//     }
//     else {
//         return true
//     }
// }


// function submitForm(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

    // Get the input values
    let username = document.getElementById("username");
let password = document.getElementById("password");
let pswrderror = document.getElementById("pswrd-error");
let usererror = document.getElementById("user-error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");

function validateName(){
    if(username.value.trim()==""){
        usererror.innerHTML="username cannot be empty"
        usererror.style.color="red"
        username.style.border = "2px solid red";
        failureIcon.username.style.opacity = "1";
        successIcon.style.opacity = "0";
        return false
    }


    else if(username.value!=="admin"){
        usererror.innerHTML=" invalid username"
        usererror.style.color="red"
        username.style.border = "2px solid red";
        failureIcon.style.opacity = "1";
        successIcon.style.opacity = "0";
        return false
    }

    else if(username.value==="admin"){
        usererror.innerHTML=" valid username"
        usererror.style.color="green"
        username.style.border = "2px solid green";
        failureIcon.style.opacity = "0";
        successIcon.style.opacity = "1";
        return true
    }


}



function validatePassword(){
    if(password.value.trim()==""){
        pswrderror.innerHTML="password cannot be empty"
        password.style.border = "2px solid red";
        pswrderror.style.color="red"
        return false
    }

    else if(password.value!=="12345"){
        pswrderror.innerHTML="invalid password"
        password.style.border = "2px solid red";
        pswrderror.style.color="red"
        return false
    }
    else if(password.value==="12345"){
        pswrderror.innerHTML="valid password"
        password.style.border = "2px solid green";
        pswrderror.style.color="green"
        return true
    }

}
// function submitForm(event) {

//     event.preventDefault();

//     // Check if the inputs are valid
//     if (validateName() && validatePassword()) {
//         // If the inputs are valid, redirect to another page
//         return true // Replace this with the URL of the page you want to redirect to
//     } else {
//         // If the inputs are invalid, display an error message
//      return false
//     }
// }

		function validateForm() {
			// Get the values of the username and password fields
			var username = document.forms["loginForm"]["username"].value;
			var password = document.forms["loginForm"]["password"].value;

			// Define the regular expressions for the username and password
			var usernameRegex = /^admin$/;
			var passwordRegex = /^12345$/;

			// Check if the username and password match the regular expressions
			if (!usernameRegex.test(username)) {
				alert("Invalid username");
				return false;
			}
			if (!passwordRegex.test(password)) {
				alert("Invalid password");
				return false;
                
			}
            if (usernameRegex.test(username)&&passwordRegex.test(password)) {
				// alert("Invalid username");
				return true;
            }
			// Redirect to another page
			//  window.location.href = "home.html";
		}




 


