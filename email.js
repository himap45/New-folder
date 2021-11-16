function login()
{
    var uname = document.getElementById("email").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
        alert("please enter email");
    }
    
    else if(!filter.test(uname))
    {
        alert("Enter valid email id.");
        return false;
    }
    else
    {
        return true;
    }
    
}
function validate()
 {
            
        
        var mob=document.getElementById("mob");
        var nam=document.getElementById("mobile").value;
        let phoneExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(!(phoneExp.test(nam)))
        {
           alert("Enter a valid number" );
           return false;
        }
        else
        {
            mob.innerHTML="valid"
            alert("Thank you...! You are redirecting to the Kerala Districts..!");
            return true;
            
        }


}
function CheckPasswordStrength(password) 
{
    var password_strength = document.getElementById("password_strength");
    var epassword=document.getElementById("epassword");

    //TextBox left blank.
//    if (password.length == 0) {
//         password_strength.innerHTML = "";
//         return false;
//     }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++)
    {
        if (new RegExp(regex[i]).test(password))
         {
            passed++;
        }
    }

    //Validate for length of Password.
//    if(password.length<=8){
//              password_strength.innerHTML="password too short";
//              password_strength.style.color="red";
//              return false;
//    }
    
    

    //Display status.
    var color = "";
    var strength = "";
    switch (passed)
     {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
       
        case 3:
            strength = "Strong";
            color = "green";
            break;
        case 4:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;

    if(!(regex.test(password.value)))
    {
      
       epassword.innerHTML="make sure your password is correct."
       return false;
    }
    else{
        epassword.innerHTML="valid password";
        return true;
    }
}