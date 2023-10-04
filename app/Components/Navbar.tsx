import Image from "next/image"
import { Logo } from "../Icon/Icons"
import { useEffect } from "react"

export const Navbar = () => {

    return(
        <section className="flex px-6 lg:px-40 absolute z-40 justify-between items-center h-20 bg-black w-full bg-opacity-0">
            <div className="absolute w-full top-0 left-0 z-10 h-20">
            </div>
            <div className="z-10 flex gap-3 items-center font-semibold">
                {/* <Logo/> */}
                {/* <span className="text-orange-600">{'<'}</span> {'Web'} <span className="text-cyan-500">{'/>'}</span>  */}
                <span className="text-white text-md font-sans font-extrabold text-3xl"> {'Developer'} </span>
            </div>
            <div className="z-10"></div>
        </section>
    )
}