const switchElement = document.querySelector(".switch");

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});



function validation(){

    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML= "Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length <=5){
        document.getElementById("result").innerHTML= "Atleast 6 letters*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML= "Enter your Email";
        return false;
    }
    else if(document.Formfill.Password.value.length <=7){
        document.getElementById("result").innerHTML= "Password mus be 8 digit";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML= "Enter your Password";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML= "Confirm Password";
        return false;
    }
    else if(document.Formfill.Password.value != document.Formfill.CPassword.value){
        document.getElementById("result").innerHTML= "Password Doesn't match";
        return false;
    }
}