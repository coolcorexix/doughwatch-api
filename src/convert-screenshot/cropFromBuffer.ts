import Jimp from "jimp";

export async function cropFromBuffer(bufferFile: Buffer): Promise<Buffer> {
    return new Promise(async (resolve) => {
        const image = await Jimp.read(bufferFile);
        const x = 0;
        const y = (image.getHeight() / 5) * 3;
        const w = image.getWidth();
        const h = image.getHeight() / 5;
        image.crop(x, y, w, h).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            resolve(buffer);
        });
    })
  
}
