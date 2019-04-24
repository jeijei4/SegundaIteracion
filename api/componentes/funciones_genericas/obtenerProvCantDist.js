'use strict';

/*
* objProvincias
* objCantones
* objDistritos
*/
const objProvincias=[{idProvincia:1,nombre:"San José",lat:9.9254828,lng:-84.0918343},{idProvincia:2,nombre:"Alajuela",lat:10.014931,lng:-84.213999},{idProvincia:3,nombre:"Cartago",lat:9.863219,lng:-83.915793},{idProvincia:4,nombre:"Heredia",lat:9.997489,lng:-84.119668},{idProvincia:5,nombre:"Guanacaste",lat:10.634013,lng:-85.440962},{idProvincia:6,nombre:"Puntarenas",lat:9.977088,lng:-84.836022},{idProvincia:7,nombre:"Limón",lat:9.990732,lng:-83.041621}];

const objCantones=[{idCanton:59,nombre:"Abangares",idProvincia:5},{idCanton:11,nombre:"Acosta",idProvincia:1},{idCanton:69,nombre:"Aguirre",idProvincia:6},{idCanton:20,nombre:"Alajuela",idProvincia:2},{idCanton:9,nombre:"Alajuelita",idProvincia:1},{idCanton:30,nombre:"Alfaro Ruíz",idProvincia:2},{idCanton:40,nombre:"Alvarado",idProvincia:3},{idCanton:5,nombre:"Aserrí",idProvincia:1},{idCanton:24,nombre:"Atenas",idProvincia:2},{idCanton:56,nombre:"Bagaces",idProvincia:5},{idCanton:44,nombre:"Barva",idProvincia:4},{idCanton:49,nombre:"Belén",idProvincia:4},{idCanton:66,nombre:"Buenos Aires",idProvincia:6},{idCanton:57,nombre:"Carrillo",idProvincia:5},{idCanton:35,nombre:"Cartago",idProvincia:4},{idCanton:58,nombre:"Cañas",idProvincia:5},{idCanton:73,nombre:"Corredores",idProvincia:6},{idCanton:71,nombre:"Coto Brus",idProvincia:6},{idCanton:17,nombre:"Curridabat",idProvincia:1},{idCanton:3,nombre:"Desamparados",idProvincia:1},{idCanton:16,nombre:"Dota",idProvincia:1},{idCanton:42,nombre:"El Guarco",idProvincia:3},{idCanton:2,nombre:"Escazú",idProvincia:1},{idCanton:65,nombre:"Esparza",idProvincia:6},{idCanton:50,nombre:"Flores",idProvincia:4},{idCanton:74,nombre:"Garabito",idProvincia:6},{idCanton:7,nombre:"Goicoechea",idProvincia:1},{idCanton:70,nombre:"Golfito",idProvincia:6},{idCanton:22,nombre:"Grecia",idProvincia:2},{idCanton:34,nombre:"Guatuso",idProvincia:2},{idCanton:80,nombre:"Guácimo",idProvincia:7},{idCanton:43,nombre:"Heredia",idProvincia:4},{idCanton:63,nombre:"Hojancha",idProvincia:5},{idCanton:38,nombre:"Jiménez",idProvincia:3},{idCanton:62,nombre:"La Cruz",idProvincia:5},{idCanton:37,nombre:"La Unión",idProvincia:3},{idCanton:19,nombre:"León Cortés",idProvincia:1},{idCanton:53,nombre:"Liberia",idProvincia:5},{idCanton:75,nombre:"Limón",idProvincia:7},{idCanton:33,nombre:"Los Chiles",idProvincia:2},{idCanton:79,nombre:"Matina",idProvincia:7},{idCanton:14,nombre:"Montes de Oca",idProvincia:1},{idCanton:67,nombre:"Montes de Oro",idProvincia:6},{idCanton:6,nombre:"Mora",idProvincia:1},{idCanton:13,nombre:"Moravia",idProvincia:1},{idCanton:61,nombre:"Nandayure",idProvincia:5},{idCanton:25,nombre:"Naranjo",idProvincia:2},{idCanton:54,nombre:"Nicoya",idProvincia:5},{idCanton:41,nombre:"Oreamuno",idProvincia:3},{idCanton:28,nombre:"Orotina",idProvincia:2},{idCanton:68,nombre:"Osa",idProvincia:6},{idCanton:26,nombre:"Palmares",idProvincia:2},{idCanton:36,nombre:"Paraíso",idProvincia:3},{idCanton:72,nombre:"Parrita",idProvincia:6},{idCanton:76,nombre:"Pococí",idProvincia:7},{idCanton:27,nombre:"Poás",idProvincia:2},{idCanton:64,nombre:"Puntarenas",idProvincia:6},{idCanton:4,nombre:"Puriscal",idProvincia:1},{idCanton:18,nombre:"Pérez Zeledón",idProvincia:1},{idCanton:29,nombre:"San Carlos",idProvincia:2},{idCanton:48,nombre:"San Isidro",idProvincia:4},{idCanton:1,nombre:"San José",idProvincia:1},{idCanton:23,nombre:"San Mateo",idProvincia:2},{idCanton:51,nombre:"San Pablo",idProvincia:4},{idCanton:47,nombre:"San Rafael",idProvincia:4},{idCanton:21,nombre:"San Ramon",idProvincia:2},{idCanton:8,nombre:"Santa Ana",idProvincia:1},{idCanton:46,nombre:"Santa Barbara",idProvincia:4},{idCanton:55,nombre:"Santa Cruz",idProvincia:5},{idCanton:45,nombre:"Santo Domingo",idProvincia:4},{idCanton:52,nombre:"Sarapiqui",idProvincia:4},{idCanton:77,nombre:"Siquirres",idProvincia:7},{idCanton:78,nombre:"Talamanca",idProvincia:7},{idCanton:12,nombre:"Tibás",idProvincia:1},{idCanton:60,nombre:"Tilaran",idProvincia:5},{idCanton:39,nombre:"Turrialba",idProvincia:3},{idCanton:15,nombre:"Turrubares",idProvincia:1},{idCanton:32,nombre:"Upala",idProvincia:2},{idCanton:31,nombre:"Valverde Vega",idProvincia:2},{idCanton:10,nombre:"Vásquez de Coronado",idProvincia:1}];

const objDistritos=[{idDistrito:397,nombre:"Acapulco",idCanton:65},{idDistrito:430,nombre:"Aguabuena",idCanton:72},{idDistrito:231,nombre:"Aguacaliente (San Francisco)",idCanton:36},{idDistrito:214,nombre:"Aguas Claras",idCanton:33},{idDistrito:191,nombre:"Aguas Zarcas",idCanton:30},{idDistrito:121,nombre:"Alajuela",idCanton:20},{idDistrito:65,nombre:"Alajuelita",idCanton:9},{idDistrito:455,nombre:"Alegria",idCanton:78},{idDistrito:142,nombre:"Alfaro",idCanton:21},{idDistrito:141,nombre:"Angeles",idCanton:21},{idDistrito:306,nombre:"Angeles",idCanton:47},{idDistrito:82,nombre:"Anselmo Llorente",idCanton:12},{idDistrito:399,nombre:"Arancibia",idCanton:65},{idDistrito:369,nombre:"Arenal",idCanton:61},{idDistrito:40,nombre:"Aserri",idCanton:5},{idDistrito:314,nombre:"Asuncion",idCanton:49},{idDistrito:158,nombre:"Atenas",idCanton:25},{idDistrito:346,nombre:"Bagaces",idCanton:56},{idDistrito:419,nombre:"Bahia Ballena",idCanton:69},{idDistrito:29,nombre:"Barbacoas",idCanton:4},{idDistrito:391,nombre:"Barranca",idCanton:65},{idDistrito:316,nombre:"Barrantes",idCanton:50},{idDistrito:112,nombre:"Baru",idCanton:18},{idDistrito:283,nombre:"Barva",idCanton:44},{idDistrito:460,nombre:"Batan",idCanton:79},{idDistrito:357,nombre:"Bebedero",idCanton:59},{idDistrito:375,nombre:"Bejuco",idCanton:62},{idDistrito:353,nombre:"Belen",idCanton:58},{idDistrito:336,nombre:"Belen de Nosarita",idCanton:54},{idDistrito:216,nombre:"Bijagua",idCanton:33},{idDistrito:412,nombre:"Biolley",idCanton:67},{idDistrito:154,nombre:"Bolivar",idCanton:23},{idDistrito:338,nombre:"Bolson",idCanton:55},{idDistrito:408,nombre:"Boruca",idCanton:67},{idDistrito:64,nombre:"Brasil",idCanton:8},{idDistrito:456,nombre:"Bratsi",idCanton:78},{idDistrito:207,nombre:"Brisas",idCanton:31},{idDistrito:225,nombre:"Buena Vista",idCanton:35},{idDistrito:190,nombre:"Buenavista",idCanton:30},{idDistrito:173,nombre:"Buenos Aires",idCanton:27},{idDistrito:405,nombre:"Buenos Aires",idCanton:67},{idDistrito:344,nombre:"Cabo Velas",idCanton:55},{idDistrito:241,nombre:"Cachi",idCanton:37},{idDistrito:458,nombre:"Cahuita",idCanton:78},{idDistrito:458,nombre:"Cahuita",idCanton:78},{idDistrito:454,nombre:"Cairo",idCanton:78},{idDistrito:111,nombre:"Cajon",idCanton:18},{idDistrito:54,nombre:"Calle Blancos",idCanton:7},{idDistrito:175,nombre:"Candelaria",idCanton:27},{idDistrito:32,nombre:"Candelarita",idCanton:4},{idDistrito:78,nombre:"Cangrejal",idCanton:11},{idDistrito:436,nombre:"Canoas",idCanton:74},{idDistrito:268,nombre:"Capellades",idCanton:40},{idDistrito:448,nombre:"Cariari",idCanton:77},{idDistrito:1,nombre:"Carmen",idCanton:1},{idDistrito:229,nombre:"Carmen",idCanton:36},{idDistrito:370,nombre:"Carmona",idCanton:62},{idDistrito:461,nombre:"Carrandi",idCanton:79},{idDistrito:181,nombre:"Carrillos",idCanton:28},{idDistrito:122,nombre:"Carrizal",idCanton:20},{idDistrito:341,nombre:"Cartagena",idCanton:55},{idDistrito:74,nombre:"Cascajal",idCanton:10},{idDistrito:4,nombre:"Catedral",idCanton:1},{idDistrito:354,nombre:"Cañas",idCanton:59},{idDistrito:326,nombre:"Cañas Dulces",idCanton:53},{idDistrito:221,nombre:"Caño Negro",idCanton:34},{idDistrito:187,nombre:"Ceiba",idCanton:29},{idDistrito:267,nombre:"Cervantes",idCanton:40},{idDistrito:395,nombre:"Chacarita",idCanton:65},{idDistrito:411,nombre:"Changuenas",idCanton:67},{idDistrito:396,nombre:"Chira",idCanton:65},{idDistrito:35,nombre:"Chires",idCanton:4},{idDistrito:265,nombre:"Chirripo",idCanton:39},{idDistrito:386,nombre:"Chomes",idCanton:65},{idDistrito:81,nombre:"Cinco Esquinas",idCanton:12},{idDistrito:272,nombre:"Cipreses",idCanton:41},{idDistrito:167,nombre:"Cirri Sur",idCanton:26},{idDistrito:342,nombre:"Coajiniquil",idCanton:55},{idDistrito:394,nombre:"Cobano",idCanton:65},{idDistrito:84,nombre:"Colima",idCanton:12},{idDistrito:410,nombre:"Colinas",idCanton:67},{idDistrito:47,nombre:"Colon",idCanton:6},{idDistrito:362,nombre:"Colorado",idCanton:60},{idDistrito:449,nombre:"Colorado",idCanton:77},{idDistrito:68,nombre:"Concepcion",idCanton:9},{idDistrito:144,nombre:"Concepcion",idCanton:21},{idDistrito:162,nombre:"Concepcion",idCanton:25},{idDistrito:247,nombre:"Concepcion",idCanton:38},{idDistrito:307,nombre:"Concepcion",idCanton:47},{idDistrito:310,nombre:"Concepcion",idCanton:48},{idDistrito:98,nombre:"Copey",idCanton:16},{idDistrito:233,nombre:"Corralillo",idCanton:36},{idDistrito:427,nombre:"Corredor",idCanton:71},{idDistrito:434,nombre:"Corredores",idCanton:74},{idDistrito:416,nombre:"Cortes",idCanton:69},{idDistrito:270,nombre:"Cot",idCanton:41},{idDistrito:226,nombre:"Cote",idCanton:35},{idDistrito:186,nombre:"Coyolar",idCanton:29},{idDistrito:324,nombre:"Cureña",idCanton:52},{idDistrito:99,nombre:"Curridabat",idCanton:16},{idDistrito:103,nombre:"Curridabat",idCanton:17},{idDistrito:329,nombre:"Curubande",idCanton:53},{idDistrito:198,nombre:"Cutris",idCanton:30},{idDistrito:24,nombre:"Damas",idCanton:3},{idDistrito:106,nombre:"Daniel Flores",idCanton:18},{idDistrito:217,nombre:"Delicias",idCanton:33},{idDistrito:33,nombre:"Desamparaditos",idCanton:4},{idDistrito:15,nombre:"Desamparados",idCanton:3},{idDistrito:129,nombre:"Desamparados",idCanton:20},{idDistrito:156,nombre:"Desmonte",idCanton:24},{idDistrito:343,nombre:"Diria",idCanton:55},{idDistrito:218,nombre:"Dos Rios (Colonia Mayorga)",idCanton:33},{idDistrito:466,nombre:"Duacari",idCanton:80},{idDistrito:235,nombre:"Dulce Nombre",idCanton:36},{idDistrito:248,nombre:"Dulce Nombre",idCanton:38},{idDistrito:222,nombre:"El Amparo",idCanton:34},{idDistrito:114,nombre:"El Páramo",idCanton:18},{idDistrito:398,nombre:"El Roble",idCanton:65},{idDistrito:12,nombre:"Escazu",idCanton:2},{idDistrito:400,nombre:"Espiritu Santo",idCanton:66},{idDistrito:176,nombre:"Esquipulas",idCanton:27},{idDistrito:350,nombre:"Filadelfia",idCanton:57},{idDistrito:189,nombre:"Florencia",idCanton:30},{idDistrito:452,nombre:"Florida",idCanton:78},{idDistrito:194,nombre:"Fortuna",idCanton:30},{idDistrito:347,nombre:"Fortuna",idCanton:56},{idDistrito:20,nombre:"Frailes",idCanton:3},{idDistrito:132,nombre:"Garita",idCanton:20},{idDistrito:378,nombre:"Garita",idCanton:63},{idDistrito:105,nombre:"General",idCanton:18},{idDistrito:453,nombre:"Germania",idCanton:78},{idDistrito:424,nombre:"Golfito",idCanton:71},{idDistrito:100,nombre:"Granadilla",idCanton:17},{idDistrito:177,nombre:"Granja",idCanton:27},{idDistrito:26,nombre:"Gravillas",idCanton:3},{idDistrito:147,nombre:"Grecia",idCanton:22},{idDistrito:30,nombre:"Grito Alto",idCanton:4},{idDistrito:124,nombre:"Guacima",idCanton:20},{idDistrito:390,nombre:"Guacimal",idCanton:65},{idDistrito:462,nombre:"Guacimo",idCanton:80},{idDistrito:52,nombre:"Guadalupe",idCanton:7},{idDistrito:204,nombre:"Guadalupe",idCanton:31},{idDistrito:232,nombre:"Guadalupe (Arenilla)",idCanton:36},{idDistrito:76,nombre:"Guaitil",idCanton:11},{idDistrito:444,nombre:"Guapiles",idCanton:77},{idDistrito:48,nombre:"Guayabo",idCanton:6},{idDistrito:426,nombre:"Guaycar",idCanton:71},{idDistrito:185,nombre:"Hacienda Vieja",idCanton:29},{idDistrito:10,nombre:"Hatillo",idCanton:1},{idDistrito:278,nombre:"Heredia",idCanton:43},{idDistrito:380,nombre:"Hojancha",idCanton:64},{idDistrito:322,nombre:"Horquetas",idCanton:52},{idDistrito:3,nombre:"Hospital",idCanton:1},{idDistrito:383,nombre:"Huacas",idCanton:64},{idDistrito:56,nombre:"Ipis",idCanton:7},{idDistrito:393,nombre:"Isla del Coco",idCanton:65},{idDistrito:438,nombre:"Jaco",idCanton:75},{idDistrito:97,nombre:"Jardin",idCanton:16},{idDistrito:159,nombre:"Jesus",idCanton:25},{idDistrito:300,nombre:"Jesus",idCanton:46},{idDistrito:72,nombre:"Jesus (Dulce Nombre)",idCanton:10},{idDistrito:157,nombre:"Jesus Maria",idCanton:24},{idDistrito:425,nombre:"Jimenez",idCanton:71},{idDistrito:445,nombre:"Jimenez",idCanton:77},{idDistrito:251,nombre:"Juan Viñas",idCanton:39},{idDistrito:359,nombre:"Juntas",idCanton:60},{idDistrito:376,nombre:"La Cruz",idCanton:63},{idDistrito:435,nombre:"La Cuesta",idCanton:74},{idDistrito:264,nombre:"La Isabel",idCanton:39},{idDistrito:255,nombre:"La Suiza",idCanton:39},{idDistrito:321,nombre:"La Virgen",idCanton:52},{idDistrito:202,nombre:"Laguna",idCanton:31},{idDistrito:437,nombre:"Laurel",idCanton:74},{idDistrito:44,nombre:"Legua",idCanton:5},{idDistrito:83,nombre:"Leon XIII",idCanton:12},{idDistrito:387,nombre:"Lepanto",idCanton:65},{idDistrito:367,nombre:"Libano",idCanton:61},{idDistrito:325,nombre:"Liberia",idCanton:53},{idDistrito:440,nombre:"Limon",idCanton:76},{idDistrito:431,nombre:"Limoncito",idCanton:72},{idDistrito:117,nombre:"Llano Bonito",idCanton:19},{idDistrito:236,nombre:"Llano Grande",idCanton:36},{idDistrito:242,nombre:"Llanos de Santa Lucia",idCanton:37},{idDistrito:323,nombre:"Llanuras del Gaspar",idCanton:52},{idDistrito:317,nombre:"Llorente",idCanton:50},{idDistrito:220,nombre:"Los Chiles",idCanton:34},{idDistrito:402,nombre:"Macacona",idCanton:66},{idDistrito:331,nombre:"Mansion",idCanton:54},{idDistrito:389,nombre:"Manzanillo",idCanton:65},{idDistrito:184,nombre:"Mastate",idCanton:29},{idDistrito:55,nombre:"Mata de Platano",idCanton:7},{idDistrito:8,nombre:"Mata Redonda",idCanton:1},{idDistrito:443,nombre:"Matama",idCanton:76},{idDistrito:459,nombre:"Matina",idCanton:79},{idDistrito:327,nombre:"Mayorga",idCanton:53},{idDistrito:2,nombre:"Merced",idCanton:1},{idDistrito:2,nombre:"Merced",idCanton:1},{idDistrito:160,nombre:"Mercedes",idCanton:25},{idDistrito:279,nombre:"Mercedes",idCanton:43},{idDistrito:463,nombre:"Mercedes",idCanton:80},{idDistrito:28,nombre:"Mercedes Sur",idCanton:4},{idDistrito:90,nombre:"Mercedes(Betania)",idCanton:14},{idDistrito:413,nombre:"Miramar",idCanton:68},{idDistrito:348,nombre:"Mogote",idCanton:56},{idDistrito:381,nombre:"Monte Romo",idCanton:64},{idDistrito:392,nombre:"Monte Verde",idCanton:65},{idDistrito:45,nombre:"Monterrey",idCanton:5},{idDistrito:328,nombre:"Nacascolo",idCanton:53},{idDistrito:423,nombre:"Naranjito",idCanton:70},{idDistrito:165,nombre:"Naranjo",idCanton:26},{idDistrito:330,nombre:"Nicoya",idCanton:54},{idDistrito:335,nombre:"Nosara",idCanton:54},{idDistrito:228,nombre:"Occidental",idCanton:36},{idDistrito:227,nombre:"Oriental",idCanton:36},{idDistrito:240,nombre:"Orosi",idCanton:37},{idDistrito:183,nombre:"Orotina",idCanton:29},{idDistrito:266,nombre:"Pacayas",idCanton:40},{idDistrito:451,nombre:"Pacuarito",idCanton:78},{idDistrito:417,nombre:"Palmar",idCanton:69},{idDistrito:171,nombre:"Palmares",idCanton:27},{idDistrito:196,nombre:"Palmera",idCanton:30},{idDistrito:77,nombre:"Palmichal",idCanton:11},{idDistrito:205,nombre:"Palmira",idCanton:31},{idDistrito:351,nombre:"Palmira",idCanton:58},{idDistrito:355,nombre:"Palmira",idCanton:59},{idDistrito:388,nombre:"Paquera",idCanton:65},{idDistrito:296,nombre:"Para",idCanton:45},{idDistrito:292,nombre:"Paracito",idCanton:45},{idDistrito:238,nombre:"Paraiso",idCanton:37},{idDistrito:433,nombre:"Parrita",idCanton:73},{idDistrito:73,nombre:"Patalillo",idCanton:10},{idDistrito:21,nombre:"Patarra",idCanton:3},{idDistrito:277,nombre:"Patio de Agua",idCanton:42},{idDistrito:9,nombre:"Pavas",idCanton:1},{idDistrito:259,nombre:"Pavones",idCanton:39},{idDistrito:110,nombre:"Pejibaye",idCanton:18},{idDistrito:253,nombre:"Pejibaye",idCanton:39},{idDistrito:256,nombre:"Peralta",idCanton:39},{idDistrito:146,nombre:"Peñas Blancas",idCanton:21},{idDistrito:51,nombre:"Picagres",idCanton:6},{idDistrito:63,nombre:"Piedades",idCanton:8},{idDistrito:137,nombre:"Piedades Norte",idCanton:21},{idDistrito:138,nombre:"Piedades Sur",idCanton:21},{idDistrito:420,nombre:"Piedras Blancas",idCanton:69},{idDistrito:50,nombre:"Piedras Negras",idCanton:6},{idDistrito:409,nombre:"Pilas",idCanton:67},{idDistrito:385,nombre:"Pitahaya",idCanton:65},{idDistrito:193,nombre:"Pital",idCanton:30},{idDistrito:432,nombre:"Pittier",idCanton:72},{idDistrito:109,nombre:"Platanares",idCanton:18},{idDistrito:464,nombre:"Pocora",idCanton:80},{idDistrito:200,nombre:"Pocosol",idCanton:30},{idDistrito:358,nombre:"Porozal",idCanton:59},{idDistrito:374,nombre:"Porvenir",idCanton:62},{idDistrito:271,nombre:"Potrero Cerrado",idCanton:41},{idDistrito:407,nombre:"Potrero Grande",idCanton:67},{idDistrito:61,nombre:"Pozos",idCanton:8},{idDistrito:153,nombre:"Puente de Piedra",idCanton:22},{idDistrito:382,nombre:"Puerto Carrillo",idCanton:64},{idDistrito:320,nombre:"Puerto Viejo",idCanton:52},{idDistrito:384,nombre:"Puntarenas",idCanton:65},{idDistrito:302,nombre:"Puraba",idCanton:46},{idDistrito:58,nombre:"Purral",idCanton:8},{idDistrito:364,nombre:"Quebrada Grande",idCanton:61},{idDistrito:333,nombre:"Quebrada Honda",idCanton:54},{idDistrito:237,nombre:"Quebradilla",idCanton:36},{idDistrito:421,nombre:"Quepos",idCanton:70},{idDistrito:188,nombre:"Quesada",idCanton:30},{idDistrito:57,nombre:"Rancho Redondo",idCanton:7},{idDistrito:313,nombre:"Ribera",idCanton:49},{idDistrito:319,nombre:"Rincon de Sabanilla",idCanton:51},{idDistrito:250,nombre:"Rio Azul",idCanton:38},{idDistrito:442,nombre:"Rio Blanco",idCanton:76},{idDistrito:152,nombre:"Rio Cuarto",idCanton:22},{idDistrito:465,nombre:"Rio Jimenez",idCanton:80},{idDistrito:349,nombre:"Rio Naranjo",idCanton:56},{idDistrito:113,nombre:"Rio Nuevo",idCanton:18},{idDistrito:128,nombre:"Rio Segundo",idCanton:20},{idDistrito:446,nombre:"Rita",idCanton:77},{idDistrito:107,nombre:"Rivas",idCanton:18},{idDistrito:212,nombre:"Rodriguez",idCanton:32},{idDistrito:23,nombre:"Rosario",idCanton:3},{idDistrito:170,nombre:"Rosario",idCanton:26},{idDistrito:447,nombre:"Roxana",idCanton:77},{idDistrito:429,nombre:"Sabalito",idCanton:72},{idDistrito:182,nombre:"Sabana Redonda",idCanton:28},{idDistrito:89,nombre:"Sabanilla",idCanton:14},{idDistrito:126,nombre:"Sabanilla",idCanton:20},{idDistrito:79,nombre:"Sabanillas",idCanton:11},{idDistrito:60,nombre:"Salitral",idCanton:8},{idDistrito:46,nombre:"Salitrillos",idCanton:5},{idDistrito:334,nombre:"Samara",idCanton:54},{idDistrito:116,nombre:"San Andres",idCanton:19},{idDistrito:13,nombre:"San Antonio",idCanton:2},{idDistrito:19,nombre:"San Antonio",idCanton:3},{idDistrito:34,nombre:"San Antonio",idCanton:4},{idDistrito:67,nombre:"San Antonio",idCanton:9},{idDistrito:120,nombre:"San Antonio",idCanton:19},{idDistrito:123,nombre:"San Antonio",idCanton:20},{idDistrito:312,nombre:"San Antonio",idCanton:49},{idDistrito:332,nombre:"San Antonio",idCanton:54},{idDistrito:39,nombre:"San Carlos",idCanton:4},{idDistrito:22,nombre:"San Cristobal",idCanton:3},{idDistrito:244,nombre:"San Diego",idCanton:38},{idDistrito:69,nombre:"San Felipe",idCanton:9},{idDistrito:53,nombre:"San Francisco",idCanton:7},{idDistrito:280,nombre:"San Francisco",idCanton:43},{idDistrito:311,nombre:"San Francisco",idCanton:48},{idDistrito:6,nombre:"San Francisco de Dos Rios",idCanton:1},{idDistrito:43,nombre:"San Gabriel",idCanton:5},{idDistrito:75,nombre:"San Ignacio",idCanton:11},{idDistrito:70,nombre:"San Isidro",idCanton:10},{idDistrito:118,nombre:"San Isidro",idCanton:19},{idDistrito:125,nombre:"San Isidro",idCanton:20},{idDistrito:140,nombre:"San Isidro",idCanton:21},{idDistrito:148,nombre:"San Isidro",idCanton:22},{idDistrito:161,nombre:"San Isidro",idCanton:25},{idDistrito:275,nombre:"San Isidro",idCanton:42},{idDistrito:308,nombre:"San Isidro",idCanton:48},{idDistrito:415,nombre:"San Isidro",idCanton:68},{idDistrito:104,nombre:"San Isidro del General",idCanton:18},{idDistrito:86,nombre:"San Jeronimo",idCanton:13},{idDistrito:168,nombre:"San Jeronimo",idCanton:26},{idDistrito:404,nombre:"San Jeronimo",idCanton:66},{idDistrito:315,nombre:"San Joaquin de Flores",idCanton:50},{idDistrito:223,nombre:"San Jorge",idCanton:34},{idDistrito:149,nombre:"San Jose",idCanton:22},{idDistrito:163,nombre:"San Jose",idCanton:25},{idDistrito:309,nombre:"San Jose",idCanton:48},{idDistrito:215,nombre:"San Jose (Pizote)",idCanton:33},{idDistrito:288,nombre:"San Jose de la Montaña",idCanton:44},{idDistrito:66,nombre:"San Josecito",idCanton:9},{idDistrito:304,nombre:"San Josecito",idCanton:47},{idDistrito:80,nombre:"San Juan",idCanton:12},{idDistrito:136,nombre:"San Juan",idCanton:21},{idDistrito:169,nombre:"San Juan",idCanton:26},{idDistrito:179,nombre:"San Juan",idCanton:28},{idDistrito:245,nombre:"San Juan",idCanton:38},{idDistrito:299,nombre:"San Juan",idCanton:46},{idDistrito:361,nombre:"San Juan",idCanton:60},{idDistrito:17,nombre:"San Juan de Dios",idCanton:3},{idDistrito:94,nombre:"San Juan de Mata",idCanton:15},{idDistrito:401,nombre:"San Juan Grande",idCanton:66},{idDistrito:38,nombre:"San Lorenzo",idCanton:4},{idDistrito:95,nombre:"San Luis",idCanton:15},{idDistrito:37,nombre:"San Marcos",idCanton:4},{idDistrito:155,nombre:"San Mateo",idCanton:24},{idDistrito:16,nombre:"San Miguel",idCanton:3},{idDistrito:166,nombre:"San Miguel",idCanton:26},{idDistrito:291,nombre:"San Miguel",idCanton:45},{idDistrito:356,nombre:"San Miguel",idCanton:59},{idDistrito:230,nombre:"San Nicolas",idCanton:36},{idDistrito:92,nombre:"San Pablo",idCanton:15},{idDistrito:115,nombre:"San Pablo",idCanton:19},{idDistrito:285,nombre:"San Pablo",idCanton:44},{idDistrito:318,nombre:"San Pablo",idCanton:51},{idDistrito:373,nombre:"San Pablo",idCanton:62},{idDistrito:88,nombre:"San Pedro",idCanton:14},{idDistrito:93,nombre:"San Pedro",idCanton:15},{idDistrito:108,nombre:"San Pedro",idCanton:18},{idDistrito:178,nombre:"San Pedro",idCanton:28},{idDistrito:211,nombre:"San Pedro",idCanton:32},{idDistrito:284,nombre:"San Pedro",idCanton:44},{idDistrito:298,nombre:"San Pedro",idCanton:46},{idDistrito:14,nombre:"San Rafael",idCanton:2},{idDistrito:18,nombre:"San Rafael",idCanton:3},{idDistrito:31,nombre:"San Rafael",idCanton:4},{idDistrito:71,nombre:"San Rafael",idCanton:10},{idDistrito:91,nombre:"San Rafael",idCanton:14},{idDistrito:127,nombre:"San Rafael",idCanton:20},{idDistrito:139,nombre:"San Rafael",idCanton:21},{idDistrito:180,nombre:"San Rafael",idCanton:28},{idDistrito:224,nombre:"San Rafael",idCanton:35},{idDistrito:246,nombre:"San Rafael",idCanton:38},{idDistrito:269,nombre:"San Rafael",idCanton:41},{idDistrito:303,nombre:"San Rafael",idCanton:47},{idDistrito:403,nombre:"San Rafael",idCanton:66},{idDistrito:25,nombre:"San Rafael Abajo",idCanton:3},{idDistrito:134,nombre:"San Ramon",idCanton:21},{idDistrito:249,nombre:"San Ramon",idCanton:38},{idDistrito:150,nombre:"San Roque",idCanton:22},{idDistrito:286,nombre:"San Roque",idCanton:44},{idDistrito:11,nombre:"San Sebastian",idCanton:1},{idDistrito:85,nombre:"San Vicente",idCanton:13},{idDistrito:290,nombre:"San Vicente",idCanton:45},{idDistrito:428,nombre:"San Vito",idCanton:72},{idDistrito:101,nombre:"Sanchez",idCanton:17},{idDistrito:59,nombre:"Santa Ana",idCanton:8},{idDistrito:297,nombre:"Santa Barbara",idCanton:46},{idDistrito:377,nombre:"Santa Cecilia",idCanton:63},{idDistrito:119,nombre:"Santa Cruz",idCanton:19},{idDistrito:257,nombre:"Santa cruz",idCanton:39},{idDistrito:337,nombre:"Santa Cruz",idCanton:55},{idDistrito:379,nombre:"Santa Elena",idCanton:63},{idDistrito:287,nombre:"Santa Lucia",idCanton:44},{idDistrito:96,nombre:"Santa Maria",idCanton:16},{idDistrito:371,nombre:"Santa Rita",idCanton:62},{idDistrito:262,nombre:"Santa Rosa",idCanton:39},{idDistrito:273,nombre:"Santa Rosa",idCanton:41},{idDistrito:294,nombre:"Santa Rosa",idCanton:45},{idDistrito:366,nombre:"Santa Rosa",idCanton:61},{idDistrito:258,nombre:"Santa Teresita",idCanton:39},{idDistrito:27,nombre:"Santiago",idCanton:4},{idDistrito:135,nombre:"Santiago",idCanton:21},{idDistrito:174,nombre:"Santiago",idCanton:27},{idDistrito:239,nombre:"Santiago",idCanton:37},{idDistrito:305,nombre:"Santiago",idCanton:47},{idDistrito:289,nombre:"Santo Domingo",idCanton:45},{idDistrito:301,nombre:"Santo Domingo",idCanton:46},{idDistrito:293,nombre:"Santo Tomas",idCanton:45},{idDistrito:133,nombre:"Sarapiqui",idCanton:20},{idDistrito:208,nombre:"Sarchi Norte",idCanton:32},{idDistrito:209,nombre:"Sarchi Sur",idCanton:32},{idDistrito:352,nombre:"Sardinal",idCanton:58},{idDistrito:422,nombre:"Savegre",idCanton:70},{idDistrito:418,nombre:"Sierpe",idCanton:69},{idDistrito:360,nombre:"Sierra",idCanton:60},{idDistrito:450,nombre:"Siquirres",idCanton:78},{idDistrito:457,nombre:"Sixaola",idCanton:78},{idDistrito:49,nombre:"Tabarcia",idCanton:6},{idDistrito:151,nombre:"Tacares",idCanton:22},{idDistrito:467,nombre:"Bolivar",idCanton:22},{idDistrito:345,nombre:"Tamarindo",idCanton:55},{idDistrito:131,nombre:"Tambor",idCanton:20},{idDistrito:203,nombre:"Tapezco",idCanton:31},{idDistrito:41,nombre:"Tarbaca",idCanton:5},{idDistrito:439,nombre:"Tarcoles",idCanton:75},{idDistrito:36,nombre:"Tarrazu",idCanton:4},{idDistrito:261,nombre:"Tayutic",idCanton:39},{idDistrito:274,nombre:"Tejar",idCanton:42},{idDistrito:340,nombre:"Tempate",idCanton:55},{idDistrito:234,nombre:"Tierra Blanca",idCanton:36},{idDistrito:368,nombre:"Tierras Morenas",idCanton:61},{idDistrito:195,nombre:"Tigra",idCanton:30},{idDistrito:363,nombre:"Tilaran",idCanton:61},{idDistrito:102,nombre:"Tirrases",idCanton:17},{idDistrito:276,nombre:"Tobosi",idCanton:42},{idDistrito:210,nombre:"Toro Amarillo",idCanton:32},{idDistrito:263,nombre:"Tres Equis",idCanton:39},{idDistrito:243,nombre:"Tres Rios",idCanton:38},{idDistrito:87,nombre:"Trinidad",idCanton:13},{idDistrito:365,nombre:"Tronadora",idCanton:61},{idDistrito:252,nombre:"Tucurrique",idCanton:39},{idDistrito:260,nombre:"Tuis",idCanton:39},{idDistrito:295,nombre:"Tures",idCanton:45},{idDistrito:254,nombre:"Turrialba",idCanton:39},{idDistrito:130,nombre:"Turrucares",idCanton:20},{idDistrito:281,nombre:"Ulloa",idCanton:43},{idDistrito:414,nombre:"Union",idCanton:68},{idDistrito:213,nombre:"Upala",idCanton:33},{idDistrito:7,nombre:"Uruca",idCanton:1},{idDistrito:62,nombre:"Uruca",idCanton:8},{idDistrito:441,nombre:"Valle la Estrella",idCanton:76},{idDistrito:282,nombre:"Varablanca",idCanton:43},{idDistrito:339,nombre:"Veintisiete de Abril",idCanton:55},{idDistrito:197,nombre:"Venado",idCanton:30},{idDistrito:192,nombre:"Venecia",idCanton:30},{idDistrito:406,nombre:"Volcan",idCanton:67},{idDistrito:143,nombre:"Volio",idCanton:21},{idDistrito:42,nombre:"Vuelta de Jorco",idCanton:5},{idDistrito:219,nombre:"Yolillal",idCanton:33},{idDistrito:145,nombre:"Zapotal",idCanton:21},{idDistrito:372,nombre:"Zapotal",idCanton:62},{idDistrito:5,nombre:"Zapote",idCanton:1},{idDistrito:206,nombre:"Zapote",idCanton:31},{idDistrito:172,nombre:"Zaragoza",idCanton:27},{idDistrito:201,nombre:"Zarcero",idCanton:31}];




'use strict';

/**
 * @param {Number} pIdProvincia
 * @return {String}
 */
let obtenerProvinciaPorID = (pIdProvincia) => {
	if (objProvincias && !!Object.keys(objProvincias).length) {
        const hasProperty = Object.prototype.hasOwnProperty;
        let propiedad;
        for (propiedad in objProvincias) {
            if (!hasProperty.call(objProvincias, propiedad)) continue;
			if (objProvincias[propiedad]['idProvincia'] === pIdProvincia) {
                return objProvincias[propiedad]['nombre'];
            }
        }
		console.error('No se encontró la provincia: '+pIdProvincia);
		return '';
    }else{
		console.error('No se encontró la lista de provincias');
		return '';
	}
};

/**
 * @param {Number} pIdCanton
 * @return {String}
 */
let obtenerCantonPorID = (pIdCanton) => {
	if (objCantones && !!Object.keys(objCantones).length) {
        const hasProperty = Object.prototype.hasOwnProperty;
        let propiedad;
        for (propiedad in objCantones) {
            if (!hasProperty.call(objCantones, propiedad)) continue;
			if (objCantones[propiedad]['idCanton'] === pIdCanton) {
                return objCantones[propiedad]['nombre'];
            }
        }
		console.error('No se encontró el cantón: '+pIdCanton);
		return '';
    }else{
		console.error('No se encontró la lista de cantones');
		return '';
	}
};

/**
 * @param {Number} pIdDistrito
 * @return {String}
 */
let obtenerDistritoPorID = (pIdDistrito) => {
	if (objDistritos && !!Object.keys(objDistritos).length) {
        const hasProperty = Object.prototype.hasOwnProperty;
        let propiedad;
        for (propiedad in objDistritos) {
            if (!hasProperty.call(objDistritos, propiedad)) continue;
			if (objDistritos[propiedad]['idDistrito'] === pIdDistrito) {
                return objDistritos[propiedad]['nombre'];
            }
        }
		console.error('No se encontró el cantón: '+pIdDistrito);
		return '';
    }else{
		console.error('No se encontró la lista de cantones');
		return '';
	}
};










module.exports.getProvincia = obtenerProvinciaPorID;
module.exports.getCanton    = obtenerCantonPorID;
module.exports.getDistrito  = obtenerDistritoPorID;

