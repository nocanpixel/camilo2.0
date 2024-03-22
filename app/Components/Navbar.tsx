"use client";
import React, { Fragment, useState, useTransition } from "react"
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";


const people = [
  {
    id: 1,
    value: 'en',
  },
  {
    id: 2,
    value: 'es',
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const [ isPending,startTransition ] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [selected, setSelected] = useState(people.find((ele)=> ele.value === localActive)||people[0])
  // const { data, fetchData } = useStore();

  // useEffect(() => {
  //     fetchData();
  //   }, []);

  const handleOnchange = (e: any) => {
    setSelected(e);
    const nextLocale = e.value.toLowerCase()
    startTransition(()=>{
      router.replace(`${nextLocale}`)
    })
  }

  return (
    <section className="flex px-6 lg:px-40 absolute z-40 justify-between items-center h-20 bg-black w-full bg-opacity-0">
      <div className="absolute w-full top-0 left-0 z-10 h-20">
      </div>
      <div className="z-10 flex gap-3 items-center font-semibold">
        {/* <Logo/> */}
        <span className="text-white text-md font-sans font-extrabold text-3xl"> {'cambe'} </span>
      </div>
      <div className="z-10">
        <div className="flex gap-2">
          {/* <div role="status" className="max-w-sm animate-pulse flex items-center gap-1">
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-500 w-16"></div>
          </div> */}
          <Listbox value={selected} onChange={e=> handleOnchange(e)}>
            {({ open }) => (
              <>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md py-1.5 pl-3 pr-10 text-left text-slate-500 shadow-sm ring-1 ring-inset ring-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{selected.value.toUpperCase()}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-slate-500" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((element) => (
                        <Listbox.Option
                          key={element.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-slate-800 text-white' : 'text-slate-300',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={element}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                  {element.value.toUpperCase()}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-slate-700',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </div>
    </section>
  )
}