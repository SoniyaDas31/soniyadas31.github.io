function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateName(name){
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}

function validatePhone(phone){
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(phone);
}

function validatePassword(pass_value){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    let myInput = pass_value;
    let password_error_text = document.getElementById("password-error");
  if(myInput.length < 8) { 
    //alert("password should be minimum 8 characters");
    password_error_text.style.display = "block";
    password_error_text.innerHTML = "Password should be minimum 8 characters";
  }else if(lowerCaseLetters.test(myInput)&&upperCaseLetters.test(myInput)&&numbers.test(myInput)){
    //alert("password strength is strong");
    password_error_text.style.display = "block";
    password_error_text.innerHTML = "Password strength is strong";
    return true;
  }else if(lowerCaseLetters.test(myInput)&&upperCaseLetters.test(myInput)) {  
    //alert("password strength is medium");
    password_error_text.style.display = "block";
    password_error_text.innerHTML = "Password strength is medium";
  }else{
   //alert("password strength is poor");
    password_error_text.style.display = "block";
    password_error_text.innerHTML = "Password strength is poor";
  }
}

// for login page
function form_check(){
    const email_login = document.getElementById("emailLogin").value;
    let email_error = document.getElementById("email-error");
    let password_check = document.getElementById("floatingPassword").value;
    if(!email_login){
        email_error.style.display = "block";
        email_error.innerHTML = "Please enter email id";
    }else if(!validateEmail(email_login)){
        email_error.style.display = "block";
        email_error.innerHTML = "Email not in format";
    }else {
        email_error.style.display = "none";
        email_error.innerHTML = "";
        if(!validatePassword(password_check)){
            alert("Login Failed");
        }else{
            alert("Login Success");
            window.location.href = "books.html";

        }
    }
    
}

// for signup page
function form_validate(){

    // alert("Form Validate");
    const user_name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    let name_error = document.getElementById("name-error");
    let email_error = document.getElementById("email-error");
    let phone_error = document.getElementById("phone-error");
    let password_error = document.getElementById("password-error");
    
    //alert("Name : "+user_name+", Email: "+email+", Phone: "+phone+", Password: "+password);
    // console.log("Name : "+user_name+", Email");
    if(!password){
        password_error.style.display = "block";
        password_error.innerHTML = "Please enter password";
    }else{
       validatePassword(password);
      // alert("password:"+password);
       // password_error.style.display = "none";
    }

    if(!phone){
        phone_error.style.display = "block";
        phone_error.innerHTML = "Please enter phone number";
    }else if(!validatePhone(phone)){
        phone_error.style.display = "block";
        phone_error.innerHTML = "Phone number format not accepted";
    }else {
        phone_error.style.display = "none";
        phone_error.innerHTML = "";
    }
    
    if(!email){
        email_error.style.display = "block";
        email_error.innerHTML = "Please enter email id";
    }else if(!validateEmail(email)){
        email_error.style.display = "block";
        email_error.innerHTML = "Email not in format";
    }else {
        email_error.style.display = "none";
        email_error.innerHTML = "";
    }

    if(!user_name){
        //alert("Name is blank");
        name_error.innerHTML="Please enter your name";
        name_error.style.display = "block";
        
    }else{
        name_error.style.display = "none";
        if(!validateName(user_name)){
            name_error.style.display = "block";
            name_error.innerHTML="Numbers and special characters are not allowed";
        }else{
            name_error.style.display = "none";
            name_error.innerHTML="";
        }

       

        
    }
}