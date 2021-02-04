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
        case 'MARK_CHECKED':
            const updatedList = state?.emailList?.map((v) => {
                if(v.id == action.payload){
                    v.isSelected = !v.isSelected;
                }
                return v;
            });
            return {
                ...state,
                emailList: updatedList
            }  
        case 'MARK_READ':
            const readList = state?.emailList?.map((v) => {
                if(v.id == action.payload){
                    v.isRead = !v.isRead;
                }
                return v;
            });
            return {
                ...state,
                emailList: readList
            }  
        case 'DELETE_EMAIL':
            const reducedList = state?.emailList?.filter((v) => v.isSelected !== true);
            return {
                ...state,
                emailList: reducedList
            }  
        case 'DELETE_SENT_EMAIL':
            const reducedSentList = state?.sentList?.filter((v) => v.isSelected !== true);
            return {
                ...state,
                sentList: reducedSentList
            }  
        case 'SEND_EMAIL':
            return {
                ...state,
                sentList: [action.payload, ...state.sentList]
            }  
        default:
            return state 
    }
}  

export default emailReducer;