import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
    WifiIcon,
    HomeIcon,
    TvIcon,
    FireIcon,
} from "@heroicons/react/24/solid";

export function Cards() {
    return(
        <>
            <Card className="w-full max-w-[26rem] shadow-lg bg-clip-border rounded-xl relative flex flex-col">
                <CardHeader className=" bg-clip-border mt-0 mx-0 overflow-hidden" floated={false} color="blue-gray">
                    <img
                        src="https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-compartilhado-em-albergue-ou-hostel.jpg"
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                    >
                    <HeartIcon className="h-6 w-6" />
                    </IconButton>
                </CardHeader>
                <CardBody className=" mx-4 p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            Wooden House, Florida
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                            5.0
                        </Typography>
                    </div>
                    <Typography color="gray">
                        Enter a freshly updated and thoughtfully furnished peaceful home
                        surrounded by ancient trees, stone walls, and open meadows.
                    </Typography>
                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                        <Tooltip content="$129 per night">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-orange-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <BanknotesIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="Free wifi">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-orange-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <WifiIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="2 bedrooms">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-orange-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <HomeIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content={`65" HDTV`}>
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-orange-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <TvIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="Fire alert">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-orange-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <FireIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="And +20 more">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-orange-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                +20
                            </span>
                        </Tooltip>
                    </div>
                </CardBody>
                <CardFooter className="pt-3">
                    <Button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-orange-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full" size="lg" fullWidth={true}>
                        Reserve
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}