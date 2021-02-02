import categoryList from './../Constants/categoryList';

const categoryReducer = (state = [], action) => {
    switch(action.type) {
        case 'CATEGORY_LIST':
            return { 
                    ...state,
                    categoryList: categoryList
             }   
        default:
            return state 
    }
}  

export default categoryReducer;