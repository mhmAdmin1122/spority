import { model, Schema, models } from "mongoose";

const ChannelSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  channelurl: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  date: {type: Date}
});

export const Channel = models.Channel || model("Channel", ChannelSchema);
