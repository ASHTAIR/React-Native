import logger from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {excursiones} from './excursiones';
import thunk from 'redux-thunk'
import {comentarios} from './comentarios';
import {cabeceras} from './cabeceras';
import {actividades} from './actividades';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            excursiones,
            comentarios,
            cabeceras,
            actividades
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
