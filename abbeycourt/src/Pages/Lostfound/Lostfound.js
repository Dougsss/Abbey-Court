import { Forms } from "../../Components/Forms/Forms";


export function Lostfound() {
    return(
        <>
        <div className=" bg-g-header p-3 top-10 h-96 flex flex-col justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat ">
            <Forms />
            <div className="w-full h-full opacity-30 flex justify-center items-center bg-slate-100">Lost and Found</div>
        </div>
        </>
    );
}