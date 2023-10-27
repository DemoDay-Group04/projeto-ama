import './App.css'
import img1 from './imgSlide/img1.jpg'
import img2 from './imgSlide/img2.jpg'
import img3 from './imgSlide/img3.jpg'
import img4 from './imgSlide/img4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

function App(){

  const data = [
    { id: '1', image: img1 },
    { id: '2', image: img2 },
    { id: '3', image: img3 },
    { id: '4', image: img4 },
  ]

  return(
    <div className='container'>
      <h1>Carrossel</h1>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        >

        {data.map( (item) => (
                  <SwiperSlide key={item.id}>
                    <img
                    src={item.image}
                    alt="Slider"
                    className="slideitem"
                    width={1080}
                    />
                  </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default App

