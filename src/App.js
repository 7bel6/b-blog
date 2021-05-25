
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  // we can write any valid javasript here before the return function
  // ps: we can't use daynimc values inisde react jsx like objects or boolean values

  return (
    // we sround our components with router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Here we diced where our content go to which component when we calls another page */}
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
