

function generatePassword(length , includeLowercaes , includeUppercase , includeNumbers ,includeSymbols ){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars =  "0123456789";
    const symbolchars = "!@#$&*()+/-";

    let allowedChars =  "";
    let password =  "";


    allowedChars += includeLowercaes ? lowercaseChars:"";
    allowedChars +=  includeUppercase ? uppercaseChars : "";
    allowedChars +=  includeNumbers ? numberChars : "";
    allowedChars +=  includeSymbols ? symbolchars : "";

    if(length <=  0){
        return `(password length must be at least 1)`;

    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }


    for(let i = 0 ; i< length ; i++ ){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;

}
const passwordLength = 0;
const includeLowercaes  =true;
const includeUppercase  =true;
const includeNumbers = true;
const includeSymbols = true;





const password =  generatePassword(passwordLength ,
    includeLowercaes,
    includeUppercase ,
     includeNumbers , 
     includeSymbols);

console.log(`Generated password: ${password}`);

