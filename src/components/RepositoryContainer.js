
import RepositoryCard from './RepositoryCard';

export default function RepositoryContainer({ repositories }) {
    
    const displayRepositories = () => {
        return repositories.map(repository => {
            return <RepositoryCard key={ repository.id } repository={ repository }/>
        })
    }
    
    return (
        <div>
            <section className='repo-container'>
                { displayRepositories() }
            </section>
        </div>
    )
}
