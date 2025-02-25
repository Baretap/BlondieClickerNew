let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
const username = localStorage.getItem('username'); // Hae tallennettu käyttäjänimi
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('points').innerText = points;
    fetchLeaderboard();
    if (!username) {
        alert('Please log in or register first.');
        window.location.href = 'login.html';
    }
});

function addPoint() {
    points++;
    document.getElementById('points').innerText = points;
    localStorage.setItem('points', points);
    updateLeaderboard(points);
}

function updateLeaderboard(points) {
    const newScore = {
        username: username,  // Käytä tallennettua käyttäjänimeä
        score: points
    };
    fetch('http://localhost:3000/leaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newScore)
    }).then(response => response.text()).then(data => {
        console.log(data);
        fetchLeaderboard();
    });
}

function fetchLeaderboard() {
    fetch('http://localhost:3000/leaderboard')
        .then(response => response.json())
        .then(leaderboard => {
            const leaderboardEl = document.getElementById('leaderboard');
            leaderboardEl.innerHTML = '';
            leaderboard.forEach(entry => {
                const li = document.createElement('li');
                li.textContent = `${entry.username}: ${entry.score}`;
                leaderboardEl.appendChild(li);
            });
        });
}
