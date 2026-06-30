import { AppsData, DocumentationData, Esfuerzo, ItineraryItem, MoneyData, MoodItemData, ServicesSummary, Tab, Temperatura } from "@/types/types";

export const heroImage = "/images.jpg";

export const tripName = "Sri Lanka & Maldivas · Summer"
export const tripSurname = "Naturaleza, cultura y paraíso 🏝️"

export const mapImage = "/itinerario-colombo-sri-lanka-maafushi-maldivas.webp"

export const tripDates = "19 - 30 Agosto 2026";

export const tabs: Tab[] = [
  { id: "inicio", label: "Inicio", icon: "🏠" },
  { id: "itinerario", label: "Itinerario", icon: "🗺️" },
  { id: "servicios", label: "Servicios", icon: "🏨" },
  { id: "info", label: "Info Práctica", icon: "ℹ️" },
  { id: "equipaje", label: "Equipaje", icon: "🎒" },
];

export const moods: MoodItemData[] = [
  {
    icon: "🐘",
    title: "Naturaleza Salvaje",
    desc: "Safaris en Yala, trenes entre montañas y playas infinitas.",
  },
  {
    icon: "🛕",
    title: "Cultura Milenaria",
    desc: "Templos budistas, la roca de Sigiriya y ciudades antiguas.",
  },
  {
    icon: "🏝️",
    title: "Paraíso Maldivo",
    desc: "Aguas turquesas, bancos de arena y snorkel con tortugas.",
  },
];

export const esfuerzo: Esfuerzo = {
  porcentaje: "60%",
  title: "MEDIO",
  text: "Itinerario dinámico con varios traslados en vehículo privado y el famoso tren entre montañas. Ritmo activo pero con tiempo para disfrutar cada destino. ¡Prepárate para vivir dos países en uno!"
}

export const itineraryData: ItineraryItem[] = [
  {
    day: "Sábado 18",
    title: "¡Bienvenidos a Sri Lanka!",
    desc: "Llegada al aeropuerto de Colombo y traslado al alojamiento. Tiempo para instalarse, conocer al grupo y comenzar la aventura en la isla.",
    where: "Colombo",
    included: "Alojamiento.",
    moneypot: "—",
  },
  {
    day: "Domingo 19",
    title: "Colombo y rumbo a Kandy",
    desc: "Recorrido por los puntos clave de Colombo y salida hacia Kandy. Visita al Templo del Diente de Buda, uno de los lugares más sagrados del budismo.",
    where: "Colombo - Kandy",
    included: "Desayuno y alojamiento.",
    moneypot: "Entrada Templo del Diente",
  },
  {
    day: "Lunes 20",
    title: "La roca de Sigiriya",
    desc: "Ascenso a la famosa Roca de Sigiriya, declarada Patrimonio de la Humanidad. Parada en Dambulla para visitar sus templos rupestres.",
    where: "Kandy - Sigiriya",
    included: "Desayuno y alojamiento.",
    moneypot: "Entrada Sigiriya, Templos de Dambulla",
  },
  {
    day: "Martes 21",
    title: "El tren más bonito del mundo",
    desc: "Viaje en tren entre montañas hasta Ella, considerado uno de los trayectos más espectaculares del mundo. Tarde libre para explorar el pueblo.",
    where: "Sigiriya - Ella",
    included: "Desayuno, billete de tren y alojamiento.",
    moneypot: "—",
  },
  {
    day: "Miércoles 22",
    title: "Ella: Little Adam's Peak y Nine Arches",
    desc: "Ruta de senderismo suave hasta el Little Adam's Peak con vistas increíbles. Visita al famoso puente de los Nueve Arcos.",
    where: "Ella",
    included: "Desayuno y alojamiento.",
    moneypot: "—",
  },
  {
    day: "Jueves 23",
    title: "Safari en el Parque Nacional Yala",
    desc: "Safari en jeep por el Parque Nacional Yala, famoso por su alta densidad de leopardos. También podremos ver elefantes, cocodrilos y muchas aves.",
    where: "Ella - Yala",
    included: "Desayuno, safari en jeep y alojamiento.",
    moneypot: "—",
  },
  {
    day: "Viernes 24",
    title: "Costa sur y rumbo a Maldivas",
    desc: "Mañana libre en la costa sur para disfrutar de la playa o hacer avistamiento de ballenas. Por la tarde, traslado al aeropuerto y vuelo a Malé.",
    where: "Yala - Mirissa - Malé",
    included: "Desayuno, vuelo a Malé y traslado a Maafushi. Alojamiento.",
    moneypot: "Avistamiento ballenas (opcional)",
  },
  {
    day: "Sábado 25",
    title: "Maafushi: banco de arena y snorkel",
    desc: "Excursión en barco para disfrutar de un banco de arena en medio del océano y sesión de snorkel para ver tortugas, rayas y tiburones de arrecife.",
    where: "Maafushi",
    included: "Desayuno, excursión en barco y alojamiento.",
    moneypot: "—",
  },
  {
    day: "Domingo 26",
    title: "Día libre en el paraíso",
    desc: "Día libre para disfrutar de la isla, hacer snorkel por tu cuenta, relajarte en la playa o contratar alguna excursión opcional.",
    where: "Maafushi",
    included: "Desayuno y alojamiento.",
    moneypot: "Actividades opcionales",
  },
  {
    day: "Lunes 27",
    title: "Hasta la próxima aventura",
    desc: "Desayuno y traslado al aeropuerto de Malé para el vuelo de regreso.",
    where: "Malé",
    included: "Desayuno y traslado al aeropuerto.",
    moneypot: "—",
  },
];

export const servicesSummary: ServicesSummary = {
  included: [
    { title: "Alojamiento en Sri Lanka y Maldivas (Maafushi)" },
    { title: "Todos los desayunos" },
    { title: "Transporte interno en vehículo privado con aire acondicionado" },
    { title: "Billete de tren entre montañas (Sigiriya - Ella)" },
    { title: "Safari en jeep por el Parque Nacional Yala" },
    { title: "Excursión en barco con banco de arena y snorkel en Maldivas" },
    { title: "Vuelo interno Colombo - Malé (según disponibilidad)" },
    { title: "Traslados aeropuerto - alojamiento - aeropuerto" },
    { title: "Seguro de viaje" },
    { title: "Coordinador WeRoad durante todo el viaje" },
  ],

  moneypot: [
    {
      title: "Entrada al Templo del Diente de Buda",
      price: "10€",
    },
    {
      title: "Entrada a la Roca de Sigiriya",
      price: "30€",
    },
    {
      title: "Templos rupestres de Dambulla",
      price: "10€",
    },
    {
      title: "Tasa turística Sri Lanka",
      price: "25€",
    },
    {
      title: "Cenas y comidas no incluidas",
      price: "~150€",
    },
  ],

  extras: [
    {
      title: "Avistamiento de ballenas en Mirissa (opcional)",
    },
    {
      title: "Excursiones opcionales en Maldivas",
    },
    {
      title: "Actividades nocturnas",
    },
  ],

  notIncluded: [
    { title: "Vuelos internacionales" },
    { title: "Visado de Sri Lanka (ETA online)" },
    { title: "Comidas y bebidas no especificadas" },
    { title: "Gastos personales y compras" },
  ],
};

export const documentationData: DocumentationData = {
  documentation: [
    {
      title: "Pasaporte",
      desc: "En perfecto estado, con al menos 6 meses de vigencia residual desde la fecha de entrada. Siempre contigo.",
    },
    {
      title: "Visado Sri Lanka (ETA)",
      desc: (
        <>
          Obligatorio tramitar online antes del viaje en{" "}
          <a
            href="https://eta.gov.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 font-semibold hover:text-sky-800 underline"
          >
            eta.gov.lk
          </a>
          . Coste aproximado de 50 USD. Se recomienda tramitarlo con al menos 1 semana de antelación.
        </>
      ),
    },
    {
      title: "Visado Maldivas",
      desc: "No es necesario tramitarlo con antelación. Se obtiene gratuitamente a la llegada (30 días para ciudadanos españoles).",
    },
  ],
};

export const appsData: AppsData = {
  sim:
    "En el aeropuerto de Colombo podéis comprar una SIM local (Dialog o Mobitel) por unos 10-15€ con datos suficientes para el viaje. En Maldivas también hay cobertura en Maafushi con las SIM de Sri Lanka en roaming, aunque es recomendable confirmar con el operador local.",
  apps: [
    {
      name: "WhatsApp",
      desc: "Comunicación del grupo.",
    },
    {
      name: "Google Maps",
      desc: "Orientación en destino.",
    },
    {
      name: "PickMe",
      desc: "App tipo Uber para moverse por Colombo.",
    },
  ],
}

export const moneyData: MoneyData = {
  currency: "Rupia de Sri Lanka (LKR) · Rufiyaa de Maldivas (MVR) — En Maldivas se usa mucho el USD",
  recommendation: (
    <>
      <p>En Sri Lanka los cajeros automáticos funcionan bien y las tarjetas se aceptan en la mayoría de establecimientos turísticos. En Maldivas, al ser una isla local, se paga principalmente en efectivo (USD o MVR). Es recomendable llevar dólares en efectivo para los gastos en Maldivas.</p>
      <p>Se prevé unos <span className="font-bold">250-300€</span> para los gastos del día a día (comidas, bebidas, souvenirs y pequeños gastos). Para vuestros gastos os recomiendo usar la tarjeta Revolut, os la podéis sacar{" "}
        <a
          href="https://revolut.com/referral/?referral-code=rococf5mo!AUG2-25-AR&geo-redirect"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 font-semibold hover:text-sky-800 underline"
        >
          aquí
        </a> y os la mandan a casa.</p>
    </>
  ),
  commonFund: {
    amount: "200€",
    intro: "Como ya sabéis tenemos un fondo común que se paga en efectivo al coordinador el primer día de la llegada, quien es el responsable de gestionarlo.",
    description: "Se usa para todos los gastos en los que participemos como grupo: entradas a los sitios de visita, transportes comunes, actividades extra y el fondo del coordinador. En caso de no usarse todo el fondo común, se repartirá la suma sobrante entre todos los participantes al final del viaje. Por otro lado, si se realizan más actividades de las previstas, se pedirá una suma mayor de fondo común.",
    documento: (
      <>
        Podéis consultar el fondo común con los ingresos y gastos actualizados en este{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1kgX2Q5pr05eD3MKLQHRoMS_NtP6HIJD4/edit?usp=sharing&ouid=114359442271263270458&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 font-semibold hover:text-sky-800 underline"
        >
          link
        </a>
        .
      </>
    ),
  },
};

export const temperatura: Temperatura = {
  icono: "☀️",
  grados: "Temperatura diurna: 28 °C – 32 °C",
  text: "Clima tropical cálido todo el año. En Maldivas la temperatura del agua ronda los 28-30°C. Temporada seca en la costa sur de Sri Lanka."
}

export const checklist: string[] = [
  "🎒 Mochila o maleta mediana (los traslados son frecuentes y hay que mover el equipaje a menudo).",
  "👕 Ropa de verano total, bañadores y ropa muy ligera y transpirable.",
  "👚 Ropa respetuosa para visitar templos: hombros y rodillas cubiertos (imprescindible).",
  "🧢 Gorra o sombrero y gafas de sol.",
  "👟 Zapatillas cómodas para caminar (Sigiriya, Little Adam's Peak) y chanclas para playa.",
  "🩴 Escarpines o zapatillas de agua para el snorkel en Maldivas.",
  "🧴 Crema de sol +50 (¡el sol tropical pega fuerte!) y after sun.",
  "🦟 Repelente de mosquitos (imprescindible para Sri Lanka).",
  "🔌 Se utilizan enchufes tipo británico (tipo G) en Sri Lanka. Necesario adaptador.",
  "🩱 Bikini / bañador para las excursiones en barco en Maldivas.",
  "🎒 Bolsa estanca o funda impermeable para el móvil en las excursiones de snorkel.",
  "💊 Medicación personal y botiquín básico.",
];

export const meds: string[] = [
  "Ibuprofeno",
  "Paracetamol",
  "Biodramina para el mareo (importante para el tren y los barcos)",
  "Fortasec",
  "Suero Oral",
  "Antihistamínicos",
  "Tiritas",
  "Repelente de mosquitos con DEET",
];