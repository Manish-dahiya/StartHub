import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function StartupCard({post}) {
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{post._createdAt}</p>
        <div className='flex gap-1.5'>
            {/* eye icon  */}
            <span className='text-16-medium'>{post.views}</span>
        </div>
      </div>
      
      <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`user/${post.author._id}`}>
                    <p className='text-16-medium line-clamp-1'>{post.author.name}</p>
                </Link>
                <Link href={`startup/${post._id}`}>
                <h3 className='text-26-semibold line-clamo-1'>{post.title}</h3>
                </Link>
                <Link href={`startup/${post._id}`}>
                <p className='startup_card_desc'>{post.desc.slice(20)}</p>
                <Image src={post.image} alt='startup Img' className='startup_card_img pt-2' />
                </Link>

                <div className='flex-between gap-3 mt-5'>
                    <Link href={`/?query=${post.category.toLowerCase()}`}> {post.category}</Link>
                    <button className='btn'>
                        <Link href={`startup/${post._id}`}>Details</Link>
                    </button>
                </div>


            </div>
      </div>
    </li>
  )
}

export default StartupCard
