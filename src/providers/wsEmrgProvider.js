import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { wsEmrgContext } from "./wsEmrgContext";
import "../App.css";

const WsEmrgProvider = ({ children }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const newSocket = io("http://127.0.0.1:4000", {
      transports: ["websocket"],
    });

    newSocket.on('emergency', (msg) => {
      setMessage(msg);
    });
  }, []);

  useEffect(() => {
    let timeout;
    if (message !== '') {
      timeout = setTimeout(() => {
        setMessage('');
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  const getContextValue = () => ({
    message
  });

  return (
    <wsEmrgContext.Provider value={getContextValue()}>
      {children}
    </wsEmrgContext.Provider>
  );
};

export default WsEmrgProvider;
