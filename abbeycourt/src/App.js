import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from "./Pages/Home/Home";


function App() {
  return (
      <div className=" w-full h-full ">
        <Router>
          <Navbar />
          <Home />
          {/* <Switch>
            <Route path='/' />
          </Switch> */}
        </Router>
      </div>
  );
}

export default App;
