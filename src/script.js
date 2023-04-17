function  checkCorrectPassword() { 
   
        //get the password    
        //had each condition be false
    let password = document.getElementById("password") 

    let checkCorrectPassword = Array.from("password")
    PasswordLength(password)
}

    function PasswordLength (passwordArray){
        let minChar = 8
        if (minChar <= PasswordLength.length){
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
    let SpecialChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","|","[","]","{","}",":",";","/","?",".",","]
    //looked at each character in the password
    //checked if the character was lower case
            //when it met the criteria we marked that condition as tr

        for(let i = 0; i < password.length ; i++){
            
        
        if (char (/[a-z]/g))   {LowerCase = true}

        else if (char(/(A-Z)/g))  {UpperCase = true}

        else if (char(/(0-9)/g))  {Number = true}

        else if (char(/(!,@,$,%,^,&,*)/g)) {SpecialChar = true}

        }
        
        }
