import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';

import { Provider } from 'react-redux';
import store, { persistor } from './Store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <GlobalStyle>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
                
            </GlobalStyle>
        </PersistGate>
    </Provider>,
);
