function saveGame() {

    var save = {
        year: time.year,
        season: time.season,
        day: time.day,
        hour: time.hour,
        minute: time.minute
    };

    localStorage.setItem("save",JSON.stringify(save));

}

function loadGame() {

    var savegame = JSON.parse(localStorage.getItem("save"));

    if (typeof savegame.year !== "undefined") time.year = savegame.year;
    if (typeof savegame.season !== "undefined") time.season = savegame.season;
    if (typeof savegame.day !== "undefined") time.day = savegame.day;
    if (typeof savegame.hour !== "undefined") time.hour = savegame.hour;
    if (typeof savegame.minute !== "undefined") time.minute = savegame.minute;

}

window.setInterval(function() {
    saveGame();
}, 1000);