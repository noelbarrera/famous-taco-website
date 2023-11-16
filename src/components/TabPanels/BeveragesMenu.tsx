import "../../styles/DinnerMenu.css";

const BeveragesMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-section-title">Beer</div>
      <div className="menu-item">
        <span className="menu-item-price">$4.59</span>
        <div className="menu-item-title">Domestic</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$4.99</span>
        <div className="menu-item-title">Imported</div>
      </div>
      <div className="menu-section-title">Bottled Drinks</div>
      <div className="menu-item">
        <span className="menu-item-price">$2.99</span>
        <div className="menu-item-title">Jarritos</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$3.89</span>
        <div className="menu-item-title">Mexican Coke</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$2.89</span>
        <div className="menu-item-title">Pepsi Products</div>
      </div>
      <div className="menu-section-title">Horchata</div>
      <div className="menu-item">
        <span className="menu-item-price">$3.49</span>
        <div className="menu-item-title">Small</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$4.49</span>
        <div className="menu-item-title">Large</div>
      </div>
      <div className="menu-section-title">Margaritas</div>
      <div className="menu-item">
        <span className="menu-item-price">$6.49</span>
        <div className="menu-item-title">Small Lime</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$6.49</span>
        <div className="menu-item-title">Small Flavored</div>
      </div> 
    </div>
  );
};

export default BeveragesMenu;
