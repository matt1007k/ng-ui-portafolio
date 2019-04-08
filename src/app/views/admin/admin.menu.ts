import { NbMenuItem } from "@nebular/theme";

export const itemsAdmin: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "nb-home",
    link: "/admin/dashboard",
    home: true
  },
  {
    title: "MANTENIMIENTO",
    group: true
  },
  {
    title: "Categorias",
    icon: "nb-star",
    children: [
      {
        title: "List categories",
        icon: "nb-list",
        link: "/admin/categorias"
      }
    ]
  },
  {
    title: "Servicios",
    icon: "nb-cloudy",
    children: [
      {
        title: "List services",
        icon: "nb-list",
        link: "/admin/servicios"
      }
    ]
  },
  {
    title: "Proyectos",
    icon: "nb-compose",
    link: "/admin/proyectos"
  },
  {
    title: "Testimonios",
    icon: "nb-audio",
    link: "/admin/testimonios"
  },
  {
    title: "Infomacion",
    icon: "nb-e-commerce",
    link: "/admin/informacion"
  }
];
