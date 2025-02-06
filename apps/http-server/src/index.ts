import express, { Request, Response } from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  const something = await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  res.status(200).json({
    success: true,
    data: {
      something,
    },
  });
});
app.listen(5000, () => {
  console.log("Server is listening at 5000");
});
