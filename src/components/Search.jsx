import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = (props) => {
  return (
    <div className='second-section bg-dark'>
        <h1 className="MovieVerse-Heading text-white">MovieVerse</h1>
              <div className="search-engine">
                <input 
                className="search-bar-input"
                type="text" 
                placeholder="Search for Movies..."
                value={props.value}
                onChange={(event) => props.setSearch(event.target.value)} />
                <button className="search-bar-button" ><IoIosSearch />Search</button>
              </div>
    </div>
  )
}

export default Search