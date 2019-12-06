import React from 'react';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import GlobalStyle from './styles/gobal';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GlobalStyle />
        </Router>
    );
}

export default App;
