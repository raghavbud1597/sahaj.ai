import labelList from './../Constants/labels';

const labelReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_LABELS':
            return { 
                    ...state,
                    labelList: labelList
            }   
        default:
            return state 
    }
}  

export default labelReducer;