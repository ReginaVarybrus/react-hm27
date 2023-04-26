import "../App.css";

import { useContext } from "react";
import { wsEmrgContext } from "../providers/wsEmrgContext";

const WsEmrgMessage = () => {

    const wsEmrcCtx = useContext(wsEmrgContext);

    return (
        <>
        {wsEmrcCtx.message && 
        <div className="Emergency-message">
            <p>{wsEmrcCtx.message}</p>
            </div>}
        </>
    );
};

export default WsEmrgMessage;