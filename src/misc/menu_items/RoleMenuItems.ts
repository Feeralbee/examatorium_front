import { UserRoles } from "@client";
import adminMenuItems from "./adminMenuItems";
import MenuItem from "./MenuItem";
import studentMenuItems from "./studentMenuItems";
import teacherMenuItems from "./teacherMenuItems";

const RoleMenuItems: Record<UserRoles, MenuItem[]> = {
  admin: adminMenuItems,
  student: studentMenuItems,
  teacher: teacherMenuItems,
};

const getRoleMenuItems = (userRole: UserRoles | undefined): MenuItem[] => {
  if (userRole) {
    return RoleMenuItems[userRole];
  }
  return [];
};

export { getRoleMenuItems };
