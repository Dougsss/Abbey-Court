import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
//import Parallax, {Layer} from "react-parallar-scroll";
import layer1 from "../../Assets/layer1.jpg";

export function Header(){
    //let element: IParallax | null

    return(
            <div className=" w-full h-full ">
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

{/* <Parallax pages={1.45} ref={ref => element = ref}>
                    
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        factor={2}
                        style={{
                            backgroudImage: `url(${layer7})`,
                            backgoudSize: 'cover',
                            backgroudPosition: 'center'
                        }}>
                    </ParallaxLayer>
                    
                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        factor={2}
                        style={{
                            backgroudImage: `url(${layer6})`,
                            backgoudSize: 'cover',
                            backgroudPosition: 'center'
                        }}>
                    </ParallaxLayer>
                </Parallax> */}