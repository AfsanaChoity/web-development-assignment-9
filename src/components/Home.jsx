import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
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

            {/* <div className=" ">
                <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1711985603030" className=" h-72 w-full mt-4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://media.architecturaldigest.com/photos/5c2f937cd149182d22e579ab/16:9/w_2560%2Cc_limit/TOUT_Astro_Motel_Outside%2520Dusk.jpg" className=" h-72 w-full mt-4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/03/18181031/kerala.jpg" className=" h-72 w-full mt-4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://cache.marriott.com/Images/Travel_Hub/2880X960_RESORTS_Infinity-Pool-View.jpg?interpolation=progressive-bilinear" className=" h-72 w-full mt-4" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;