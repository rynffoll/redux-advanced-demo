import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {tasks} from './reducer';
import createSagaMiddleware from 'redux-saga';
import {refreshSaga} from './sagas';

const logger = createLogger({
    diff: true
});

const saga = createSagaMiddleware();

const middlewares = applyMiddleware(
    // thunk,
    saga,
    logger
);

const reducers = combineReducers({
    tasks
});

export const store = createStore(tasks, middlewares);

saga.run(refreshSaga);
