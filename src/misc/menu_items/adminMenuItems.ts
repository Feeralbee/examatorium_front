import MenuItem from "./MenuItem";


const adminMenuItems: MenuItem[] = [
  {
    name: "Пользователи",
    link: "/users",
    icon: "../src/assets/menu_icons/admin/users.svg",
  },
  {
    name: "Дисциплины",
    link: "/disciplines",
    icon: "../src/assets/menu_icons/admin/disciplines.svg",
  },
  {
    name: "Темы",
    link: "/themes",
    icon: "../src/assets/menu_icons/admin/themes.svg",
  },
  {
    name: "Экзамены",
    link: "/exams",
    icon: "../src/assets/menu_icons/exams.svg",
  },
  {
    name: "Квал. Экзамены",
    link: "/qualification_exams",
    icon: "../src/assets/menu_icons/admin/qualification_exams.svg",
  },
  {
    name: "Группы",
    link: "/groups",
    icon: "../src/assets/menu_icons/admin/groups.svg",
  },
  {
    name: "Квалификации",
    link: "/qualifications",
    icon: "../src/assets/menu_icons/admin/qualifications.svg",
  },
  {
    name: "Компетенции",
    link: "/competencies",
    icon: "../src/assets/menu_icons/admin/competencies.svg",
  },
];

export default adminMenuItems;
