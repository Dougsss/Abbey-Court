import { Banner } from "../../Components/Banner/Banner";
import { Carousel } from "../../Components/Carousel/Carousel";
import { Maps } from "../../Components/Maps/Maps";


export function Home(){
    return(
        <>
            <div className="">
                <Carousel />
                <Banner />
                <Maps />
            </div>
        </>
    );
}