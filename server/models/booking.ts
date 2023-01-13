import mongoose from "mongoose";

import Slots from "./slots";
import Patient from "./patient";
import Doctor from "./doctor";
import Tags from "./tags";

 
interface bookingSchemaTypes {
    patientId: mongoose.Types.ObjectId;
    doctorId: mongoose.Types.ObjectId;
    slotsId: mongoose.Types.ObjectId;
    tagsId: mongoose.Types.ObjectId;
  }

const bookingSchema = new mongoose.Schema<bookingSchemaTypes>({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Patient,
        required:true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Doctor,
        required:true
    },
    slotsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Slots,
        required:true
    },
    tagsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Tags,
        required:true
    },
})

const Booking = mongoose.model<bookingSchemaTypes>('bookings', bookingSchema);


export default Booking
