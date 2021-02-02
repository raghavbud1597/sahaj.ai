const emailReducer = (state = 0, action) => {
    switch(action.type) {
        case 'EMAIL_LIST':
            return { ...state }   
        case 'SENT_EMAIL_LIST':
            return state + 2
        default:
            return state 
    }
}  

export default emailReducer;