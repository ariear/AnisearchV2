import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainSlide from "../components/Home/MainSlide"

const SearchAnime = () => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)

    const searchAnime = (input) => {
        if (input.key === 'Enter') {            
            axios.get(`https://api.jikan.moe/v4/anime?q=${input.target.value}`)
                .then(response => {
                    setLoading(true)
                    try {                        
                        if (response.status === 200) {
                            setData(response.data.data)
                            setLoading(false)
                        }
                    } catch (error) {
                        setLoading(true)
                    }
                })
        }
    }

    return (
        <div className="font-pupylinux bg-[#091945] pt-20 pb-10 lg:pt-24">
            <MainSlide />
            <div className="flex items-center justify-between w-[95vw] lg:w-[90vw] xl:container mx-auto mb-10 pt-6">
                <label htmlFor="search" className="relative">
                    <img src="/asset/icon/search.svg" className="absolute left-2 bottom-0 top-0 w-[20px] m-auto" alt="" />
                    <input type="text" onKeyUp={(e) => searchAnime(e)} placeholder="Search title" className="bg-[#41568E] w-[190px] md:w-[240px] transition-all focus:outline-none focus:border-none focus:ring-white focus:ring-2 py-2 pl-9 text-white rounded-lg" id="search" />
                </label>
                <label htmlFor="genres" className="bg-[#4150794f] w-max p-3 rounded-lg text-white flex items-center">
                    <p className="mr-3">Genres</p>
                    <img src="/asset/icon/menu-genre.svg" alt="" />
                </label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-y-5 container mx-auto justify-items-center">
                {   
                    data && (
                    loading
                        ?   <p>Loading...</p>
                        : data.map((e, index) => 
                        <Link to={`/animedetail/${e.mal_id}`} key={index}>
                        <div className="bg-white w-[170px] mx-2 p-2 rounded-lg hover:scale-105 transition-all duration-300 relative group">
                        <img src={e.images.webp.large_image_url} className="rounded-lg border w-[170px] h-[220px]" alt="" />
                        <div className="absolute px-2 flex flex-col justify-center items-center text-center text-white py-5 top-0 left-0 w-full h-full bg-[#0000007e] backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <p className="mb-2">{e.title}</p>
                            <p className="mb-2">Score : {e.score}</p>
                            <p>{e.episodes ? e.episodes : '??'} Episode</p>
                        </div>
                        </div>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default SearchAnime