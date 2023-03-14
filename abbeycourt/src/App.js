import './App.css';
import { RouteList } from "./Routes/index";
import { Home } from "./Pages/Home/Home";


function App() {
  return (
      <div className=" w-full h-full ">
          {/* <Home /> */}
          <RouteList />
      </div>
  );
}

export default App;
