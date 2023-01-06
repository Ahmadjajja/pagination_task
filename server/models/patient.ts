import mongoose from "mongoose";


interface patientSchemaTypes {
    picture: string;
    age: Number;
    eyeColor: string;
    patientName: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    diseases: string;
  }

const patientSchema = new mongoose.Schema<patientSchemaTypes>({
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
    patientName: {
        type: String,
        required: true,
    },
    gender: {
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
    about: {
        type: String,
        required: true,
    },
    registered: {
        type: String,
        required: true,
    },
    diseases: {
        type: String,
        required: true,
    }, 
})

const Patient = mongoose.model<patientSchemaTypes>('patients', patientSchema);


export default Patient;
