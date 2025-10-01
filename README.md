# Nord_loadingscreen
# FiveM Custom Loading Screen

<div align="center">

![FiveM](https://img.shields.io/badge/FiveM-Ready-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

Eine moderne und vollständig anpassbare Loading Screen Resource für FiveM Server mit Discord-Integration, Musikplayer und dynamischer Team-Seite.

[Features](#-features) • [Installation](#-installation) • [Konfiguration](#%EF%B8%8F-konfiguration) • [Troubleshooting](#-troubleshooting) • [Support](#-support)

</div>

---

## 📋 Features

- ✨ **Modernes Design** - Ansprechendes und responsives UI
- 🎵 **Musikplayer** - Integrierter Audio-Player mit An/Aus-Funktion
- 💬 **Discord Integration** - Live Member Count direkt vom Discord Server
- 👥 **Team-Seite** - Zeige dein Team mit Bildern und Rollen
- 🔄 **Dynamische Navigation** - Wechsle zwischen Home und Team-Seite
- ⚙️ **Einfache Konfiguration** - Alle Einstellungen in einer config.js Datei
- 🖱️ **Cursor Support** - Vollständig interaktiv während des Ladens
- 🎨 **Vollständig anpassbar** - CSS und JavaScript können frei bearbeitet werden

## 📦 Installation

### Schritt 1: Download
```bash
git clone https://github.com/deinname/fivem-loadingscreen.git
```
oder lade die Resource als ZIP herunter und entpacke sie.
Schritt 2: Resource einbinden

Kopiere den Ordner in deinen FiveM resources Ordner
Benenne den Ordner nach Wunsch um (z.B. loadingscreen)
Füge folgende Zeile zu deiner server.cfg hinzu:

cfgensure loadingscreen
Schritt 3: Server neustarten
bashrestart loadingscreen
⚙️ Konfiguration
config.js bearbeiten
Öffne web/config.js und passe die Werte an deine Bedürfnisse an:
javascriptconst config = {
    // Discord Einstellungen
    serverId: '1260613565140701235',      // Deine Discord Server ID
    discordURL: "https://discord.gg/XXXX", // Dein Discord Invite Link

    // Server Texte
    Servername: "Dein Server Name",
    untertitel: "Dein cooler Untertitel",
    beschreibung: "Deine ausführliche Serverbeschreibung...",
    
    // Button Texte
    buttonHome: "Home",
    buttonTeam: "Team",

    // Medien
    logoDatei: "assets/img/transparent.png",
    lied: "assets/audio/tuyo.mp3",

    // Team Members
    teamMembers: [
        {
            name: "elpatron",
            rank: "Projektinhaber",
            image: "assets/img/patron.png"
        },
        {
            name: "Max",
            rank: "Entwickler",
            image: "assets/img/max.png"
        }
        // Weitere Mitglieder hier hinzufügen...
    ]
};
Discord Server ID finden

Aktiviere den Developer Mode in Discord:

Einstellungen → Erweitert → Entwicklermodus aktivieren


Rechtsklick auf deinen Server → Server-ID kopieren
Füge die ID in die config.js ein

Eigene Bilder hinzufügen

Speichere deine Bilder im Ordner web/assets/img/
Referenziere sie in der config.js oder direkt im HTML
Wichtig: Füge neue Dateien auch zur fxmanifest.lua hinzu:

luafiles {
    'web/index.html',
    'web/config.js',
    'web/assets/img/dein-neues-bild.png', -- Hier hinzufügen
}
Musik ändern

Ersetze tuyo.mp3 in web/assets/audio/ mit deiner Musik
Unterstützte Formate: MP3, WAV, OGG
Update den Pfad in der config.js falls nötig

📁 Dateistruktur
fivem-loadingscreen/
│
├── fxmanifest.lua              # FiveM Resource Manifest
│
└── web/
    ├── index.html              # Haupt-HTML Datei
    ├── config.js               # Konfigurationsdatei
    │
    └── assets/
        ├── css/
        │   └── style.css       # Styling
        │
        ├── js/
        │   └── script.js       # JavaScript Logik
        │
        ├── img/                # Bilder
        │   ├── GTA_IMG.png
        │   ├── discord.png
        │   ├── ds_arrow.png
        │   ├── transparent.png
        │   └── [team-bilder]
        │
        └── audio/              # Audio Dateien
            └── tuyo.mp3
🎨 Anpassungen
CSS Styling anpassen
Bearbeite web/assets/css/style.css um:

Farben zu ändern
Schriftarten anzupassen
Layout zu modifizieren
Animationen zu bearbeiten

JavaScript Funktionen
Die Logik befindet sich in web/assets/js/script.js:

Seiten-Navigation
Musik-Controller
Discord API Calls
Dynamische Team-Generierung

🐛 Troubleshooting
Loading Screen wird nicht angezeigt

Überprüfe die server.cfg - ist die Resource eingebunden?
Prüfe die Server-Konsole auf Fehler
Stelle sicher, dass alle Pfade in der fxmanifest.lua korrekt sind

Discord Member Count funktioniert nicht

Überprüfe deine Discord Server ID
Stelle sicher, dass der Server öffentlich ist
Prüfe die Browser-Konsole (F12) auf API-Fehler

Bilder werden nicht geladen

Prüfe die Dateipfade (Groß-/Kleinschreibung beachten!)
Stelle sicher, dass die Dateien in der fxmanifest.lua registriert sind
Überprüfe die Bildformate (PNG, JPG, GIF)

Musik spielt nicht ab

Browser erlauben Autoplay nur eingeschränkt
Stelle sicher, dass die Audio-Datei korrekt eingebunden ist
Prüfe die Dateigröße (zu große Dateien können Probleme verursachen)

📝 To-Do

 Multi-Language Support
 Theme-System (Hell/Dunkel)
 Weitere Discord Widgets
 Progress Bar für Ladevorgang
 Mobile Optimierung

🤝 Contributing
Contributions sind willkommen!

Fork das Projekt
Erstelle einen Feature Branch (git checkout -b feature/AmazingFeature)
Commit deine Changes (git commit -m 'Add some AmazingFeature')
Push zum Branch (git push origin feature/AmazingFeature)
Öffne einen Pull Request

📄 Lizenz
Dieses Projekt steht unter der MIT Lizenz.
💬 Support
Bei Fragen oder Problemen:

🐛 Issue erstellen
💬 Discord Server
📧 Email

👏 Credits

Entwickler: YourName
Design Inspiration: FiveM Community
