import { mongooseConnection } from "@/lib/mongoose";
import { Channel } from "@/models/channel";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  // posting data into the api
  if (method === "POST") {
    const { name, category, channelurl, description, picture } = req.body;
    const currentDate = new Date();
    const channelDoc = await Channel.create({
      name,
      category,
      channelurl,
      description,
      picture,
      date: currentDate,
    });
    res.json(channelDoc);
  }

  // getting data from api
  if (method === "GET") {
    res.json(await Channel.find());
  }
}
