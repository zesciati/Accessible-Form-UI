const fullName     = document.getElementById("fname");
const email        = document.getElementById("email");
const enterPass    = document.getElementById("epass");
const confirmPass  = document.getElementById("cpass");
const form         = document.querySelector("form");

// submit button 
const submitBtn = document.getElementById("submit")

// Error 
const fullNameError = fullName.nextElementSibling;
const enterPassError = enterPass.nextElementSibling;
// const confirmPasError = confirmPass.nextElementSibling;

/* -------------------------- Rounded Progress bar js -------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        document.getElementById('progress-text').textContent = `${percent}%`;
    }

    // Example: Animating progress from 0% to 75%
    let currentProgress = 0;
    const targetProgress = 35;
    const increment = 1;
    const interval = 20;

    const intervalId = setInterval(() => {
        if (currentProgress >= targetProgress) {
            clearInterval(intervalId);
        } else {
            currentProgress += increment;
            setProgress(currentProgress);
        }
    }, interval);
});
/* -------------------------- end Rounded Progress bar js -------------------------- */


// fullName Logic
// const validateFullName = () => {
//     const value = fullName.value.trim();
//     const namePattern=  /^[A-Z][A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
//     if(!namePattern.test(value)){
//         fullNameError.textContent = "Please enter a valid name";
//         fullNameError.style.display = "block";
//         return false;
//     }else{
//         fullNameError.textContent = "";
//         fullNameError.style.display = "none";
//         return true;
//     }
// }


// const validatePass = () => {
//     const value = enterPass.value.trim();
//     const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ ;

//     if(!passwordRegex.test(value) || value === ""){
//         enterPassError.textContent = "Please enter a valid password";
//         enterPassError.style.display = block;
//         return false;
//     }else{
//         enterPassError.textContent = "";
//         enterPassError.style.display = "none";
//         return true;
//     }
// }


// Hapus syarat jika value kosong
function valueGone(value, li){
    if(value === ""){
        li.textContent = " ";
        li.style.display = "none";
    }
}

// Setiap value yang diinput akan dicek dan diberitahu jika ada yang salah atau benar
function message(conditions, value, idMessage){
    conditions.forEach(c => {
    const li = document.createElement("li");
    if(c.test.test(value)){
        li.textContent = "✅ " + c.message;
        li.classList.add("list-success")        
    }else{
        li.textContent = "❌ " + c.message;
        li.classList.add("list-failed")        
    }
    valueGone(value, li);
    idMessage.appendChild(li)
    })
}

document.addEventListener("DOMContentLoaded", () => {


    // LiveValidateFullName
    fullName.addEventListener("input", liveValidateFullName);
    function liveValidateFullName(){
    const value = fullName.value.trim();

    const conditions = [
        {test: /^[A-Z]/,                  message: "Must start with a capital letter"},
        {test: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, message: "Must only contain letters (no numbers or special symbols)"},  
    ];

    fullNameError.innerHTML = "";
    const idMessage = fullNameError;
    message(conditions, value, idMessage);
    }

    
    // LiveValidatePass
    enterPass.addEventListener("input", liveValidatePass);
    function liveValidatePass(){
    const value = enterPass.value.trim();

    const conditions = [
        { test: /.{8,}/, message: "Must be at least 8 characters long" },
        { test: /[A-Z]/, message: "Must contain at least one uppercase letter" },
        { test: /[a-z]/, message: "Must contain at least one lowercase letter" },
        { test: /[0-9]/, message: "Must contain at least one digit" },
        { test: /[#?!@$%^&*-]/, message: "Must contain at least one special character (#?!@$%^&*-)" }
    ];

    enterPassError.innerHTML = "";  

    conditions.forEach(c => {
        
    const li = document.createElement("li");
    if (c.test.test(value)) {
        li.textContent = "✅ " + c.message;
        li.classList.add("list-success")
    } else {
        li.textContent = "❌ " + c.message;
        li.classList.add("list-failed")

    }

    valueGone(value, li);
    enterPassError.appendChild(li);

    });
    }


    // LiveValidateEmail
    email.addEventListener("input", liveValidateEmail);
    function liveValidateEmail(){
        const value = email.value.trim();

        const conditions = [
            {test: / /, message: ""},
            {test: / /, message: ""},
            
        ]
    }
});


// Password dengan confirm password jika tidak matching
function checkMatch(){

const status = document.getElementById('status');

if(enterPass.value === "" || confirmPass.value === "") {
    status.textContent = "";
    status.className = "hidden"; 
    return; // keluar supaya tidak lanjut ke bawah
}

if(enterPass.value === confirmPass.value && enterPass.value !== ""){
    status.textContent = "Passwords match!";
    status.className = "match";
}else{
    status.textContent = "Passwords do not match!";
    status.className = "mismatch";
}

}

// Form submit
form.addEventListener("submit", async function (e){
// Menskip default behaviour untuk menyelesaikan validasi dulu 
    e.preventDefault();
    console.log("Form submitted");

    // TODO Validasi

})