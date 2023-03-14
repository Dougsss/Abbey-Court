/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){

    return(
            <div className=" w-full h-full ">
                <div className=" w-full mr-5 ">
                    <div className=" fixed z-10 ">
                        <div className="flex gap-8 text-white text-lg justify-end ">
                            <div>
                                <a  as={Link} to={"/findUs"}>Find Us</a>
                            </div>
                            <div as={Link} to={"/aboutUs"}>About</div>
                            <div>Book Now</div>
                            <div>Lost & Found</div>
                        </div>
                    </div>
                    <div className=" bg-g-header z-0 top-10 h-64 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat " />
                </div>
            </div>
    );
}

