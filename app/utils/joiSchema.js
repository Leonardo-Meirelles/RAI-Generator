import JoiImport from 'joi';
import DateExtension  from '@joi/date';
const Joi = JoiImport.extend(DateExtension);

const joiSchema = Joi.object({
    processNumber: Joi.number().required(),
    classification: Joi.number().required(),
    occurrenceType: Joi.string().pattern(/./).required(),
    date: Joi.date().format('DD/MM/YYYY').required(),
    time: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
    state: Joi.string().uppercase().min(2).max(2).required(),
    city: Joi.string().pattern(/./).required(),
    aerodrome: Joi.string().uppercase().min(4).max(4).required(),
    thirdPartyDamage: Joi.number().required(),
    severeInjure: Joi.number().required().valid(1, 2),
    onBoardFunction1: Joi.alternatives().conditional('severeInjure', {is: 1, then: Joi.string().valid('Tripulantes', '')}),
    onBoardFunction2: Joi.alternatives().conditional('onBoardFunction1', {not: 'Tripulantes', then: Joi.string().valid('Passageiros').required(), otherwise: Joi.string().valid('Passageiros','')}),
    quantity: Joi.alternatives().conditional('severeInjure', {is: 1, then: Joi.number().required()}),
    history: Joi.string().pattern(/./).min(10).required(),
    registration: Joi.string().uppercase().min(5).max(6).required(),
    lastTakeOff: Joi.string().pattern(/./).required(),
    landing: Joi.string().pattern(/./).required(),
    registerCategory: Joi.number().required(),
    operationType: Joi.number().required(),
    operationPhase: Joi.number().required(),
    aircraftDamage: Joi.number().required(),
    aircraftType: Joi.number().required(),
    registryCountry: Joi.string().required(),
    manufacturingYear: Joi.number().min(1971).max(2021).required(),
    manufacturer: Joi.string().uppercase().required(),
    model: Joi.string().pattern(/./).required(),
    maxTakeOffWeightOption: Joi.number().valid(1, 2).required(),
    maxTakeOffWeight: Joi.number().required(),
    
}).unknown(true);

export default joiSchema