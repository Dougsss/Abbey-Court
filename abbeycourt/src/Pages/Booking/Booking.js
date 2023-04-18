import { Cards } from "../../Components/Cads/Cards";

export function Booking() {
    return(
        <>
            {/* <div className=" bg-g-header p-3 pt-10 top-10 flex-col flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat " /> */}
                <div className=" w-10/13 p-3 pt-16 bg-g-header bg-fixed bg-center bg-cover bg-no-repeat flex flex-row gap-6 justify-center items-center">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
        </>
    );
}