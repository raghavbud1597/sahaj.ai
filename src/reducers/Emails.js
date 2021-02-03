import emailList from './../Constants/emailList';
import sentList from './../Constants/sentEmail';

const emailReducer = (state = [], action) => {
    switch(action.type) {
        case 'EMAIL_LIST':
            return { 
                    ...state,
                    emailList: emailList
                }   
        case 'SENT_EMAIL_LIST':
            return { 
                ...state,
                sentList: sentList
            }  
        default:
            return state 
    }
}  

export default emailReducer;