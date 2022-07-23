import { getAllInfo, getInfoCharacterById } from '../../functions/getInfo';
import { GET_CHARACTERS, 
        GET_CHARACTERS_BY_NAME, 
        FILTER_BY_VALUE, 
        GET_INFO_CHARACTER } from '../actionTypes/actonTypes.js';

export function getCharacters(){
    return async function(dispatch){
        var json = await getAllInfo();
        return dispatch({
            type: GET_CHARACTERS,
            payload : json
        })
    }
}

export function getCharactersByName(payload){
    return {
        type: GET_CHARACTERS_BY_NAME,
        payload
    }
}

export function filterCharactersByStatus(payload){
    return {
        type : FILTER_BY_VALUE,
        payload
    }
}

export function getCharacterById(id){
    return async function(dispatch){
        var json = await getInfoCharacterById(id);
        return dispatch({
            type: GET_INFO_CHARACTER,
            payload : json
        })
    }
}
