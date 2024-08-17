import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex relative justify-center items-center p-4 md:w-[15vw] w-[20vw]">
      <Image
        className="relative rounded-full"
        src="/assets/logos/lalumiere_logo.png"
        alt="logo"
        width={700}
        height={300}
        priority
      />
    </div>
  );
};

export default Logo;
