import "../App.css";

import { useContext, useState } from "react";
import { wsContext } from "../providers/wsContext";

const WsChat = () => {
    const wsCtx = useContext(wsContext);
    const [message, setMessage] = useState();

    const sendMessageHandler = () => {
        wsCtx.sendMessage(message);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
        return message;
    };

    return (
        <>
            <div className="Chat-message">
                <input
                    type="text"
                    placeholder="Введите сообщение"
                    onChange={handleChange} />
                <button onClick={sendMessageHandler}>Send</button>
                {wsCtx.messages.map((msg, index) => (
                    <p className="Message" key={`msg-${index}`}>{msg.message}</p>
                ))}
            </div>
        </>
    );
};

export default WsChat;