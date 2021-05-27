const modallifestyle = document.querySelector(".lifestyle-modal");
const triggerlifestyle = document.querySelector(".lifestyle-modal-btn");
// const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modallifestyle.classList.toggle("show-lifestyle-modal");
}

function windowOnClick(event) {
    if (event.target === modallifestyle) {
        toggleModal();
    }
}

triggerlifestyle.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);