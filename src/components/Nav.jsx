import { NavLink } from "react-router-dom"
import '../App.css'

const Nav = () => {

    window.addEventListener('scroll', () => {
            document.querySelector('.nav').classList.toggle('nav-scroll', window.scrollY > 0)
    })

    return (
        <nav className="w-screen flex items-center justify-between text-white px-5 xl:px-16 font-pupylinux fixed top-0 bg-[#091945] z-50 nav transition-all">
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">AniSearchV2</p>
            <div className="lg:flex items-center hidden text-lg">
                <p className="mr-9"><NavLink to='/' className={(e) => e.isActive ? 'text-[#ffffffbb]' : ''} >Home</NavLink></p>
                <p className="mr-9"><NavLink to='/animesearch' className={(e) => e.isActive ? 'text-[#ffffffbb]' : ''} >Search Anime</NavLink></p>
                <p className="mr-9">About Me</p>
                <p>Contact Me</p>
            </div>
            <div className="flex items-center">
                <img src="/asset/icon/toggle.png" className="mr-3" alt="" />
                <a href="https://github.com/arieakbarull/anisearchv2" className="lg:block hidden"><img src="/asset/icon/github.png" alt="" /></a>
            </div>
        </nav>
    )
}

export default Nav