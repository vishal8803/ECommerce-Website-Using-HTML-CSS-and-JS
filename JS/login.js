function validationl()
{
    var email = document.getElementById('email').value ;
    var password = document.getElementById('password').value ;

    var emailcheck = /^[A-Za-z0-9_.]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.]{3,30}$/ ;
    var passwordcheck  = /^(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9@!#$%&*]{8,16}$/ ;

    if(emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML=" ";
    }else{
        document.getElementById('erroremail').innerHTML="Please enter the correct email id";
        return false ;
    }

    if(passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML=" ";
    }else{
        document.getElementById('errorpassword').innerHTML="Please enter the correct strong password";
        return false ;
    }
}


function  validationc()
{
    var firstn = document.getElementById('firstn').value;
    var lastn = document.getElementById('lastn').value;
    var email1 = document.getElementById('email1').value ;
    var password1 = document.getElementById('password1').value ;
    var confirmp = document.getElementById('confirmp').value ;

    var fnamecheck = /^[A-Za-z ]{3,30}$/ ;
    var lnamecheck = /^[A-Za-z ]{3,30}$/ ;
    var emailcheck = /^[A-Za-z0-9_.]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.]{3,30}$/ ;
    var passwordcheck1  = /^(?=.*[0-9])(?=.*[!@#$%&*])[A-Za-z0-9@!#$%&*]{8,16}$/ ;

    if(fnamecheck.test(firstn)){
        document.getElementById('errorfname').innerHTML=" ";
    }else{
        document.getElementById('errorfname').innerHTML="Please enter the correct user name";
        return false ;
    }

    if(lnamecheck.test(lastn)){
        document.getElementById('errorlname').innerHTML=" ";
    }else{
        document.getElementById('errorlname').innerHTML="Please enter the correct user name";
        return false ;
    }

    if(emailcheck.test(email1)){
        document.getElementById('erroremail1').innerHTML=" ";
    }else{
        document.getElementById('erroremail1').innerHTML="Please enter the correct email id";
        return false ;
    }

    if(passwordcheck1.test(password1)){
        document.getElementById('errorpassword1').innerHTML=" ";
    }else{
        document.getElementById('errorpassword1').innerHTML="Please enter the correct strong password";
        return false ;
    }

    if(confirmp==password1){
        document.getElementById('errorcpassword').innerHTML=" ";
    }else{
        document.getElementById('errorcpassword').innerHTML="Password does not matches";
        return false ;
    }
}