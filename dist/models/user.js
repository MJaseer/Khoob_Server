"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    address: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Address',
    },
}, {
    timestamps: true
});
userSchema.virtual('fullName').get(function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
});
exports.default = mongoose_1.default.model("User", userSchema);
