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
    desc: "Safaris de elefantes en Minneriya, trenes entre montañas y playas infinitas.",
  },
  {
    icon: "🛕",
    title: "Cultura Milenaria",
    desc: "Templos budistas, la roca de Sigiriya, Anuradhapura y la ceremonia del Diente de Buda.",
  },
  {
    icon: "🏝️",
    title: "Paraíso Maldivo",
    desc: "Aguas turquesas, bancos de arena y snorkel con tortugas en Maafushi.",
  },
];

export const esfuerzo: Esfuerzo = {
  porcentaje: "60%",
  title: "MEDIO",
  text: "Itinerario dinámico con varios traslados en vehículo privado, el famoso tren entre montañas y rafting en Kitulgala. Ritmo activo pero con tiempo para disfrutar cada destino. ¡Prepárate para vivir dos países en uno!"
}

export const itineraryData: ItineraryItem[] = [
  {
    day: "Miércoles 19",
    title: "¡Bienvenidos a Sri Lanka!",
    desc: "Llegada al aeropuerto de Colombo y traslado a Negombo. Tiempo para instalarse, conocer al grupo y comenzar la aventura en la isla. Se puede organizar un briefing en el lobby del hotel con el partner local.",
    where: "Negombo",
    included: "Alojamiento.",
    moneypot: "—",
  },
  {
    day: "Jueves 20",
    title: "Rumbo a la antigua capital: Anuradhapura",
    desc: "Traslado en van desde Negombo a Anuradhapura (aprox. 5 horas). Visita al sitio histórico de Anuradhapura con guía local y, si hay tiempo, visita a Mihintale. Se recomienda cenar en el hotel.",
    where: "Negombo - Anuradhapura",
    included: "Desayuno, transporte en van con conductor y alojamiento.",
    moneypot: "Visita guiada Anuradhapura (~6000-8000 LKR + propina)",
  },
  {
    day: "Viernes 21",
    title: "Safari en Minneriya y la roca de Sigiriya",
    desc: "Safari de elefantes en el Parque Nacional Minneriya (o Hurulu Eco Park según la temporada). Almuerzo local incluido con experiencia auténtica en pueblo local. Por la tarde, ascenso a la famosa Roca de Sigiriya (entrada 35 USD). Opcionalmente, visita a un centro Ayurvédico.",
    where: "Anuradhapura - Minneriya - Sigiriya",
    included: "Desayuno, almuerzo local, transporte en van y alojamiento.",
    moneypot: "Entrada Sigiriya (35 USD)",
  },
  {
    day: "Sábado 22",
    title: "Amanecer en Pidurangala y camino a Kandy",
    desc: "Madrugón para ver el amanecer desde Pidurangala Rock (muy recomendado, vistas espectaculares de Sigiriya). Visita al Buda Dorado, cuevas de Dambulla y parada en jardín de especias. Llegada a Kandy y ceremonia del Diente de Buda por la tarde (18:30h) o temprano por la mañana (5:30h, menos concurrida).",
    where: "Sigiriya - Kandy",
    included: "Desayuno, transporte en van y alojamiento.",
    moneypot: "Entrada Templo del Diente (2000 LKR), Pidurangala (1000 LKR)",
  },
  {
    day: "Domingo 23",
    title: "El tren más bonito del mundo",
    desc: "Traslado a Nuwara Eliya con parada en la Ambuluwawa Tower. Visita a plantación de té. Viaje en tren panorámico desde Nuwara Eliya hasta Ella (aprox. 3 horas), considerado uno de los trayectos más espectaculares del mundo. Traslado en van al hotel en Ella.",
    where: "Kandy - Nuwara Eliya - Ella",
    included: "Desayuno, billete de tren, transporte en van y alojamiento.",
    moneypot: "—",
  },
  {
    day: "Lunes 24",
    title: "Ella: Little Adam's Peak y Nine Arches",
    desc: "Ruta de senderismo al Little Adam's Peak o Ella Rock para ver el amanecer (llevar jersey, hace frío). Visita al famoso puente de los Nueve Arcos (el tren pasa entre 11:30-12:00). Tarde libre para explorar el pueblo o hacer la tirolina Flying Ravana.",
    where: "Ella",
    included: "Desayuno y alojamiento.",
    moneypot: "Ella Rock viewpoint (1000 LKR), Flying Ravana Zipline (opcional, 9600 LKR)",
  },
  {
    day: "Martes 25",
    title: "Rafting y camino a Colombo",
    desc: "Experiencia de rafting en aguas bravas en Kitulgala (incluida). Traslado desde Ella a Colombo a lo largo del día.",
    where: "Ella - Kitulgala - Colombo",
    included: "Desayuno, rafting, transporte en van y alojamiento.",
    moneypot: "—",
  },
  {
    day: "Miércoles 26",
    title: "Vuelo al paraíso: Maldivas",
    desc: "Traslado al aeropuerto de Colombo. Vuelo a Malé. A la llegada, un representante con cartel de WeRoad os esperará para el traslado en speedboat a Maafushi. Check-in en el hotel (habitualmente Triton Beach, Triton Prestige o Triton Exotica).",
    where: "Colombo - Malé - Maafushi",
    included: "Desayuno, vuelo a Malé, traslado en speedboat y alojamiento.",
    moneypot: "Propina obligatoria conductor y co-conductor (mín. 5€/persona cada uno del fondo común)",
  },
  {
    day: "Jueves 27",
    title: "Maafushi: excursiones opcionales",
    desc: "Día libre para disfrutar de la isla o contratar excursiones opcionales: snorkel con tiburones nodriza y rayas, tiburones ballena y mantas, visita a isla local Gulhi, día de resort, buceo con Dive Squad, etc. Maafushi es una isla pequeña que se recorre en 20 minutos andando.",
    where: "Maafushi",
    included: "Desayuno y alojamiento.",
    moneypot: "Excursiones opcionales en Maldivas",
  },
  {
    day: "Viernes 28",
    title: "Día libre en el paraíso",
    desc: "Día libre para disfrutar de la bikini beach, hacer snorkel por tu cuenta, relajarte en la playa o contratar alguna excursión opcional. Se recomienda la barbacoa en la playa con hoguera.",
    where: "Maafushi",
    included: "Desayuno y alojamiento.",
    moneypot: "Actividades opcionales",
  },
  {
    day: "Sábado 29",
    title: "Último día en Maldivas",
    desc: "Último día para disfrutar del paraíso. Se recomienda reservar con 3-4 días de antelación el speedboat de regreso para el día siguiente según tu vuelo.",
    where: "Maafushi",
    included: "Desayuno y alojamiento.",
    moneypot: "Actividades opcionales",
  },
  {
    day: "Domingo 30",
    title: "Hasta la próxima aventura",
    desc: "Check-out. El traslado de regreso en speedboat desde Maafushi a Malé NO está incluido y corre por cuenta de cada viajero según su horario de vuelo. Se puede reservar en la recepción del hotel o en icomtours.com. También hay ferry alternativo con Maafushi Tours junto al embarcadero.",
    where: "Maafushi - Malé",
    included: "Desayuno.",
    moneypot: "Speedboat regreso Maafushi - Malé (no incluido)",
  },
];

export const servicesSummary: ServicesSummary = {
  included: [
    { title: "Alojamiento en Sri Lanka (Negombo, Anuradhapura, Sigiriya, Kandy, Ella, Colombo) y Maldivas (Maafushi)" },
    { title: "Todos los desayunos" },
    { title: "Almuerzo local incluido en Minneriya (Día 3)" },
    { title: "Transporte interno en van privada con conductor y co-conductor de habla inglesa" },
    { title: "Tren panorámico Nuwara Eliya - Ella" },
    { title: "Rafting en aguas bravas en Kitulgala (Día 7)" },
    { title: "Vuelo interno Colombo - Malé" },
    { title: "Traslado en speedboat Malé - Maafushi" },
    { title: "Traslados aeropuerto - alojamiento" },
    { title: "Coordinador WeRoad durante todo el viaje" },
  ],

  moneypot: [
    {
      title: "Entrada a la Roca de Sigiriya",
      price: "35 USD",
    },
    {
      title: "Entrada Templo del Diente de Buda (Kandy)",
      price: "2000 LKR",
    },
    {
      title: "Entrada Pidurangala Rock (amanecer)",
      price: "1000 LKR",
    },
    {
      title: "Visita guiada Anuradhapura (opcional pero recomendada)",
      price: "6000-8000 LKR + propina",
    },
    {
      title: "Propinas obligatorias conductor y co-conductor",
      price: "Mín. 15.000 LKR cada uno",
    },
    {
      title: "Cenas y comidas no incluidas",
      price: "~150€",
    },
  ],

  extras: [
    {
      title: "Excursiones opcionales en Maldivas (snorkel, tiburones ballena, día de resort, buceo, etc.)",
    },
    {
      title: "Flying Ravana Zipline en Ella (9600 LKR)",
    },
    {
      title: "Centro Ayurvédico en Sigiriya (opcional)",
    },
    {
      title: "Speedboat de regreso Maafushi - Malé el último día (no incluido)",
    },
  ],

  notIncluded: [
    { title: "Vuelos internacionales" },
    { title: "Visado de Sri Lanka (ETA online - gratuito desde mayo 2026 para españoles, pero obligatorio solicitarlo)" },
    { title: "Comidas y bebidas no especificadas" },
    { title: "Gastos personales y compras" },
    { title: "Traslado de regreso Maafushi - Malé el último día" },
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
          . <strong>NOTICIA:</strong> Desde el 25/05/2026 el visado es <strong>gratuito</strong> para ciudadanos de España, Italia, UK y Alemania, ¡pero aún es obligatorio solicitarlo! No te preocupes si no recibes email de confirmación inmediatamente: guarda tu número de solicitud, vuelve a la web oficial y comprueba el estado. Es un visado electrónico, solo necesitan ver tu pasaporte. <strong>⚠️ ALERTA SCAM:</strong> Usa SOLO la web oficial enlazada arriba, cualquier otra web te cobrará de más.
        </>
      ),
    },
    {
      title: "Visado Maldivas",
      desc: (
        <>
          No es necesario tramitarlo con antelación. Se obtiene gratuitamente a la llegada (30 días para ciudadanos españoles). Solo necesitas rellenar un formulario de llegada y salida online. <strong>⚠️ ALERTA SCAM:</strong> Usa SOLO el canal oficial, circulan webs falsas que solicitan pagos fraudulentos.
        </>
      ),
    },
  ],
};

export const appsData: AppsData = {
  sim:
    "En el aeropuerto de Colombo podéis comprar una SIM local. Se recomienda comprarla DESPUÉS del control de pasaportes (mucho más barato que las tiendas antes de inmigración). Las mejores compañías son SLT Mobitel y Dialog. Recomendación personal: Dialog. En Maldivas también hay cobertura en Maafushi con las SIM de Sri Lanka en roaming, aunque es recomendable confirmar con el operador local.",
  apps: [
    {
      name: "WhatsApp",
      desc: "Comunicación del grupo.",
    },
    {
      name: "Google Maps",
      desc: "Orientación en destino. Imprescindible descargar el mapa de Sri Lanka offline antes del viaje.",
    },
    {
      name: "PickMe",
      desc: "App local tipo Uber para moverse. También funciona Uber en algunos traslados.",
    },
  ],
}

export const moneyData: MoneyData = {
  currency: "Rupia de Sri Lanka (LKR) · Rufiyaa de Maldivas (MVR) — En Maldivas se usa mucho el USD y también aceptan euros en efectivo en algunos sitios",
  recommendation: (
    <>
      <p>En Sri Lanka los cajeros automáticos funcionan bien y las tarjetas se aceptan en la mayoría de establecimientos turísticos. En Maldivas, al ser una isla local, se paga principalmente en efectivo (USD o MVR). Es recomendable llevar dólares en efectivo para los gastos en Maldivas. ShadowPalm (operador de excursiones en Maafushi) acepta euros en efectivo al mismo cambio que dólares.</p>
      <p>Se prevé unos <span className="font-bold">200€ adicionales al fondo común</span> para los gastos del día a día (comidas, bebidas, souvenirs, masajes). Coste medio de comida/cena: 7-10 euros.</p>
      <p>Para vuestros gastos os recomiendo usar la tarjeta Revolut, os la podéis sacar{" "}
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
    intro: "Como ya sabéis tenemos un fondo común que se paga en efectivo al coordinador el primer día de la llegada, quien es el responsable de gestionarlo. (Más que suficiente para la parte de Sri Lanka. En Maldivas todas las excursiones son opcionales y corren por cuenta de cada viajero).",
    description: "Se usa para todos los gastos en los que participemos como grupo: entradas a los sitios de visita, transportes comunes, actividades extra, propinas obligatorias al conductor y co-conductor (mínimo 15.000 LKR cada uno) y el fondo del coordinador. En caso de no usarse todo el fondo común, se repartirá la suma sobrante entre todos los participantes al final del viaje. Por otro lado, si se realizan más actividades de las previstas, se pedirá una suma mayor de fondo común.",
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
  text: "Clima tropical cálido todo el año. En Maldivas la temperatura del agua ronda los 28-30°C. Temporada seca en la costa sur de Sri Lanka. En Ella y Nuwara Eliya hace más fresco por la altitud, especialmente al amanecer (llevar jersey)."
}

export const checklist: string[] = [
  "🎒 Mochila o maleta mediana (los traslados son frecuentes y hay que mover el equipaje a menudo).",
  "👕 Ropa de verano total, bañadores y ropa muy ligera y transpirable.",
  "👖 Pantalón largo o pareo: IMPRESCINDIBLE para visitar templos. La ropa debe cubrir las rodillas y los hombros. A veces se puede comprar un pareo cerca de los templos, pero es más fácil llevarlo ya.",
  "🧦 Calcetines para los templos: no se puede entrar con zapatos y el suelo puede estar muy caliente. Muy recomendables para proteger los pies.",
  "🧢 Gorra o sombrero y gafas de sol.",
  "👟 Zapatillas cómodas para caminar (Sigiriya, Pidurangala, Little Adam's Peak) - NO chanclas para estos sitios. Chanclas para playa.",
  "🩴 Escarpines o zapatillas de agua para el snorkel en Maldivas.",
  "🧴 Crema de sol +50 (¡el sol tropical pega fuerte!) y after sun.",
  "🦟 Repelente de mosquitos de alta protección (tipo Jungle o similar). Imprescindible para Sri Lanka.",
  "🔌 Adaptador de corriente tipo BS546 (necesario en algunas zonas de Sri Lanka). También pueden servir los de tipo británico G.",
  "🩱 Bikini / bañador para las excursiones en barco en Maldivas.",
  "🎒 Bolsa estanca o funda impermeable para el móvil en las excursiones de snorkel.",
  "🧥 Jersey o sudadera para las mañanas en Ella y Nuwara Eliya (puede hacer frío al amanecer).",
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
  "Repelente de mosquitos con DEET (tipo Jungle)",
];