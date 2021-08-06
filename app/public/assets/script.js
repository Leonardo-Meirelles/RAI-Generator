//add and remove severe injure functions:

const crew = document.getElementById('crewOrPassenger');
const quantity = document.getElementById('quantity');
const yes = document.getElementById('si-yes');

//crewOrPassenger
const legendCrew = document.createElement('legend');
const labelCrew = document.createElement('label');
const inputCrew = document.createElement('input');
const labelCrew2 = document.createElement('label');
const inputCrew2 = document.createElement('input');

//quantity
const legendQuantity = document.createElement('legend');
const inputQuantity = document.createElement('input');

function addSevereInjure() {

    legendCrew.textContent = 'Função a bordo?';
    labelCrew.textContent = 'Tripulantes';
    inputCrew.setAttribute('type', 'radio');
    labelCrew2.textContent = 'Passageiros';
    inputCrew2.setAttribute('type', 'radio');

    crew.append(legendCrew);
    crew.append(labelCrew);
    crew.append(inputCrew);
    crew.append(labelCrew2);
    crew.append(inputCrew2);

    legendQuantity.textContent = 'Quantidade';
    inputQuantity.setAttribute('type', 'number');

    quantity.append(legendQuantity);
    quantity.append(inputQuantity);

};

function clearSevereInjure() {

    inputQuantity.value = '';
    inputCrew.checked = false;
    inputCrew2.checked = false;
    crew.innerHTML = '';
    quantity.innerHTML = '';

};

function addAircraft() {
    
    const aircraft = document.getElementById('involvedAircraft');

    aircraft.append()
}
