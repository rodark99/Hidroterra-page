export type ProductModel = {
  /** Identificador para el link directo a la ficha (sin espacios ni tildes). */
  id: string;
  name: string;
  description: string;
  /** Opcional: si no hay foto se muestra "Foto próximamente". */
  image?: string;
  specs: Array<{ label: string; value: string }>;
  highlights?: string[];
  /** Solo para familias con categorías (por ejemplo, bombas). */
  category?: string;
  /** Catálogo descargable en PDF (archivo dentro de /public/catalogos). */
  catalog?: { label: string; href: string };
};

export type ProductCategory = {
  name: string;
  description: string;
  image: string;
  catalog?: { label: string; href: string };
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
  /** Catálogo descargable de toda la sección. */
  catalog?: { label: string; href: string };
  models: ProductModel[];
};

export const productFamilies: ProductFamily[] = [
  {
    slug: "bombas-sumergibles",
    number: "01",
    title: "Bombas",
    shortTitle: "Bombas",
    description: "Bombas sumergibles para pozos y desagüe, y bombas centrífugas de superficie, fabricadas en acero dúplex, acero inoxidable y hierro fundido.",
    application: "Agua potable, APR, riego, industria, procesos, aguas servidas, faenas y dewatering de mina.",
    coverImage: "/productos/bombas-pozo-grupo.png",
    categories: [
      {
        name: "Bombas sumergibles de pozo",
        description: "Para captación de agua subterránea en pozos de 3 a 12 pulgadas.",
        image: "/productos/bomba-4-grupo.png",
      },
      {
        name: "Bombas sumergibles de desagüe",
        description: "Para aguas servidas, agotamiento, construcción y drenaje de faenas mineras.",
        image: "/productos/minetuff-grupo.jpg",
        catalog: { label: "Catálogo Minetuff (PDF)", href: "/catalogos/catalogo-minetuff.pdf" },
      },
      {
        name: "Bombas centrífugas",
        description: "Bombas de superficie para abastecimiento, presurización, riego, climatización, incendio e industria.",
        image: "/productos/centrifuga-monoblock.jpg",
      },
    ],
    models: [
      {
        id: "bomba-3",
        category: "Bombas sumergibles de pozo",
        name: "Bomba 3\" SQ",
        description: "La solución más simple para pozos angostos: se conecta directo a 220 V, sin tablero, y se protege sola contra trabajo en seco y variaciones de voltaje. Ideal para casas, parcelas, APR pequeños y riego.",
        image: "/productos/bomba-3-foto.jpg",
        specs: [
          { label: "Caudal máximo", value: "9 m³/h" },
          { label: "Altura máxima", value: "237 m" },
          { label: "Potencia", value: "0,70 a 1,85 kW" },
          { label: "Alimentación", value: "Monofásica 220 V, 50/60 Hz" },
          { label: "Diámetro mínimo del pozo", value: "76 mm (3\")" },
          { label: "Arena", value: "Hasta 50 g/m³" },
          { label: "Temperatura del líquido", value: "Hasta 40 °C" },
          { label: "Modelos", value: "SQ 1, SQ 2, SQ 3, SQ 5 y SQ 7" },
        ],
        highlights: [
          "Motor de imán permanente de alta eficiencia",
          "Arranque suave: cuida la instalación y la red eléctrica",
          "Protección contra marcha en seco, sobrecarga, sobretemperatura y sobre/baja tensión",
          "Impulsores flotantes y válvula de retención incorporada",
        ],
      },
      {
        id: "bomba-4",
        category: "Bombas sumergibles de pozo",
        name: "Bomba 4\"",
        description: "Bomba sumergible compacta, de alta eficiencia y con impulsores flotantes para pozos de diámetro reducido.",
        image: "/productos/bomba-4-foto.png",
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
        id: "bombas-6-8-y-10",
        category: "Bombas sumergibles de pozo",
        name: "Bombas 6\", 8\" y 10\"",
        description: "Bombas sumergibles de 6, 8 y 10 pulgadas para pozos profundos, en acero inoxidable, para agua potable, APR, riego e industria.",
        image: "/productos/bombas-6-8-10.png",
        specs: [
          { label: "Diámetros", value: "6\", 8\" y 10\"" },
          { label: "Material", value: "Acero inoxidable" },
        ],
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
        id: "serie-hs-hierro-fundido",
        category: "Bombas sumergibles de pozo",
        name: "Serie HS Hierro Fundido",
        description: "Línea de gran capacidad para pozos profundos, minería e instalaciones que requieren alta presión y continuidad operacional.",
        image: "/productos/bomba-pozo-hft.png",
        specs: [
          { label: "Caudal máximo", value: "400 m³/h" },
          { label: "Altura máxima", value: "400 m" },
          { label: "Diámetros", value: "8\", 10\" y 12\"" },
          { label: "Potencia", value: "15 a 250 kW" },
          { label: "Material", value: "Hierro fundido" },
        ],
        highlights: ["Válvula de retención incluida", "Configuraciones hasta 12 pulgadas"],
      },
      {
        id: "minetuff",
        category: "Bombas sumergibles de desagüe",
        name: "Minetuff",
        description: "Bombas industriales para drenaje pesado en minería y construcción, livianas y de bajo costo de mantenimiento.",
        image: "/productos/minetuff.jpg",
        specs: [
          { label: "Potencia", value: "5 a 90 kW (7 a 120 HP)" },
          { label: "Versión HH (grandes alturas)", value: "Hasta 200 m" },
          { label: "Versión HV (grandes caudales)", value: "Hasta 500 m³/h" },
          { label: "Inmersión máxima", value: "20 m (75 m en 90 kW)" },
          { label: "Temperatura del líquido", value: "Hasta 40 °C" },
          { label: "Motor", value: "Trifásico 380 V – 50 Hz" },
          { label: "Protección", value: "IP68; aislamiento clase H (185 °C)" },
          { label: "Descarga", value: "Roscada BSP" },
        ],
        highlights: ["Impulsores en acero dúplex", "Revestimiento antiabrasivo en el extremo húmedo", "Incluye 20 m de cable H07RN-F"],
        catalog: { label: "Descargar catálogo (PDF)", href: "/catalogos/catalogo-minetuff.pdf" },
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
      {
        id: "centrifuga-monoblock-f",
        category: "Bombas centrífugas",
        name: "Centrífuga monoblock Serie F",
        description: "Bomba compacta con motor y bomba en un solo bloque, bajo norma EN 733. Fácil de instalar y mantener: la opción de confianza para abastecimiento, presurización, riego, climatización e incendio.",
        image: "/productos/centrifuga-monoblock.jpg",
        specs: [
          { label: "Caudal máximo", value: "345 m³/h" },
          { label: "Altura máxima", value: "98 m" },
          { label: "Temperatura del líquido", value: "-10 a +90 °C" },
          { label: "Presión máxima", value: "10 bar (PN10)" },
          { label: "Norma", value: "EN 733" },
          { label: "Cuerpo", value: "Fierro fundido" },
          { label: "Eje", value: "Acero inoxidable AISI 431" },
          { label: "Motor", value: "2 polos, protección IP55" },
        ],
        highlights: ["Dimensiones normalizadas: reemplaza fácilmente equipos existentes", "Para agua limpia sin partículas abrasivas"],
      },
      {
        id: "centrifuga-normalizada",
        category: "Bombas centrífugas",
        name: "Centrífuga normalizada",
        description: "Bomba de proceso sobre base para agua, químicos y líquidos agresivos. Su diseño back pull-out permite retirar el rotor sin desconectar las cañerías, reduciendo los tiempos de mantención.",
        image: "/productos/centrifuga-normalizada.jpg",
        specs: [
          { label: "Caudal máximo", value: "3.300 m³/h" },
          { label: "Altura máxima", value: "162 m" },
          { label: "Presión máxima", value: "25 bar" },
          { label: "Temperatura del líquido", value: "Hasta 400 °C" },
          { label: "Norma", value: "ISO 2858 / ISO 5199" },
          { label: "Diseño", value: "Voluta horizontal, back pull-out" },
        ],
        highlights: ["Amplia variedad de materiales y sellos", "Industria, minería, química, desalación y alimentos"],
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
    coverImage: "/productos/motores-grupo-foto.jpg",
    models: [
      {
        id: "motor-encapsulado-4",
        name: "Motor encapsulado 4\"",
        description: "Motor sumergible compacto en acero inoxidable para bombas de pozo de 4 pulgadas.",
        image: "/productos/motor-4-aislado.png",
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
        image: "/productos/motores-6-8-foto.png",
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
        image: "/productos/motores-grupo-foto.jpg",
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
    coverImage: "/productos/cable-plano-foto.jpg",
    catalog: { label: "Catálogo cable sumergible (PDF)", href: "/catalogos/catalogo-cable-sumergible.pdf" },
    models: [
      {
        id: "cable-plano",
        name: "Cable plano de goma",
        description: "Cable plano de 3 y 4 conductores con aislación y cubierta de goma, no tóxico y resistente al agua: apto para agua potable y pozos de hasta 500 m de profundidad.",
        image: "/productos/cable-plano-foto.jpg",
        specs: [
          { label: "Conductores", value: "3 y 4 (plano)" },
          { label: "Sección", value: "1,5 a 120 mm²" },
          { label: "Tensión", value: "1.100 V" },
          { label: "Temperatura de operación", value: "-40 a +90 °C" },
          { label: "Profundidad", value: "Hasta 500 m" },
          { label: "Conductor", value: "Cobre flexible clase 5" },
          { label: "Aislación", value: "Goma EPR / EPDM" },
          { label: "Normas", value: "BS EN 50525, IEC 60245, VDE 0282" },
        ],
        highlights: ["Apto para agua potable", "Resistente a aceites, ácidos, químicos y ozono", "Resistente a la intemperie"],
        catalog: { label: "Descargar catálogo (PDF)", href: "/catalogos/catalogo-cable-sumergible.pdf" },
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
  {
    slug: "tuberia-flexible",
    number: "05",
    title: "Tubería flexible para pozos",
    shortTitle: "Tubería flexible",
    description: "Tubería flexible para pozos que simplifica el transporte y reduce tiempos y costos de instalación.",
    application: "Conducción desde pozos profundos para agua potable, riego, industria y minería.",
    coverImage: "/productos/tuberia-flexible-foto.jpg",
    models: [
      {
        id: "tuberia-flexible",
        name: "Tubería flexible para pozos",
        description: "Tubería flexible con acoples de acero inoxidable roscados que se instala en una fracción del tiempo de una tubería rígida.",
        image: "/productos/copla-foto.png",
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
  {
    slug: "canerias",
    number: "06",
    title: "Cañerías",
    shortTitle: "Cañerías",
    description: "Cañerías galvanizadas, de acero inoxidable y de acero negro, con hilo NPT o BSP.",
    application: "Columnas de impulsión, redes de agua, instalaciones industriales y montaje de equipos de bombeo.",
    coverImage: "/productos/canerias.png",
    models: [
      {
        id: "caneria-galvanizada",
        name: "Cañería galvanizada",
        description: "Cañería de acero con recubrimiento de zinc que la protege de la corrosión.",
        image: "/productos/caneria-galvanizada.png",
        specs: [
          { label: "Material", value: "Acero galvanizado" },
          { label: "Hilo", value: "NPT o BSP" },
        ],
      },
      {
        id: "caneria-acero-inoxidable",
        name: "Cañería de acero inoxidable",
        description: "Cañería resistente a la corrosión para agua potable, fluidos agresivos e industria.",
        image: "/productos/caneria-inox.png",
        specs: [
          { label: "Material", value: "Acero inoxidable" },
          { label: "Hilo", value: "NPT o BSP" },
        ],
      },
      {
        id: "caneria-acero-negro",
        name: "Cañería de acero negro",
        description: "Cañería de acero al carbono sin recubrimiento, de alta resistencia mecánica.",
        image: "/productos/caneria-acero-negro.png",
        specs: [
          { label: "Material", value: "Acero al carbono" },
          { label: "Hilo", value: "NPT o BSP" },
        ],
      },
    ],
  },
  {
    slug: "valvulas",
    number: "07",
    title: "Válvulas",
    shortTitle: "Válvulas",
    description: "Válvulas manuales y de retención para controlar, aislar y proteger el sistema de bombeo.",
    application: "Corte y regulación de flujo, protección contra retorno y aislamiento de equipos para mantención.",
    coverImage: "/productos/valvulas.png",
    models: [
      {
        id: "valvula-bola",
        name: "Válvula de bola",
        description: "Válvula manual de apertura y cierre rápido con un cuarto de vuelta.",
        image: "/productos/valvula-bola.png",
        specs: [
          { label: "Tipo", value: "Manual" },
          { label: "Uso", value: "Corte rápido de flujo" },
        ],
      },
      {
        id: "valvula-compuerta",
        name: "Válvula de compuerta",
        description: "Válvula manual con volante para aislar tramos y equipos de la instalación.",
        image: "/productos/valvula-compuerta.png",
        specs: [
          { label: "Tipo", value: "Manual" },
          { label: "Uso", value: "Aislamiento de tramos" },
        ],
      },
      {
        id: "valvula-retencion",
        name: "Válvula de retención (check)",
        description: "Permite el paso del agua en un solo sentido y evita el retorno hacia la bomba.",
        image: "/productos/valvula-retencion.png",
        specs: [
          { label: "Tipo", value: "Retención" },
          { label: "Uso", value: "Evita el retorno del flujo" },
        ],
      },
    ],
  },
  {
    slug: "conexiones",
    number: "08",
    title: "Conexiones",
    shortTitle: "Conexiones",
    description: "Coplas, thredolets y otras conexiones para unir y derivar cañerías.",
    application: "Unión de tramos, derivaciones y montaje de instrumentos en redes de agua e industria.",
    coverImage: "/productos/conexiones.png",
    models: [
      {
        id: "copla",
        name: "Coplas",
        description: "Conexión roscada para unir dos tramos de cañería del mismo diámetro.",
        image: "/productos/copla.png",
        specs: [
          { label: "Unión", value: "Roscada" },
          { label: "Uso", value: "Unión de tramos" },
        ],
      },
      {
        id: "thredolet",
        name: "Thredolet",
        description: "Conexión que se suelda sobre la cañería para crear una derivación con salida roscada.",
        image: "/productos/thredolet.png",
        specs: [
          { label: "Unión", value: "Soldada a la cañería" },
          { label: "Salida", value: "Roscada" },
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
