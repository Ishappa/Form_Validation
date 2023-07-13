
// function disp(){

//     const username= document.getElementById("u").value;
//     const email= document.getElementById("e").value;
//     const password= document.getElementById("p").value;
//     const cpassword= document.getElementById("cpass").value;

//     document.writeln("Username:"+username);
//     document.writeln("<br>Email Id:"+email);
//     document.writeln("<br>password:"+password);
//     document.writeln("<br>cpassword:"+cpassword);

// };

const form=document.getElementById("form");
const username= document.getElementById("u");
const email= document.getElementById("e");
const password= document.getElementById("p");
const cpassword= document.getElementById("cpass");


form.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();

    // validateInputs();----->userdefine arrow function

});


// -----this is for  adding error message
const setError =(element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector(".error");

    errorDisplay.innerText =message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}


// -----this is for removing error message show success

 const setSuccess =(element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isvalidEmail = email =>{
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () =>{
    
    const usernamevalue= username.value.trim();
    const emailvalue= email.value.trim();
    const passwordvalue= password.value.trim();
    const cpasswordvalue= cpassword.value.trim();

    if(usernamevalue === ""){

        setError(username, "Username is required*");
    }
    else{
        setSuccess(username);
    }

    if(emailvalue === ""){
        setError(email, "Email is required*" );
    }else if(!isvalidEmail(emailvalue)){
        setError(email, "Provide a valid email address*");

    }
    else{
        setSuccess(email);
    }

    if(passwordvalue ===""){
        setError(password, "Password is required*");
    }
    else if(passwordvalue.length < 8){
        setError(password, "Password must be at least 8 charaters*");
    }
    else{
        setSuccess(password);
    }

    if(cpasswordvalue === ""){
        setError(cpassword, "Please confirm your password*");
    }
    else if(cpasswordvalue !== passwordvalue){
        setError(cpassword, "Password dosen't match*");
    }
    else{
        setSuccess(cpassword);
    }
};
 



