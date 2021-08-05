import incidentTypes from '../models/model-incidentTypes.js';
import states from '../models/model-states.js';
import registerCategory from '../models/model-registerCategory.js';
import operationType from '../models/model-operationType.js';
import operationPhase from '../models/model-operationPhase.js';
import aircraftDamage from '../models/model-aircraftDamage.js';
import aircraftType from '../models/model-aircraftType.js';


const getForm = (req, res, next) => {
    res.render('pages/form', {
        incidentTypes, 
        states, 
        registerCategory, 
        operationType, 
        operationPhase, 
        aircraftDamage, 
        aircraftType
    });
}

export { getForm }