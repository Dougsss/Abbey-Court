import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Booking } from "../Pages/Booking/Booking";
import { Lostfound } from "../Pages/Lostfound/Lostfound";
import { Contact } from "../Pages/Contact/Contact";
import { Terms } from "../Pages/Terms/Terms";


export function RouteList() {
    return(
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={< Home />}/> 
                    <Route path="/aboutUs" element={< About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/booking" element={< Booking />}/>
                    <Route path="/lost&found" element={< Lostfound />}/>
                    <Route path="/termsCondidions" element={<Terms />}/>
                </Routes>
            <Footer />
            </BrowserRouter>
        </>
    )
}
