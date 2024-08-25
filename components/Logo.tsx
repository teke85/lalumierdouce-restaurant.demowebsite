import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex relative justify-center items-center p-4 md:p-10 md:w-[15vw] h-10 w-[20vw]">
      <Image
        className="relative rounded-full"
        src="/assets/logos/lalumiere_logo.png"
        objectFit='cover'
        alt="logo"
        fill
        priority
      />
    </div>
  );
};

export default Logo;
