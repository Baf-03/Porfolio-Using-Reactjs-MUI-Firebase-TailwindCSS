import React, { useEffect, useState } from 'react'
import './Introduction.css'
import Typewriter from "typewriter-effect";
import { FiLinkedin } from 'react-icons/fi';
import {BiLogoUpwork} from 'react-icons/bi';
import {SiFiverr} from 'react-icons/si';


import meimg from '../../assets/person.png';








function Introduction() {
  let qualities = ["Developer.","Professional Coder","Problem Solver"]
  let [word, setWord] = useState("");
  let [wordIndex, setWordIndex] = useState(0);
  let [letterIndex, setLetterIndex] = useState(0);
  let [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRemoving) {
        if (letterIndex < qualities[wordIndex].length) {
          setWord(prevWord => prevWord + qualities[wordIndex][letterIndex]);
          setLetterIndex(prevIndex => prevIndex + 1);
        } else {
          setIsRemoving(true);
        }
      } else {
        if (letterIndex > 0) {
          setWord(prevWord => prevWord.slice(0, -1));
          setLetterIndex(prevIndex => prevIndex - 1);
        } else {
          setIsRemoving(false);
          setWordIndex(prevIndex => (prevIndex + 1) % qualities.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex, letterIndex, isRemoving]);
  
  return (
    <div className='w-[100%]  flex justify-center mt-[5%]  pt-5  border-slate-300 border-b-[1px]  pb-[100px] ' >
      <div className="textside  w-[50%] " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h3 className=''>WELCOME TO MY WORLD</h3>
        <h1 className='font-bold text-[4rem]'>Hi, I’m <span className='backgroundimage'>Bilal Ahmed</span></h1>
        <div className='flex font-bold text-[3rem] ' > I am <span className='text-red-500 ps-2'> {word}</span> <Typewriter text="" delay={1000} /> </div>
      <div className='pt-5 pe-5 font-light' >
      I am Bilal Ahmed, a persistent Computer Science undergraduate in a well-recognized institute "University of Karachi - UBIT" having knowledge of Web Development I am Skilled in designing creative Web Pages and Patterns. A technology enthusiast who believes in the technology revolution. I keep myself updated on the upcoming technologies which will revolutionize the digital world in the future and will solve modern-day life problems.
     <div className='flex gap-11 mt-[15%]  items-center  '>
      <div className='text-[3rem] cursor-pointer'><FiLinkedin /></div>
      <div className='text-[3rem] cursor-pointer'><BiLogoUpwork/></div>
      <div className='text-[3rem] cursor-pointer'><SiFiverr/></div>
     </div>
      </div>

  
      </div>

      <div className="imageside bg-gray-300 w-[27%] flex justify-center h-[35rem] relative mt-[2%] rounded-lg ml-[10%]" >
         <img src={meimg} className='h-[45.4rem] absolute top-[-30%] left-1  ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
      </div>
      
    </div>
  )
}

export default Introduction
