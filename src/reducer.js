export const INITIAL_STATE = {
    weather: {},
    temperature: {},
    name: ""
}

export const ACTION = {
    SET_WEATHER : "setWeather",
    SET_TEMPERATURE: "setTemp",
    NAME : 'name'
}

export const reducer = (state,action) =>{

    switch(action.type){
        
        case ACTION.SET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
            
        
        case ACTION.SET_TEMPERATURE:
            return {
                ...state,
                temperature: action.payload
            }
        
        case ACTION.NAME:
            return{
                ...state,
                name: action.payload
            }

    }

}