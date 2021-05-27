const modalhousing = document.querySelector(".housing-modal");
const triggerhousing = document.getElementById("xx");
// const closeButton = document.querySelector(".close-button");

function toggleModal() {
    console.log("hi");
    modalhousing.classList.toggle("show-housing-modal");
}

function windowOnClick(event) {
    if (event.target === modalhousing) {
        toggleModal();
        console.log(modalhousing);
    }
}

triggerhousing.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);