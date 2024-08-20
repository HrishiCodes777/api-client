import React, { useState } from 'react'

const SearchCategory = () => {
    
    const [category,setCategory] = useState('');

    return (
        <>
        <h3>Search for a Category</h3>
        <input className='form-control' value={category} onChange={(e) => setCategory(e.target.value)}/>
        
        </>
    )
}

export default SearchCategory;
