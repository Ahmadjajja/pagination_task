import mongoose from "mongoose";


interface tagsSchemaTypes {
    title: string;
    color: string;
  }

const tagsSchema = new mongoose.Schema<tagsSchemaTypes>({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
})

const Tags = mongoose.model<tagsSchemaTypes>('tags', tagsSchema);


export default Tags;
