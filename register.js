document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Täällä pitäisi olla rekisteröitymislogiikka, joka lisää käyttäjän tietokantaan.
    alert('Registration successful for user: ' + username);
    // Tallenna käyttäjänimi localStorageen
    localStorage.setItem('username', username);
    // Siirry pelisivulle
    window.location.href = 'game.html';
});
