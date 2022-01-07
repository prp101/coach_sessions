import * as mongoose from "mongoose";

export type ClientDocument = mongoose.Document & {
    _id: string;
    firstName: string;
    lastName: string;
};

const clientSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    firstName: String,
    lastName: String,
}, { timestamps: false });

export const Client = mongoose.model<ClientDocument>("Client", clientSchema);