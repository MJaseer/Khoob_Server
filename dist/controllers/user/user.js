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
exports.UserClass = void 0;
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
var user_js_1 = require("../../models/user.js");
var find_js_1 = require("../../repositeries/common/find.js");
var create_js_1 = require("../../repositeries/common/create.js");
dotenv_1.default.config();
var UserClass = /** @class */ (function () {
    function UserClass() {
        this.findService = new find_js_1.Finds();
        this.createService = new create_js_1.Creates();
    }
    UserClass.prototype.userRegister = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, firstName, phone, lastName, email, password, existingUser, saltRounds, hashedPassword, userData, newUser, token, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        _a = req.body, firstName = _a.firstName, phone = _a.phone, lastName = _a.lastName, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.findService.findOne('email', email, user_js_1.default, 'register')];
                    case 1:
                        existingUser = _b.sent();
                        if (existingUser)
                            return [2 /*return*/, res.status(400).json({ error: "Email already exists" })];
                        saltRounds = 10;
                        return [4 /*yield*/, bcryptjs_1.default.hash(password, saltRounds)];
                    case 2:
                        hashedPassword = _b.sent();
                        userData = { firstName: firstName, lastName: lastName, email: email, password: hashedPassword, phone: phone };
                        return [4 /*yield*/, this.createService.create('user', userData, user_js_1.default)];
                    case 3:
                        newUser = _b.sent();
                        token = jsonwebtoken_1.default.sign({ userId: newUser._id }, process.env.SECRET_KEY, {
                            expiresIn: "7d",
                        });
                        res.status(201).json({ user: newUser.email, token: "Bearer ".concat(token) });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.log(error_1);
                        res.status(500).json({ error: "Failed to register user" });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserClass.prototype.userLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, existingUser, passwordMatch, token, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("on controller");
                        _a = req.body, email = _a.email, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.findService.findOne('email', email, user_js_1.default)];
                    case 2:
                        existingUser = _b.sent();
                        if (!existingUser)
                            return [2 /*return*/, res.status(400).json({ error: "User does not exist" })];
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, existingUser.password)];
                    case 3:
                        passwordMatch = _b.sent();
                        if (!passwordMatch)
                            return [2 /*return*/, res.status(401).json({ error: "Incorrect password" })];
                        token = jsonwebtoken_1.default.sign({ userId: existingUser._id }, process.env.SECRET_KEY, {
                            expiresIn: "7d",
                        });
                        res.status(200).json({ user: existingUser.email, token: "Bearer ".concat(token) });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _b.sent();
                        res.status(500).json({ error: "Failed to login User" });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return UserClass;
}());
exports.UserClass = UserClass;
