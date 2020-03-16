import {createStore, applyMiddleware, compose} from 'redux'; // para crear el store de redux
import thunk from 'redux-thunk';
import reducers from '../reducers'; //Reducer

const initialState={
    city:'Mexico'
}
/*city es el reducer encargado de cambiar el estado de la aplicacion mediante las acciones establecidas 
como su nombre lo dice initialState es el estado inicial que tomara la aplicacion
Posteriormente se hace la conexion mediante window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
a Redux DevTools
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));