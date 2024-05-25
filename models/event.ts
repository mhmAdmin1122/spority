import { model, Schema, models } from "mongoose";

const EventSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  eventchannel: { type: String, required: true },
  description: { type: String, required: true },
  eventday: { type: Number, required: true },
  eventmonth: { type: Number, required: true },
  eventyear: { type: Number, required: true },
  picture: { type: String, required: true },
});

export const Event = models.Event || model("Event", EventSchema);