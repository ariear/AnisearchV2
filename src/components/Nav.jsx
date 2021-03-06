import { useState } from "react"
import { NavLink } from "react-router-dom"
import '../App.css'
import Toggle from "./Nav/Toggle"

const Nav = () => {
    const [isOpen , setIsOpen] = useState(false)

    window.addEventListener('scroll', () => {
            document.querySelector('.nav').classList.toggle('nav-scroll', window.scrollY > 0)
    })

    return (
        <nav className="w-screen flex items-center justify-between text-white dark:text-black px-5 xl:px-16 font-pupylinux fixed top-0 bg-[#091945] dark:bg-white z-50 nav transition-all">
            <p className="font-medium text-xl md:text-2xl lg:text-3xl">AniSearchV2</p>
            <div className="lg:flex items-center hidden text-lg">
                <p className="mr-9"><NavLink to='/' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''} >Home</NavLink></p>
                <p className="mr-9"><NavLink to='/animesearch' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''} >Search Anime</NavLink></p>
                <p className="mr-9"><NavLink to='/about' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''} >About</NavLink></p>
                <p className="mr-9"><NavLink to='/contact' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''} >Contact</NavLink></p>
            </div>
            <div className="flex items-center">
                <Toggle />
                <img src="/asset/icon/menu-genre.svg" onClick={() => setIsOpen(true)} className="block lg:hidden" alt="" />
                <a href="https://github.com/arieakbarull/anisearchv2" className="lg:block hidden dark:hidden"><img src="/asset/icon/github.png" alt="" /></a>
                <a href="https://github.com/arieakbarull/anisearchv2" className=" hidden dark:lg:block"><img src="/asset/icon/github-black.png" alt="" /></a>
            </div>
            <div className={isOpen ? 'fixed top-0 right-0 w-screen h-screen bg-[#0000006c] transition-all block lg:hidden' : 'fixed top-0 right-0 w-[0vw] h-screen bg-[#0000006c] transition-all'} onClick={() => setIsOpen(false)}></div>
            <div className={isOpen ? 'fixed top-0 right-0 w-[70vw] h-screen bg-[#3955A3] dark:bg-white flex lg:hidden items-center justify-center transition-all' : 'fixed top-0 right-0 w-[0vw] overflow-hidden h-screen bg-[#3955A3] dark:bg-white flex  items-center justify-center transition-all'}>
                <div className="text-center text-white dark:text-black">
                    <p className="mb-4"><NavLink to='/' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''}>Home</NavLink></p>
                    <p className="mb-4"><NavLink to='/animesearch' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''}>Search Anime</NavLink></p>
                    <p className="mb-4"><NavLink to='/about' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''}>About</NavLink></p>
                    <p className="mb-4"><NavLink to='/contact' className={(e) => e.isActive ? 'text-[#ffffffbb] dark:text-[#0000009a] transition-all' : ''}>Contact</NavLink></p>
                </div>
                <a href="https://github.com/arieakbarull/anisearchv2" className="absolute bottom-4 right-4 block lg:hidden dark:hidden"><img src="/asset/icon/github.png" width="40" alt="" /></a>
                <a href="https://github.com/arieakbarull/anisearchv2" className="absolute bottom-4 right-4 hidden lg:hidden dark:block"><img src="/asset/icon/github-black.png" width="40" alt="" /></a>
            </div>
        </nav>
    )
}

export default Nav