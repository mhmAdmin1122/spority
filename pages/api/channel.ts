import { mongooseConnection } from "@/lib/mongoose";
import { slugify } from "@/lib/slugify";
import { Channel } from "@/models/channel";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  // posting data into the api
  if (method === "POST") {
    const { name, category, channelurl, description, picture } = req.body;
    const slug = slugify(name);
    const currentDate = new Date();
    const channelDoc = await Channel.create({
      name,
      category,
      channelurl,
      description,
      picture,
      slug,
      date: currentDate,
    });
    res.json(channelDoc);
  }

  // getting data from api
  if (method === "GET") {
    res.json(await Channel.find());
  }
}
