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

