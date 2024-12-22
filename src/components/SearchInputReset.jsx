"use client"
import Link from 'next/link';
import React from 'react'

function SearchInputReset() {
    const reset=()=>{
        const form= document.querySelector(".search-form")
        if(form){
            form.reset();
        }
    }
  return (
    <button onClick={reset} className=''>
        <Link href={"/"} className='search-btn text-white'>X</Link>
    </button>
  )
}

export default SearchInputReset
