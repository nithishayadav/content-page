import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carosel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className=' bg-black '>
        <h2 className='text-white'> AVAILABLE</h2><br/>
        <Slider {...settings}>
          <div className='card'>
            <img src='https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg' alt='pic1'/>
          </div>
          <div className='card' >
          <img src='https://e1.pxfuel.com/desktop-wallpaper/568/737/desktop-wallpaper-medical-heart-heart-biology.jpg' alt='pic1'/>
          </div>
          <div className='card'>
          <img src='https://cdn.thewirecutter.com/wp-content/media/2020/11/vr-headset-2048px-8993-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024' alt='pic1'/>
          </div>
          <div className='card'> 
            <img src='https://www.respiratorytherapyzone.com/wp-content/uploads/2022/06/normal-breathing-and-respiration-1.png' alt="res"/>
          </div>
          <div className='card'>
            <img src='https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg' alt='pic1'/>
          </div>
          <div className='card'>
            <img src='https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg' alt='pic1'/>
          </div>
          <div className='card'>
          <img src='https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg' alt='pic1'/>
          </div>
          <div >
          <img src='https://cdn.mos.cms.futurecdn.net/YMtayWGwpiau57vwqDrDad.jpg' alt='pic1'/>
          </div>
        </Slider>
      </div>
  )
}

export default Carosel