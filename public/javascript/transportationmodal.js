const modaltransportation = document.querySelector(".transportation-modal");
const triggertrans = document.querySelector(".transportation-modal-btn");
// const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modaltransportation.classList.toggle("show-transportation-modal");
}

function windowOnClick(event) {
    if (event.target === modaltransportation) {
        toggleModal();
    }
}

triggertrans.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);