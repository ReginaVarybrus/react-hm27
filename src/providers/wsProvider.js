import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { wsContext } from "./wsContext";

const WSProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://127.0.0.1:4000", {
      transports: ["websocket"],
    });
    newSocket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    setSocket(newSocket);

    newSocket.on('ping', () => {
      console.log('Приел пинг');
    });

    return () => newSocket.close();
  }, []);

  const getSocketStatus = () => !!socket?.connected;

  const sendMessage = (msg) => {
    if (!getSocketStatus()) return false;
    socket.emit("message", { message: msg });
    return true;
  };

  const getContextValue = () => ({
    status: getSocketStatus(),
    messages,
    sendMessage
  });

  return (
    <wsContext.Provider value={getContextValue()}>
      {children}
    </wsContext.Provider>
  );
};

export default WSProvider;
