import { Maps } from "../../Components/Maps/Maps";

export function Contact() {
    return(
        <>
        <div className=" bg-g-header p-3 top-10 h-10 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat"/>
        	<div className=" p-5 flex items-center justify-center flex-col">
                <h1 className=" text-5xl text-orange-500 font-bold justify-center text-center p-10">NUMBER 1 FOR GROUPS IN DUBLIN</h1>
                <div className="flex justify-center items-center w-3/4 p-3 m-5 flex-col">
                <form className="justify-center w-2/4 itens-center">
                    <div className="mb-6 flex gap-2">
                        <div className=" w-1/2 flex flex-col">
                            <label for="firstName" className="block mb-2 text-sm font-medium text-orange-600">First Name</label>
                            <input type="name" id="fisrtName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className=" w-1/2 flex flex-col">
                            <label for="lastName" className="block mb-2 text-sm font-medium text-orange-600">Last Name</label>
                            <input type="surName" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-orange-600">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-6">
                        <label for="phoneNumber" className="block mb-2 text-sm font-medium text-orange-600">Your Phone number</label>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label for="nacionality" className="block mb-2 text-sm font-medium text-orange-600">Nacionality</label>
                        <input type="string" id="itenLost" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ex.: 'Phone' or 'Item of clothing' etc..." required />
                    </div>
                    <div className="mb-6">
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-600">Number of peoples in your group</label>
                        <textarea id="number" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex.: your room, a shared area at Abbey Court ect..."></textarea>
                    </div>
                    <div className="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-orange-600">Please describe the lost item</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Provide as much details as possible, to help us to identify it..."></textarea>
                    </div>
                    <div class="mb-6">
                        <label for="date" className="block mb-2 text-sm font-medium text-orange-600">Check in Date</label>
                        <input type="date" id="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div class="mb-6">
                        <label for="checkOut" className="block mb-2 text-sm font-medium text-orange-600">Check out Date</label>
                        <input type="date" id="checkOut" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="flex justify-center items-center mb-6">
                        <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="terms" className="ml-2 text-sm font-medium text-white">A least one of the groups in under 18 yeas. We can contact you with offers </label>
                    </div>
                    <div className="mb-6 flex justify-center items-center">
                        <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send</button>
                    </div>
                </form>
            </div>
            </div>
            <Maps />
        </>
    );
}