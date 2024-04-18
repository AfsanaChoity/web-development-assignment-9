import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const singleCard = useLoaderData();

    return (
        <div className="mt-6">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={singleCard.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none lg:text-5xl">{singleCard.estate_title}
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{singleCard.description}
                        </p>
                        <div className="flex justify-between  mb-4">
                        <p className="bg-gray-200 px-3 rounded-full text-[16px] font-medium opacity-65">{singleCard.segment_name}</p>
                        <p  className="bg-gray-200 px-3 rounded-full text-[16px] font-medium opacity-65">{singleCard.Area}</p>
                        <p  className="bg-gray-200 px-3 rounded-full text-[16px] font-medium opacity-65">{singleCard.location}</p>
                        </div>

                        <div className="flex gap-4">
                        <p className="font-bold">Facilities: </p>
                        {singleCard.facilities.map(facility => <div className="flex">{facility},</div>)}
                        </div>
                        {/* <p>{singleCard.facilities}</p> */}
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsPage;