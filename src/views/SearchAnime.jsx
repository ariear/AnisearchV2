import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainSlide from "../components/Home/MainSlide"

const SearchAnime = () => {
    const [data,setData] = useState(null)
    const [notFound,setNotFound] = useState(false)
    const [loading,setLoading] = useState(false)

    const [genres,setGenres] = useState([])

    useEffect(() => {
      axios.get('https://api.jikan.moe/v4/genres/anime')
            .then(response => {
                setGenres(response.data.data)
            })
    }, [])
    
    
    const searchAnime = async (input) => {
        if (input.key === 'Enter') {
             if (input.target.value === '') {
                 return false
             }        
            setLoading(true)
            setData(null)    
            await axios.get(`https://api.jikan.moe/v4/anime?q=${input.target.value}`)
                .then(response => {
                    try {                        
                        setData(response.data.data)
                        setLoading(false)
                        if (response.data.data.length === 0) {
                            setNotFound(true)
                        }else{
                            setNotFound(false)
                        }
                    } catch (error) {
                        setLoading(true)
                    }
                })
        }
    }

    const searchByGenre = async (input) => {
        setLoading(true)
        setData(null)    
        await axios.get(`https://api.jikan.moe/v4/anime?q=${input.target.value}`)
            .then(response => {
                try {                        
                    setData(response.data.data)
                    setLoading(false)
                } catch (error) {
                    setLoading(true)
                }
            })
    }

    return (
        <div className="font-pupylinux bg-[#091945] dark:bg-white transition-all duration-300 pt-20 pb-10 lg:pt-24">
            <MainSlide />
            <div className="flex items-center justify-between w-[95vw] lg:w-[90vw] xl:container mx-auto mb-10 pt-6">
                <label htmlFor="search" className="relative">
                    <img src="/asset/icon/search.svg" className="absolute left-2 bottom-0 top-0 w-[20px] m-auto" alt="" />
                    <input type="text" onKeyUp={(e) => searchAnime(e)} placeholder="Search title" className="bg-[#41568E] w-[190px] md:w-[240px] transition-all focus:outline-none focus:border-none focus:ring-white dark:focus:ring-black focus:ring-2 py-2 pl-9 text-white rounded-lg" id="search" />
                </label>
                <label htmlFor="genres" className="relative">
                    <img src="/asset/icon/menu-genre.svg" className="absolute right-3 top-0 bottom-0 my-auto" alt="" />
                    <select id="genres" onChange={(e) => searchByGenre(e)} className="bg-[#4150794f] w-[140px] md:w-[190px] cursor-pointer p-3 rounded-lg text-white dark:text-black flex items-center appearance-none">
                            <option value="">Genres</option>
                        {
                            genres.map((e,index) => 
                                <option value={e.mal_id} key={index} className="text-black">{e.name}</option>    
                            )
                        }
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-y-5 container mx-auto justify-items-center">
                {   
                    data && 
                    data.map((e, index) => 
                        <Link to={`/animedetail/${e.mal_id}`} key={index}>
                        <div className="bg-white dark:bg-[#3955A3] w-[170px] mx-2 p-2 rounded-lg hover:scale-105 transition-all duration-300 relative group">
                        <img src={e.images.webp.large_image_url} className="rounded-lg w-[170px] h-[220px]" alt="" />
                        <div className="absolute px-2 flex flex-col justify-center items-center text-center text-white py-5 top-0 left-0 w-full h-full bg-[#0000007e] backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <p className="mb-2">{e.title}</p>
                            <p className="mb-2">Score : {e.score}</p>
                            <p>{e.episodes ? e.episodes : '??'} Episode</p>
                        </div>
                        </div>
                        </Link>
                    )
                }
            </div>
                {
                    loading &&
                    <img src="/asset/loading-circle.svg" width="50" className="mx-auto" alt="" />
                }
                {
                    notFound && 
                    <p className="text-white dark:text-black text-center text-lg">Anime Not Found</p>
                }
        </div>
    )
}

export default SearchAnime