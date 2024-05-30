import { mongooseConnection } from "@/lib/mongoose";
import { Event } from "@/models/event";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  // posting data into the api
  if (method === "POST") {
    const {
      name,
      category,
      eventchannel1,
      eventchannel2,
      eventchannel3,
      eventCountry,
      description,
      eventday,
      eventmonth,
      eventyear,
      picture,
    } = req.body;
    const date = new Date();
    const eventDoc = await Event.create({
      name,
      category,
      eventchannel1,
      eventchannel2,
      eventchannel3,
      eventCountry,
      description,
      eventday,
      eventmonth,
      eventyear,
      picture,
      date: date,
    });
    res.json(eventDoc);
  }

  // getting data from api
  if (method === "GET") {
    res.json(await Event.find());
  }
}
