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
    else if(username.value.length<2){
        usererror.innerHTML="username cannot be empty"
        usererror.style.color="red"
        return false
    }

    else if(username.value!=="admin"){
        usererror.innerHTML=" invalid username"
        usererror.style.color="red"
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
        pswrderror.style.color="red"
        return false
    }
    else if(password.value.length<2){
        pswrderror.innerHTML="password cannot be empty"
        pswrderror.style.color="red"
        return false
    }

    else if(password.value!=="12345"){
        pswrderror.innerHTML="invalid password"
        pswrderror.style.color="red"
        return false
    }
    else if(password.value==="12345"){
        pswrderror.innerHTML="valid password"
        pswrderror.style.color="green"
        return true
    }
   
}


function validateForm(){
    if(!validateName() || !validatePassword()){
        return false
    }
    else {
        return true
    }
}




