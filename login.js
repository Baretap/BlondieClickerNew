document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Täällä pitäisi olla kirjautumislogiikka, joka tarkistaa käyttäjän tietokannasta.
    alert('Login successful for user: ' + username);
    // Tallenna käyttäjänimi localStorageen
    localStorage.setItem('username', username);
    // Siirry pelisivulle
    window.location.href = 'game.html';
});
