import "dotenv/config";
import cors from "cors";
import express from "express";
import multer from "multer";
import { cropFromBuffer } from "./convert-screenshot/cropFromBuffer";
import { ocrFromBlob } from "./convert-screenshot/ocrFromBuffer";

const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(cors());
console.log("in the watch");

app
  .use(upload.single("file"))
  .post("/api/convert-binance-screenshot", async (req, res) => {
    console.log(req.file);
    const croppedBuffer = await cropFromBuffer(req.file.buffer);
    const textExtracted = await ocrFromBlob(croppedBuffer);
    return res.send(textExtracted);
  });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
