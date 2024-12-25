// import { Clerk } from '@clerk/clerk-sdk-node';

// Initialize the Clerk client with the correct API key

import { createUser } from "@/lib/actions/user.action";
import {WebhookEvent}  from "@clerk/nextjs/server"
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {Webhook} from "svix"

 

export async function POST(req) {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
  
    if (!WEBHOOK_SECRET) {
      throw new Error(
        "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
      );
    }

    // const clerkClient = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY }); // Ensureimport { NextResponse } from "next/server";


     // Create a new Svix instance with your secret.
     const wh = new Webhook(WEBHOOK_SECRET);
  
    // Get the headers
    const headerPayload =await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");
  
    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error occurred -- no svix headers", {
        status: 400,
      });
    }
  
    // Get the body
    const payload = await req.json();
    const body= JSON.stringify(payload)

   
  
    let evt;
    try {

      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      });
    } catch (err) {
      console.error(`Error verifying webhook:`,err);
      return new Response(`Error occurred` , {
        status: 400,
      });
    }
  
    // Get the ID and type
    const { id } = evt.data;
    const eventType = evt.type;
  
    // CREATE User in MongoDB
    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name } =
        evt.data;
  
      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName: first_name,
        lastName: last_name,
      };
  
      const newUser = await createUser(user);
      console.log("naya created user--> ",newUser)

      return NextResponse.json({ message: "New user created", user: newUser });
    }
    else if(eventType=="user.deleted"){
      return NextResponse.json({ message: " user deleted successfully",user:""});
    }


  
    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    console.log("Webhook body:", body);
  
    return new Response("", { status: 200 });
  }

  //having the webhook error because of mongodb atlas ip address config.