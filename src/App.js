import "./App.css";
import { NavigationBar, NavigationBody } from "./app/index";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, client } from "./wagmi.ts";
import "@rainbow-me/rainbowkit/styles.css";
import "./custom.css";
import { CustomAvatar, CustomTheme } from "./avatar.tsx";
import { useState } from "react";

function App() {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);

  return (
    <div className="App">
      <WagmiConfig client={client}>
        <RainbowKitProvider
          modalSize="compact"
          chains={chains}
          theme={CustomTheme}
          avatar={CustomAvatar}
        >
          <NavigationBar
            isNavigationCollapsed={isNavigationCollapsed}
            setIsNavigationCollapsed={setIsNavigationCollapsed}
          />
          {!isNavigationCollapsed && <NavigationBody />}
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
