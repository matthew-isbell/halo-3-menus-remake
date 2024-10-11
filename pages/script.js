document.addEventListener('DOMContentLoaded', function() {
    const switchLobbyBtn = document.getElementById('switchLobbyBtn');
    const lobbyList = document.getElementById('lobbyList');
    const networkSel = document.getElementById('networkSel');
    const contentWrapper = document.getElementById('contentWrapper');

    switchLobbyBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Toggle the display of the lobbyList div
        if (lobbyList.style.display === 'block') {
            lobbyList.style.display = 'none';
            switchLobbyBtn.classList.remove('switch-lobby-active'); // Remove grey background
            contentWrapper.classList.remove('blurred'); // Remove blur effect
        } else {
            lobbyList.style.display = 'block';
            switchLobbyBtn.classList.add('switch-lobby-active'); // Add grey background
            contentWrapper.classList.add('blurred'); // Apply blur effect
        }
    });

    switchLobbyBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Toggle the display of the networkSel div
        if (networkSel.style.display === 'block') {
            networkSel.style.display = 'none';
        } else {
            networkSel.style.display = 'block';
        }
    });
});
