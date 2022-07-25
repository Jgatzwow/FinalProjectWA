import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    const {updateNewMessageText, sendMessage, dialogsPage} = props
    let state = dialogsPage;

    let messages = state.messages.map(el => <div className={style.message_wrap}><Message key={el.id} message={el.message}/> </div>)


    let onSendMessage = () => {
        sendMessage();
    };

    let onMessageChange = (e) => {

        let text = e.target.value;
        updateNewMessageText(text);

    };


    if (!props.isAuth) return <Navigate to={"/Login"}/>;

    return (
        <div className={style.dialogs}>


            <DialogItem state={state.dialogs}/>
            <div className={style.messages}>

                {
                    messages
                }


                <div>
                <textarea placeholder='Enter your message' onChange={onMessageChange}
                          value={state.newMessageText}/>
                    <div>
                        <button onClick={onSendMessage} className={style.button}>Send Message</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs