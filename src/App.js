import "./App.css";

import { useContext, useState } from "react";
import WSProvider from "./providers/wsProvider";
import { wsContext } from "./providers/wsContext";

const WsDemo = () => {
  const wsCtx = useContext(wsContext);
  const [message, setMessage] = useState();

  const sendMessageHandler = () => {
    // wsCtx.sendMessage("Test message");
    wsCtx.sendMessage(message);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    return message;
  };

  // console.log(wsCtx.messages, wsCtx.status);

  return (
    <>
      <input
        type="text"
        placeholder="Введите сообщение"
        onChange={handleChange} />
      <button onClick={sendMessageHandler}>Send</button>
      {wsCtx.messages.map((msg, index) => (
        <p key={`msg-${index}`}>{msg.message}</p>
      ))}
    </>
  );
};

const App = () => (
  <WSProvider>
    <WsDemo />
  </WSProvider>
);

export default App;

// При получении emergency - выводите по верх всех сообщение надпись в "окне" 
// из сообщения принятого с сервера, окно это протсо див по центру экрана. 
// Придумайте как подписатся на него (событие такого типа) так, 
// чтобы при приходе новго сообщения все повторялось. 
// Подсказака, пробросте колбэк через конткст.
// Выставте интервал этого сообщения по желанию на 29 строке файла сервера, 
// там пусто сейчас. По истечению 3х секунд, уберите сообщение с экрана до прихода нового.
