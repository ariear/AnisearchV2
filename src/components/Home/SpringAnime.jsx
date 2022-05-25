import { useEffect, useState } from "react"
import axios from 'axios'

const SpringAnime = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/seasons/now')
            .then(response => {
                setData(response.data.data)
            })
    }, [])
    
    return (
        <div className="mb-9">
            <p className="text-white font-medium text-xl mb-5">Spring 2022 Anime</p>
            <div className="flex overflow-auto overflow-y-hidden pb-4 pt-2">
                {
                    data.map(e =>
                <div>                     
                <div className="bg-white w-[170px] mx-2 p-2 rounded-lg hover:scale-105 transition-all duration-300 relative group">
                    <img src={e.images.webp.large_image_url} className="rounded-lg border w-[170px] h-[220px]" alt="" />
                    <div className="absolute px-2 flex flex-col justify-center items-center text-center text-white py-5 top-0 left-0 w-full h-full bg-[#0000007e] backdrop-blur rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="mb-2">{e.title}</p>
                        <p className="mb-2">Score : {e.score}</p>
                        <p>{e.episodes ? e.episodes : '??'} Episode</p>
                    </div>
                </div>
                </div>
                    )                    
                }
            </div>
        </div>
    )
}

export default SpringAnime