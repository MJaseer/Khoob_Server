"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
var yupValidators_js_1 = require("../../helpers/yupValidators.js");
var validation = /** @class */ (function () {
    function validation() {
        var _this = this;
        this.registerValidation = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, firstName, lastName, phone, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _a = req.body, email = _a.email, password = _a.password, firstName = _a.firstName, lastName = _a.lastName, phone = _a.phone;
                        return [4 /*yield*/, this.stringSchema.emailSchema.validate(email)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.passwordSchema.validate(password)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.stringSchema.validate(firstName)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.stringSchema.validate(lastName)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.phoneNumberSchema.validate(phone)];
                    case 5:
                        _b.sent();
                        next();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        if (error_1 instanceof Error) {
                            console.log(error_1.message);
                            res.status(422).json({ error: error_1.message, message: 'Validation error' });
                        }
                        else
                            res.status(422).json({ error: error_1, message: 'Validation error' });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.loginValidation = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.stringSchema.emailSchema.validate(email)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.passwordSchema.validate(password)];
                    case 2:
                        _b.sent();
                        next();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        if (error_2 instanceof Error) {
                            console.log(error_2.message);
                            res.status(422).json({ error: error_2.message, message: 'Validation error' });
                        }
                        else
                            res.status(422).json({ error: error_2, message: 'Validation error' });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.productValidation = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name_1, description, category, quantity, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _a = req.body, name_1 = _a.name, description = _a.description, category = _a.category, quantity = _a.quantity;
                        return [4 /*yield*/, this.stringSchema.productNameSchema.validate(name_1)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.productdescriptionSchema.validate(description)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.stringSchema.validate(category)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.stringSchema.stringSchema.validate(quantity)];
                    case 4:
                        _b.sent();
                        next();
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _b.sent();
                        if (error_3 instanceof Error) {
                            console.log(error_3.message);
                            res.status(422).json({ error: error_3.message, message: 'Validation error' });
                        }
                        else
                            res.status(422).json({ error: error_3, message: 'Validation error' });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.stringSchema = new yupValidators_js_1.Validator();
    }
    return validation;
}());
exports.validation = validation;
