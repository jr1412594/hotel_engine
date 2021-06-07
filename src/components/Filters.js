import React from 'react'

export default function Filters({ 
    searchTerm, 
    handleSubmit,
    handleSearch, 
    handleSort,
    handleChange,
    stargazers_count, 
    language
}) {

    return (
        <section className = 'filters'>
            <div className= 'search-by-repo'>
                <form onSubmit={ handleSubmit }>
                    <label>
                        Search by repo: 
                            <input
                                name='searchTerm'
                                value={ searchTerm }
                                id="search-repo"
                                placeholder="search by repo"
                                onChange={ handleSearch }
                            />
                    </label> 
                    <input type='submit' value='Submit' />
                </form>
            </div>

            <div className= 'search-by-stars'>
                <label>Sort by stars:</label>
                    <select
                        name='stargazers_count'
                        value={ stargazers_count }
                        id='sort-by-stars'
                        onChange={ handleSort }
                    >
                        <option value='most stars'>Most stars</option>
                        <option value='least stars'>Least stars</option>
                    </select>
            </div>

            <div className= 'search-by-language'>
                <label>
                    Search by language: 
                        <input
                            name='language'
                            value={ language }
                            id="search-language"
                            placeholder="search by language"
                            onChange={ handleChange }
                        />
                </label>
            </div>
        </section>
    )
}
