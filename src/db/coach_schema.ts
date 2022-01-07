import * as mongoose from "mongoose";

export type CoachDocument = mongoose.Document & {
    _id: string;
    firstName: string;
    lastName: string;
};

const coachSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    firstName: String,
    lastName: String,
}, { timestamps: false });

export const Coach = mongoose.model<CoachDocument>("Coach", coachSchema);
