import { Maps } from "../../Components/Maps/Maps";

export function Contact() {
    return(
        <>
        <div className=" bg-g-header p-3 top-10 h-10 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat"></div>
        <Maps />
        <div className=" bg-g-header p-3 top-10 h-96 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat">
            <div className="w-full h-full opacity-30 flex justify-center items-center bg-slate-100">Contact Us</div>
        </div>
        </>
    );
}