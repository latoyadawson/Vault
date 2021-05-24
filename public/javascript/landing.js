
async function landingButtonsClick(event) {
    event.preventDefault();

    if (document.getElementById('#signup').clicked == true) {
        document.location.replace('/signup');
    } else if
        (document.getElementById('#login').clicked == true) {
        document.location.replace('/login')
    }

};

document.querySelector('.landing-form').addEventListener(submit, landingButtonsClick);