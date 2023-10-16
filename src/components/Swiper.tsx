
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/ImageSwiper.css'
import Image1 from '../assets/food1.jpeg';
import Image2 from '../assets/food2.jpeg';
const ImageSwiper = () => {
    return(<Swiper navigation={true} modules={[Navigation]} className='image-swiper'>
        <SwiperSlide>
            <img src={Image1}></img>
        </SwiperSlide>
        <SwiperSlide><img src={Image2}></img></SwiperSlide>
        <SwiperSlide>Image 3</SwiperSlide>
    </Swiper>
    )
}

export default ImageSwiper;