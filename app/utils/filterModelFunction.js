const filterModelFunction = (model, e) => {

    const result = model.filter((item) => {
        return parseInt(item.id) === parseInt(e);
    });

    return result.length > 0 ? result[0] : undefined;

};

export default filterModelFunction;