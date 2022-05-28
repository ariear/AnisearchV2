import { useEffect } from "react"

const Toggle = () => {

    useEffect(() => {
      if (localStorage.dark) {
          const icon = document.querySelector('.icon')
          document.querySelector('.toggle').checked = true
          if (document.querySelector('.toggle').checked) {
            document.querySelector('html').classList.add('dark')
            icon.classList.add('left-7')
            icon.classList.remove('-left-2')
            icon.src = '/asset/icon/sun.webp'              
          }
        }
    }, [])
    

    const switchMode = (e) => {
        const icon = document.querySelector('.icon')
        if (e.target.checked) {            
            document.querySelector('html').classList.add('dark')
            localStorage.setItem('dark',true)
            icon.classList.remove('-left-2')
            icon.classList.add('left-7')
            icon.src = '/asset/icon/sun.webp'
        }else {
            document.querySelector('html').classList.remove('dark')
            localStorage.removeItem('dark')
            icon.classList.remove('left-7')
            icon.classList.add('-left-2')
            icon.src = '/asset/icon/crescent-moon.webp'
        }
    }

    return (
        <div className="relative mr-3">
        <input type="checkbox" onClick={(e) => switchMode(e)} className="toggle opacity-0 absolute top-0 left-0 w-full h-full z-10" />
        <div className="py-3 px-6 bg-[#3955A3] dark:bg-white border border-black rounded-full relative transition-all duration-300">
            <img src="/asset/icon/crescent-moon.webp" className="icon w-[30px] absolute bg-[#3955A3] dark:bg-white rounded-full p-1 border border-black -left-2 top-0 bottom-0 my-auto transition-all duration-500" alt="" />
        </div>
        </div>
    )
}

export default Toggle