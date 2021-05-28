const modal = document.querySelector(".savings-modal");
const trigger = document.querySelector(".savings-modal-btn");

// const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-savings-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);

// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
