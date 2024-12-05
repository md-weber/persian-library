import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as sharp from "sharp";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";

admin.initializeApp();

export const resizeImage = functions.storage.onObjectFinalized(
  async (object: any) => {
    // Exit if this is triggered on a file that is not an image.
    if (!object.contentType?.includes("image/")) {
      return;
    }

    // Exit if this is already a resized image
    if (object.name?.includes("resized_")) {
      return;
    }

    const bucket = admin.storage().bucket(object.bucket);
    const filePath = object.name!;
    const fileName = path.basename(filePath);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const targetPath = path.join(path.dirname(filePath), `resized_${fileName}`);

    try {
      // Download file
      await bucket.file(filePath).download({
        destination: tempFilePath,
      });

      // Resize image
      await sharp(tempFilePath)
        .resize(800) // Set max width to 800px, height will adjust automatically
        .jpeg({ quality: 80 }) // Compress JPEG quality
        .toFile(tempFilePath + "_resized");

      // Upload resized image
      await bucket.upload(tempFilePath + "_resized", {
        destination: targetPath,
        metadata: {
          contentType: object.contentType,
          metadata: {
            firebaseStorageDownloadTokens:
              object.metadata?.firebaseStorageDownloadTokens,
          },
        },
      });

      // Delete the original file
      await bucket.file(filePath).delete();

      // Clean up temporary files
      fs.unlinkSync(tempFilePath);
      fs.unlinkSync(tempFilePath + "_resized");
    } catch (error) {
      console.error("Error processing image:", error);
    }
  },
);
