import Ejs from 'ejs';
import Path from 'path';
import * as Fs from 'fs';
import HtmlToPdf from 'html-pdf-node';

//* { Import Models 
import classificationModel from '../models/model-classification.js';
import { statesModel, filterStatesModel } from '../models/model-states.js';
import thirdPartyDamageModel from '../models/model-thirdPartyDamage.js';
import severeInjureModel from '../models/model-severeInjure.js';
import registerCategoryModel from '../models/model-registerCategory.js';
import operationTypeModel from '../models/model-operationType.js';
import operationPhaseModel from '../models/model-operationPhase.js';
import aircraftDamageModel from '../models/model-aircraftDamage.js';
import aircraftTypeModel from '../models/model-aircraftType.js';
import maxTakeOffWeightOptionModel from '../models/model-maxTakeOffWeightOption.js';
//* Import Models }

import filterModelFunction from '../utils/filterModelFunction.js';
import joiSchema from '../utils/joiSchema.js';

const __dirname = Path.resolve();

const viewModel = {
    classificationModel,
    statesModel,
    registerCategoryModel,
    operationTypeModel,
    operationPhaseModel,
    aircraftDamageModel,
    aircraftTypeModel
};

const getForm = (req, res, next) => {

    res.render('pages/form', viewModel);

};

const postFormSchema = joiSchema

const postForm = (req, res, next) => {

    const {
        processNumber,
        classification,
        occurrenceType,
        date,
        time,
        state,
        city,
        aerodrome,
        thirdPartyDamage,
        severeInjure,
        onBoardFunction1,
        onBoardFunction2,
        quantity,
        history,
        registration,
        lastTakeOff,
        landing,
        registerCategory,
        operationType,
        operationPhase,
        aircraftDamage,
        aircraftType,
        registryCountry,
        manufacturingYear,
        manufacturer,
        model,
        maxTakeOffWeightOption,
        maxTakeOffWeight

    } = req.body

    const selectedClassification = filterModelFunction(classificationModel, classification)
    const selectedState = filterStatesModel(state)
    const selectedThirdPartyDamage = filterModelFunction(thirdPartyDamageModel, thirdPartyDamage)
    const selectedSevereInjure = filterModelFunction(severeInjureModel, severeInjure)
    const selectedRegisterCategory = filterModelFunction(registerCategoryModel, registerCategory)
    const selectedOperationType = filterModelFunction(operationTypeModel, operationType)
    const selectedOperationPhase = filterModelFunction(operationPhaseModel, operationPhase)
    const selectedAircraftDamage = filterModelFunction(aircraftDamageModel, aircraftDamage)
    const selectedAircraftType = filterModelFunction(aircraftTypeModel, aircraftType)
    const selectedMaxTakeOffWeightOption = filterModelFunction(maxTakeOffWeightOptionModel, maxTakeOffWeightOption)

    const pdfViewModel = {
        processNumber,
        classification: selectedClassification.value,
        occurrenceType,
        date,
        time,
        state: selectedState.value,
        city,
        aerodrome,
        thirdPartyDamage: selectedThirdPartyDamage.value,
        severeInjure: selectedSevereInjure.value,
        onBoardFunction1,
        onBoardFunction2,
        quantity,
        history,
        registration,
        lastTakeOff,
        landing,
        registerCategory: selectedRegisterCategory.value,
        operationType: selectedOperationType.value,
        operationPhase: selectedOperationPhase.value,
        aircraftDamage: selectedAircraftDamage.value,
        aircraftType: selectedAircraftType.value,
        registryCountry,
        manufacturingYear,
        manufacturer,
        model,
        maxTakeOffWeightOption: selectedMaxTakeOffWeightOption.value,
        maxTakeOffWeight,
    }

    const filePath = Path.join(__dirname + '/app', '/views/pages/pdf.ejs');
    const templateHtml = Fs.readFileSync(filePath, 'utf8');
    const htmlPronto = Ejs.render(templateHtml, pdfViewModel);

    const file = {
        content: htmlPronto
    };

    const configuracoes = {
        format: 'A4',
        printBackground: true
    };

    HtmlToPdf.generatePdf(file, configuracoes)
        .then((resultPromessa) => {
            res.contentType("application/pdf");
            res.send(resultPromessa);
        });


};

export { getForm, postForm, postFormSchema }