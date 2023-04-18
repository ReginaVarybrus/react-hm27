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
    newSocket.on("message", (msg) =>
      setMessages((prevMessages) => [...prevMessages, msg])
    );
    setSocket(newSocket);

    newSocket.on('ping', (msg) => {
      console.log('Приел пинг');
    });

    // newSocket.on("connect", () => setStatus(true));  // handlers if needed
    // newSocket.on("disconnect", () => setStatus(false));

    return () => newSocket.close(); // close connection when unmount
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
    sendMessage,
  });

  return (
    <wsContext.Provider value={getContextValue()}>
      {children}
    </wsContext.Provider>
  );
};

export default WSProvider;
