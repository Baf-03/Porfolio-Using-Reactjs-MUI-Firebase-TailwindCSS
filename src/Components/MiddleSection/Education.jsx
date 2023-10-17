import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import ubit from '../../assets/ubit.png';


const Education = () => {
  return (
    <div className= 'flex flex-col items-center mt-9'>
        <div className='flex text-[2rem] items-center justify-center' ><FaGraduationCap/>My <span className='text-purple-500 ps-2'>Education</span></div>
        <div className='text-center text-sm'>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</div>
        <div className='flex w-[60%] educationprojects mt-9'>
            <div><img src={ubit} alt="" srcset="" className='w-[25vw] h-[10rem]' /></div>
            <div className='ps-3 flex flex-col gap-2'>
                <div className='font-bold text-[1.5rem] text-blue-900'>Bachelor Of Computer Science (BSCS)</div>
                <div className='text-sm'>University Of Karachi-(UOK)</div>
                <div className='text-green-800 font-bold text-[1.3rem]'>2021-2025 | CGPA:3.94</div>
            </div>
        </div>
        <div className='flex w-[60%] educationprojects mt-9'>
            <div><img src="https://lh5.googleusercontent.com/p/AF1QipNYirqc1DAR0ZsW6N8iqUyt50cCaK0OSmJPvR2d=w408-h306-k-no" alt="" srcset="" className='w-[15vw] h-[10rem]' /></div>
            <div className='ps-3 flex flex-col gap-2'>
                <div className='font-bold text-[1.5rem] text-blue-900'>HSC Pre-Engineering | Pre-eng</div>
                <div className='text-sm'>BIEK</div>
                <div className='text-green-800 font-bold text-[1.3rem]'>2020-2021 | Percentage:82.00%</div>
            </div>
        </div>
        
    </div>
  )
}

export default Education