function  checkCorrectPassword() { 
   
        //get the password    
        //had each condition be false
    let password = document.getElementById("password")  //The Html does not have anything with an Id of password. This id needed to be added to line 10 within the input tag. 
//additionally you want to specifically be grabbing the value. Therefore the code should be let password = document.getElementById("password").value

    let checkCorrectPassword = Array.from("password") //this variable is not being used anywhere
    PasswordLength(password)
}

    function PasswordLength (passwordArray){
        let minChar = 8
        if (minChar <= PasswordLength.length){// this code is trying to get the length of the function PasswordLength. It should actually be getting the length of the password which you are passing
//when calling the function in line 9. Within the function this is going to be called passwordArray per line 12. Therefore the code should be minChar <= passwordArray.length
            character(passwordArray)
        } 
        else {
            alert("This is not valid password")
        }

    }

    //had each condition be false
    function character(passwordArray){
    let LowerCase = false
    let UpperCase = false
    let Number = false
    let isSpecialChar = false
    let SpecialChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","|","[","]","{","}",":",";","/","?",".",","] //this is not needed as you are using regEx in your special character match statement
    //looked at each character in the password
    //checked if the character was lower case
            //when it met the criteria we marked that condition as tr

        for(let i = 0; i < password.length ; i++){//this is looking for a variable of password but there is no such variable within the scope of this function
            
        
        if (char (/[a-z]/g))   {LowerCase = true}//Char is not defined anywhere and need to use a match method. Code should be passwordArray[i].match(/[a-z]/) and should just be an if statement

        else if (char(/(A-Z)/g))  {UpperCase = true}//Code should be passwordArray[i].match(/[A-Z]/) and should just be an if statement

        else if (char(/(0-9)/g))  {Number = true}//Code should be passwordArray[i].match(/[0-9]/) and should just be an if statement

        else if (char(/(!,@,$,%,^,&,*)/g)) {SpecialChar = true}//should be setting isSpecialChar to true. and should just be an if statement

        }
//Need something to check if all of the variables are true then send alert that password is valid and an else statement that will otherwise submit an alert that the password is not valid
        }
