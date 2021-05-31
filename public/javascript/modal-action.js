//Logic to make background blurry when modal is opened. Need to apply notated changes to the dashboard.handlebars file in order to work


// document.querySelector(".savings-modal-btn").addEventListener("click", function() {
//     document.getElementById("dashboard-div").classList.add("blur");
// });

//logic to close modals
var savings_modal = document.getElementsByClassName('savings-modal');
var housing_modal = document.getElementsByClassName('housing-modal');
var transportation_modal = document.getElementsByClassName('transportation-modal');
var lifestyle_modal = document.getElementsByClassName('lifestyle-modal');
var closeBtn = document.getElementsByClassName('btn-close');


window.onclick = function (event) {

    if (event.target == savings_modal) {
        savings_modal.style.display = "none";
    }
    if (event.target == housing_modal) {
        housing_modal.style.display = "none";
    }
    if (event.target == transportation_modal) {
        transportation_modal.style.display = "none";
    }
    if (event.target == lifestyle_modal || event.target == closeBtn) {
        lifestyle_modal.style.display = "none";
    }
}

