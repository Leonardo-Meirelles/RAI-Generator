const validateMiddlewareDTO = (context, schema) => {

    return async (req, res, next) => {

        const result = schema.validate(req[context], { abortEarly: false })
    
        if (result.error) {
            const error = result.error.details
            
            return res.render('pages/errors', {error})
        }

        next()

    }

}

export default validateMiddlewareDTO