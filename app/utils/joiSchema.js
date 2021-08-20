import JoiImport from 'joi';
import DateExtension  from '@joi/date';
const Joi = JoiImport.extend(DateExtension);

const joiSchema = Joi.object({
    processNumber: Joi.number().required().messages({
        'number.base': `O campo 'Número do Processo' deve conter somente números`
    }),
    classification: Joi.number().required().messages({
        'any.required': `O campo 'Classificação' deve ser preenchido`
    }),
    occurrenceType: Joi.string().pattern(/./).required().messages({
        'string.empty': `O campo 'Tipo de Ocorrência' deve ser preenchido`
    }),
    date: Joi.date().format('DD/MM/YYYY').required().messages({
        'date.format': `O campo 'Data' deve ser no formato DD/MM/YYYY`
    }),
    time: Joi.string().pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).required().messages({
        'string.empty': `O campo 'Horário' deve ser preenchido`
    }),
    state: Joi.string().uppercase().min(2).max(2).required().messages({
        'any.required': `O campo 'Estado' deve ser preenchido`
    }),
    city: Joi.string().pattern(/./).required().messages({
        'string.empty': `O campo 'Cidade' deve ser preenchido`
    }),
    aerodrome: Joi.string().pattern(/^[A-Z][A-Z][A-Z][A-Z]$/).uppercase().min(4).max(4).required().messages({
        'string.empty': `O campo 'Aeródromo' deve ser preenchido`
    }),
    thirdPartyDamage: Joi.number().required().messages({
        'any.required': `O campo 'Danos a terceiros' deve ser preenchido`
    }),
    
    severeInjure: Joi.number().required().valid(1, 2).messages({
        'any.required': `O campo 'Houve lesão grave?' deve ser preenchido`
    }),
    onBoardFunction1: Joi.string().allow(null).default(null),

    onBoardFunction2: Joi.string().when('onBoardFunction1', {is: null, then: Joi.required()}).messages({
        'any.required': `Pelo menos uma opção no campo 'Função a bordo?' deve ser selecionada`
    }),
    quantity: Joi.alternatives().conditional('severeInjure', {is: 1, then: Joi.number().required()}).messages({
        'number.base': `O campo 'Quantidade' deve ser preenchido`
    }),
    history: Joi.string().pattern(/./).min(10).required().messages({
        'string.empty': `O campo 'Histórico' deve ser preenchido`
    }),
    registration: Joi.string().pattern(/^[A-Z][A-Z][\-][A-Z][A-Z][A-Z]$/).uppercase().min(6).max(6).required().messages({
        'string.empty': `O campo 'Matrícula' deve ser preenchido`,
        'string.pattern.base': `O campo 'Matrícula' não pode conter números`
    }),
    lastTakeOff: Joi.string().pattern(/./).required().messages({
        'string.empty': `O campo 'Local da última decolagem' deve ser preenchido`
    }),
    landing: Joi.string().pattern(/./).required().messages({
        'string.empty': `O campo 'Local pretendido de pouso' deve ser preenchido`
    }),
    registerCategory: Joi.number().required().messages({
        'any.required': `O campo 'Categoria de registro' deve ser preenchido`
    }),
    operationType: Joi.number().required().messages({
        'any.required': `O campo 'Tipo de operação' deve ser preenchido`
    }),
    operationPhase: Joi.number().required().messages({
        'any.required': `O campo 'Fase da operação' deve ser preenchido`
    }),
    aircraftDamage: Joi.number().required().messages({
        'any.required': `O campo 'Danos à aeronave' deve ser preenchido`
    }),
    aircraftType: Joi.number().required().messages({
        'any.required': `O campo 'Tipo de aeronave' deve ser preenchido`
    }),
    registryCountry: Joi.string().required().messages({
        'string.empty': `O campo 'País de registro' deve ser preenchido`
    }),
    manufacturingYear: Joi.number().min(1971).max(2021).required().messages({
        'number.base': `O campo 'Ano de fabricação' deve ser preenchido`
    }),
    manufacturer: Joi.string().uppercase().required().messages({
        'string.empty': `O campo 'Fabricante' deve ser preenchido`
    }),
    model: Joi.string().pattern(/./).required().messages({
        'string.empty': `O campo 'Modelo' deve ser preenchido`
    }),
    maxTakeOffWeightOption: Joi.number().valid(1, 2).required().messages({
        'any.required': `O campo 'Kg ou Lbs' deve ser preenchido`
    }),
    maxTakeOffWeight: Joi.number().required().messages({
        'number.base': `O campo 'Peso máximo de decolagem' deve ser preenchido`
    }),
    
}).unknown(true);

export default joiSchema