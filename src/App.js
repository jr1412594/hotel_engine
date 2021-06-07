
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'

import './App.css';

import Main from './components/Main';

export default function App() {

    const store = createStore(reducers)

    return (
        <Provider store={ store }>
            <div className="App">
                <Main />
            </div>
        </Provider>
    );
}


