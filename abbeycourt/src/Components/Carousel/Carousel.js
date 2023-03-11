

export function Carousel(){
    return(
        <>    
        <div id="indicators-carousel" class="relative" data-carousel="static">
            {/* Carousel wrapper */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <!-- Item 1 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    {/* <img src="" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                    
                </div>
                {/* <!-- Item 2 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://img.freepik.com/fotos-gratis/interior-do-quarto-de-hotel-com-area-de-quarto-espaco-de-estar-e-cozinha_1262-12288.jpg?w=900&t=st=1678566382~exp=1678566982~hmac=77c776177a30ffc54b9e31c67e20adf1b9c5f12d8bc2c724f36b7f48d03e4db9" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 3 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://img.freepik.com/fotos-gratis/vista-da-sala-de-estar_1170-2725.jpg?w=900&t=st=1678566411~exp=1678567011~hmac=8bc71de8a28ed49b6b923cd3201d87132a4eea4dfeff4e01303c05299e627715" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 4 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://img.freepik.com/fotos-gratis/quarto-de-hotel-em-resort-de-luxo_53876-138105.jpg?w=900&t=st=1678566443~exp=1678567043~hmac=594ba95e05484957b69070a36e0b21ae1e963a245e28e0153dfc24f0604a974a" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* Item 5 */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://img.freepik.com/fotos-gratis/design-de-interiores-da-sala_23-2148899459.jpg?w=900&t=st=1678566492~exp=1678567092~hmac=9c80344a40203dae980ca0f7ecc13cfe7afb7ecf44b9d8f26a5071e08c7c39f7" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* Slider indicators */}
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* Slider controls */}
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        </>
    );
}