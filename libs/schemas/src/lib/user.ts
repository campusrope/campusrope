import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name:String,
    picture:String,
    email:String,
    google: String,
},{ timestamps: true });