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
        description: "Bomba sumergible de 3 pulgadas para pozos angostos, con protección integrada contra marcha en seco y arranque suave. Ideal para suministro de agua doméstica, abastecimiento desde pozos, riego y descenso de aguas subterráneas.",
        image: "/productos/bomba-3-foto.jpg",
        specs: [
          { label: "Caudal máximo", value: "9 m³/h" },
          { label: "Altura máxima", value: "210 m" },
          { label: "Temperatura del líquido", value: "0 a 40 °C" },
          { label: "Profundidad de instalación", value: "Hasta 150 m" },
          { label: "Diámetro", value: "3\"" },
          { label: "Versiones", value: "SQ y SQE" },
        ],
        highlights: [
          "Protección integrada contra marcha en seco",
          "Arranque suave",
          "Protección contra sobrevoltaje y bajo voltaje",
          "Alto rendimiento",
          "Versión SQE: protegida, supervisada y controlada con CU 300 / CU 301 y R100",
        ],
      },
      {
        id: "bomba-4",
        category: "Bombas sumergibles de pozo",
        name: "Bomba 4\"",
        description: "Bomba sumergible de 4 pulgadas en acero inoxidable con sistema de etapas flotantes, que mejora la eficiencia y protege contra el desgaste por arena. Para pozos profundos, cisternas, llenado de estanques y suministro doméstico o comercial ligero.",
        image: "/productos/bomba-4-foto.png",
        specs: [
          { label: "Caudal máximo", value: "6 m³/h (100 l/min)" },
          { label: "Altura máxima", value: "340 m" },
          { label: "Potencia", value: "0,37 a 5,5 kW (0,5 a 7,5 HP)" },
          { label: "Caudales nominales", value: "25, 30, 45, 60 y 70 l/min" },
          { label: "Descarga", value: "1 1/4\" BSP" },
          { label: "Diámetro máximo", value: "99,1 mm con guarda cable (motor 95 mm)" },
          { label: "Temperatura del agua", value: "Hasta 50 °C" },
          { label: "Electrobomba", value: "Con motor 2 hilos 220 V (modelos seleccionados)" },
        ],
        highlights: [
          "Etapas flotantes: cada impulsor flota de forma independiente",
          "Succión y descarga en acero inoxidable",
          "Válvula check desmontable accionada por resorte",
          "Cojinete cerámico y buje de caucho contra el desgaste por arena",
        ],
      },
      {
        id: "bombas-6-8-y-10",
        category: "Bombas sumergibles de pozo",
        name: "Bombas 6\", 8\" y 10\"",
        description: "Bombas sumergibles construidas completamente en acero inoxidable AISI 304, con impulsor de flujo mixto y válvula de retención incorporada, para agua limpia en pozos profundos.",
        image: "/productos/bombas-6-8-10.png",
        specs: [
          { label: "Caudal máximo", value: "270 m³/h" },
          { label: "Altura máxima", value: "480 m" },
          { label: "Potencia", value: "3 a 185 kW (4 a 250 HP)" },
          { label: "Diámetros", value: "6\", 8\" y 10\"" },
          { label: "Descarga", value: "2 1/2\" a 4\" BSP (6\"); 5\" (8\"); 6\" BSP (10\")" },
          { label: "Material", value: "Acero inoxidable AISI 304; eje AISI 420" },
          { label: "Sólidos", value: "Paso máx. 2 mm; hasta 50 ppm" },
        ],
        highlights: ["Válvula de retención incorporada", "Impulsor de flujo mixto", "Se vende como parte hidráulica o kit con motor"],
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
        description: "Bomba horizontal de carcasa de voluta y una etapa, con diseño back pull-out, casquillo protector del eje y anillos de desgaste reemplazables. Se mantiene sin desconectar las cañerías.",
        image: "/productos/centrifuga-normalizada.jpg",
        specs: [
          { label: "Caudal máximo", value: "1.160 m³/h (19.330 l/min)" },
          { label: "Altura máxima", value: "162 m" },
          { label: "Presión máxima", value: "16 bar" },
          { label: "Temperatura del líquido", value: "Hasta 140 °C" },
          { label: "Velocidad", value: "Hasta 2.900 rpm" },
          { label: "Norma", value: "ISO 2858 / ISO 5199" },
        ],
        highlights: ["Riego, abastecimiento, climatización, contra incendio y agua caliente", "También para aceites, salmuera y agua salobre"],
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
        description: "Motores sumergibles de 4 pulgadas con estator sellado herméticamente en acero inoxidable, lubricados por agua y aprobados para uso con agua potable.",
        image: "/productos/motor-4-aislado.png",
        specs: [
          { label: "Potencia", value: "0,37 a 7,5 kW (0,5 a 10 HP)" },
          { label: "Monofásico 220–230 V", value: "0,37 a 2,2 kW (0,5 a 3 HP); 3 hilos hasta 3,7 kW" },
          { label: "Trifásico 380–415 V", value: "0,37 a 7,5 kW (0,5 a 10 HP)" },
          { label: "Material", value: "Acero inoxidable 304 / 316" },
          { label: "Frecuencia", value: "50 Hz" },
          { label: "Montaje", value: "Dimensiones NEMA" },
        ],
        highlights: ["Líquido refrigerante no contaminante", "Cable con conector extraíble", "Sello mecánico con lanzador de arena (trifásicos)"],
      },
      {
        id: "motores-encapsulados-6-8",
        name: "Motores encapsulados 6\" y 8\"",
        description: "Motores trifásicos de montaje NEMA de doble brida, con cojinete de empuje tipo Kingsbury lubricado por agua y cable reemplazable en terreno. Aptos para trabajar con variador de frecuencia.",
        image: "/productos/motores-6-8-foto.png",
        specs: [
          { label: "Potencia 6\"", value: "5,5 a 45 kW (7,5 a 60 HP)" },
          { label: "Potencia 8\"", value: "30 a 150 kW (40 a 200 HP)" },
          { label: "Voltaje", value: "380 V, 50 Hz" },
          { label: "Arranque", value: "Directo (3 cables) o estrella-triángulo (6 cables)" },
          { label: "Construcción", value: "CI-304SS, 304 SS y 316 SS" },
          { label: "Alta temperatura 6\"", value: "Hasta 90 °C" },
          { label: "Alta temperatura 8\"", value: "Hasta 75 °C" },
        ],
        highlights: ["Eje estriado de acero inoxidable", "Cubierta contra arena y sello mecánico en la salida del eje"],
      },
      {
        id: "motores-rebobinables",
        name: "Motores rebobinables",
        description: "Motores de doble brida con estator rebobinable, que reduce los costos de reparación. Llenos de líquido lubricante no contaminante, con sellos de carburo de silicio contra la arena y preparados para sensor PT100.",
        image: "/productos/motores-grupo-foto.jpg",
        specs: [
          { label: "Potencia 4\" (baño de aceite)", value: "0,75 a 10 HP" },
          { label: "Potencia 6\"", value: "10 a 50 HP" },
          { label: "Potencia 8\"", value: "60 a 125 HP" },
          { label: "Potencia 10\"", value: "150 a 250 HP" },
          { label: "Potencia 12\"", value: "300 a 536 HP" },
          { label: "Voltaje", value: "380 V, 50 Hz" },
          { label: "Materiales", value: "CI-304SS, 316 SS y 904L" },
        ],
        highlights: ["Instalación vertical u horizontal", "Cojinete axial tipo Kingsbury", "Cable de 6 m"],
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
        image: "/productos/tuberia-acople-foto.jpg",
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
    coverImage: "/productos/caneria-inox-foto.jpg",
    models: [
      {
        id: "caneria-galvanizada",
        name: "Cañería galvanizada",
        description: "Cañería de acero con recubrimiento de zinc que la protege de la corrosión.",
        image: "/productos/caneria-galvanizada-foto.jpg",
        specs: [
          { label: "Material", value: "Acero galvanizado" },
          { label: "Hilo", value: "NPT o BSP" },
        ],
      },
      {
        id: "caneria-acero-inoxidable",
        name: "Cañería de acero inoxidable",
        description: "Cañería resistente a la corrosión para agua potable, fluidos agresivos e industria.",
        image: "/productos/caneria-inox-foto.jpg",
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
    description: "Válvulas mariposa, de tapón lubricada y ventosas de doble efecto para controlar, aislar y proteger el sistema de bombeo.",
    application: "Corte y regulación de flujo, protección contra retorno, expulsión de aire en las líneas y aislamiento de equipos para mantención.",
    coverImage: "/productos/ventosa-doble-efecto.jpg",
    models: [
      {
        id: "valvula-mariposa",
        name: "Válvula mariposa con reductor",
        description: "Válvula mariposa de 4\" accionada con volante y reductor, con indicador de posición. Certificada para redes contra incendio y apta para redes de agua.",
        image: "/productos/valvula-mariposa.jpg",
        specs: [
          { label: "Diámetro", value: "4\"" },
          { label: "Presión de trabajo", value: "250 psi" },
          { label: "Accionamiento", value: "Volante con reductor e indicador" },
          { label: "Certificación", value: "UL / FM" },
          { label: "Uso", value: "Redes contra incendio y agua" },
        ],
        highlights: ["Apertura y cierre suave, sin golpe de ariete", "Indicador visible de posición abierta o cerrada"],
      },
      {
        id: "valvula-tapon",
        name: "Válvula de tapón lubricada",
        description: "Válvula de tapón bridada, de cierre en un cuarto de vuelta y con lubricación por la parte superior, para un cierre hermético en agua, aceite y gas.",
        image: "/productos/valvula-tapon.jpg",
        specs: [
          { label: "Diámetro", value: "2\"" },
          { label: "Presión", value: "200 WOG" },
          { label: "Conexión", value: "Bridada" },
          { label: "Cuerpo", value: "Hierro fundido" },
          { label: "Operación", value: "Cuarto de vuelta" },
        ],
      },
      {
        id: "ventosa-doble-efecto",
        name: "Ventosa de doble efecto",
        description: "Válvula de aire que expulsa el aire acumulado en las líneas de impulsión y deja entrar aire al vaciarlas, evitando golpes de ariete y vacío en la cañería.",
        image: "/productos/ventosa-doble-efecto.jpg",
        specs: [
          { label: "Diámetros", value: "3\" y 6\"" },
          { label: "Clase", value: "ANSI 150 lb" },
          { label: "Cuerpo", value: "Acero inoxidable CF8M (316)" },
          { label: "Flotador", value: "Acero inoxidable" },
          { label: "Asiento", value: "Viton" },
          { label: "Conexión", value: "Bridada" },
        ],
        highlights: ["Expulsa y admite aire", "Para líneas de impulsión de pozos y redes de agua"],
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
    coverImage: "/productos/thredolet-foto.jpg",
    models: [
      {
        id: "copla",
        name: "Coplas",
        description: "Conexión roscada para unir dos tramos de cañería del mismo diámetro.",
        image: "/productos/copla-real.jpg",
        specs: [
          { label: "Unión", value: "Roscada" },
          { label: "Uso", value: "Unión de tramos" },
        ],
      },
      {
        id: "thredolet",
        name: "Thredolet",
        description: "Conexión que se suelda sobre la cañería para crear una derivación con salida roscada.",
        image: "/productos/thredolet-foto.jpg",
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
