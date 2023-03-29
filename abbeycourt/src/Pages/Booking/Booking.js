export function Booking() {
    return(
        <>
        <div className=" bg-g-header p-3 pt-10 top-10 h-96 flex-col flex justify-center items-center bg-fixed bg-center bg-cover bg-no-repeat ">
            <div className="flex justify-center items-center text-4xl text-cyan-800 p-5 mb-8">
                <h1 className=" text-5xl text-cyan-800"> Nome do quarto</h1>
            </div>
            <div className=" w-4/5 h-full justify-center items-center bg-slate-100 flex flex-row gap-2">
                <div className=" bg-green-900 h-3/4 w-full p-2 m-2 justify-center items-center flex"> imaggemm carousel</div>
                <div className=" bg-green-900 h-3/4 w-full p-2 m-2 justify-start items-center flex text-base"> Texto de descricao do produto</div>
            </div>
            
        </div>
        </>
    );
}