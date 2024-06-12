import MenuItem from "./MenuItem";

const studentMenuItems: MenuItem[] = [
  {
    name: "Экзамены",
    link: "/student/exams",
    icon: "../src/assets/menu_icons/exams.svg",
  },
  {
    name: "ВКР",
    link: "/student/graduate_theses",
    icon: "../src/assets/menu_icons/admin/document.svg",
  },
  {
    name: "Курсовые работы",
    link: "/student/course_works",
    icon: "../src/assets/menu_icons/admin/document.svg",
  },
  {
    name: "Учебные практики",
    link: "/student/educational_practices",
    icon: "../src/assets/menu_icons/admin/document.svg",
  },
];

export default studentMenuItems;
