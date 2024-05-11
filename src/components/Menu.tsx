import LogoSm from "@assests/logo_sm.svg";
import "@styles/menu.scss";
import { Link } from "@tanstack/react-router";
import { getRoleMenuItems } from "@misc/menu_items";
import { parseUserFullName } from "@misc/utils";
import userRolesLocalies from "@constants/userRolesLocalies";
import ExitIcon from "@assests/icons/exit.svg";
import UserDataStore from "@misc/stores/UserDataStore";
import { useAuth } from "@hooks";

const Menu = () => {
  const auth = useAuth();
  return (
    <div className="menu">
      <LogoSm />
      <div>
        {getRoleMenuItems(UserDataStore.state?.role).map((menuItem, index) => (
          <Link
            key={`menu-item-index-${index}`}
            to={menuItem.link}
            className="menu-item"
            activeProps={{ className: "menu-item-active" }}
          >
            <img src={menuItem.icon} />
            {menuItem.name}
          </Link>
        ))}
      </div>
      <div className="menu-lower-block">
        <div className="menu-user-info">
          {parseUserFullName(UserDataStore.state)}
          <br />
          Роль:{" "}
          {!!UserDataStore.state?.role &&
            userRolesLocalies[UserDataStore.state?.role]}
        </div>
        <Link to={"/login"} onClick={auth.logout}>
          <ExitIcon />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
