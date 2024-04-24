import React from "react";
import LogoSm from "@assests/logo_sm.svg?react";
import "@styles/menu.scss";
import { Link } from "@tanstack/react-router";

type MenuItem = {
  name: string;
  link: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Пользователи",
    link: "",
  },
  {
    name: "Дисциплины",
    link: "/disciplines",
  },
  {
    name: "Темы",
    link: "",
  },
  {
    name: "Экзамены",
    link: "",
  },
  {
    name: "Квал. Экзамены",
    link: "",
  },
  {
    name: "Группы",
    link: "",
  },
  {
    name: "Квалификации",
    link: "",
  },
  {
    name: "Компетенции",
    link: "",
  },
  {
    name: "Члены квал. комисии",
    link: "",
  },
];

const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    React.useState<MenuItem | null>(null);
  return (
    <div className="menu">
      <LogoSm />
      {menuItems.map((menuItem, index) => (
        <Link
          key={`menu-item-index-${index}`}
          to={menuItem.link}
          className="menu-item"
          activeProps={{className: "menu-item-active",}}
        >
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
