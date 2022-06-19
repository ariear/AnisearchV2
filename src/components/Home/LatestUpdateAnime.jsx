import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

const LatestUpdateAnime = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://api.jikan.moe/v4/watch/episodes')
            .then(response => {
                setData(response.data.data)
                setLoading(false)
            })
    }, [])
    
    const slideRight = () => {
        let slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const slideLeft = () => {
        let slider = document.getElementById('slider2')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    return (
        <div className="lg:mb-0 mb-8">
            <p className="text-white dark:text-black font-medium text-xl mb-5">Latest Updated Episode Videos</p>
            <div className="flex items-center">
            <img src="/asset/icon/left-arrow.png" onClick={() => slideLeft()} className="w-[35px] mr-2 cursor-pointer md:block hidden" alt="" />
            <div id="slider2" className="flex relative pb-4 pt-2 overflow-x-scroll scroll scroll-smooth scrollbar-hide">
                {
                    loading ?
                <div className="flex items-center">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                </div>
                        :                    
                    data.map((e, index) =>
                <Link to={`/animedetail/${e.entry.mal_id}`} key={index} >
                <div>                     
                <div className="bg-white dark:bg-[#3955A3] w-[170px] mx-2 p-2 rounded-lg hover:scale-105 transition-all duration-300 relative group">
                    <img src={e.entry.images.webp.large_image_url} className="rounded-lg w-[170px] h-[220px]" alt="" />
                    <div className="absolute px-2 flex flex-col justify-center items-center text-center text-white py-5 top-0 left-0 w-full h-full bg-[#0000007e] backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="mb-2">{e.entry.title}</p>
                    </div>
                </div>
                </div>
                </Link>
                    )                    
                }
            </div>
            <img src="/asset/icon/right-arrow.png" onClick={() => slideRight()} className="w-[35px] ml-2 cursor-pointer md:block hidden" alt="" />
            </div>
        </div>
    )
}

export default LatestUpdateAnime