import { mongooseConnection } from "@/lib/mongoose";
import { Post } from "@/models/post";

export default async function handle(req: any, res: any) {
  const { method } = req;
  await mongooseConnection();

  // posting data into the api
  if (method === "POST") {
    const {
      title,
      description,
      category,
      pic,
      heading1,
      heading2,
      heading3,
      heading4,
      heading5,
      heading6,
      heading7,
      subPic1,
      subPic2,
      subPic3,
      subPic4,
      subPic5,
      subPic6,
      subPic7,
      subDescription1,
      subDescription2,
      subDescription3,
      subDescription4,
      subDescription5,
      subDescription6,
      subDescription7,
    } = req.body;
    const postDoc = await Post.create({
      title,
      description,
      category,
      pic,
      heading1,
      heading2,
      heading3,
      heading4,
      heading5,
      heading6,
      heading7,
      subPic1,
      subPic2,
      subPic3,
      subPic4,
      subPic5,
      subPic6,
      subPic7,
      subDescription1,
      subDescription2,
      subDescription3,
      subDescription4,
      subDescription5,
      subDescription6,
      subDescription7,
    });
    res.json(postDoc);
  }

  // getting data from api
  if (method === "GET") {
    res.json(await Post.find());
  }
}
