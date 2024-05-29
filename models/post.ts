import { model, Schema, models } from "mongoose";

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    pic: { type: String, required: true },
    heading1: { type: String, required: true },
    heading2: { type: String},
    heading3: { type: String},
    heading4: { type: String},
    heading5: { type: String},
    heading6: { type: String},
    heading7: { type: String},
    subPic1: { type: String, required: true },
    subPic2: { type: String },
    subPic3: { type: String },
    subPic4: { type: String },
    subPic5: { type: String },
    subPic6: { type: String },
    subPic7: { type: String },
    subDescription1: { type: String, required: true },
    subDescription2: { type: String },
    subDescription3: { type: String },
    subDescription4: { type: String },
    subDescription5: { type: String },
    subDescription6: { type: String },
    subDescription7: { type: String },
});

export const Post = models.Post || model("Post", PostSchema);