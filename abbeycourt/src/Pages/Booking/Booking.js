export function Booking() {
    return(
        <>
        <div className=" bg-g-header p-3 pt-10 top-10 h-96 flex-col flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat ">
            <div className="flex justify-center items-center text-4xl text-cyan-800 p-5 mb-8 ">
                <h1 className=" text-5xl text-cyan-800"> Nome do quarto</h1>
            </div>
            <div className=" w-4/5 justify-center items-center bg-slate-100 flex flex-row gap-2">
                <div className=" h-80 justify-center items-center flex">
                    <img src="https://h-img1.cloudbeds.com/uploads/8166/img_6575_featured~~5b4f24f40a611.jpg" className=" rounded-lg h-3/4 w-2/3 p-2 m-2" />
                </div>
                <div className=" bg-slate-300 h-3/4 w-full p-2 m-2 justify-start items-center flex text-base"> Texto de descricao do produto</div>
            </div>
        </div> 
        </>
    );
}