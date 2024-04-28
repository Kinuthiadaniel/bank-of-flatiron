// import React, { useState } from "react"

function Search({ search, handleChange }) {

  return (
    <div>
      <input type="text"
        className="form-control" 
        onChange={handleChange}
        placeholder="Search by Description"
        name="search"
        value= {search} />
      
    </div>
  )

}

export default Search;