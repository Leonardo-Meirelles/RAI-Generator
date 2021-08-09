import Joi from 'joi';

import incidentTypes from '../models/model-incidentTypes.js';
import states from '../models/model-states.js';
import registerCategory from '../models/model-registerCategory.js';
import operationType from '../models/model-operationType.js';
import operationPhase from '../models/model-operationPhase.js';
import aircraftDamage from '../models/model-aircraftDamage.js';
import aircraftType from '../models/model-aircraftType.js';

const viewModel = {
    incidentTypes, 
    states, 
    registerCategory, 
    operationType, 
    operationPhase, 
    aircraftDamage, 
    aircraftType
};

const getForm = (req, res, next) => {

    res.render('pages/form', viewModel);

};

const postFormSchema = Joi.object({
    
    processNumber: Joi.number().required(),
    classification: Joi.number().required(),
    occurrenceType: Joi.string().required(),
    date: Joi.date().iso().required(),
    time: Joi.string().required(),
    state: Joi.string().uppercase().min(2).max(2).required(),
    city: Joi.string().required(),
    aerodrome: Joi.string().uppercase().min(4).max(4).required(),
    thirdPartyDamage: Joi.number().required(),
    severeInjure: Joi.number().required(),
    onBoardFunction: Joi.number().required(),
    quantity: Joi.number().required(),
    history: Joi.string().min(10).required(),
    registration: Joi.string().uppercase().min(5).max(5).required(),
    lastTakeOff: Joi.string().required(),
    landing: Joi.string().required(),
    registerCategory: Joi.number().required(),
    operationType: Joi.number().required(),
    operationPhase: Joi.number().required(),
    aircraftDamage: Joi.number().required(),
    aircraftType: Joi.number().required(),
    registryCountry: Joi.string().required(),
    manufacturingYear: Joi.number().min(4).max(4).required(),
    manufacturer: Joi.string().uppercase().required(),
    model: Joi.string().required(),
    maxTakeOffWeightOption: Joi.number().required(),
    maxTakeOffWeight: Joi.number().required(),

}).unknown(true);

const postForm = (req, res, next) => {

    res.json({
        certo: console.log('deu certo'),
        info: req.body
    });

};

export { getForm, postForm, postFormSchema }