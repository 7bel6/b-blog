
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
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
            {/* Untill here it's will still show the home page because the strange logic of react as in /create it's inherit / which is for home page and react switch stop at the first match, adding exact keyword will tell react match the exact directory */}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            {/* We want the route to take the id of the blog showen , and this is the route parametrs */}
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
