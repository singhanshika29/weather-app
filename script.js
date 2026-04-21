document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // Set initial state based on checkbox (it's checked by default in HTML)
    if (themeSwitch.checked) {
        body.classList.add('night-mode');
    } else {
        body.classList.remove('night-mode');
    }

    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            // If checked, it's Night Mode
            body.classList.add('night-mode');
            console.log("Night Mode Activated"); // For debugging
        } else {
            // If unchecked, it's Day Mode
            body.classList.remove('night-mode');
            console.log("Day Mode Activated"); // For debugging
        }
    });
});