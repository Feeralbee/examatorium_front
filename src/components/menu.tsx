import LogoSm from "@assests/logo_sm.svg";
import "@styles/menu.scss";
import { Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { authQueryKey } from "@constants/queryKeys";
import { UserDomainEntity } from "@client";
import {getRoleMenuItems} from "@misc/menu_items";


const Menu = () => {
  const queryClient = useQueryClient();
  const userData: UserDomainEntity | undefined = queryClient.getQueryData(authQueryKey);
  return (
    <div className="menu">
      <LogoSm />
      {getRoleMenuItems(userData?.role).map((menuItem, index) => (
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
