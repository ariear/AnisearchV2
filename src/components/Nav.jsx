import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="flex items-center justify-between text-white py-8 px-16 font-pupylinux">
            <p className="font-medium text-3xl">AniSearchV2</p>
            <div className="flex items-center text-lg">
                <p className="mr-9"><NavLink to='/' className={(e) => e.isActive ? 'text-[#ffffffbb]' : ''} >Home</NavLink></p>
                <p className="mr-9"><NavLink to='/animesearch' className={(e) => e.isActive ? 'text-[#ffffffbb]' : ''} >Search Anime</NavLink></p>
                <p className="mr-9">About Me</p>
                <p>Contact Me</p>
            </div>
            <div className="flex items-center">
                <img src="/asset/icon/toggle.png" className="mr-3" alt="" />
                <a href="https://github.com/arieakbarull/anisearchv2"><img src="/asset/icon/github.png" alt="" /></a>
            </div>
        </nav>
    )
}

export default Nav