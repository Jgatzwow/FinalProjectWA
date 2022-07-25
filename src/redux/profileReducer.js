import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [{post: "Hi, how are you?", id: 1, likesCount: 22}, {
        post: "It is my first message",
        id: 2,
        likesCount: 12
    }, {post: "hello", id: 3, likesCount: 3},
        {post: "props tryouts", id: 4, likesCount: 33},
        {
            post: "Just a Message",
            id: 5,
            likesCount: 45
        }, {post: "Learning stuff", id: 6, likesCount: 4141},]
    , newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {

            let newPost = {
                post: state.newPostText, id: 5, likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }

}


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})





export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });
}

export const savePhoto = (file) => (dispatch) => {

    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }

        });
}




export const updateNewPostTextActionCreator = (text) => ({

    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer;