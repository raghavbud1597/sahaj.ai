import emailList from './../Constants/emailList';

const emailReducer = (state = [], action) => {
    switch(action.type) {
        case 'EMAIL_LIST':
            return { 
                    ...state,
                    emailList: emailList
                }   
        case 'SENT_EMAIL_LIST':
            return state
        default:
            return state 
    }
}  

export default emailReducer;