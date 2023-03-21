import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCb9B18OReemiTHfoBPLEZnT5WWXrU-rdk"
    });

    const position = {
        lat: 53.34745143671791,
        lng: -6.260352255687905
    };

    return(
        <>
        <div className="z-0 top-10 h-96 flex flex-row justify-center items-center bg-g-header bg-fixed bg-center bg-cover bg-no-repeat ">
            <div className=" p-3 h-full w-1/2">
                <div className="w-full h-full">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%'}}
                            center={position}
                            zoom={15}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    ):(
                        <></>
                    )}
                </div>
            </div>
            <div className="p-3 h-full w-1/2">
                <div className="w-full h-full opacity-30 bg-slate-100 absolute">
                    
                </div>
                <div className="p-5 text-black relative">
                    <p className="text-3xl">Location</p>
                        <ul className=" text-lg mt-6">
                            <li>29 Bachelors Walk, North City, Dublin, D01 AX90</li>
                            <li>Phone: (01) 878 0700</li>
                            <li>email: info@abbey-court.com</li>
                        </ul>
                </div>
            </div>
        </div>
        </>
    );
}