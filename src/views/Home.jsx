import LatestUpdateAnime from "../components/Home/LatestUpdateAnime"
import MainSlide from "../components/Home/MainSlide"
import SpringAnime from "../components/Home/SpringAnime"
import Nav from "../components/Nav"

const Home = () => {
    return (
        <div className="font-pupylinux bg-[#091945]">
            <Nav />
            <MainSlide />
            <div className="container mx-auto pt-9">
            <SpringAnime />
            <LatestUpdateAnime />
            </div>
        </div>
    )
}

export default Home