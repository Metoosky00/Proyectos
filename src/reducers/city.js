import {SET_CITY} from '../actions/index'; //Llamamos a la accion que se puede ejecutar en el reducer city


/*
 al reducer city se le pasa un state inicializado empty y una accion, cuando es llamado 
 compara el type de la accion para ver que tipo de accion es se compara con SET_CITY para saber si es el mismo valor
 de action.type y si lo es mediante ES6 se le dice que compare si el estado anterior es igual al valor de la accion
 que se le esta pasando no hace cambios, si si es diferete se hacen los cambios y el estado pasa a ser la nueva 
 ciudad y se retorna esa nueva ciudad de otra forma se retorna el estado inicial empty
 */
export const city=(state={},action)=>{
    switch (action.type) {
        case SET_CITY:
            return action.value
        default:
            return state
    }
}