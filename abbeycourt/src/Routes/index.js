import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import { Findus } from "../Pages/Findus/Findus";

export function RouteList() {
    return(
        <>
            <BrowserRouter>
                < Home />
                    <Routes>
                        <Route path="/" element={< Home />}/>
                        <Route path="/aboutUs" element={< About />}/>
                        <Route path="/findUs" element={< Findus />}/>
                    </Routes>
            </BrowserRouter>
        </>
    )
}
