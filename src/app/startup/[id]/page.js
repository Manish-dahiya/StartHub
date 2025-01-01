import React from 'react'
import robot from "../../../../public/robot.jpg"


const post={
    _createdAt:'Yesterday',
    views:55,
    authorName:"Manish",
    description:"Empowering green startups to build a sustainable future. Join the movement to innovate for the planet ",
    image: robot,
    category:"Robots",
    title:"Bookify for bookers",
    pitch:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus asperiores soluta voluptatibus esse quod, aperiam voluptates eveniet ab culpa doloremque dicta assumenda animi qui beatae velit? Soluta, facilis reiciendis. Earum numquam corrupti molestiae ab nam error cupiditate reprehenderit doloremque modi repellat. Odio, modi, perferendis ea omnis eveniet quam facilis repudiandae esse repellendus debitis velit labore corrupti. Placeat quidem sint, aliquid cumque repudiandae error velit harum numquam architecto consequuntur nesciunt tempore, magnam alias quisquam repellendus similique veniam fugit, dolores dolorum nam laborum sunt porro odit. Sint commodi voluptas quas odit, quam totam sit, eum in esse aliquam sunt quia repella`
  }

function StartupDetails() {
  return (
    <>
        <section className='pink_container !min-h-[230px]'>
            <h1 className='tag'>{post?._createdAt}</h1>
            <h1 className='heading'>{post?.title}</h1>
            <p className='sub-heading !max-w-5xl'> {post?.description}</p>
        </section>

        <section className='section_container flex justify-center'>
            <img src={"https://res.cloudinary.com/dsilckk9k/image/upload/v1735760477/startups/qhfnktp4qqz1msrbj6qm.jpg"}  style={{height:"50%",width:"50%"}} alt="startup-image" />
        </section>

        <section className='section_container'>
            <div className='flex justify-between'>
                <h1 className='text-16-medium'>{post?.authorName}</h1>
                <h1 className='text-16-medium'>{post?._createdAt}</h1>
            </div>

            <article className='text-20  font-bold text-xl'>
                {post?.pitch}
            </article>

            {/* footer */}
        </section>
    </>
  )
}

export default StartupDetails
