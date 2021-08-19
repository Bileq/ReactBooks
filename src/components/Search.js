import React from 'react'

const Search = props => (
    <div className="Search">
        <form onSubmit={props.handleSubmit}>
            <label>
                <input type="text" name="name" placeholder="Search..." id="SearchInput" onChange={props.handleChange}/>
            </label>
            <input type="submit" value="Search" id="SearchBtn"/> 
        </form>
    </div>

)

export default Search;