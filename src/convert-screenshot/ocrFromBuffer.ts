import Tesseract from "tesseract.js";

export async function ocrFromBlob(bufferFile: Buffer) {
  return new Promise((resolve) => {
    Tesseract.recognize(bufferFile, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      resolve(text);
    });
  });
}
