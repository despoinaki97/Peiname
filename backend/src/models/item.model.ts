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
       item_img: string;
       defaulting: string[];
       ingredients: string[];
       extra: string[];
}

// ------------------------------------------
// Schema definition
const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    Carbs: { type: Number, required: false },
    Sugar: { type: Number, required: false },
    Fat: { type: Number, required: false },
    Calories: { type: Number, required: false },
    price: { type: Number, required: false },
    sharedWith: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }],
    item_details: { type: String, required: false },
    item_img: { type: String, required: false },
    defaulting: [{ type: String, required: false }],
    ingredients: [{ type: String, required: false }],
    extra: [{ type: String, required: false }]
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const ItemModel: Model<IItem> = model<IItem>(
  'Item', ItemSchema, 'Item'
);
