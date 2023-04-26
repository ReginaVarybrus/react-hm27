import "../App.css";

import { useContext } from "react";
import { wsEmrgContext } from "../providers/wsEmrgContext";

const WsEmrgMessage = () => {

    const wsEmrcCtx = useContext(wsEmrgContext);

    return (
        <div className="Emergency-message">
            <div>{wsEmrcCtx.message}</div>
        </div>
    );
};

export default WsEmrgMessage;