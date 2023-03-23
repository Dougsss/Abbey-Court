import { Link } from "react-router-dom";

export function Footer(){
    return(
        <div className=" bg-g-header bg-fixed bg-center bg-cover bg-no-repeat sticky">
                <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                            <Link to={"/"}>
                                <img src="https://images.squarespace-cdn.com/content/v1/62b475e8a94b0b63f32309f5/c7dd5b49-680c-442b-9dc0-04854d583372/logo_whit3.png?format=1500w" alt="logo" 
                                    className=" h-20 mr-3"
                                />
                            </Link>
                        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>            
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>            
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>            
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="https://www.linkedin.com/in/doug-araujo/" className="hover:underline">Doug Araujo™</a>. All Rights Reserved.</span>
                </div>
        </div>
    );
}