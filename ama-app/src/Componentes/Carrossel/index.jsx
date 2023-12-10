import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from "swiper/element/bundle"
import img1 from '../../assets/home-carrossel/formas.png'
import img2 from '../../assets/home-carrossel/amamentacao.jpg'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carrossel() {
    const data = [
        { id: '1', image: img1 },
        { id: '2', image: img2 },
    ]

    return (
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >

                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className="slideitem"
                            width='85%'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
    )
}