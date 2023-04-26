import React, { memo, useEffect, useState } from 'react'
import { Search, SearchWrapper } from './SearchBarStyle'

function SearchBar({ handleSearch }) {

 const handleChange = (input) =>{
    if(input.length > 3)
        handleSearch(input);
 }

  console.log("--->")

  return (
      <Search
        type='search'
        placeholder='Type for search...'
        onChange={e => handleChange(e.target.value)}
      />
    )
}

export default memo(SearchBar);
