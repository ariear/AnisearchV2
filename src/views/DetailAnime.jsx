import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailAnime = () => {
    const param = useParams()
    const [data,setData] = useState([])
    const [char,setChar] = useState([])
    const [genre,setGenre] = useState([])

    useEffect(() => {
      axios.get(`https://api.jikan.moe/v4/anime/${param.mailid}/full`)
            .then(response => {
                setData({
                    bgmain : response.data.data.images.jpg.large_image_url,
                    img: response.data.data.images.webp.image_url,
                    title: response.data.data.title,
                    synopsis: response.data.data.synopsis,
                    score: response.data.data.score,
                    ranked: response.data.data.rank,
                    popular: response.data.data.popularity,
                    members: response.data.data.members
                })
                setGenre(response.data.data.genres)
            })

        axios.get(`https://api.jikan.moe/v4/anime/${param.mailid}/characters`)
            .then(response => {
                setChar(response.data.data)
            })

    }, [param])
    
    return (
        <div className="py-28 font-pupylinux">
            <div className="h-[350px] bg-white bg-cover bg-center relative" style={{ backgroundImage: `url('${data.bgmain}')` }}>
            <div className="absolute left-0 top-0 w-full h-full flex items-end bg-[#0000008a] pl-[19rem] py-5">
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white mr-4">
                    <p className="text-lg">Score</p>
                    <p>{data.score}</p>
                </div>
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white mr-4">
                    <p className="text-lg">Ranked</p>
                    <p># {data.ranked}</p>
                </div>
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white mr-4">
                    <p className="text-lg">Popularity</p>
                    <p># {data.popular}</p>
                </div>
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white">
                    <p className="text-lg">Members</p>
                    <p>{data.members}</p>
                </div>
            </div>
            <div className="relative w-max px-16 z-20 translate-y-44">
            <img src={data.img} className="rounded-lg mb-4" alt="" />
            <p className="text-white text-lg mb-2">Genres</p>
            <div className="flex items-center flex-wrap w-[225px]">
                {
                    genre.map((e,index) => 
                        <div className="bg-[#3B5089] text-white py-2 px-5 text-sm rounded-full w-max mb-2 mr-2" key={index}>{e.name}</div>
                    )
                }
            </div>
            </div>
            </div>
            <div className="px-16 text-white">
                <div className="pl-60 pt-5">
                <p className="font-medium text-3xl mb-6">{data.title}</p>
                <p className="text-lg mb-2">Synopsis</p>
                <p className="text-sm mb-7">{data.synopsis}</p>
                <p className="text-2xl mb-5">Characters & Voice Actors</p>
                <div className="grid grid-cols-4 gap-y-6">
                    {
                        char.map((e,index) =>                         
                    <div className="flex" key={index}>
                        <img src={e.character.images.webp.image_url} className="w-[80px] rounded-lg mr-3" alt="" />
                        <div>
                            <p className="text-lg font-medium">{e.character.name}</p>
                            <p className="font-light">{e.role}</p>
                        </div>
                    </div>
                        ) 
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default DetailAnime