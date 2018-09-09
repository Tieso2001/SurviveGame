var investigate = {
    timer: 0,
    active: false,
    modifier: {
        quick: 0.25,
        regular: 1,
        thorough: 4
    },
    options: 0
};

function startInvestigate() {
    // Hide 'Start Investigation' button
    document.getElementById('startInvestigate').style.display = 'none';

    // Create a list of resources
    createOptions();

    // Create 'Cancel Investigation' button
    createCancelInvestigate();
}

function cancelInvestigate() {
    // Un-hide 'Start Investigation' button
    document.getElementById('startInvestigate').style.display = 'block';

    // Remove the list with resources
    removeOptions();

    // Remove 'Cancel Investigation' button
    removeCancelInvestigate();
}

function createCancelInvestigate() {
    // Create the div
    var divCancel = document.createElement('div');

    // Assign id to div
    divCancel.id = 'cancelInvestigate';

    // Assign classes to div
    divCancel.classList.add('fontRed');
    divCancel.classList.add('click');

    // Add a function to div
    divCancel.onclick = function() {cancelInvestigate()};

    // Add text to div
    var divCancelText = document.createTextNode('Cancel Investigation');
    divCancel.appendChild(divCancelText);

    // Place div into actions box
    var actionsBox = document.getElementById('actions');
    actionsBox.appendChild(divCancel);
}

function removeCancelInvestigate() {
    document.getElementById('cancelInvestigate').remove();
}

function createOptions() {
    // For each item in the item list
    for (var x in resources) {
        // If biome value is equal to current biome
        if (resources[x].biome == biome) {
            // Define the amount of the resource
            var amount = numberBetween(resources[x].min, resources[x].max);

            // Add 1 to amount of options
            investigate.options++;

            // Create a div
            var divOption = document.createElement('div');

            // Assign id to div
            divOption.id = 'option';

            // Assign class to div;
            divOption.classList.add('click');

            // Add a function to div
            divOption.onclick = function() {clickResource(x, amount)};

            // Add text to div
            var divText = document.createTextNode(amount + 'x ' + resources[x].name);
            divOption.appendChild(divText);

            // Place div into actions box
            var actionsBox = document.getElementById('actions');
            actionsBox.appendChild(divOption);
        }
    }
}

function clickResource(resource, amount) {
    window.alert(resource);
    window.alert(amount);
    cancelInvestigate();
}

function removeOptions() {
    // Skips loop if amount of options = 0
    if (investigate.options > 0) {
        // Remove options 'amount of options' times
        for (investigate.options; investigate.options > 0; investigate.options--) {
            document.getElementById('option').remove();
        }
    }
}