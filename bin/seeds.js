  'use strict';
  
  const mongoose = require('mongoose');
  require ('dotenv').config();
  
  mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE
  });
  const Country = require('../models/Country.js');

const seeds = [
  {
    "name": "Republica Checa",
    "image":"https://viajes.nationalgeographic.com.es/medio/2018/10/30/torre-de-la-polvora_105a71e8_1600x1065.jpg",
    "description": "La República Checa es un país soberano de Europa Central sin litoral. Limita con Alemania al oeste, con Austria al sur, con Eslovaquia al este y con Polonia al norte. Su capital y mayor ciudad es Praga. La República Checa tiene territorios de lo que antaño fueron Moravia y Bohemia y una pequeña parte de Silesia.La capital es Praga. El río Moldava divide en dos el centro de Praga.El Puente de Carlos, con sus 600 años de antigüedad y sus 30 estatuas barrocas, es una de las atracciones más emblemáticas de Praga. a Plaza de la Ciudad Vieja de Praga ofrece una encantadora y ecléctica mezcla de estilos arquitectónicos de diferentes siglos.El Castillo de Praga, la fortaleza antigua más grande del mundo, así como una de las más bellas, ha sido el hogar de todos los presidentes del estado checo desde el siglo IX.El Teatro Nacional de Praga es un resplandeciente edificio neorrenacentista situado a orillas del río Moldava. A pesar de su turbulenta historia, el barrio judío de Praga ha mantenido la mayoría de sus edificios históricos y hoy por hoy se considera el complejo histórico judío mejor conservado de toda Europa. Lo que ahora es una zona turística y de compras, la plaza de Wenceslao, situada en el centro de la Ciudad Nueva de Praga, ha sido escenario de los acontecimientos más importantes de la historia de la ciudad."
   , "shortName": "PRG"
  },
  {
    "name": "Austria",
    "image":"https://viajes.nationalgeographic.com.es/medio/2018/10/15/hofburg-palacio-imperial-viena_02ef1035_1500x959.jpg",
    "description": "Austria oficialmente República de Austria , es un Estado centroeuropeo, Estado miembro de la Unión Europea, con capital en Viena, que cuenta con una población de 8,9 millones de habitantes.El intrincado Palacio Imperial fue el centro del poder de la dinastía de los Habsburgo durante siete siglos. Visita la capilla durante la misa de los domingos para ver actuar al coro infantil de Viena.Los pintorescos jardines del Palacio de Schönbrunn, la antigua residencia de verano de los Habsburgo, cuentan con una glorieta, una casa de palmeras, un zoo e incluso ruinas romanas artificiales.La Albertina alberga la colección más valiosa de ilustraciones gráficas del mundo. Se sitúa en los jardines del Palacio de Hofburg. El ayuntamiento de estilo neogótico es uno de los monumentos más emblemáticos de la ciudad, pero el edificio administrativo también alberga en su sótano el Rathauskeller, uno de los mejores restaurantes de Viena.La Ópera Estatal de Viena es el hogar de una de las mejores y más conocidas compañías operísticas del mundo."
    ,"shortName":"VIE"
  },
  {
    "name": "Francia",
    "image":"https://86087-590828-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/01/paris-fin-de-semana-1024x683.jpeg",
    "description":"Francia (en francés, France), oficialmente República Francesa (République française), es un país soberano, miembro de la Unión Europea, cuya forma de gobierno es la república semipresidencialista. Territorialmente comprende la Francia metropolitana y la Francia de ultramar, siendo a su vez el país más grande de la Unión Europea. Su capital es Paris.La joya de la corona de los edificios de París es aún más espectacular cuando la ves de cerca.Para una noche parisina por excelencia, disfruta de un espectáculo en el Moulin Rouge.No hay nada más lujoso en el mundo que el esplendor de este ornamentado complejo. Pasea con la bici por los jardines del Palacio de Versalles.Los Campos Elíseos, la avenida más espectacular del mundo, comienzan en el Arco de Triunfo, pasan por la Plaza de la Concordia y terminan en el jardín de las Tullerías."
    ,"shortName":"CDG"
  },
  {
    "name":"Inglaterra",
    "image":"https://www.surfingtheplanet.com/wp-content/uploads/2017/08/puente-tower-bridge-londres.jpg",
    "description":"Inglaterra es una de las cuatro naciones constituyentes del Reino Unido. Su territorio está formado geográficamente por la parte sur y central de Gran Bretaña, isla que comparte junto a Escocia y Gales, y cerca de 100 islas más pequeñas como las islas Sorlingas y la isla de Wight. Limita al norte con Escocia, al oeste con Gales —sus dos fronteras terrestres—, al noroeste con el mar de Irlanda, al suroeste con el mar Celta, al este con el mar del Norte y al sur con el canal de la Mancha. Inglaterra asume el 84 % de la población y el 85 % del PIB del Reino Unido. El Palacio y Fuerte Real de su Majestad, también conocida como la Torre de Londres, es un castillo histórico situado en la ribera del río Támesis. La visita es muy amena y podrás ver las Joyas de la Corona.Las ruinas prehistóricas más famosas del mundo. Se tarda unos 90 minutos en llegar a Stonehenge. Ah, y ya que estás por la zona, también puedes visitar el Castillo de Windsor o la pintoresca ciudad de Bath.Abierto en el año 2007, el estadio de Wembley tiene capacidad para 90.000 personas y es el hogar de la selección inglesa de fútbol, además de la perfecta ubicación para otros acontecimientos deportivos y conciertos.Si tienes la suerte de visitar en un día despejado, no hay nada mejor que disfrutar de las vistas de 360 grados sobre Londres en el Shard. Accede a la plataforma de observación situada en el edificio más alto de Europa Occidental.",
    "shortName": "LON"
  },
  {
    "name":"Holanda",
    "image":"https://www.thewotme.com/wp-content/uploads/2017/03/amsterdam-holanda.jpg",
    "description":"Amsterdam, es la capital oficial de los Países Bajos. La ciudad está situada entre la bahía del IJ, al norte, y a las orillas del río Amstel, al sureste. Fundada en el siglo XII como un pequeño pueblo pesquero, en la actualidad es la ciudad más grande del país y un gran centro financiero y cultural de proyección internacional. El centro histórico de la ciudad fue construido en gran parte en el siglo XVII y es hoy en día uno de los centros históricos más grandes de Europa. En aquella época se construyeron una serie de canales semicirculares alrededor del casco antiguo ya existente de la ciudad. Después se edificaron las nuevas calles que ahora habían sido creadas con casas y almacenes en un estilo típico neerlandés que es una de las imágenes más famosas de Ámsterdam y del país. Al igual que otras ciudades de Europa septentrional con abundancia de agua, como Brujas, Hamburgo y Estocolmo, es conocida coloquialmente como la «Venecia del norte».La Casa de Ana Frank es una visita obligada. Si quieres evitar el tráfico de turistas, reserva tu entrada por adelantado parar poder saltarte las colas.Ya sea en barco o desde tierra, no podrás dejar de ver los famosos canales de Ámsterdam. Da un paseo a lo largo de sus orillas, monta en un crucero con guía u observa la gente pasar desde una de sus terrazas.El Museo Van Gogh, uno de los museos más populares del mundo, alberga la mayor colección de obras del artista holandés.El barrio más bohemio de Ámsterdam está lleno de coffee shops, bares y restaurantes.Fundada en 1864, Heineken es hoy en día una de las mayores productoras de cerveza del mundo."
    ,"shortName":"AMS"
  },
  {
    "name":"Cuba",
    "image": "https://buenavibra.es/wp-content/uploads/2018/05/cuba-1200_opt-1170x600.jpg",
    "description":"Cuba, oficialmente República de Cuba,es un país soberano insular asentado en un archipiélago del mar Caribe. El territorio está organizado en quince provincias y un municipio especial con La Habana como capital y ciudad más poblada.Es uno de los trece estados independientes que forman la América Insular, Antillas o islas del mar Caribe, y uno de los treinta y cinco del continente americano. La isla de Cuba tiene origen orogénico. Completan el archipiélago la isla de la Juventud y más de un millar de cayos o pequeñas islas que las rodean: Cayo Coco, Cayo Guillermo, Cayo Largo del Sur y Cayo Jutías, entre otros. Colinda, al norte, con el estado estadounidense de Florida y con las Bahamas, al oeste con México y al sur con las Islas Caimán y Jamaica. Al sudeste de Cuba, se encuentra la isla de La Española.La capital es La Habana.La Habana es el alma y el corazón de Cuba, es su capital, su ciudad más representativa, su orgullo y su dolor. La Habana es de esas ciudades con una personalidad que atrapa, con fachadas de colores, señoras tó guapas en las puertas de sus casas, niños que juegan en las calles, olores de fruta tropical, basura y arroz congrí. La Habana te va a enamorar, pero puede que no te des cuenta hasta que estés de vuelta a cientos, miles de kilómetros de distancia.En la Plaza de la Revolución a un lado se encuentra la estatua de José Martí, padre de la independencia de Cuba y al otro las imágenes de el Ché Guevara y de Camino Cienfuegos, artífices de la revolución cubana, junto con Fidel Castro y su hermano Raúl. El Capitolio de la Havana, pura copia del omnipresente capitolio de Washington.Visita la plaza de la Catedral, uno de los lugares que pasarás si o si buscando que ver en la Habana."
    ,"shortName":"HAV"
  },
  {
    "name":"Escocia",
    "image":"https://cdn.civitatis.com/reino-unido/edimburgo/galeria/edimburgo-vistas.jpg",
    "description": "Escocia es la más septentrional de las cuatro naciones constituyentes del Reino Unido. Junto con Inglaterra y Gales, forma parte de la isla de Gran Bretaña, abarcando un tercio de su superficie total; además consta de más de 790 islas. Limita al norte y oeste con el océano Atlántico; al este con el mar del Norte, al sur con Inglaterra y al suroeste con el canal del Norte y el mar de Irlanda. El territorio escocés abarca 78 772 km², y su población se estima en 5 347 600 habitantes en 2014,1​ lo que da una densidad de población de 67,9 habitantes por km². La capital es Edimburgo, mientras que Glasgow es la ciudad más grande, y su área metropolitana concentra un 40 % del total de la población escocesa.El Castillo de Edimburgo se construyó en el siglo XII, y ha sido el escenario de algunos de los conflictos más sangrientos de la historia de Escocia.El castillo de Stirling es uno de los más importantes de Escocia.El lago más grande y sobrecogedor de todos, el Lago Lomond, se encuentra bastante cerca de Edimburgo.La abadía que se encuentra junto al Palacio de Holyrood se encuentra en ruinas desde la Revolución Gloriosa de 1688."
    ,"shortName":"UK"
  },
  {
    "name":"Dinamarca",
    "image":"https://miviaje.com/wp-content/uploads/2018/02/sirenita-copenhague-1024x640.jpg",
    "description": "Dinamarca es un país soberano miembro de la Unión Europea situado en el norte de Europa. Es el más meridional de los países nórdicos y también el de menor extensión. Oficialmente, el Reino de Dinamarca —en danés: Kongeriget Danmark o Danmarks Rige— es una comunidad integrada por tres partes autónomas, la propia Dinamarca y sus dos territorios de ultramar o territorios dependientes, Groenlandia y las islas Feroe. Su capital y ciudad más poblada es Copenhague, que se encuentra en la isla de Selandia. Dinamarca es el país menos corrupto del mundo (2010) y, según estudios, el país donde los habitantes son más felices y uno de los mejores del mundo para vivir. El centro de la ciudad contiene la mayor parte de los atractivos turísticos que ver en Copenhague: desde el Parlamento, hasta el Tivoli, pasando por la calle peatonal o Strøget y la mundialmente famosa Sirenita. El barrio del oeste de la ciudad ofrece un curioso ambiente en el que los comercios de Vesterbrogade se mezclan con el parque o la fábrica de Carlsberg, los numerosos hoteles, los lugares de ocio y oficinas e, incluso, la zona roja de Copenhague -aunque bastante lejos del esplendor que vivió en la segunda mitad del siglo pasado.Tiene un ayuntamiento independiente situado en el corazón de la ciudad pero completamente integrado en ella, con una calle llena de vida como Falkoner Alle y uno de los mejores parques de la ciudad."
    ,"shortName":"CPH"
  },
  {
    "name":"Australia",
    "image":"https://revistasumma.com/wp-content/uploads/2019/01/australia.jpg",
    "description":"Australia, oficialmente Mancomunidad de Australia ,es un país soberano de Oceanía, cuya forma de gobierno es la monarquía constitucional federal parlamentaria.El país ocupa la principal masa continental de la plataforma llamada Sahul, además de algunas islas en los océanos Pacífico, Índico y Antártico. Los países más cercanos a Australia son Indonesia, Timor Oriental y Papúa Nueva Guinea al norte, las Islas Salomón, Vanuatu y la dependencia francesa de Nueva Caledonia al noreste, y Nueva Zelanda al sureste. Australia es el sexto país más grande del mundo con una superficie de 7 741 220 km².1​ Su capital, Canberra, se encuentra en el Territorio de la Capital Australiana. La población del país en 2011 era de unos 21,5 millones de habitantes, concentrados principalmente en las grandes ciudades costeras: Sídney, Melbourne, Brisbane, Perth, Adelaida y la capital Canberra.Declarada como Patrimonio de la Humanidad por la UNESCO, no sólo es uno de los edificios más representativos de la ciudad, sino que también es uno de los más famosos a nivel internacional a causa de su peculiar arquitectura. El Sidney Harbour Bridge o Puente de la bahía de Sydney es otro de los grandes emblemas de la ciudad. Fue inaugurado en 1932, configurándose como una de las grandes obras de ingeniería de la época, gracias a los 1.149 metros de longitud y 134 de altura del arco, el elemento más distintivo de su arquitectura. El puerto de Sydney, repleto de terrazas, centros comerciales, restaurantes, pubs con música en directo e incluso terminales de ferries "
    ,"shortName":"SYD"
  },
  
  {
    "name":"Egipto",
    "image":"https://viajes.nationalgeographic.com.es/medio/2018/12/28/el-cairo-egipto_917812a6_1500x989.jpg",
    "description": "Egipto, oficialmente la República Árabe de Egipto,es un país soberano de África en la parte más occidental del Máshrek. Es un país transcontinental, está ubicado mayoritariamente en el extremo noreste de África mientras que en Asia, se encuentra en la península del Sinaí. Limita con Sudán al sur, con Libia al oeste y con el Estado de Palestina e Israel al noreste. Al norte limita con el mar Mediterráneo y al sureste con el mar Rojo.La mayor parte de su superficie la integra el desierto del Sahara. El río Nilo cruza el desierto de norte a sur, formando un estrecho valle y un gran delta en su desembocadura en el Mediterráneo. Estas tierras fértiles se hallan densamente pobladas, concentrando la mayor población nacional de África. Casi la mitad de los egipcios viven en áreas urbanas, sobre todo en los centros densamente poblados de El Cairo, su capital, y Alejandría.Las Pirámides de Giza, la única de las 7 Maravillas del Mundo Antiguo que se conserva, es uno de los lugares más impresionantes que visitar en Egipto y también en el mundo. Situadas a menos de 20 kilómetros de El Cairo, las 3 grandes pirámides con las tumbas de los faraones Keops, Kefrén y Micerinos, destacan por encima del resto de monumentos y pirámides del país.En Nubia, al sur de Egipto, se encuentra un lugar que hace sombra en belleza a las Pirámides de Egipto, Abu Simbel. Esta zona arqueológica destaca por los dos templos excavados en roca que ordenó construir el gran faraón Ramsés II en el siglo XIII a. C. para conmemorar una victoria de guerra. Estos dos increíbles templos en honor al faraón y a su esposa favorita, Nefertari, se tuvieron que trasladar en 1968 a una ubicación más alta, a consecuencia de la construcción de una presa en el río Nilo, haciéndolos todavía más conocidos al mundo."
    ,"shortName":"CAI"
  },
  {
    "name":"Cabo Verde",
    "image":"https://cdn.holidayguru.es/wp-content/uploads/2016/08/Kapverden_shutterstock_361032086-1.jpg",
    "description": "Cabo Verde, cuyo nombre oficial es República de Cabo Verde,z es un estado soberano insular de África, situado en el océano Atlántico, más concretamente en el archipiélago volcánico macaronésico de Cabo Verde, frente a las costas senegalesas. Su forma de gobierno es la república semipresidencialista y su territorio está organizado en 22 concelhos o municipios. Su capital y ciudad más poblada es Praia. El nombre del archipiélago proviene de la península de Cabo Verde, el extremo más occidental del continente de África, cerca del cual se halla la ciudad de Dakar (Senegal). Su lengua oficial es el portugués y el país es miembro de la Comunidad de Países de Lengua Portuguesa.Praia es también la sede de las instituciones más importantes de la nación, casi todas en el barrio de Platô o Plateau. Hermanada con Las Palmas de Gran Canaria y Corvera de Asturias, cuando visites Cabo Verde y vayas a Praia no te pierdas el Palacio Presidencial, el Antiguo Ayuntamiento o Câmara Municipal, la Iglesia de Nuestra Señora de Gracia o Igreja Nossa Senhora da Graça, el Museo Etnográfico, el Monumento al explorador Diego Gómez o la coqueta capilla de San Antonio. Todo son cosas que tienes que ver en Cabo Verde."
    ,"shortName":"SID"
  }
]
Country.deleteMany({})
.then (() =>{
  Country.create(seeds).then((country)=>{
    console.log(country);
    mongoose.connection.close();
  }).catch((error) =>{
    console.log(error);
  });
});