
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filters from './Filters';
import RepositoryContainer from './RepositoryContainer';

const apiUrl = 'https://api.github.com/search/repositories?q=a';

export default function Main() {
    const dispatch = useDispatch();
    const repositories = useSelector(state => state.repositoryReducer);

    const [searchTerm, setSearchTerm] = useState('');
    const [stargazers_count, setStargazers_count] = useState('most stars');
    const [computerLanguage, setComputerLanguage] = useState('');

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(({ items }) => dispatch({ type: 'SET_REPOSITORIES', repositories: items}))
    }, [])

    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const clearState = () => {
        setSearchTerm(' ')
    }

    const handleChange = (event) => {
        setComputerLanguage(event.target.value);
    }

    const handleSort = (event) => {
        setStargazers_count(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        clearState()
        const updatedApiUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
        setSearchTerm('')
        fetch(updatedApiUrl)
        .then(response => response.json())
        .then(({ items }) => dispatch({ type: 'SET_REPOSITORIES', repositories: items}))
        event.target.reset()
    }

    
    const byMostStars = (a, b) => {
        if(a.stargazers_count > b.stargazers_count) {
            return -1;
        } else if (a.stargazers_count < b.stargazers_count) {
            return 1;
        } else {
            return 0;
        }
    }
    
    const byLeastStars = (a, b) => {
        if(a.stargazers_count > b.stargazers_count) {
            return 1;
        } else if (a.stargazers_count < b.stargazers_count) {
            return -1;
        } else {
            return 0;
        }
    }

    const sortByStars = () => {
        repositories.sort((a, b) => {
            if(stargazers_count === 'most stars') {
                return byMostStars(a, b);
            } else {
                return byLeastStars(a, b);
            }
        })
    }

    const filterByLanguage = () => {
        
        const filterOutNull = repositories.filter(repository => {
            return repository.language !== null;
        })
        if(computerLanguage === ''){
            return repositories;
        } else {
            const filteredRepos = filterOutNull.filter(repository =>{
                return repository.language.toLowerCase() === (computerLanguage.toLowerCase());
            })
            return filteredRepos;
        }
    }

    return (
        <div>
            <Filters
                handleSearch={ handleSearch }
                handleSubmit= { handleSubmit }
                handleSort={ handleSort }
                handleChange={ handleChange }
                sortByStars={ sortByStars() }
                >
            </Filters>
            <RepositoryContainer repositories={ filterByLanguage() } />
        </div>
    )
}
