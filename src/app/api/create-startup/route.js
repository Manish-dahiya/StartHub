import { NextResponse } from "next/server";
import {v2 as cloudinary} from "cloudinary" 
import { startups } from "@/models/startup.model";
import connectToDatabase from "@/lib/dbConnection";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  //Function to upload directly from a stream to Cloudinary
  const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "properties" }, // Specify folder
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
     
     stream.end(buffer)
    });
  };

export async function POST(req){
  await connectToDatabase()
    const body= await req.formData()
    
    const title= body.get('title').toLowerCase()
    const desc= body.get("description").toLowerCase()
    const category=body.get("category").toLowerCase()
    const image= body.get('image');
    const pitch= body.get('pitch');
    const authorId= body.get('authorId');

    const arrayBuffer = await image.arrayBuffer(); // Get ArrayBuffer
    const buffer = Buffer.from(arrayBuffer);
    const uploadedImage= await  uploadToCloudinary(buffer)

    const imageForDb= {url:uploadedImage.secure_url,publicId:uploadedImage.public_id}


    const data={
        title,
        description:desc,
        category,
        image:imageForDb,
        pitch,
        authorId:authorId
    }

    const dbResponse= await startups.create(data);

    return NextResponse.json({message:"submitted successfully",success:true})
}