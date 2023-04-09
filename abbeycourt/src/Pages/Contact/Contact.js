import { Maps } from "../../Components/Maps/Maps";

export function Contact() {
    return(
        <>
        <div className=" bg-g-header p-3 top-10 h-10 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat"/>
        	<div className=" p-5 flex items-center justify-center">
                <h1 className=" text-5xl text-orange-500 font-bold justify-center text-center">NUMBER 1 FOR GROUPS IN DUBLIN</h1>
            </div>
            <Maps />
        </>
    );
}