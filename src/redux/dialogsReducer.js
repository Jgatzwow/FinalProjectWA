const SEND_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {

    dialogs: [{name: "Misha", id: 1}, {name: "Genya", id: 2}, {name: "Denis", id: 3}, {
        name: "Nick",
        id: 4
    }, {name: "Bald cat", id: 5}, {name: "Paradise", id: 6},],
    messages: [{message: "Hi", id: 1}, {message: "How are you?", id: 2}, {
        message: "Yay",
        id: 3
    }, {message: "Nay", id: 4}, {message: "He", id: 5}, {message: "Ho", id: 6},],
    newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            let newMessagePost = {
                message: state.newMessageText, id: 7,
            }
            return {
                ...state,
                messages: [...state.messages, newMessagePost],
                newMessageText: '',
            };

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
        default:
            return state
    }
}

export const sendNewMessageActionCreator = () => ({

    type: SEND_NEW_MESSAGE

})

export const updateNewMessageTextActionCreator = (text) => ({

    type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text

})


export default dialogsReducer;