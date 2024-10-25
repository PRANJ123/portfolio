import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
const About = () => {
  return (
    <section className="my-12 py-16 px-4 md:px-8 relative">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="mb-6 md:w-1/2">
        Hey I am Pranjal Bajpai, a final-year IT undergraduate at HBTU Kanpur. I am a dedicated problem solver and i possess good  competitive coding skill, I regularly participate in competitive coding contests across various platforms. I am 4 star at codechef with max rating 1894, and I've achieved a CodeForces rating of  1462 {"(Specialist)"}.
      </div>
      <div className="relative mt-10 md:mt-0 md:absolute md:top-0 md:right-0 md:w-1/3 md:mr-8">
        <Image
          height={500}
          width={500}
          src="/profile.jpg"
          alt="Pranjal"
          className="object-cover mx-auto h-96 w-96"
        />
  
      </div>
    </section>
  );
};

export default About;
