import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <> 
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <nav className='w-full bg-slate-700 hide-scrollbar  fixed z-50 mt-0'>
            <ul className='md:justify-center 
                           2xl:py-3
                            flex w-full py-2 overflow-auto hide-scrollbar'>
          <div className='hidden sm:block w-1/3 justify-start ml-10'><Link  className='sm:text-[18px] sm:ml-2 sm:py-1 sm:px-2
                               md:text-[22px] 
                               2xl:text-[25px]
                                 sm:text-white sm:font-normal	sm:antialiased	 sm:whitespace-nowrap' to={'/'}>Go News</Link></div>
          <div className='w-full justify-evenly'><Link className='sm:text-[25px] sm:hidden
                               
                                ml-0 px-2 py-0 text-white font-normal	antialiased	 whitespace-nowrap  fixed z-index bg-slate-700' to={'/'} ><span className="material-symbols-outlined ">Home</span> </Link>
                
                <Link className='sm:text-[18px] sm:ml-2 sm:py-1 sm:px-2
                               md:text-[22px] 
                               2xl:text-[25px]
                                ml-10 py-1 text-white font-normal	antialiased	 whitespace-nowrap' to={'business'}>Business</Link>
                <Link className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap' to={'entertainment'}>Entertainment</Link>
             
                <Link className='sm:text-[18px]
                               md:text-[22px]
                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap' to={'health'}>Health</Link>
                <Link className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap' to={'science'}>Science</Link>
                <Link className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap' to={'sports'}>Sports</Link>
                <Link className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap' to={'technology'}>Technology</Link>
            </div>
            </ul>
        </nav>
    </>
    )
  }
}

export default Navbar
