import "../../styles/DinnerMenu.css"
const DinnerMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">Dinner</div>
        <div className="menu-section-title">Burritos</div>
        <div className="menu-item">
          <span className="menu-item-price">$16.79</span>
          <div className="menu-item-title">Super Burrito</div>
          <div className="menu-item-description">Make it a Super Burrito!</div>
        </div>
        <div className="menu-item">
          <span className="menu-item-price">$9.99</span>
          <div className="menu-item-title">Barbacoa Burrito</div>
          <div className="menu-item-description">Chuck steak slow-cooked with red ancho peppers and fresh herbs.</div>
        </div>
        <div className="menu-item">
          <span className="menu-item-price">$9.99</span>
          <div className="menu-item-title">Steak Burrito</div>
          <div className="menu-item-description">Marinated in our adobo pepper then grilled.</div>
        </div>
        <div className="menu-item">
          <span className="menu-item-price">$9.99</span>
          <div className="menu-item-title">Chicken Burrito</div>
          <div className="menu-item-description">Marinated in our lemon pepper and grilled.</div>
        </div> 
        <div className="menu-item">
          <span className="menu-item-price">$9.99</span>
          <div className="menu-item-title">Carnitas Burrito</div>
          <div className="menu-item-description">Pork slow-cooked for hours then shredded.</div>
        </div> 
        <div className="menu-item">
          <span className="menu-item-price">$9.99</span>
          <div className="menu-item-title">Ground Beef Burrito</div>
          <div className="menu-item-description">Our own blend of ground beef simmered with spices.</div>
        </div>  
        <div className="menu-item">
          <span className="menu-item-price">$8.99</span>
          <div className="menu-item-title">Veggie Burrito</div>
          <div className="menu-item-description">Includes our fresh guacamole and choice of beans.</div>
        </div>  
          {/* //TODO: possible add burrito bowl */}
    </div>
  );
};

export default DinnerMenu;
