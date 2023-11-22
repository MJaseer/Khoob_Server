import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
    },
}, {
    timestamps: true
});
userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=user.js.map