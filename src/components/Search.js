import React from 'react'

const Search = props => (
    <div>
        <form onSubmit={props.handleSubmit}>
            <label>
                Search:
                <input type="text" name="name" onChange={props.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>

)

export default Search;