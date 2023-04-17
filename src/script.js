function  checkCorrectPassword() { 
   
        //get the password    
        //had each condition be false
    let password = document.getElementById("password") 
   
    //had each condition be false
    let LowerCase = false
    let UpperCase = false
    let Number = false
    let isSpecialChar = false
    let SpecialChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","|","[","]","{","}",":",";","/","?",".",","]
    //looked at each character in the password
    //checked if the character was lower case
            //when it met the criteria we marked that condition as true
        for(let i = 0; i < checkCorrectPassword.length ; i++){
            let = password [i]
        }
         if(password[i] == LowerCase(password[i])){
          LowerCase = true;
        }

           else if(password[i] == UpperCase(password[i])){ 
           UpperCase = true;
        } 
          
           else if(password[i] == Number(password[i])){
           Number = true;
        } 
       
        else if(SpecialChar.indexof(password[i]) >=0){ 
            isSpecialChar = true;
        }

    }
