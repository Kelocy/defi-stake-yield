import { DAppProvider, Config, Goerli, ChainId } from '@usedapp/core';
import { Header } from './components/Header';
import { Container } from '@material-ui/core';
import { Main } from './components/Main';
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  }
}

function App() {
  return (
    // <DAppProvider config={{
    //   // networks: [Sepolia],
    //   notifications: {
    //     expirationPeriod: 1000,
    //     checkInterval: 1000
    //   }
    // }}>
    <DAppProvider config={config}>
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </DAppProvider>
  );
}

export default App;
