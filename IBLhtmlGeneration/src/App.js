import './App.css';
import { SharedProvider } from './componets/contextapi/SharedContext';
import { IBLOffers } from './componets/InputSection/IBLOffers';

function App() {
  return (
    <SharedProvider>
      <IBLOffers/>
    </SharedProvider>
  );
}

export default App;
