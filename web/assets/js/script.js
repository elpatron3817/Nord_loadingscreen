
// Event-Listener für das Drücken der Leertaste
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") { // Prüft, ob die gedrückte Taste die Leertaste ist
        event.preventDefault(); // Verhindert das Standardverhalten der Leertaste (z.B. Scrollen)
        toggleMute(); // Stummschalten oder wiederherstellen des Tons
    }
});


function ds_invite() {
    // Die URL, die im externen Browser geöffnet werden soll

    // Die FiveM-Native-Funktion zum Öffnen im externen Browser verwenden
    window.invokeNative('openUrl', config.discordURL);
}

async function fetchDiscordOnlineCount() {

    try {
        const response = await fetch(`https://discord.com/api/guilds/${config.serverId}/widget.json`);
        
        if (response.ok) {
            const data = await response.json();
            const onlineCount = data.presence_count;  // Anzahl der Online-Mitglieder

            // Setze die Anzahl der Online-Mitglieder im HTML
            document.getElementById("ds_count").textContent = onlineCount;
        } else {
            console.error("Fehler beim Abrufen der Discord-Serverdaten.");
        }
    } catch (error) {
        console.error("Fehler beim Abrufen der Discord-Serverdaten:", error);
    }
}

// Rufe die Funktion auf, um die Anzahl der Online-Mitglieder zu aktualisieren
fetchDiscordOnlineCount();

// Optional: Aktualisiere die Anzahl alle 5 Minuten
setInterval(fetchDiscordOnlineCount, 5 * 60 * 1000);

document.addEventListener("mousemove", parallax);

function parallax(e) {
    const move = document.querySelector("#gta"); // Nur das Bild mit der ID gta
    const moving_value = move.getAttribute("data-value") || 10; // Standardwert falls kein `data-value`
    
    const x = (e.clientX * moving_value) / 250; // Bewegung auf der X-Achse
    const y = (e.clientY * moving_value) / 250; // Bewegung auf der Y-Achse
    
    move.style.transform = `translateX(${x}px) translateY(${y}px)`; // Anwenden der Transformation
}
let musicPlaying = true;

function on() {
    const audioElement = document.getElementById('tuyo');
    const msAcElement = document.getElementById('ms-ac');

    if (!musicPlaying) {
        audioElement.play();
        musicPlaying = true;
    }
    // Set left position of ms-ac to 0%
    msAcElement.style.left = '0%';
}

function of() {
    const audioElement = document.getElementById('tuyo');
    const msAcElement = document.getElementById('ms-ac');

    if (musicPlaying) {
        audioElement.pause();
        musicPlaying = false;
    }
    // Set left position of ms-ac to 50%
    msAcElement.style.left = '50%';
}
// Initialisierung
var link = document.getElementById('teampage');
link.style.display = 'none';
link.style.opacity = '0'; // Startzustand der Opacity

var swink = document.getElementById('btn_home');
swink.style.boxShadow = '0px 0px 29.4113px 16.3396px rgba(0, 132, 255, 0.45)';
swink.style.background = '#0084FF';

// Funktion, um die Transition vorzubereiten
function fadeIn(element) {
    element.style.display = 'block';
    setTimeout(() => {
        element.style.opacity = '1';
    }, 10); // Kleiner Delay für den Transition-Effekt
}

function fadeOut(element) {
    element.style.opacity = '0';
    element.addEventListener('transitionend', function handler() {
        if (element.style.opacity === '0') {
            element.style.display = 'none';
        }
        element.removeEventListener('transitionend', handler);
    });
}

// Transition-Eigenschaften hinzufügen
document.getElementById('teampage').style.transition = 'opacity 0.5s ease';
document.getElementById('home_page').style.transition = 'opacity 0.5s ease';

// Statusvariablen, um mehrfaches Klicken und Timeouts zu kontrollieren
let isTransitioning = false;
let activeTimeout = null;

// Event Listener für die Buttons
document.getElementById('btn_team').addEventListener('click', function() {
    if (isTransitioning) return; // Blockiere, wenn eine Transition läuft
    isTransitioning = true;

    clearTimeout(activeTimeout); // Lösche vorherigen Timeout, falls vorhanden

    fadeOut(document.getElementById('home_page'));
    fadeIn(document.getElementById('teampage'));

    document.getElementById('btn_team').style.boxShadow = '0px 0px 29.4113px 16.3396px rgba(0, 132, 255, 0.45)';
    document.getElementById('btn_team').style.background = '#0084FF';

    document.getElementById('btn_home').style.background = 'rgba(6, 65, 122, 0.6)';
    document.getElementById('btn_home').style.boxShadow = 'none';

    activeTimeout = setTimeout(() => {
        isTransitioning = false; // Erlaube wieder Aktionen nach der Transition
    }, 500);
});

document.getElementById('btn_home').addEventListener('click', function() {
    if (isTransitioning) return; // Blockiere, wenn eine Transition läuft
    isTransitioning = true;

    clearTimeout(activeTimeout); // Lösche vorherigen Timeout, falls vorhanden

    fadeOut(document.getElementById('teampage'));
    fadeIn(document.getElementById('home_page'));

    document.getElementById('btn_home').style.boxShadow = '0px 0px 29.4113px 16.3396px rgba(0, 132, 255, 0.45)';
    document.getElementById('btn_home').style.background = '#0084FF';

    document.getElementById('btn_team').style.background = 'rgba(6, 65, 122, 0.6)';
    document.getElementById('btn_team').style.boxShadow = 'none';

    activeTimeout = setTimeout(() => {
        isTransitioning = false; // Erlaube wieder Aktionen nach der Transition
    }, 500);
});


// Beim Laden der Seite: Texte und Bilder aus Config setzen
document.addEventListener('DOMContentLoaded', function() {
    
    // Texte setzen
    document.getElementById('home_name').textContent = config.Servername;
    document.getElementById('home_titel').textContent = config.untertitel;
    document.getElementById('home_text').textContent = config.beschreibung;
    document.getElementById('btn_home').textContent = config.buttonHome;
    document.getElementById('btn_team').textContent = config.buttonTeam;
    
    // Bilder setzen    
    document.getElementById('logo').src = config.logoDatei;
    document.getElementById('tuyo').src = config.lied;
    
    // Weitere Daten setzen
    
    console.log('Seite geladen mit Config-Daten');
});
document.addEventListener('DOMContentLoaded', function() {
    
    const teamMain = document.getElementById('team-main');
    
    // Für jeden Team Member aus der Config
    config.teamMembers.forEach(member => {
        
        // HTML String erstellen (alle haben tm-case1)
        const html = `
            <div id="tm-case1">
                <span id="team-name">${member.name}</span>
                <span id="team-rank">${member.rank}</span>
                <img id="team" src="${member.image}" alt="${member.name}">
            </div>
        `;
        
        // In team-main einfügen
        teamMain.innerHTML += html;
    });
    
    console.log(`${config.teamMembers.length} Team Members geladen`);
});