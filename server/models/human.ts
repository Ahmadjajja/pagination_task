import mongoose from "mongoose";
// mongoose.pluralize(null);   //Adding the line mongoose.pluralize(null) in your Mongoose file will prevent collection name pluralization.

interface humanSchemaTypes {
    index: Number;
    isActive: Boolean;
    balance: string;
    picture: string;
    age: Number;
    eyeColor: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    registered: string;
    favoriteFruit: string;
  }

const humanSchema = new mongoose.Schema<humanSchemaTypes>({
    index: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    balance: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    eyeColor: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    registered: {
        type: String,
        required: true,
    },
    favoriteFruit: {
        type: String,
        required: true,
    }, 
})


const Human = mongoose.model<humanSchemaTypes>('human', humanSchema);


export default Human;
