const fullName     = document.getElementById("fname");
const email        = document.getElementById("email");
const enterPass    = document.getElementById("epass");
const confirmPass  = document.getElementById("cpass");
const submitButton = document.getElementById("submit");
const form         = document.querySelector("form");


// Error 
const enterPassError = enterPass.nextElementSibling;
const confirmPasError = confirmPass.nextElementSibling;

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


})