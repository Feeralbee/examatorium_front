import React from "react";
import LogoSm from "@assests/logo_sm.svg";
import "@styles/menu.scss";
import { Link } from "@tanstack/react-router";
import menuItems, {MenuItem} from "@misc/menu_items";




const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    React.useState<MenuItem | null>(null);
  return (
    <div className="menu">
      <LogoSm />
      {menuItems.adminMenuItems.map((menuItem, index) => (
        <Link
          key={`menu-item-index-${index}`}
          to={menuItem.link}
          className="menu-item"
          activeProps={{className: "menu-item-active",}}
        >
          <img src={menuItem.icon} />
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
