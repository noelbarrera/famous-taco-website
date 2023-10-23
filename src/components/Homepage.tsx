import ImageSwiper from "./Swiper";
import restaurantImage from '../assets/restaurant1.jpeg'
const Homepage = () => {
  return (
    <>
      <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 20px'}}>
    
            <img src={restaurantImage} alt="" style={{display: 'inline-block', width: '50%', height: '50%', border: '1px solid white'}}/>
    
        <div style={{ border: '1px solid white'}}>
          <h1>Welcome to The Famous Taco</h1>
          <p>
            The Famous Taco is a local gem that beckons you to embark on a
            culinary journey through the rich and diverse flavors of traditional
            Mexican cuisine. With its warm and inviting atmosphere, this
            family-owned restaurant offers an authentic taste of Mexico right
            here in our hometown.
          </p>
          <p>
            Casa de Sabor prides itself on using fresh, locally sourced
            ingredients to create time-honored dishes that pay homage to the
            country's culinary heritage. Whether you're a connoisseur of spicy
            salsas or a lover of melt-in-your-mouth enchiladas, Casa de Sabor
            promises a dining experience that celebrates the traditions and
            flavors of Mexico with each and every bite.
          </p>
        </div>
      </section>
      <section>
        <ImageSwiper />
      </section>
    </>
  );
};

export default Homepage;
