import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});
export default mongoose.model("Category", categorySchema);
