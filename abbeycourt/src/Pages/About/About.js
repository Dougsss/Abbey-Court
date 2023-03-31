import Logo1 from "../../Assets/hostel1.png";

export function About() {
    return(
        <>
        <div className=" bg-g-header p-3 top-10 flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat ">
            <div className=" w-4/5 h-full flex justify-center items-center bg-slate-100 gap-5 mt-10">
                <div className=" w-2/5">
                    <img src={Logo1} alt="hostelLogo" />
                </div>
                <div className=" w-3/5 p-5">
                    <h1 className=" text-xl justify-center text-center py-8">Dublin’s Best Hostel</h1>
                    <p className=" text-base justify-center text-center">
                    An award-winning, family owned and operated hostel located in the heart of Dublin City Centre.
                    Abbey Court Hostel is a short walk to Temple Bar and all the major Dublin City sights with shopping, bars, 
                    and restaurants around the corner. Abbey Court Hostel is only minutes away from all major bus and train stations. 
                    We offer great value accommodation for everyone, including discounts for groups travelling to Dublin. 
                    We have a range of private rooms, family rooms and shared dorm rooms for 4, 6, 8, 10 & 12 people.
                    We love Dublin, stay with us and get the most out of your trip!
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}