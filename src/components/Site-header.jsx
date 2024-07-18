import React from 'react'

const SiteHeader = () => {
  return (
    <header className="site-header mt-7 mb-7">
        <div className="container-custom flex items-center justify-between pt-3 pb-3">
            <a className='mr-8 block' href="#">
                <img className='w-[165px] h-[65px]' src="/logo-no-background.svg" alt="Site logo" width={165} height={65} />
            </a>

            <ul className='flex items-center'>
                {/* ITEM  */}
                <li className='inline-block'>
                    <a className='block hover:text-[#ff9633] transition-colors duration-200 ease-in' href="#about">About</a>
                </li>
                {/* ITEM  */}
                <li className='inline-block'>
                    <a className='block hover:text-[#ff9633] transition-colors duration-200 ease-in' href="#experience">Experience</a>
                </li>
                {/* ITEM  */}
                <li className='inline-block'>
                    <a className='block hover:text-[#ff9633] transition-colors duration-200 ease-in' href="#projects">Projects</a>
                </li>
                {/* ITEM  */}
                <li className='inline-block'>
                    <a className='block hover:text-[#ff9633] transition-colors duration-200 ease-in' href="#contact">Contact</a>
                </li>
            </ul>
            <input className='p-2 bg-[#2b3235] rounded' type="search" placeholder='Search'/>
        </div>
    </header>
  )
}

export default SiteHeader