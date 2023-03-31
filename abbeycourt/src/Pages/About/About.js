import Logo1 from "../../Assets/hostel1.png";

export function About() {
    return(
        <>
        <div className=" bg-g-header p-3 top-10 h-96 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat ">
            <div className="w-full h-full opacity-30 flex justify-center items-center bg-slate-100">
                <div className="m-3">
                    <img src={Logo1} alt="hostelLogo" />
                </div>
            </div>
        </div>
        </>
    );
}