import React from "react";
import {  DataSearch } from "@appbaseio/reactivesearch";


const NavBar = () => {
  return (
 <div className="navbar">
   <div className="logo-container">
     <h1>Movie Catalog</h1>
   </div>

   <div className="search-container">
     <DataSearch
       componentId="mainSearch"
       dataField={["original_title"]}
       categoryField="title"
       className="search-bar"
       queryFormat="and"
       placeholder="Search for movies..."
       iconPosition="left"
       autosuggest={false}
       filterLabel="search"
     />
   </div>
 </div>
  )
}

export default NavBar;