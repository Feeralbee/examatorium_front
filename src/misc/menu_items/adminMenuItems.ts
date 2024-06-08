import MenuItem from "./MenuItem";

const adminMenuItems: MenuItem[] = [
  {
    name: "Пользователи",
    link: "/admin/users",
    icon: "../src/assets/menu_icons/admin/users.svg",
  },
  {
    name: "Дисциплины",
    link: "/admin/disciplines",
    icon: "../src/assets/menu_icons/admin/disciplines.svg",
  },
  {
    name: "Темы",
    link: "/admin/themes",
    icon: "../src/assets/menu_icons/admin/themes.svg",
  },
  {
    name: "Экзамены",
    link: "/admin/exams",
    icon: "../src/assets/menu_icons/exams.svg",
  },
  // {
  //   name: "Квал. Экзамены",
  //   link: "/admin/qual_exams",
  //   icon: "../src/assets/menu_icons/admin/qualification_exams.svg",
  // },
  {
    name: "Группы",
    link: "/admin/groups",
    icon: "../src/assets/menu_icons/admin/groups.svg",
  },
  {
    name: "Квалификации",
    link: "/admin/qualifications",
    icon: "../src/assets/menu_icons/admin/qualifications.svg",
  },
  {
    name: "Компетенции",
    link: "/admin/competencies",
    icon: "../src/assets/menu_icons/admin/competencies.svg",
  },
];

export default adminMenuItems;
