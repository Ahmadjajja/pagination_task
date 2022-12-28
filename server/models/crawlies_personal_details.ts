import mongoose from "mongoose";


interface crawlies_personal_details_schema_types {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    prefix: string;
    is_candidate: Boolean;
  }

const crawlies_personal_details_schema = new mongoose.Schema<crawlies_personal_details_schema_types>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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
    prefix: {
        type: String,
        required: true,
    },
    is_candidate: {
        type: String,
        required: true,
    }
})

const Crawlies_personal_details_schema = mongoose.model<crawlies_personal_details_schema_types>('crawlies_personal_details', crawlies_personal_details_schema);


export default Crawlies_personal_details_schema;