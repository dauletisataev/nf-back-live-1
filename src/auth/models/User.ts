import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  username?: string;
  password: string;
  roles: string[];
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String },
  roles: {
    type: [String],
    default: ["user"],
  },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>("User", UserSchema);
