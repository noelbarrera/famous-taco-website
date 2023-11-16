import "../../styles/DinnerMenu.css";
const DessertsMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <span className="menu-item-price">$4.99</span>
        <div className="menu-item-title">Fried Ice Cream</div>
        <div className="menu-item-description">
          Served in a cinnamon sugared tortilla shell, topped with hot fudge and
          whipped cream
        </div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$4.99</span>
        <div className="menu-item-title">Pastel Tres Leches</div>
        <div className="menu-item-description">
        Moist cake made with three milks  
        </div>
      </div>
      <div className="menu-item">
        <span className="menu-item-price">$4.99</span>
        <div className="menu-item-title">Flan</div>
        <div className="menu-item-description">
        Caramel custard made fresh daily 
        </div>
      </div>
    </div>
  );
};

export default DessertsMenu;
