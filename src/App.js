import './App.css';
import Navbar from './Navbar';
function App() {
  // we can write any valid javasript here before the return function
  const title = "Some Text";
  // ps: we can't use daynimc values inisde react jsx like objects or boolean values

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
