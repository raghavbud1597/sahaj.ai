export const getEmailList = () => {
    return {
        type: 'EMAIL_LIST'
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logout = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const getCategories = () => {
    return {
        type: 'CATEGORY_LIST'
    }
}

export const getLabels = () => {
    return {
        type: 'GET_LABELS'
    }
}

export const getSentEmailList = () => {
    return {
        type: 'SENT_EMAIL_LIST'
    }
}

export const markChecked = (selectedId) => {
    return {
        type: 'MARK_CHECKED',
        payload: selectedId
    }
}

export const markRead = (selectedId) => {
    return {
        type: 'MARK_READ',
        payload: selectedId
    }
}

export const deleteEmail = () => {
    return {
        type: 'DELETE_EMAIL'
    }
}

export const deleteSentEmail = () => {
    return {
        type: 'DELETE_SENT_EMAIL'
    }
}

export const sendEmail = (payload) => {
    return {
        type: 'SEND_EMAIL',
        payload: payload
    }
}