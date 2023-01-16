
import { useState } from "react";


export function Header(){

    return(
            <div className=" w-full h-full ">
                <div className=" w-full mr-5 ">
                    <div className=" fixed z-10 ">
                        <div className="flex gap-8 text-white text-lg justify-end ">
                            <div>Find Us</div>
                            <div>About</div>
                            <div>Book Now</div>
                            <div>Lost & Found</div>
                        </div>
                    </div>
                    <div className=" bg-day z-0 top-10 h-screen flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat " />
                </div>
            </div>
    );
}

