
export function Forms() {
    return(
        <>
            <div className="flex justify-center items-center h-96 w-1/2 bg-slate-100 p-3 m-5 opacity-50 flex flex-col">
                <div className=" text-lg text-center">
                    PLEASE NOTE: WE WILL ONLY CONTACT YOU IF WE LOCATE THE ITEM. ABBY COURT DOES NOT ACCEPT RESPONSIBILITY FOR LOST/STOLEN PROPERTY.
                    SEE <span className=" hover:underline text-orange-700">TERMS AND CONDITIONS</span> FOR FURTHER DETAILS.
                </div>
                <div className="flex justify-center items-center mt-5">
                    <div className=" flex flex-row w-80 gap-2">
                        <div className=" border-black border-2 bg-white w-1/2"> Name</div>
                        <div className=" border-black border-2 bg-white w-1/2">Surname</div>
                    </div>
                </div>
            </div>
        </>
    );
}