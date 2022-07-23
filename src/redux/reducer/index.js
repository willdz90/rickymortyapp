import { GET_CHARACTERS, 
        GET_CHARACTERS_BY_NAME, 
        FILTER_BY_VALUE, 
        GET_INFO_CHARACTER, } from '../actionTypes/actonTypes.js';
            
const initialState = {
    characters : [],
    allCharacters : [],
    infoCharacter : {},
}

function rootReducer(state=initialState, action){
    
    switch (action.type) {
        case GET_CHARACTERS:
            return{
                ...state,
                characters : action.payload,
                allCharacters : action.payload,
            }
            
        case GET_CHARACTERS_BY_NAME:
            let nameToSearch = action.payload;
            const generalStateForName = state.allCharacters;
            const statusFilteredByName = generalStateForName.filter(c => c.name.toLowerCase().includes(nameToSearch.toLowerCase()))
            return{
                ...state,
                characters : statusFilteredByName ? statusFilteredByName : []
            }

        case FILTER_BY_VALUE:
            const generalStateByStatus = state.allCharacters;
            const statusFilteredByStatus = action.payload === 'Todos' ? generalStateByStatus : generalStateByStatus.filter(c => c.status === action.payload) 
            return {
                ...state,
                characters : statusFilteredByStatus
            }
        
        case GET_INFO_CHARACTER:
            return{
                ...state,
                infoCharacter : action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;