export type ProductModel = {
  /** Identificador para el link directo a la ficha (sin espacios ni tildes). */
  id: string;
  name: string;
  description: string;
  image: string;
  specs: Array<{ label: string; value: string }>;
  highlights?: string[];
  /** Solo para familias con categorías (por ejemplo, bombas). */
  category?: string;
};

export type ProductCategory = {
  name: string;
  description: string;
  image: string;
};

export type ProductFamily = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  application: string;
  coverImage: string;
  /** Si existe, los modelos se agrupan por estas categorías. */
  categories?: ProductCategory[];
  models: ProductModel[];
};

export const productFamilies: ProductFamily[] = [
  {
    slug: "bombas-sumergibles",
    number: "01",
    title: "Bombas sumergibles",
    shortTitle: "Bombas sumergibles",
    description: "Bombas sumergibles en acero inoxidable y fierro fundido para pozos profundos, desagüe y drenaje.",
    application: "Agua potable, APR, riego, industria, aguas servidas, faenas y dewatering de mina.",
    coverImage: "/productos/bombas-pozo-grupo.png",
    categories: [
      {
        name: "Bombas sumergibles de pozo",
        description: "Para captación de agua subterránea en pozos de 4 a 12 pulgadas.",
        image: "/productos/bomba-4-grupo.png",
      },
      {
        name: "Bombas sumergibles de desagüe",
        description: "Para aguas servidas, agotamiento, construcción y drenaje de faenas.",
        image: "/productos/bombas-drenaje-grupo.png",
      },
    ],
    models: [
      {
        id: "bomba-4",
        category: "Bombas sumergibles de pozo",
        name: "Bomba 4\"",
        description: "Bomba sumergible compacta, de alta eficiencia y con impulsores flotantes para pozos de diámetro reducido.",
        image: "/productos/bomba-4-grupo.png",
        specs: [
          { label: "Caudal máximo", value: "24 m³/h" },
          { label: "Altura máxima", value: "278 m" },
          { label: "Potencia", value: "0,37 a 7,5 kW" },
          { label: "Diámetro máximo", value: "95 mm" },
          { label: "Temperatura del líquido", value: "Hasta 40 °C" },
          { label: "Sólidos", value: "100 g/m³; tamaño máx. 2 mm" },
        ],
        highlights: ["Válvula de retención incluida", "Impulsores flotantes"],
      },
      {
        id: "serie-hs",
        category: "Bombas sumergibles de pozo",
        name: "Serie HS",
        description: "Bomba robusta para condiciones severas, fabricada en acero inoxidable y preparada para aplicaciones de alto caudal.",
        image: "/productos/bombas-pozo-grupo.png",
        specs: [
          { label: "Caudal máximo", value: "270 m³/h" },
          { label: "Altura máxima", value: "300 m" },
          { label: "Diámetros", value: "6\", 8\" y 10\"" },
          { label: "Potencia", value: "5,5 a 185 kW" },
          { label: "Rango 6\"", value: "9 a 95 m³/h" },
          { label: "Rango 10\"", value: "108 a 215 m³/h" },
        ],
        highlights: ["Acero inoxidable", "Válvula de retención incluida", "Sólidos hasta 50 g/m³"],
      },
      {
        id: "series-hfs-hft",
        category: "Bombas sumergibles de pozo",
        name: "Series HFS y HFT",
        description: "Línea de gran capacidad para pozos profundos, minería e instalaciones que requieren alta presión y continuidad operacional.",
        image: "/productos/bomba-pozo-hft.png",
        specs: [
          { label: "Caudal máximo", value: "400 m³/h" },
          { label: "Altura máxima", value: "400 m" },
          { label: "Diámetros", value: "8\", 10\" y 12\"" },
          { label: "Potencia", value: "15 a 250 kW" },
          { label: "Serie HFS", value: "Acero inoxidable 316L; eje dúplex" },
          { label: "Serie HFT", value: "Fierro fundido" },
        ],
        highlights: ["Válvula de retención incluida", "Configuraciones hasta 12 pulgadas"],
      },
      {
        id: "serie-nc-s",
        category: "Bombas sumergibles de desagüe",
        name: "Serie NC / S",
        description: "Bomba sumergible de alto rendimiento para aguas servidas y desagüe, construida para trabajo continuo.",
        image: "/productos/bomba-drenaje.png",
        specs: [
          { label: "Caudal máximo", value: "230 m³/h" },
          { label: "Altura máxima", value: "110 m" },
          { label: "Potencia", value: "1,1 a 55 kW" },
          { label: "Temperatura del motor", value: "Hasta 40 °C" },
          { label: "Cuerpo", value: "Hierro fundido / acero inoxidable 304" },
          { label: "Sello", value: "Mecánico SIC/SIC" },
        ],
        highlights: ["Motor con aislación clase F", "Configuración para drenaje de mina"],
      },
    ],
  },
  {
    slug: "motores-sumergibles",
    number: "02",
    title: "Motores sumergibles",
    shortTitle: "Motores sumergibles",
    description: "Motores encapsulados y rebobinables para distintos diámetros, temperaturas, potencias y condiciones de operación.",
    application: "Pozos profundos, minería, agua potable, alta temperatura y sistemas de bombeo de gran potencia.",
    coverImage: "/productos/motores-azules.png",
    models: [
      {
        id: "motor-encapsulado-4",
        name: "Motor encapsulado 4\"",
        description: "Motor sumergible compacto en acero inoxidable para bombas de pozo de 4 pulgadas.",
        image: "/productos/motor-4.png",
        specs: [
          { label: "Potencia", value: "0,37 a 7,5 kW" },
          { label: "Voltaje 220 V", value: "0,37 a 2,2 kW" },
          { label: "Voltaje 380 V", value: "0,37 a 7,5 kW" },
          { label: "Material", value: "Acero inoxidable 304 / 316" },
        ],
      },
      {
        id: "motores-encapsulados-6-8",
        name: "Motores encapsulados 6\" y 8\"",
        description: "Motores para sistemas de mayor potencia, con voltajes estándar y especiales.",
        image: "/productos/motores-azules.png",
        specs: [
          { label: "Potencia 6\"", value: "5,5 a 45 kW" },
          { label: "Potencia 8\"", value: "30 kW a 150 HP" },
          { label: "Voltajes", value: "380–415 V; especiales 575, 660 y 1000 V" },
          { label: "Material", value: "Acero inoxidable 304 / 316" },
          { label: "Alta temperatura 6\"", value: "Hasta 90 °C" },
          { label: "Alta temperatura 8\"", value: "Hasta 75 °C" },
        ],
      },
      {
        id: "motores-rebobinables",
        name: "Motores rebobinables",
        description: "Línea de alta potencia en aleaciones resistentes para aplicaciones industriales y mineras exigentes.",
        image: "/productos/motor-rebobinable.png",
        specs: [
          { label: "Potencia 6\"", value: "30 a 50 HP" },
          { label: "Potencia 8\"", value: "40 a 125 HP" },
          { label: "Potencia 10\"", value: "250 a 540 HP" },
          { label: "Potencia 12\"", value: "300 a 536 HP" },
          { label: "Materiales", value: "Acero inoxidable 304, 316 y 904L" },
        ],
      },
    ],
  },
  {
    slug: "cables-sumergibles",
    number: "03",
    title: "Cable sumergible",
    shortTitle: "Cable sumergible",
    description: "Cables planos y redondos para alimentación eléctrica de bombas y motores sumergibles.",
    application: "Alimentación de bombas y motores en pozos profundos, minería, riego y sistemas de bombeo.",
    coverImage: "/productos/cable-sumergible.png",
    models: [
      {
        id: "cable-plano",
        name: "Cable plano",
        description: "Cable plano con cubierta de goma azul para bajadas en pozo, desde 3 conductores.",
        image: "/productos/cable-sumergible.png",
        specs: [
          { label: "Goma plano azul", value: "3 × 4 a 3 × 120 mm²" },
        ],
      },
      {
        id: "cable-redondo",
        name: "Cable redondo",
        description: "Cable redondo flexible para alimentación de motores sumergibles y equipos de superficie.",
        image: "/productos/cable-redondo.png",
        specs: [
          { label: "Goma redondo H07RN-F", value: "4 × 2,5 a 4 × 70 mm²" },
        ],
      },
    ],
  },
  {
    slug: "tableros-electricos",
    number: "04",
    title: "Tableros eléctricos y variadores de frecuencia",
    shortTitle: "Tableros eléctricos",
    description: "Soluciones de control y protección para adaptar el funcionamiento del equipo a la demanda del sistema.",
    application: "Automatización, partidas de motor y control de bombas sumergibles.",
    coverImage: "/productos/tablero-vfd-a.png",
    models: [
      {
        id: "tableros-variadores",
        name: "Tableros y variadores de frecuencia",
        description: "Soluciones de control y protección para adaptar el funcionamiento del equipo a la demanda del sistema.",
        image: "/productos/tablero-vfd-a.png",
        specs: [
          { label: "Variadores de frecuencia", value: "Parker" },
          { label: "Partidores suaves", value: "Danfoss" },
          { label: "Partida", value: "Estrella-triángulo" },
          { label: "Configuración", value: "Según potencia y aplicación" },
        ],
      },
      {
        id: "tablero-variador-b",
        name: "Tablero con variador (modelo B)",
        description: "Tablero de control con variador para operación según demanda.",
        image: "/productos/tablero-vfd-b.png",
        specs: [
          { label: "Configuración", value: "Según potencia y aplicación" },
        ],
      },
    ],
  },
];

export function getProductFamily(slug: string) {
  return productFamilies.find((family) => family.slug === slug);
}

/** Link directo a la ficha de un modelo dentro de la página de su familia. */
export function modelHref(family: ProductFamily, model: ProductModel) {
  return `/soluciones/${family.slug}#${model.id}`;
}
