/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){

    return(
            <div className=" w-full h-full ">
                <div className=" w-full mr-5 ">
                    <div className=" fixed z-10 ">
                        <div className="flex gap-8 text-white text-lg ml-5 ">
                            <Link to={"/findUs"}>Find Us</Link>
                            <Link to={"/aboutUs"}>About</Link>
                            <Link to={"/"}>Book Now</Link>
                            <Link to={"/"}>Lost & Found</Link>
                        </div>
                    </div>
                    <div className=" bg-g-header z-0 top-10 h-64 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat " />
                </div>
            </div>
    );
}

