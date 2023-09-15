import Image from "next/image"
import { Logo } from "../Icon/Icons"

export const Navbar = () => {
    return(
        <section className="flex px-6 lg:px-40 fixed z-30 justify-between items-center h-20 bg-black w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <div className="absolute w-full top-0 left-0 z-10 h-20">
            </div>
            <div className="z-10 flex gap-3 items-center font-bold text-2xl">
                <Logo/>
                <span>{'<Dev/>'}</span>
            </div>
            <div className="z-10"></div>
        </section>
    )
}