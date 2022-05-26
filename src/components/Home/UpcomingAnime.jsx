import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const UpcomingAnime = () => {
    const [data,setData] = useState([])

    useEffect(() => {
      let wrap = []
      axios.get('https://api.jikan.moe/v4/seasons/upcoming')
            .then(response => {
                for (let i = 0; i < 3; i++) {
                    const element = response.data.data[i]
                    wrap.push(element) 
                }
                setData(wrap)
            })
    }, [])
    

    return (
        <div className="bg-[#3955A3] grow rounded-xl lg:ml-3">
            <p className="text-white ml-4 mt-4 mb-6 text-lg">Top Upcoming Anime</p>
            {
                data.map((e, index) =>    
                <Link to={`/animedetail/${e.mal_id}`} key={index} >                 
            <div className="flex ml-4 mb-3">
                <img src={e.images.webp.large_image_url} className="w-[120px] rounded-lg" alt="" />
                <div className="text-white px-3">
                    <p className="md:text-lg lg:text-base xl:text-lg font-medium mb-1">{e.title}</p>
                    <p className="font-light">{e.type}, {e.members} members</p>
                </div>
            </div>
                </Link>
                )
            }
        </div>
    )
}

export default UpcomingAnime