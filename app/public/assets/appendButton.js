//add and remove severe injure functions:

const crew = document.getElementById('crewOrPassenger');
const quantity = document.getElementById('quantity');
const yes = document.getElementById('si-yes');

//crewOrPassenger
const legendCrew = document.createElement('legend');
const labelCrew = document.createElement('label');
const inputCrew = document.createElement('input');
const labelPax = document.createElement('label');
const inputPax = document.createElement('input');

//quantity
const legendQuantity = document.createElement('legend');
const inputQuantity = document.createElement('input');

function addSevereInjure() {

    legendCrew.textContent = 'Função a bordo?';
    labelCrew.textContent = 'Tripulantes';
    inputCrew.setAttribute('type', 'radio');
    inputCrew.setAttribute('name', 'onBoardFunction1');
    inputCrew.setAttribute('value', 'Tripulantes');
    labelPax.textContent = 'Passageiros';
    inputPax.setAttribute('type', 'radio');
    inputPax.setAttribute('name', 'onBoardFunction2');
    inputPax.setAttribute('value', 'Passageiros');

    crew.append(legendCrew);
    crew.append(labelCrew);
    crew.append(inputCrew);
    crew.append(labelPax);
    crew.append(inputPax);

    legendQuantity.textContent = 'Quantidade';
    inputQuantity.setAttribute('type', 'number');
    inputQuantity.setAttribute('name', 'quantity');

    quantity.append(legendQuantity);
    quantity.append(inputQuantity);

};

function clearSevereInjure() {

    inputQuantity.value = '';
    inputCrew.checked = false;
    inputPax.checked = false;
    crew.innerHTML = '';
    quantity.innerHTML = '';

};

