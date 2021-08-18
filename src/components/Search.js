import React from 'react'

const Search = props => (
    <div className="search">
        <form onSubmit={props.handleSubmit}>
            <label>
                <input type="text" name="name" placeholder="Search..." id="searchInput" onChange={props.handleChange}/>
            </label>
            <input type="submit" value="Search" id="searchBtn"/> 
        </form>
    </div>

)

export default Search;