import WSProvider from "./providers/wsProvider";
import WsEmrgProvider from "./providers/wsEmrgProvider";
import WsChat from "./components/WsChat";
import WsEmrgMessage from "./components/WsEmrgMessage";

const App = () => (
  <>
    <WSProvider>
      <WsEmrgProvider>
        <WsChat />
        <WsEmrgMessage />
      </WsEmrgProvider>
    </WSProvider>
  </>
);

export default App;