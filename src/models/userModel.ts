import mongoose, { Model, Document, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});

const User: Model<any> = mongoose.model<any>('shopping-app/user', UserSchema);

export default User;