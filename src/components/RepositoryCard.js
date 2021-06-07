import React from 'react'

export default function RepositoryCard({ repository }) {

    return (
        <div className='repo-card'>
            <img className='avatar' src={ repository.owner.avatar_url } alt='repo-avatar' />
            <h2 className='repo-name'>Name: { repository.name }</h2>
            <p className='repo-description'>Description: { repository.description }</p>
            <p className='repo-stars'>Stars: { repository.stargazers_count}</p>
            <p className='repo-language'>Language: { repository.language }</p>
            <p className='repo-owner-name'>Owner: { repository.owner.login }</p>
        </div>
    )
}
