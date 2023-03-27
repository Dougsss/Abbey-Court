import { Forms } from "../../Components/Forms/Forms";
import { Link } from "react-router-dom";


export function Lostfound() {
    return(
        <>
        <div className=" bg-g-header p-3 pt-10 top-10 flex flex-col justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat ">
            <div className="w-1/2 bg-slate-100 p-3 m-5 opacity-50 text-lg text-center rounded-lg">
                PLEASE NOTE: WE WILL ONLY CONTACT YOU IF WE LOCATE THE ITEM. ABBY COURT DOES NOT ACCEPT RESPONSIBILITY FOR LOST/STOLEN PROPERTY.
                SEE <Link to={"/"} className=" hover:underline text-orange-700">TERMS AND CONDITIONS</Link> FOR FURTHER DETAILS.
            </div>
            <Forms />
        </div>
        </>
    );
}