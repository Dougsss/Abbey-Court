import './App.css';
import {Home} from "./Pages/Home/Home"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer1 from "./Assets/layer1.jpg"

function App() {
  return (
      <div className=" w-full h-full  bg-orange-600">
                <Parallax>
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        factor={2}
                        style={{
                            backgroudImage: `url(${layer1})`,
                            backgoudSize: 'cover',
                            backgroudPosition: 'center'
                        }}>
                    </ParallaxLayer>
                </Parallax>
      </div>
  );
}

export default App;
