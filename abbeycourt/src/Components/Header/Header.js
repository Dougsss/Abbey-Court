/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){

    return(
            <header className=" w-full ">
                <div className=" w-full mr-5 ">
                    <div className=" fixed w-full z-50">
                        <div className=" flex flex-row gap-5 text-white text-lg mx-4 mb-2 justify-items-center items-center">
                            <Link to={"/"}>
                                <img src="https://images.squarespace-cdn.com/content/v1/62b475e8a94b0b63f32309f5/c7dd5b49-680c-442b-9dc0-04854d583372/logo_whit3.png?format=1500w" alt="logo" 
                                    className=" h-16 w-20"
                                />
                            </Link>
                            <div className=" flex-grow "/>
                            <Link to={"/contact"} className="hover:text-orange-900">Contact</Link>
                            <Link to={"/aboutUs"} className="hover:text-orange-900">About</Link>
                            <Link to={"/booking"} className="hover:text-orange-900">Book Now</Link>
                            <Link to={"/lost&found"} className="hover:text-orange-900">Lost & Found</Link>
                        </div>
                    </div>
                    <div className=" bg-g-header z-0 top-10 h-14 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat " />
                </div>
            </header>
    );
}

