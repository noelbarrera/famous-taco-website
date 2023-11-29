import FadingImages from "./FadingImages";
import "../styles/Homepage.css";
import hompageImage from "../assets/alexander-kovacs-TivEEYzzhik-unsplash.jpg";
const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        {/* <FadingImages></FadingImages> */}
        <section className="header-section">
          <div className="header-section-container">
            <img src={hompageImage} alt="" />
          </div>
        </section>
        <section className="welcome-container">
          <h1>Welcome to The Famous Taco</h1>
          <p>
            Step into a world of vibrant flavors and cozy charm at our local
            Mexican restaurant, where every dish tells a tale of tradition and
            taste.Whether you're craving the zing of perfectly spiced tacos,
            the richness of homemade guacamole, or the comfort of savory
            enchiladas, our menu is a treasure trove of Mexican delights. Come
            join us for a fiesta of flavors that will make every meal a
            celebration!
          </p>
        </section>
        <section className="menu-section">
          <div className="menu-section-image">
            {/* <img src={hompageFoodImage}/> */}
          </div>
          <div className="menu-section-desc">
            <h2>Our Food</h2>
            <p>
              Our kitchen goes to great lengths on a daily basis to create and
              prepare classic dishes from Thailand that are intended to be
              representative of MK+B’s interpretation of the most popular
              cuisine in Southeast Asia.
            </p>
            <a href="/menu">
              <button className="menu-section-desc-button">View Menus</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
