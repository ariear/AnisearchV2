import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";

const MainSlide = () => {
    const [data,setData] = useState([])

    useEffect(() => {
      let wrap = []
      axios.get('https://api.jikan.moe/v4/watch/promos/popular')
            .then(response => {
              for (let i = 0; i < 8; i++) {
                const element = response.data.data[i]
                wrap.push(element) 
              }
                setData(wrap)
            })
    }, [])
    

    return (
        <div className="lg:w-[90vw] xl:container mx-auto relative pt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {
            data.map((e,index) =>                
                <SwiperSlide key={index}>
                    <div className="w-full rounded-xl py-32 bg-center relative" style={{ backgroundImage: `url("${e.entry.images.jpg.large_image_url}")` }}>
                        <div className="bg-[#0000007c] absolute left-0 top-0 w-full h-full text-white rounded-xl flex flex-col justify-end">
                            <p className="font-medium text-xl ml-5 mb-2">The best anime in history</p>
                            <p className="font-semibold text-3xl ml-5 mb-6">{ e.entry.title }</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        }
      </Swiper>
        </div>
    )
}

export default MainSlide