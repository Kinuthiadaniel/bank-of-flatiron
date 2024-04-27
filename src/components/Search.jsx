import React, { useState } from "react"

function Search({transacts}) {
  const [searchTerm, setSearchTerm] = useState(transacts)
 const filter = transacts.filter((transaction)=>{
return transaction.description.toLowerCase().includes(searchTerm.toLowerCase);
 })
 return (
   <div>
     <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter Description" id="search" name={filter}/>
   </div>
 )

}

export default Search;