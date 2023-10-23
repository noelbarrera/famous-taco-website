import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/ImageSwiper.css";
import Image1 from "../assets/food1.jpeg";
import Image2 from "../assets/food2.jpeg";
const ImageSwiper = () => {
  return (
    <Swiper
      navigation={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, Navigation]}
      className="image-swiper"
    >
      <SwiperSlide>
        <img src={Image1}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2}></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
