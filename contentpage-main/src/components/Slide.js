import React ,{useState} from 'react'
import {MdArrowForwardIos,MdArrowBackIosNew} from "react-icons/md"

const Slide = () => {
    const slides =[
        {
          url:"https://wallpapers.com/images/featured/moon-mqcx9pq0fg2ma4lp.jpg"
        },
        {
          url:"https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg"
        }
        
];
const [currentPic,setcurrentPic]=useState(0)

const prevPic = ()=>{
  const firstPic = currentPic===0;
  const newPic = firstPic ? slides.length-1 : currentPic-1
  setcurrentPic(newPic);
};

const frontPic=()=>{
  const presentPic=currentPic===slides.length-1;
  const nextPic=presentPic ? 0 : currentPic+1;
  setcurrentPic(nextPic)
}

  return (
    <div className='bg-black '>
      <center> <h1 className='text-white'>COURSE-CONTENT</h1></center>
     
    <div className='max-w-[1400px] h-[740px] w-full m-auto py-12 px-4 relative bg-black flex justify-center '>
      
        <div style={{backgroundImage: `url(${slides[currentPic].url}) `}} className='w-2/3  h-full rounded-2xl bg-center bg-cover duration-200 group ' ></div> 
        <div className=' absolute top-[50%] -translate-x-[-50%] translate-y-[-50%] left-5 rounded-full text-white cursor-pointer'>
          <MdArrowBackIosNew onClick={prevPic} size={30}/>
        </div> 
        <div className='absolute top-[50%] -translate-x-[-10%] translate-y-[-50%] right-8 rounded-full text-white cursor-pointer'>
          <MdArrowForwardIos onClick={frontPic} size={30} />
        </div>   
       
    </div>
    </div>
  )
}

export default Slide