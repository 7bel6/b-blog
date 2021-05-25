
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  // we can write any valid javasript here before the return function
  // ps: we can't use daynimc values inisde react jsx like objects or boolean values

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
