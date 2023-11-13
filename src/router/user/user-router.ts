import { Router } from "express";
import { UserClass } from "../../controllers/user/user.js";
import { validation } from "../../middlewares/validation/yup.js";

const user = new UserClass();

const validator = new validation()

const router = Router()

router.post('/register',validator.registerValidation,user.userRegister)

router.post('/login',validator.loginValidation,user.userLogin)

export default router