import { Document, Schema, Model, model, Mongoose } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface IItem extends Document {
       name: string;
       Carbs: number;
       Sugar: number;
       Fat: number;
       Calories: number;
       price: number;
       sharedWith: [{ type: Schema.Types.ObjectId, ref: 'User' }];
       item_details: string;
       image: string;


}

// ------------------------------------------
// Schema definition
const ItemSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    Carbs: { type: Number, required: false },
    Sugar: { type: Number, required: false },
    Fat: { type: Number, required: false },
    Calories: { type: Number, required: false },
    price: { type: Number, required: true },
    sharedWith: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    item_details: { type: String, required: true },
    image: { type: String, required: true }
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const ItemModel: Model<IItem> = model<IItem>(
  'Item', ItemSchema, 'Item'
);
