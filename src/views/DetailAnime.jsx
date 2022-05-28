import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"

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
        <div className="pt-28 font-pupylinux">
            <div className="h-[350px] bg-white bg-cover bg-center relative md:mb-0 mb-56" style={{ backgroundImage: `url('${data.bgmain}')` }}>
            <div className="absolute left-0 top-0 w-full h-full flex items-end bg-[#0000008a] md:pl-[16rem] lg:pl-[19rem] py-5">
                <div className="md:flex hidden">
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white md:mr-2 lg:mr-4">
                    <p className="text-base lg:text-lg">Score</p>
                    <p className="text-sm">{data.score}</p>
                </div>
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white md:mr-2 lg:mr-4">
                    <p className="text-base lg:text-lg">Ranked</p>
                    <p className="text-sm"># {data.ranked}</p>
                </div>
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white md:mr-2 lg:mr-4">
                    <p className="text-base lg:text-lg">Popularity</p>
                    <p className="text-sm"># {data.popular}</p>
                </div>
                <div className="bg-[#ffffff5b] text-center py-3 px-6 rounded-lg backdrop-blur text-white">
                    <p className="text-base lg:text-lg">Members</p>
                    <p className="text-sm">{data.members}</p>
                </div>
                </div>
            </div>
            <div className="relative w-max px-4 lg:px-16 z-20 translate-y-44">
            <img src={data.img} className="rounded-lg mb-4 w-[180px] md:w-[225px]" alt="" />
            <p className="text-white text-lg mb-2">Genres</p>
            <div className="flex items-center flex-wrap w-[90vw] md:w-[225px]">
                {
                    genre.map((e,index) => 
                        <div className="bg-[#3B5089] text-white py-2 px-5 text-sm rounded-full w-max mb-2 mr-2" key={index}>{e.name}</div>
                    )
                }
            </div>
            </div>
            </div>
            <div className="md:px-4 lg:px-16 text-white">
                <div className="pl-5 pr-5 md:pl-60 md:pr-0 pt-5 mb-10">
                <p className="font-medium text-3xl mb-6">{data.title}</p>
                <p className="text-lg mb-2">Synopsis</p>
                <p className="text-sm mb-7">{data.synopsis}</p>
                </div>
                <div className="lg:pl-60 md:px-0 px-5 mb-16">
                <p className="text-2xl mb-5">Characters & Voice Actors</p>
                <div className="grid md:grid-cols-3 xl:grid-cols-4 md:gap-x-5 xl:gap-x-0 gap-y-6">
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
            <Footer />
        </div>
    )
}

export default DetailAnime