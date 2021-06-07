import { combineReducers } from 'redux'

const repositoryReducer = (state=[], action) => {
    switch(action.type){
        case 'SET_REPOSITORIES':
            return action.repositories;
        default:
            return state;
    }
}

export default combineReducers({
    repositoryReducer
})