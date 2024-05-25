import { mongooseConnection } from "@/lib/mongoose";
import { Event } from "@/models/event";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  if (method === "POST") {
    const {
      name,
      category,
      eventchannel,
      description,
      eventday,
      eventmonth,
      eventyear,
      picture,
    } = req.body;
    const eventDoc = await Event.create({
      name,
      category,
      eventchannel,
      description,
      eventday,
      eventmonth,
      eventyear,
      picture,
    });
    res.json(eventDoc);
  }
}
