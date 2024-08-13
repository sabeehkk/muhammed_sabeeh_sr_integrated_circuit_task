import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center header">
    <h1 className="text-4xl font-bold text-[#fbfbfb]">
      FRANK<span className="text-[#000000]">LARC</span>
    </h1>
    <input type="text" className='cityInput' placeholder='Check weather' />
    <TbSearch className='search_icon' onClick={search} />
    <nav className="space-x-8">
      <a href="#tools" className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]">Shop</a>
      <a href="#pricing" className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]">Pages</a>
      <a href="#support" className="text-[#000000] font-semibold hover:rounded-full px-4 py-1 hover:bg-[#efefef]">Categor</a>
      <button className="bg-gray-50 text-[#000000] font-semibold border-none border-[#435933] rounded-full px-4 py-1 hover:bg-gray-100  transition">Signup</button>
    </nav>
  </header>
  )
}

export default Header
