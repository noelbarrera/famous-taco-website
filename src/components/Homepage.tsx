import "../styles/Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="banner">
      </div>
      <section className="welcome-section">
        <h1>Welcome To The Famous Taco</h1>
        <p>
          Step into a world of vibrant flavors and cozy charm at our local
          Mexican restaurant, where every dish tells a tale of tradition and
          taste.Whether you're craving the zing of perfectly spiced tacos, the
          richness of homemade guacamole, or the comfort of savory enchiladas,
          our menu is a treasure trove of Mexican delights. Come join us for a
          fiesta of flavors that will make every meal a celebration!
        </p>
      </section>
      <section className="menu-section">
        <div className="menu-section-image"></div>
        <div className="menu-section-desc">
          <h2>Our Food</h2>
          <p>
            Step into a world of vibrant flavors and cozy charm at our local
            Mexican restaurant, where every dish tells a tale of tradition and
            taste.Whether you're craving the zing of perfectly spiced tacos, the
            richness of homemade guacamole, or the comfort of savory enchiladas,
            our menu is a treasure trove of Mexican delights. Come join us for a
            fiesta of flavors that will make every meal a celebration!
          </p>
          <a href="/menu">
            <button className="menu-section-desc-button">View Menus</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
