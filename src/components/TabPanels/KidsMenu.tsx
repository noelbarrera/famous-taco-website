import "../../styles/DinnerMenu.css";
const KidsMenu = () => {
  return (
    <div className="menu-container">
      {/* <div className="menu-header">Kids Menu</div> */}
      <div className="menu-item">
        <span className="menu-item-price">$6.49</span>
        <div className="menu-item-title">Small Cheese Quesadilla</div>
        <div className="menu-item-description">Served with a side of rice and beans. Includes small drink</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$6.49</span>
        <div className="menu-item-title">Taco</div>
        <div className="menu-item-description">One soft corn or flour taco served with rice and beans.
Includes a small drink</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$6.49</span>
        <div className="menu-item-title">Chicken Nuggets</div>
        <div className="menu-item-description">A favorite with kids</div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$5.29</span>
        <div className="menu-item-title">Chips and Salsa</div>
        <div className="menu-item-description">Always popular</div>
      </div>
    </div>
  );
};

export default KidsMenu;
