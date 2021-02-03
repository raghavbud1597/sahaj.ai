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
        default:
            return state 
    }
}  

export default emailReducer;