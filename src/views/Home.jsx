import Footer from "../components/Footer"
import LatestUpdateAnime from "../components/Home/LatestUpdateAnime"
import MainSlide from "../components/Home/MainSlide"
import SpringAnime from "../components/Home/SpringAnime"
import UpcomingAnime from "../components/Home/UpcomingAnime"

const Home = () => {
    return (
        <div className="font-pupylinux bg-[#091945] pt-20 lg:pt-24">
            <MainSlide />
            <div className="w-[95vw] xl:container mx-auto pt-9 mb-20">
            <div className="flex lg:flex-row flex-col">
            <div className="w-[95vw] lg:w-[60vw]">
            <SpringAnime />
            <LatestUpdateAnime />
            </div>
            <UpcomingAnime />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home