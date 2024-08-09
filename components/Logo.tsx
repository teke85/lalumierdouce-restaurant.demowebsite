import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center items-center p-4 md:w-[10vw] w-[20vw]">
      <Image
        className="relative rounded-full"
        src="/assets/logos/Main_Logo.png"
        alt="logo"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default Logo;
