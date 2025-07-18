S3 App File Storage
This part should be relatively easy since we've already done most of the work to get this part working.

Why S3?
Currently, all the images for the qr app are stored in the EC2 instance. This is not a good idea for a few reasons:

It's not scalable. If we want to horizontally scale the app, we would need to distribute the images across multiple EC2 instances.
It's not durable. If the EC2 instance fails, the images will be lost.
It's cheaper to store the images in S3 than to store them on an EC2 instance's EBS volume.
It's often better to have users access the images directly from S3 to save on bandwidth and reduce the load on the EC2 instance. And if we connect the S3 bucket to a CloudFront distribution, we can even speed up delivery of the images.
Setup
We already setup the bucket and the IAM policy to allow the EC2 instance to access the bucket. Now we just need to tell the qr code app to store images there instead of the file system.

Fortunately, the qr code app is already able to store images in S3, it just needs some environment variables to be set. The code in the app basically looks like this:
Where as long as the BUCKET_NAME and BUCKET_REGION environment variables are set, the app will store the images in S3 instead of the file system.
