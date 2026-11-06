export type ProductModel = {
  name: string;
  description: string;
  image: string;
  specs: Array<{ label: string; value: string }>;
  highlights?: string[];
};

export type ProductFamily = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  application: string;
  coverImage: string;
  models: ProductModel[];
};

export const productFamilies: ProductFamily[] = [
  {
    slug: "bombas-pozo",
    number: "01",
    title: "Bombas sumergibles Hidrosteel",
    shortTitle: "Bombas de pozo",
    description: "Hidrosteel, nuestra línea propia de bombas sumergibles en acero inoxidable para abastecimiento, APR, riego, industria y minería.",
    application: "Agua limpia, captación subterránea, aumento de presión y dewatering de mina.",
    coverImage: "/productos/bombas-pozo-grupo.png",
    models: [
      {
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
    ],
  },
  {
    slug: "bombeo-solar",
    number: "02",
    title: "Sistemas de bombeo solar",
    shortTitle: "Bombeo solar",
    description: "Soluciones autónomas para extracción de agua mediante energía solar, diseñadas como un kit integrado.",
    application: "Riego, APR, ganadería y abastecimiento en zonas remotas o sin red eléctrica estable.",
    coverImage: "/productos/bombeo-solar.png",
    models: [
      {
        name: "FHOTON / High Efficiency",
        description: "Equipo solar completo para bombeo sumergible, disponible en configuraciones de 4 y 6 pulgadas.",
        image: "/productos/bombeo-solar.png",
        specs: [
          { label: "Caudal máximo 4\"", value: "16 m³/h" },
          { label: "Caudal máximo 6\"", value: "96 m³/h" },
          { label: "Altura máxima 4\"", value: "240 m" },
          { label: "Altura máxima 6\"", value: "350 m" },
          { label: "Potencia 4\"", value: "0,5 a 2,2 kW" },
          { label: "Potencia 6\"", value: "5,5 a 37 kW" },
        ],
        highlights: ["Bomba y motor sumergibles", "Drive solar / VFD", "Transductor de presión"],
      },
    ],
  },
  {
    slug: "bombas-industriales",
    number: "03",
    title: "Bombas centrífugas e industriales",
    shortTitle: "Bombas industriales",
    description: "Bombas multietapa horizontales y verticales para agua limpia, aumento de presión y procesos productivos.",
    application: "Industria, minería, procesos, distribución de agua y sistemas de presurización.",
    coverImage: "/productos/bombas-industriales.png",
    models: [
      {
        name: "Serie MH horizontal",
        description: "Bomba centrífuga multietapa horizontal en acero inoxidable para aplicaciones compactas de alta presión.",
        image: "/productos/bombas-industriales.png",
        specs: [
          { label: "Caudal máximo", value: "29 m³/h" },
          { label: "Altura máxima", value: "104 m" },
          { label: "Temperatura del líquido", value: "-15 a 100 °C" },
          { label: "Potencia", value: "0,33 a 5,5 kW" },
          { label: "Material", value: "Acero inoxidable 304 / 316" },
        ],
      },
      {
        name: "Serie VR vertical",
        description: "Bomba centrífuga multietapa vertical para mayores caudales y alturas en instalaciones industriales.",
        image: "/productos/bombas-verticales.png",
        specs: [
          { label: "Caudal máximo", value: "120 m³/h" },
          { label: "Altura máxima", value: "320 m" },
          { label: "Temperatura del líquido", value: "-15 a 120 °C" },
          { label: "Potencia", value: "0,37 a 45 kW" },
          { label: "Material", value: "Acero inoxidable 304 / 316" },
        ],
      },
    ],
  },
  {
    slug: "drenaje",
    number: "04",
    title: "Bombas para aguas servidas y drenaje",
    shortTitle: "Drenaje y aguas servidas",
    description: "Equipos sumergibles para aguas servidas, agotamiento, construcción y desagüe de operaciones mineras.",
    application: "Instalaciones sanitarias, faenas, lodos, aguas sucias y dewatering.",
    coverImage: "/productos/bombas-drenaje-grupo.png",
    models: [
      {
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
    number: "05",
    title: "Motores sumergibles",
    shortTitle: "Motores sumergibles",
    description: "Motores encapsulados y rebobinables para distintos diámetros, temperaturas, potencias y condiciones de operación.",
    application: "Pozos profundos, minería, agua potable, alta temperatura y sistemas de bombeo de gran potencia.",
    coverImage: "/productos/motores-azules.png",
    models: [
      {
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
    number: "06",
    title: "Cable sumergible Hidrocable",
    shortTitle: "Cable sumergible",
    description: "Hidrocable, nuestra línea propia de cables planos y redondos para alimentación eléctrica de bombas y motores sumergibles.",
    application: "Alimentación de bombas y motores en pozos profundos, minería, riego y sistemas de bombeo solar.",
    coverImage: "/productos/cable-sumergible.png",
    models: [
      {
        name: "Hidrocable plano",
        description: "Cable plano con cubierta de goma azul para bajadas en pozo, desde 3 conductores.",
        image: "/productos/cable-sumergible.png",
        specs: [
          { label: "Goma plano azul", value: "3 × 4 a 3 × 120 mm²" },
        ],
        highlights: ["Marca propia Hidroterra"],
      },
      {
        name: "Hidrocable redondo",
        description: "Cable redondo flexible para alimentación de motores sumergibles y equipos de superficie.",
        image: "/productos/cable-redondo.png",
        specs: [
          { label: "Goma redondo H07RN-F", value: "4 × 2,5 a 4 × 70 mm²" },
        ],
        highlights: ["Marca propia Hidroterra"],
      },
    ],
  },
  {
    slug: "tableros-electricos",
    number: "07",
    title: "Tableros eléctricos y variadores de frecuencia",
    shortTitle: "Tableros eléctricos",
    description: "Soluciones de control y protección para adaptar el funcionamiento del equipo a la demanda del sistema.",
    application: "Automatización, partidas de motor y control de bombas sumergibles.",
    coverImage: "/productos/tablero-vfd-a.png",
    models: [
      {
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
        name: "Tablero con variador (modelo B)",
        description: "Tablero de control con variador para operación según demanda.",
        image: "/productos/tablero-vfd-b.png",
        specs: [
          { label: "Configuración", value: "Según potencia y aplicación" },
        ],
      },
    ],
  },
  {
    slug: "control-conduccion",
    number: "08",
    title: "Tubería flexible para pozos",
    shortTitle: "Tubería flexible",
    description: "Tubería flexible para pozos que simplifica el transporte y reduce tiempos y costos de instalación.",
    application: "Conducción desde pozos profundos.",
    coverImage: "/productos/tuberia-flexible.png",
    models: [
      {
        name: "Tubería flexible Wellmaster",
        description: "Tubería flexible para pozos que simplifica el transporte y reduce tiempos y costos de instalación.",
        image: "/productos/tuberia-flexible.png",
        specs: [
          { label: "Series", value: "150, 200, 250 y 400" },
          { label: "Tracción", value: "Hasta 20 toneladas" },
          { label: "Comportamiento", value: "Sin corrosión" },
          { label: "Certificación", value: "Aprobaciones NSF" },
        ],
        highlights: ["Alto rendimiento hidráulico", "Sin crecimiento de bacterias", "Menor costo de instalación y transporte"],
      },
    ],
  },
];

export function getProductFamily(slug: string) {
  return productFamilies.find((family) => family.slug === slug);
}
