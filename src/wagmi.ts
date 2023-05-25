import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';

const alchemyApiKey = process.env.REACT_APP_ALCHEMY_API_KEY!;

const { chains, provider, webSocketProvider } = configureChains(
  [ goerli ],
  [
    alchemyProvider({ apiKey: alchemyApiKey }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'ispo-dega-frontend',
  chains: [goerli],
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains, connectors };