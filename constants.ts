import { CompanyInfo, Project, Amenity } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Inversiones Fígaro",
  slogan: "Somos tu mejor opción",
  experience: "24 años construyendo sueños, confianza y calidad",
  phone: "829-650-9546",
  facebook: "https://web.facebook.com/P%2525C3%2525A1gina-Inversiones-Figaro-101268987946016",
  logo: "https://i.postimg.cc/RVvzcBc8/logo.jpg",
  logoInfo: "https://i.postimg.cc/DZhxt2f6/informaciones1.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "figaro-tower",
    title: "Fígaro Tower",
    description: "La primera torre de 12 niveles en Prado Oriental, diseñada para quienes buscan exclusividad y calidad de vida. Vive en lo más alto del estilo y la comodidad.",
    details: [
      "12 Niveles",
      "Ubicación Premium",
      "Cocinas Premium"
    ],
    amenities: [
      "Bar y piscina",
      "Área social",
      "Área infantil",
      "Lobby climatizado",
      "Ascensor moderno",
      "Seguridad 24/7"
    ],
    image: "https://i.postimg.cc/YSKRWpFC/figaro-tower.jpg",
    ctaText: "Aparta tu apartamento hoy"
  },
  {
    id: "torre-k4",
    title: "Torre K4 – Vista al mar",
    description: "Vive con vista al mar en una de las zonas más exclusivas de Santo Domingo Este. Ubicada en Avenida Hípica, Prado Oriental, a solo 8 minutos del aeropuerto.",
    price: "Desde US$168,000",
    details: [
      "136.1 m²",
      "3er, 4to y 5to nivel",
      "Entrega: Enero 2026"
    ],
    amenities: [
      "Lobby climatizado",
      "Planta full",
      "Ascensor de última tecnología",
      "Vista al mar"
    ],
    image: "https://i.postimg.cc/yY2XMVvj/33.jpg",
    location: "Avenida Hípica, Prado Oriental",
    ctaText: "Solicitar información"
  }
];

export const AMENITIES_LIST: Amenity[] = [
  { id: "pool", title: "Piscina", icon: "Waves" },
  { id: "gym", title: "Gimnasio", icon: "Dumbbell" },
  { id: "green", title: "Áreas verdes", icon: "Trees" },
  { id: "social", title: "Salones multiusos", icon: "Wine" },
  { id: "security", title: "Seguridad 24/7", icon: "ShieldCheck" },
  { id: "lobby", title: "Lobby Climatizado", icon: "Armchair" },
];

export const GALLERY_IMAGES = [
  "https://i.postimg.cc/yYY3LW9T/100.jpg",
  "https://i.postimg.cc/CLLncdDr/2255.jpg",
  "https://i.postimg.cc/tCCnB7PM/555.jpg",
  "https://i.postimg.cc/rFFRfzW4/88.jpg",
  "https://i.postimg.cc/yYY3LW9h/99.jpg"
];

export const NAVIGATION_LINKS = [
  { name: "Inicio", href: "#home" },
  { name: "Proyectos", href: "#projects" },
  { name: "Amenidades", href: "#amenities" },
  { name: "Nosotros", href: "#about" },
  { name: "Contacto", href: "#contact" },
];
