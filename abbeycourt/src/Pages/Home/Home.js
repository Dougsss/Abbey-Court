import { Carousel } from "../../Components/Carousel/Carousel";
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"

export function Home(){
    return(
        <>
            <div className="">
                <Header />
                <Carousel />
                <Footer />
            </div>
        </>
    );
}