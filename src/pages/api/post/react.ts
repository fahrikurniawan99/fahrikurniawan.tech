import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const results = await db.query("SELECT * FROM reactions");
    console.log(results);
    res.status(200).json({ message: "" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
