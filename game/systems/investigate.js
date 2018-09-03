var investigation = {
    timer: 0,
    active: false,
    modifier: {
        quick: 0.25,
        regular: 1,
        thorough: 4
    }
};

var resultList = {
    forest: {
        rock: {
            rarity: 1,
            type: 'pickupable'
        }
    },
    desert: {

    },
    jungle: {

    },
    tundra: {

    },
    swamp: {

    },
    river: {

    },
    ocean: {

    },
    savanna: {

    },
    mountain: {

    }
};

function startAreaInvestigation() {
    document.getElementById('startInvestigation').style.display = 'none';

    document.getElementById('text').innerHTML = 'Choose the type of area investigation:';
    document.getElementById('quick').style.display = 'block';
    document.getElementById('regular').style.display = 'block';
    document.getElementById('thorough').style.display = 'block';
    document.getElementById('cancel').style.display = 'block';
}

function chooseInvestigationType(type) {
    if (type == 'quick') {
        investigation.timer = 30;
        document.getElementById('text').innerHTML = 'Quick Investigation:';
    }
    else if (type == 'regular') {
        investigation.timer = 60;
        document.getElementById('text').innerHTML = 'Regular Investigation:';
    }
    else if (type == 'thorough') {
        investigation.timer = 120;
        document.getElementById('text').innerHTML = 'Thorough Investigation:';
    }

    investigation.active = true;

    document.getElementById('quick').style.display = 'none';
    document.getElementById('regular').style.display = 'none';
    document.getElementById('thorough').style.display = 'none';

    document.getElementById('timer').style.display = 'block';
    document.getElementById('timer-left').innerHTML = investigation.timer;
}

function finishAreaInvestigation() {
    investigation.active = false;
    calculateResults();
}

function cancelInvestigation() {
    investigation.timer = 0;
    investigation.active = false;

    document.getElementById('startInvestigation').style.display = 'block';
    document.getElementById('text').innerHTML = 'Choose an action to perform:';

    document.getElementById('quick').style.display = 'none';
    document.getElementById('regular').style.display = 'none';
    document.getElementById('thorough').style.display = 'none';

    document.getElementById('timer').style.display = 'none';

    document.getElementById('cancel').style.display = 'none';
}

function countdownTimer() {
    investigation.timer--;
    document.getElementById('timer-left').innerHTML = investigation.timer;

    if (investigation.timer == 0) {
        finishAreaInvestigation();
    }
}

window.setInterval(function() {
    if (investigation.active == true) {
        countdownTimer();
    }
}, 1000);

function calculateResults() {

}