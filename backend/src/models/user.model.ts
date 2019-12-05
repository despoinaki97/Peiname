import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface IUser extends Document {
    name: string;
    color: string;
    user_Icon: string;
    seat: number;
    isHost: boolean;
    orderedItems: [[{ type: Schema.Types.ObjectId, ref: 'Item' }]];
}

// ------------------------------------------
// Schema definition
const UserSchema = new Schema(
  {
    name: { type: String, required: true},
    color: { type: String, required: true},
    user_Icon: { type: String, required: true},
    seat: { type: Number, required: true},
    isHost: { type: Boolean, required: true},
    orderedItems: [[{ type: Schema.Types.ObjectId, ref: 'Item' }]]
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const UserModel: Model<IUser> = model<IUser>(
  'User', UserSchema, 'User'
);
