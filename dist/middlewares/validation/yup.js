import { Validator } from '../../helpers/yupValidators.js';
export class validation {
    constructor() {
        this.registerValidation = async (req, res, next) => {
            try {
                const { email, password, firstName, lastName, phone } = req.body;
                await this.stringSchema.emailSchema.validate(email);
                await this.stringSchema.passwordSchema.validate(password);
                await this.stringSchema.stringSchema.validate(firstName);
                await this.stringSchema.stringSchema.validate(lastName);
                await this.stringSchema.phoneNumberSchema.validate(phone);
                next();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    res.status(422).json({ error: error.message, message: 'Validation error' });
                }
                else
                    res.status(422).json({ error, message: 'Validation error' });
            }
        };
        this.loginValidation = async (req, res, next) => {
            try {
                const { email, password } = req.body;
                await this.stringSchema.emailSchema.validate(email);
                await this.stringSchema.passwordSchema.validate(password);
                next();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    res.status(422).json({ error: error.message, message: 'Validation error' });
                }
                else
                    res.status(422).json({ error, message: 'Validation error' });
            }
        };
        this.productValidation = async (req, res, next) => {
            try {
                const { name, description, category, quantity } = req.body;
                await this.stringSchema.productNameSchema.validate(name);
                await this.stringSchema.productdescriptionSchema.validate(description);
                await this.stringSchema.stringSchema.validate(category);
                await this.stringSchema.stringSchema.validate(quantity);
                next();
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    res.status(422).json({ error: error.message, message: 'Validation error' });
                }
                else
                    res.status(422).json({ error, message: 'Validation error' });
            }
        };
        this.stringSchema = new Validator();
    }
}
//# sourceMappingURL=yup.js.map