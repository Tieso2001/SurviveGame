var time = {
    year: 1,
    season: 1,
    day: 1,
    daypart: 'Noon',
    hour: 12,
    minute: 0
};

function increaseTime() {
    time.minute = time.minute + 1;

    if (time.minute == 60) {
        time.minute = 0;
        time.hour = time.hour + 1;
    }

    if (time.hour == 24) {
        time.hour = 0;
        time.day = time.day + 1;
    }

    if (time.day > 28) {
        time.day = 1;
        time.season = time.season + 1;
    }

    if (time.season == 5) {
        time.season = 1;
        time.year = time.year + 1;
    }

    updateAllTime();
}


function updateTime() {
    if (time.hour < 10) {
        document.getElementById('time-hour').innerHTML = '0' + time.hour;
    }
    else {
        document.getElementById('time-hour').innerHTML = time.hour;
    }

    if (time.minute < 10) {
        document.getElementById('time-minute').innerHTML = '0' + time.minute;
    }
    else {
        document.getElementById('time-minute').innerHTML = time.minute;
    }
}

function updateDaypart() {
    if ( ((time.hour >= 5) && (time.hour < 11)) || ((time.hour == 11) && (time.minute < 45)) ) {
        time.daypart = 'Morning';
    }
    else if ( ((time.hour == 11) && (time.minute >= 45)) || ((time.hour == 12) && (time.minute < 15)) ) {
        time.daypart = 'Noon';
    }
    else if ( ((time.hour == 12) && (time.minute >= 15)) || ((time.hour > 12) && (time.hour < 17)) ) {
        time.daypart = 'Afternoon';
    }
    else if ( ((time.hour >= 17) && (time.hour < 21)) ) {
        time.daypart = 'Evening';
    }
    else if ( ((time.hour >= 21) && (time.hour < 23)) || ((time.hour == 23) && (time.minute < 45)) || ((time.hour == 0) && (time.minute >= 15)) || ((time.hour > 0) && (time.hour < 5)) ) {
        time.daypart = 'Night';
    }
    else if ( ((time.hour == 23) && (time.minute >= 45)) || ((time.hour == 0) && (time.minute < 15)) ) {
        time.daypart = 'Midnight';
    }

    document.getElementById('time-daypart').innerHTML = time.daypart;
}

function updateSeason() {
    if (time.season == 1) {
        document.getElementById('time-season').innerHTML = 'Spring';
    }
    else if (time.season == 2) {
        document.getElementById('time-season').innerHTML = 'Summer';
    }
    else if (time.season == 3) {
        document.getElementById('time-season').innerHTML = 'Fall';
    }
    else if (time.season == 4) {
        document.getElementById('time-season').innerHTML = 'Winter';
    }
}

function updateDate() {
    document.getElementById('time-year').innerHTML = time.year;
    document.getElementById('time-day').innerHTML = time.day;
}

function updateAllTime() {
    updateTime();
    updateDaypart();
    updateSeason();
    updateDate();
}

window.setInterval(function() {
    increaseTime();
}, 1000);