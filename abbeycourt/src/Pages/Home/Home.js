import { Banner } from "../../Components/Banner/Banner";
import { Carousel } from "../../Components/Carousel/Carousel";


export function Home(){
    return(
        <>
            <div className="">
                <Carousel />
                <Banner />
            </div>
        </>
    );
}