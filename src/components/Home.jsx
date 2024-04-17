import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1711985603030" className=" h-72 w-full mt-4" /></SwiperSlide>
                <SwiperSlide><img src="https://media.architecturaldigest.com/photos/5c2f937cd149182d22e579ab/16:9/w_2560%2Cc_limit/TOUT_Astro_Motel_Outside%2520Dusk.jpg" className=" h-72 w-full mt-4" /></SwiperSlide>
                <SwiperSlide><img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/03/18181031/kerala.jpg" className=" h-72 w-full mt-4" /></SwiperSlide>
                <SwiperSlide><img src="https://cache.marriott.com/Images/Travel_Hub/2880X960_RESORTS_Infinity-Pool-View.jpg?interpolation=progressive-bilinear" className=" h-72 w-full mt-4" /></SwiperSlide>
                ...
            </Swiper>

            {/* our services */}
            <h2 className="text-center text-3xl font-bold m-4">Our Services</h2>
            <p className="text-center text-[16px] text-gray-500 mx-10 lg:mx-40 md:mx-20">Discover your ideal getaway. Browse hotels, resorts, and vacation rentals, from budget-friendly to luxurious.</p>

            {/* card container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 space-y-6 container mx-auto">
                {
                    cards.map(card => <Card key={card._id} cards={card}></Card>)
                }
            </div>
            

            
        </div>
    );
};

export default Home;