// scripts.js

// Modal functionality
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tooltip functionality
var tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(function (tooltip) {
    tooltip.addEventListener('mouseenter', function () {
        var tooltipText = this.querySelector('.tooltiptext');
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
    });
    tooltip.addEventListener('mouseleave', function () {
        var tooltipText = this.querySelector('.tooltiptext');
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
    });
});

// Reward Popup functionality
function showPopup() {
    document.getElementById("rewardPopup").style.display = "block";
}

function hidePopup() {
    document.getElementById("rewardPopup").style.display = "none";
}

// XP and HP progress bar calculation
function updateProgressBars() {
    var progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(function (bar) {
        var currentXp = bar.getAttribute('data-current-xp');
        var maxXp = bar.getAttribute('data-max-xp');
        if (currentXp && maxXp) {
            var percentage = (currentXp / maxXp) * 100;
            bar.style.width = percentage + '%';
            bar.innerHTML = `${currentXp}/${maxXp} XP (${percentage.toFixed(2)}%)`;
        }

        var currentHp = bar.getAttribute('data-current-hp');
        var maxHp = bar.getAttribute('data-max-hp');
        if (currentHp && maxHp) {
            var percentage = (currentHp / maxHp) * 100;
            bar.style.width = percentage + '%';
            bar.innerHTML = `${currentHp}/${maxHp} HP (${percentage.toFixed(2)}%)`;
        }
    });
}

// Call the function to update the progress bars on page load
updateProgressBars();
