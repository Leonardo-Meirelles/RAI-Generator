const validateMiddlewareDTO = (context, schema) => {

    return async (req, res, next) => {

        const result = schema.validate(req[context], { abortEarly: false })
        console.log(req.body);
        if (result.error) {

            return res.status(400).send(result.error)

        }

        next()

    }

}

export default validateMiddlewareDTO