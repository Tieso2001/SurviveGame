function startAreaInvestigation() {
    document.getElementById('startInvestigation').style.display = 'none';

    document.getElementById('text').innerHTML = 'Choose the type of area investigation:';
    document.getElementById('quick').style.display = 'block';
    document.getElementById('regular').style.display = 'block';
    document.getElementById('thorough').style.display = 'block';
}

function chooseInvestigationType(type) {
    var timer = 0;

    if (type == 'quick') {
        timer = 30;
        document.getElementById('text').innerHTML = 'Investigating Area... (Quick)';
    }
    else if (type == 'regular') {
        timer = 60;
        document.getElementById('text').innerHTML = 'Investigating Area... (Regular)';
    }
    else if (type == 'thorough') {
        timer = 120;
        document.getElementById('text').innerHTML = 'Investigating Area... (Thorough)';
    }

    document.getElementById('quick').style.display = 'none';
    document.getElementById('regular').style.display = 'none';
    document.getElementById('thorough').style.display = 'none';

    document.getElementById('timer').style.display = 'block';
    document.getElementById('timer-left').innerHTML = timer;
}
