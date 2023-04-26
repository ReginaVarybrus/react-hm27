import WSProvider from "./providers/wsProvider";
import WsEmrgProvider from "./providers/wsEmrgProvider";
import WsChat from "./components/WsChat";
import WsEmrgMessage from "./components/WsEmrgMessage";

const App = () => (
  <>
    <WsEmrgProvider>
      <WsEmrgMessage />
    </WsEmrgProvider>
    <WSProvider>
      <WsChat />
    </WSProvider>
  </>
);

export default App;