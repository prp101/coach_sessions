import * as mongoose from "mongoose";

export type SessionDocument = mongoose.Document & {
    _id: string;
    coachId: string;
    clientId: string;
    timeTo: Date;
    timeFrom: Date;
    approved: boolean;
    length: number;
    paid: boolean;
};

const sessionSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    coachId: String,
    clientId: String,
    length: Number,
    timeFrom: Date,
    timeTo: Date,
    approved: Boolean,
    paid: Boolean,
}, { timestamps: false });

export const Session = mongoose.model<SessionDocument>("Session", sessionSchema);
