import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    "Handle": string;
    "Title": string;
    "Body": string;
    "Vendor": string;
    "Type": string;
    "Tags": string;
    "Option1 Name": string,
    "Option1 Value": string,
    "Option2 Name": string,
    "Option2 Value": string,
    "Option3 Name": string,
    "Option3 Value": string,
    "VariantSKU": string;
    "Variant Grams": number,
    "Variant Inventory Tracker": string,
    "Variant Inventory Qty": number,
    "Variant Inventory Policy": string,
    "Variant Fulfillment Service": string,
    "Variant Price": number,
    "Variant Compare At Price": string,
    "ImageSrc": string;
}

const ProductSchema: Schema = new Schema({
    "Handle": { type: String, required: true },
    "Title": { type: String, required: true },
    "Body": { type: String, required: true },
    "Vendor": { type: String, required: true },
    "Type": { type: String, required: true },
    "Tags": { type: String },
    "Option1 Name": { type: String },
    "Option1 Value": { type: String },
    "Option2 Name": { type: String },
    "Option2 Value": { type: String },
    "Option3 Name": { type: String },
    "Option3 Value": { type: String },
    "Variant Grams": { type: Number },
    "Variant Inventory Tracker": { type: String },
    "Variant Inventory Qty": { type: Number },
    "Variant Inventory Policy": { type: String },
    "Variant Fulfillment Service": { type: String },
    "Variant Price": { type: Number },
    "Variant Compare At Price": { type: String },
    "ImageSrc": { type: String }
});

const Product = mongoose.model<any>('products', ProductSchema);

export default Product;
