import "../styles/AboutPage.css";
import image1 from "../assets/insidefamoustaco.jpeg";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-container-image-container">
        <img src={image1} alt="" />
      </div>
      <div className="about-container-description">
        {/* <div> */}
        <h1>About</h1>
        <p>
          Welcome to The Famous Taco, your passport to the authentic tastes and
          vibrant spirit of Mexico, right here in the heart of our community.
        </p>
        <p>
          The Famous Taco is a local Mexican restaurant that has been a beloved
          culinary gem for over two decades. Our mission is simple: to transport
          your taste buds on a journey through the diverse and colorful
          landscape of Mexican cuisine, offering a true taste of Mexico without
          leaving town. At Casa del Sabor, we take pride in crafting traditional
          Mexican dishes that are made with love and respect for centuries-old
          recipes. From sizzling fajitas to mouthwatering enchiladas, every
          plate is a celebration of Mexico's rich culinary heritage. We source
          the finest ingredients, ensuring that every bite is a fiesta of
          flavors, colors, and aromas that will tantalize your senses.
        </p>
        <p>
          Our warm and inviting atmosphere is the perfect backdrop for
          gatherings with friends and family. Whether you're celebrating a
          special occasion or simply craving a quick and delicious meal, The
          Famous Taco is the place to be. We're more than a restaurant; we're a
          destination where the soul of Mexico comes alive through food, music,
          and hospitality.
        </p>
        <p>
          Come join us for a culinary journey that will immerse you in the heart
          of Mexico. Experience the warmth of Mexican hospitality, the
          authenticity of our recipes, and the joy of sharing a meal with loved
          ones. The Famous Taco is not just a restaurant; it's a taste of Mexico
          right at your doorstep, and we can't wait to welcome you with open
          arms and a table full of delicious dishes. ¡Buen provecho!
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
