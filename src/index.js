import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './redux/photoState';
import photoSaga from './redux/photoSaga';

import App from './App';

const saga = createSagaMiddleware();
const store = configureStore({
    reducer: {
        photos: photoReducer,
    },
    middleware: [saga],
});


saga.run(photoSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);