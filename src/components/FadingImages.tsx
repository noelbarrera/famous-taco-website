import "../styles/FadingImages.css"
import im1 from '../assets/food1.jpeg'
import im2 from '../assets/food2.jpeg'
import im3 from '../assets/restaurant1.jpeg'
const FadingImages = () => {
  return (
    <div className='container'>
        <div className='pic' id='pic3' />
        <div className='pic' id='pic2' />
        <div className='pic' id='pic1' />
      </div>
  );
};

export default FadingImages;
