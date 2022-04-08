let store = {
    _state: {
        profilePage : {
            posts : [
                {text: "Hello, how are you?", likesCount: '12'},
                {text: "It's my first post", likesCount: '10'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage : {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 1, message: 'How are you?'},
                {id: 1, message: 'Hey, Guys'},
                {id: 1, message: 'Bye'},
                {id: 1, message: 'Privet'},
            ],
            dialogs: [
                {id: 1 , name: 'Nastya'},
                {id: 2 , name: 'Sasha'},
                {id: 3 , name: 'Dasha'},
                {id: 4 , name: 'Diana'},
                {id: 5 , name: 'Serezha'},
            ],
            newMessageBody: ""
        }
    },
    _rerenderEntireTree() {
        console.log('Hi')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body},);
            this._rerenderEntireTree(this._state)
        }

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


export default store;