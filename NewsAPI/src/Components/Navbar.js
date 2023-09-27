import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <nav className='w-full bg-slate-700 hide-scrollbar'>
            <ul className='md:justify-center
                           2xl:py-3
                            flex w-full py-1 overflow-auto hide-scrollbar'>
                <li className='sm:text-[25px] sm:hidden
                               
                                ml-0 px-2 py-0 text-white font-normal	antialiased	 whitespace-nowrap  fixed z-index bg-slate-700' ><span className="material-symbols-outlined ">Home</span> </li>
                <li className='sm:text-[18px] sm:ml-2 sm:py-1 sm:px-2
                               md:text-[22px] 
                               2xl:text-[25px]
                                ml-10 py-1 text-white font-normal	antialiased	 whitespace-nowrap'>Mobile</li>
                <li className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap'>Laptop</li>
                <li className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap'>Space</li>
                <li className='sm:text-[18px]
                               md:text-[22px]
                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap'>Gadget Review</li>
                <li className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap'>Car</li>
                <li className='sm:text-[18px]
                               md:text-[22px]
                               2xl:text-[25px]

                                ml-1 px-2 py-1 text-white font-normal	antialiased	 whitespace-nowrap'>Bike</li>
            </ul>
        </nav>
    </>
    )
  }
}

export default Navbar
