const validateMiddlewareDTO = (context, schema) => {

    return async (req, res, next) => {

        const result = schema.validate(req[context], { abortEarly: false })
        // console.log(req[context]);
        if (result.error) {

            const error = result.error.details
            console.log(error);
            return res.render('pages/errors', {error})
        }

        next()

    }

}

export default validateMiddlewareDTO