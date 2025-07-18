const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;

if (!bucketName || !bucketRegion) {
  // save the image to the local file system
} else {

  const s3Client = new S3Client({
    region: bucketRegion
  });

  const key = `qr-codes/${name}`
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: buffer,
    ContentType: "image/webp",
  });
  await s3Client.send(command);
  const url = `https://${bucketName}.s3.amazonaws.com/${key}`;
}
