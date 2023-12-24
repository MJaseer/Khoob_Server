"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var yup = require("yup");
var Validator = /** @class */ (function () {
    function Validator() {
        this.phoneRegExp = /^\d{10}$/;
        this.passwordSchema = yup.string().min(8, 'Password must be at least 8 characters')
            .max(20, 'Password cannot be longer than 20 characters')
            .matches(/[a-z]+/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
            .matches(/[\d]+/, 'Password must contain at least one digit')
            .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/, 'Password must contain at least one special character');
        this.emailSchema = yup.string()
            .required('Email is required')
            .email('Email must be a valid format');
        this.stringSchema = yup.string().min(5, 'Name must be at least 8 characters')
            .max(20, 'Name cannot be longer than 20 characters');
        this.phoneNumberSchema = yup.string()
            .required('Phone number is required')
            .matches(this.phoneRegExp, 'Phone number must be 10 digits long');
        this.productNameSchema = yup.string()
            .required('Product name is required')
            .min(3, 'Product name must be atleast 3 characters long');
        this.productdescriptionSchema = yup.string()
            .required('Product name is required')
            .min(3, 'Product description must be atleast 3 characters long')
            .max(250, 'Product description cannot be longer than 250 characters');
    }
    return Validator;
}());
exports.Validator = Validator;
