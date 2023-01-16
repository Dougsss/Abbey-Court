
import { useState } from "react";


export function Header(){

    return(
            <div className=" w-full h-full ">
                <div className=" w-full mr-5 ">
                <div className=" bg-nigth z-0 top-10 h-screen flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat "></div>
                    <div className=" fixed z-10 ">
                        <ol className="flex  gap-8 text-lg text-white justify-end ">
                            <ul>Find Us</ul>
                            <ul>About</ul>
                            <ul>Book Now</ul>
                            <ul>Lost & Found</ul>
                        </ol>
                    </div>
                </div>
            </div>
    );
}

