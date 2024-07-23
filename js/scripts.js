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
