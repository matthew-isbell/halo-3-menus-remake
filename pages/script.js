document.addEventListener('DOMContentLoaded', function() {
    const switchLobbyBtn = document.getElementById('switchLobbyBtn');
    const switchNetworkBtn = document.getElementById('switchNetworkBtn');
    const lobbyList = document.getElementById('lobbyList');
    const networkSel = document.getElementById('networkSel');
    const contentWrapper = document.getElementById('contentWrapper');
    
    const xboxLiveBtn = document.getElementById('xboxLiveBtn');
    const systemLinkBtn = document.getElementById('systemLinkBtn');
    const localBtn = document.getElementById('localBtn');
    
    const xboxLiveMenu = document.getElementById('xboxLiveMenu');
    const systemLinkMenu = document.getElementById('systemLinkMenu');
    
    // Function to position the gray box to the right of the clicked button
    function positionOptionBox(button, box) {
        const rect = button.getBoundingClientRect();
        box.style.top = `${rect.top + window.scrollY}px`; // Align vertically with button
        box.style.left = `${rect.left + rect.width + 10}px`; // Position to the right of the button
    }

    // Toggle Lobby List visibility
    switchLobbyBtn.addEventListener('click', function(event) {
        event.preventDefault();

        if (lobbyList.style.display === 'block') {
            lobbyList.style.display = 'none';
            switchLobbyBtn.classList.remove('switch-lobby-active');
            contentWrapper.classList.remove('blurred');
        } else {
            lobbyList.style.display = 'block';
            switchLobbyBtn.classList.add('switch-lobby-active');
            contentWrapper.classList.add('blurred');
        }
    });

    // Toggle Network Selection visibility
    switchNetworkBtn.addEventListener('click', function(event) {
        event.preventDefault();

        if (networkSel.style.display === 'block') {
            networkSel.style.display = 'none';
        } else {
            networkSel.style.display = 'block';
        }
    });

    // Toggle Xbox Live options visibility and position it to the right
    xboxLiveBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        xboxLiveMenu.style.display = (xboxLiveMenu.style.display === 'block') ? 'none' : 'block';
        systemLinkMenu.style.display = 'none'; // Close other menu if open
        if (xboxLiveMenu.style.display === 'block') {
            positionOptionBox(xboxLiveBtn, xboxLiveMenu);
        }
    });

    // Toggle System Link options visibility and position it to the right
    systemLinkBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        systemLinkMenu.style.display = (systemLinkMenu.style.display === 'block') ? 'none' : 'block';
        xboxLiveMenu.style.display = 'none'; // Close other menu if open
        if (systemLinkMenu.style.display === 'block') {
            positionOptionBox(systemLinkBtn, systemLinkMenu);
        }
    });
});
