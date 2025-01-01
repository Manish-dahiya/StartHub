"use client";
import React, { useEffect, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useUser } from '@clerk/nextjs'


const init = {
    title: "",
    description: "",
    category: "",
}

function StartupForm() {
    const [pitch, setPitch] = useState("Write something nice about your startup");
    const [formData, setFormData] = useState(init);
    const [image, setImage] = useState(null);
    const { user } = useUser()



    //for title,desc,category
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        console.log("file uploaded");
    }


    const handleSubmit = async () => {
        if (formData.title == "" || formData.description == "" || formData.category == "" || user == null || image == null) {
            console.log("fill in the fields first")
            return;
        }
        else {
            const data = new FormData();
            data.append('title', formData.title)
            data.append('description', formData.description)
            data.append('category', formData.category)
            data.append('image', image)
            data.append("pitch", pitch)
            //append user id 
            data.append('authorId', user?.id)

            try {
                const response= await fetch("/api/create-startup",{
                    method:"POST",
                    body:data
                })
                const res= await response.json();
                if(res.success){
                    console.log("startup listed");
                }
                else{
                    console.log("failed in listing startup");
                }

            } catch (error) {
                console.log("error occured in sending data",error)
            }

        }
    }

    return (
        <div className='max-w-[80%] md:max-w-[70%]'>

            <div className='mx-2 mt-3'  >
                <label htmlFor="title" className='startup-form_label'>
                    Title
                    <input type="text" id='title' name='title' value={formData.title} onChange={handleChange} placeholder='title' className='border  my-3 border-black-200 rounded-lg h-12 w-full p-2 text-2xl' />
                </label>
                <label htmlFor="description" className='startup-form_label'>
                    Description
                    <textarea type="text" rows={5} id='description' value={formData.description} onChange={handleChange} name='description' placeholder='description' className='border my-3 border-black-200 rounded-lg  w-full p-2 text-2xl' />
                </label>
                <label htmlFor="category" className='startup-form_label'>
                    Category
                    <input type="text" id='category' name='category' value={formData.category} onChange={handleChange} placeholder='category' className='border my-3 border-black-200 rounded-lg h-12 w-full p-2 text-2xl' />
                </label>
                <label htmlFor="image" className='startup-form_label'>
                    Image
                    <input type="file" id='image' name='image' onChange={handleImageUpload} className='border my-3 border-black-200 rounded-lg h-12 w-full p-2 text-2xl' />
                </label>
                <div data-color-mode="light">
                    <h1 className='startup-form_label my-3'>write about your startup here</h1>
                    <MDEditor
                        value={pitch}
                        onChange={setPitch}
                        preview='edit'
                        height={300}
                        style={{ borderRadius: 20, overflow: "hidden" }}
                        textareaProps={{ placeholder: "Briefly explain about your startup" }}
                        previewOptions={{
                            disallowedElements: ["style"]
                        }}
                    />
                </div>

                <div className='my-2 text-center'>
                    <button className='px-3 py-2 rounded-lg bg-black text-white font-bold' onClick={handleSubmit}>Submit</button>

                </div>

            </div>


        </div>
    )
}

export default StartupForm
