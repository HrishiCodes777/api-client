import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchProductByCategory = () => {

    const [searchParams,setSearchParams] = useSearchParams();

    const categoryToSearch = searchParams.get('category');
    //Write the logic to execute the call to retrieve the products for the specified\
    

    return (
        <>
            <h1>Search by key words: {categoryToSearch}</h1>
        </>
    )
}

export default SearchProductByCategory;
