"use client";
import React, { useEffect } from "react"
import { useStore } from "../hooks/useStore";
import { LikeButton } from "./LikeButton";

export const Navbar = () => {
    const { data, fetchData } = useStore();

    useEffect(() => {
        fetchData();
      }, []);

    return(
        <section className="flex px-6 lg:px-40 absolute z-40 justify-between items-center h-20 bg-black w-full bg-opacity-0">
            <div className="absolute w-full top-0 left-0 z-10 h-20">
            </div>
            <div className="z-10 flex gap-3 items-center font-semibold">
                {/* <Logo/> */}
                {/* <span className="text-orange-600">{'<'}</span> {'Web'} <span className="text-cyan-500">{'/>'}</span>  */}
                <span className="text-white text-md font-sans font-extrabold text-3xl"> {'Developer'} </span>
            </div>
            <div className="z-10">
            <div className="flex gap-2">
                  {data ? (
                    <span className="flex items-center gap-1">
                      <LikeButton />
                      <span className="text-xs font-bold">
                        {data && data.message.amount}
                      </span>
                      <span>{data&& data.message.client}</span>
                    </span>
                  ) : (
                    <div role="status" className="max-w-sm animate-pulse flex items-center gap-1">
                      <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-500 w-16"></div>
                    </div>
                  )}
                </div>
            </div>
        </section>
    )
}