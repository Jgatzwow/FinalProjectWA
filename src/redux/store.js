import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [{post: "Hi, how are you?", id: 1, likesCount: 22}, {
                post: "It is my first message",
                id: 2,
                likesCount: 12
            }, {post: "Yo", id: 3, likesCount: 3}, {post: "props tryouts", id: 4, likesCount: 33}, {
                post: "props beast",
                id: 5,
                likesCount: 45
            }, {post: "props is a must", id: 6, likesCount: 4141},], newPostText: "",
        },
        dialogsPage: {

            dialogs: [{name: "Misha", id: 1}, {name: "Genya", id: 2}, {name: "Denis", id: 3}, {
                name: "Nick",
                id: 4
            }, {name: "Lena", id: 5}, {name: "Nastya", id: 6},],
            messages: [{message: "Hi", id: 1}, {message: "How are you?", id: 2}, {
                message: "Yay",
                id: 3
            }, {message: "Nay", id: 4}, {message: "He", id: 5}, {message: "Ho", id: 6},],
            newMessageText: "",
        },
        sidebar: {},
    }, _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    }, subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};


export default store;











