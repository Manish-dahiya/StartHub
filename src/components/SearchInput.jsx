import Form from "next/form"
import React from 'react'
import SearchInputReset from "./SearchInputReset"

export default function SearchInput({query}) {
    
    return (
        <Form action={`/`} className="search-form">
            <input type="text" name="query" defaultValue={""} className="search-input" placeholder="search-startups" />
            <div className="flex gap-2">
                {
                    query && <SearchInputReset/>
                }
                <button type="submit" className="search-btn text-white">S</button>
            </div>

        </Form>
    )
}

//making this comp server side with the react-19 and next form element
