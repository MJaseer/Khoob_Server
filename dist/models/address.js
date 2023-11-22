import mongoose, { Schema } from "mongoose";
export const addressObjSchema = new Schema({
    street: String,
    city: String,
    state: String,
    zip: String,
    houseName: String,
    landMark: String,
    createdAt: { default: Date.now() }
});
const addressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    savedArray: [addressObjSchema],
}, {
    timestamps: true
});
export default mongoose.model("Address", addressSchema);
//# sourceMappingURL=address.js.map