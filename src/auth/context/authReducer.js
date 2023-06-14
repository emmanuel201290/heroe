//Caracteristicas
//1-No debe tener efectos secundario, no llamar otras funciones
//2-No debe realizar tareas asincronas
//3-debe retornar siempre un nueveo estado
//4-No debe de llamar localstorage o session storage

//Tener controlado todas las acciones en un solo lugar.

import {types} from '../types/types'


export const authReducer  = (state , action) =>{
      
    switch(action.type) {
        case types.login:
              return {
                ...state,
                 logged: true,
                 user: action.payload
              };
        case types.logout:
             return {
                logged: false
             }

        default:
            return state;
    }
}