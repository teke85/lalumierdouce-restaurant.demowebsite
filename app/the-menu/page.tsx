'use client';
import MenuSection from '@/components/MenuSection';
import Image from 'next/image';
import imgURL from '../../public/assets/photos/image_8.jpg';
import NavMenu from '@/components/NavMenu';


export default function TheMenu() {
  return (
    <>
      <header className="h-full bg-gray-800 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Text Container */}
        <div className="flex justify-start text-white p-8">
          <h1 className="text-4xl font-poppins font-bold text-white text-start">
            THE LA LUMIER DOUCE <span className="text-[#BCAF87]">RESTAURANT</span><br /> MENU
          </h1>
        </div>
        {/* Image Container */}
        <div className="relative flex items-center justify-center w-full md:w-3/4 h-[300px] py-10">
          <Image
            src={imgURL}
            alt="image"
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div>
      </header>
      <NavMenu />
      <MenuSection />
    </>
  );
}
