const statesModel = [
    {
        id: 'AC',
        value: 'Acre'

    },
    {

        id: 'AL',
        value: 'Alagoas'
    },
    {

        id: 'AP',
        value: 'Amapá'
    },
    {

        id: 'AM',
        value: 'Amazonas'
    },
    {

        id: 'BA',
        value: 'Bahia'
    },
    {

        id: 'CE',
        value: 'Ceará'
    },
    {

        id: 'DF',
        value: 'Distrito Federal'
    },
    {

        id: 'ES',
        value: 'Espírito Santo'
    },
    {

        id: 'GO',
        value: 'Goiás'
    },
    {

        id: 'MA',
        value: 'Maranhão'
    },
    {

        id: 'MT',
        value: 'Mato Grosso'
    },
    {

        id: 'MS',
        value: 'Mato Grosso do Sul'
    },
    {

        id: 'MG',
        value: 'Minas Gerais'
    },
    {

        id: 'PA',
        value: 'Pará'
    },
    {

        id: 'PB',
        value: 'Paraíba'
    },
    {

        id: 'PR',
        value: 'Paraná'
    },
    {

        id: 'PE',
        value: 'Pernambuco'
    },
    {

        id: 'PI',
        value: 'Piauí'
    },
    {

        id: 'RJ',
        value: 'Rio de Janeiro'
    },
    {

        id: 'RN',
        value: 'Rio Grande do Norte'
    },
    {

        id: 'RS',
        value: 'Rio Grande do Sul'
    },
    {

        id: 'RO',
        value: 'Rondônia'
    },
    {

        id: 'RR',
        value: 'Roraima'
    },
    {

        id: 'SC',
        value: 'Santa Catarina'
    },
    {

        id: 'SP',
        value: 'São Paulo'
    },
    {

        id: 'SE',
        value: 'Sergipe'
    },
    {

        id: 'TO',
        value: 'Tocantins'
    }
];

const filterStatesModel = (e) => {

    const result = statesModel.filter((item) => {
        return item.id === e;
    });

    return result.length > 0 ? result[0] : undefined;

};

export { statesModel, filterStatesModel }