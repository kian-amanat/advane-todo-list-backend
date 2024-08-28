import Joi from "joi";

const validationMiddleWare = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export { validationMiddleWare };
