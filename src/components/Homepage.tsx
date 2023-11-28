import FadingImages from "./FadingImages";
import "../styles/Homepage.css";
import hompageImage from "../assets/alexander-kovacs-TivEEYzzhik-unsplash.jpg";
const Homepage = () => {
  return (
    <>
      <div className="homepage-container" style={{ border: "1px solid white" }}>
        {/* <FadingImages></FadingImages> */}
        <section className="header-section">
          <div className="header-section-container">
            <img src={hompageImage} alt="" />
          </div>
        </section>
        <section>
          <h1>Welcome to The Famous Taco</h1>
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
              <button className="menu-section-desc-button">view menus</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
