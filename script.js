const lengthSlider = document.querySelector(".pass-length input");
generateBtn = document.querySelector(".generate-btn");
options = document.querySelectorAll(".option input");
PasswordInput = document.querySelector(".input-box input");
passIndicator = document.querySelector(".pass-indicator");
CopyIcon= document.querySelector(".input-box span");

const characters ={
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]\:;?><,./-=",
};



//function to generate password
const generatePassword = () => {
    let staticPassword = "", //empty string to store the password
     passLength= lengthSlider.value,
     randomPassword = "";



    options.forEach(option => {
        if(option.checked){
            if(option.id !== "exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];

            } else if (option.id ==="spaces"){
                staticPassword += '  ${staticPassword}  ';

            }else{
                excludeDuplicate = true;
            }
           
            
        }
        });
        for(let i = 0; i< passLength; i++){
            let randomIndex = Math.floor(Math.random() * staticPassword.length);
            randomPassword += staticPassword[randomIndex];
        }   
       PasswordInput.value = randomPassword; 
        //passing the generated password to the input box
      
};
generatePassword();

//checking strength of the password
const UpdatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 12 ? "medium" : "strong";

};


//fuction to update the length of the password
const  updateLength = () => {
    //passing slider value as length text on span
    document.querySelector(".pass-length span").innerHTML = lengthSlider.value;
    generatePassword();
    UpdatePassIndicator();
};
updateLength();

//implement the copy password function
const copyPassword = () => {
    navigator.clipboard.writeText(PasswordInput.value);
    CopyIcon.innerText = ("Check ");
}


lengthSlider.addEventListener("input", updateLength);
generateBtn.addEventListener("click", generatePassword);
CopyIcon.addEventListener("click", copyPassword);