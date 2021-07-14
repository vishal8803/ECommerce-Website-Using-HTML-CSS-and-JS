function check()
{
    var firstn = document.getElementById('name').value;
    var email1 = document.getElementById('email').value ;

    var fnamecheck = /^[A-Za-z ]{3,30}$/ ;
    var emailcheck = /^[A-Za-z0-9_.]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.]{3,30}$/ ;

    if(fnamecheck.test(firstn)){
        document.getElementById('errorname').innerHTML=" ";
    }else{
        document.getElementById('errorname').innerHTML="Please enter the correct user name";
        return false ;
    }
    if(emailcheck.test(email1)){
        document.getElementById('erroremail1').innerHTML=" ";
    }else{
        document.getElementById('erroremail1').innerHTML="Please enter the correct email id";
        return false ;
    }
}