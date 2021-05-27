async function signupFormHandler(event) {
   
    event.preventDefault();

    const first_name = document.getElementById('firstname-signup').value.trim();
    const last_name = document.getElementById('lastname-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);