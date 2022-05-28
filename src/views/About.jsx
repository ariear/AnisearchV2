const About = () => {
    return (
        <div className="py-36 font-pupylinux">
            <div className="bg-[#3955A3] text-white p-5 rounded-xl w-[90vw] xl:container mx-auto text-center">
                <p className="font-medium text-3xl mb-3">About</p>
                <p className="mb-5">This site a remake to <a href="https://aniisearch.netlify.app/" className="text-blue-400">AniSearch</a>, Like MyAnimeList we can find and check more anime , Thanks To <a href="https://jikan.moe/" className="text-blue-400">Jikan API</a> for Free public API</p>
                <p className="font-medium text-xl mb-4">the Tech i use</p>
                <div className="flex items-center mx-auto w-max">
                    <a href="https://reactjs.org/"><img src="/asset/icon/react.png" className="mr-4" alt="" /></a>
                    <a href="https://tailwindcss.com/"><img src="/asset/icon/tailwind.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default About