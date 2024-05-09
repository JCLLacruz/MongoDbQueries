
//Crear base de datos si no existe, si existe se comienza a usar
use mySocialNetwork

//Crear collecciones que vamos a usar
db.createCollection('posts')
db.createCollection('users')

//Insertamos documentos en la colección posts
db.posts.insertMany([
	{
		title: 'Serenade of the Sea',
		body: 'Where the ocean sings',
		username: 'OceanSong',
		comments: [
			{ username: 'WaveWatcher', body: 'I could spend hours listening to the waves.' },
			{ username: 'SeashellCollector', body: 'Every wave tells a story.' },
		],
	},
	{
		title: 'Mountain hideaway',
		body: 'Where the eagles soar',
		username: 'EagleEye',
		comments: [
			{ username: 'NatureLover', body: 'What a majestic view!' },
			{ username: 'AdventureSeeker', body: "I'd love to hike up there." },
		],
	},
	{
		title: 'Riverside retreat',
		body: 'Where tranquility flows',
		username: 'RiverSong',
		comments: [
			{ username: 'NatureEnthusiast', body: 'This looks like a peaceful spot.' },
			{ username: 'WaterLover', body: "I can almost hear the river's melody." },
		],
	},
	{
		title: 'Sunset paradise',
		body: 'Where the sky blushes',
		username: 'GoldenHour',
		comments: [
			{ username: 'SkyWatcher', body: 'I never get tired of watching the sunset.' },
			{ username: 'SunsetChaser', body: 'This is the perfect end to any day.' },
		],
	},
	{
		title: 'Enchanted garden',
		body: 'Where fairies dance',
		username: 'MagicGarden',
		comments: [
			{ username: 'FairyFanatic', body: "I feel like I've stepped into a storybook." },
			{ username: 'GardenLover', body: 'This place is pure magic.' },
		],
	},
])
db.posts.insertMany([
	{
		title: 'Mystical waterfall',
		body: 'Where dreams cascade',
		username: 'DreamChaser',
		comments: [
			{ username: 'WaterfallSeeker', body: 'I could watch this for hours.' },
			{ username: 'NatureDreamer', body: "There's something enchanting about waterfalls." },
		],
	},
	{
		title: 'Sun-kissed meadow',
		body: 'Where wildflowers dance',
		username: 'Lily',
		comments: [
			{ username: 'David', body: "Nature's beauty truly shines here." },
			{ username: 'EmmaG', body: 'I can almost smell the flowers just by looking at this.' },
		],
	},
	{
		title: 'Cosmic wonder',
		body: 'Underneath the stars',
		username: 'Sam',
		comments: [
			{ username: 'LiamS', body: 'The night sky never fails to awe me.' },
			{ username: 'Sam', body: 'I find peace in the vastness of space.' },
		],
	},
	{
		title: 'Enchanted forest',
		body: 'Where magic whispers',
		username: 'EmmaG',
		comments: [
			{ username: 'Jack', body: "I feel like I've stepped into a fairytale." },
			{ username: 'SarahJ', body: 'This forest holds so many secrets.' },
		],
	},
	{
		title: 'Moonlit lake',
		body: 'Reflections of tranquility',
		username: 'Sophie',
		comments: [
			{ username: 'Sophie', body: "There's something ethereal about moonlit waters." },
			{ username: 'David', body: 'I could sit by this lake for hours.' },
		],
	},
])
db.posts.insertMany([
	{
		title: 'Desert oasis',
		body: 'Mirage of serenity',
		username: 'AlexB',
		comments: [
			{ username: 'Lily', body: 'Finding an oasis in the desert is like finding hope in despair.' },
			{ username: 'AlexB', body: 'This place holds a special kind of magic.' },
		],
	},
	{
		title: 'Tranquil island',
		body: 'Where palm trees sway',
		username: 'IslandExplorer',
		comments: [
			{ username: 'BeachLover', body: 'I dream of waking up to this view.' },
			{ username: 'SunsetChaser', body: 'Paradise found!' },
		],
	},
	{
		title: 'Snowy retreat',
		body: 'Where silence reigns',
		username: 'WinterWonder',
		comments: [
			{ username: 'SnowSeeker', body: "There's something magical about snow-covered landscapes." },
			{ username: 'CozyCabin', body: "I'd love to cozy up by a fire here." },
		],
	},
	{
		title: 'Countryside charm',
		body: 'Where simplicity shines',
		username: 'CountrySoul',
		comments: [
			{ username: 'NatureLover', body: 'This looks like the perfect place to unwind.' },
			{ username: 'FarmLife', body: 'I could spend days exploring the countryside.' },
		],
	},
	{
		title: 'Starry night',
		body: 'Under the velvet sky',
		username: 'Stargazer',
		comments: [
			{ username: 'NightSkyEnthusiast', body: 'I could get lost in those stars.' },
			{ username: 'AstroDreamer', body: 'This is where magic happens.' },
		],
	},
])

//Insertamos documentos en la coleccion users
db.users.insertMany([
	{
		username: 'JuanC',
		email: 'juanc@example.com',
		age: 30,
	},
	{
		username: 'EmmaG',
		email: 'emmag@example.com',
		age: 28,
	},
	{
		username: 'Sophie',
		email: 'sophie@example.com',
		age: 32,
	},
	{
		username: 'David',
		email: 'david@example.com',
		age: 25,
	},
	{
		username: 'LiamS',
		email: 'liam@example.com',
		age: 29,
	},
	{
		username: 'EagleEye',
		email: 'eagleeye@example.com',
		age: 35,
	},
	{
		username: 'RiverSong',
		email: 'riversong@example.com',
		age: 31,
	},
	{
		username: 'GoldenHour',
		email: 'goldenhour@example.com',
		age: 27,
	},
	{
		username: 'MagicGarden',
		email: 'magicgarden@example.com',
		age: 33,
	},
	{
		username: 'DreamChaser',
		email: 'dreamchaser@example.com',
		age: 26,
	},
	{
		username: 'Lily',
		email: 'lily@example.com',
		age: 29,
	},
	{
		username: 'Sam',
		email: 'sam@example.com',
		age: 28,
	},
	{
		username: 'SarahJ',
		email: 'sarahj@example.com',
		age: 30,
	},
	{
		username: 'AlexB',
		email: 'alexb@example.com',
		age: 34,
	},
	{
		username: 'IslandExplorer',
		email: 'islandexplorer@example.com',
		age: 36,
	},
	{
		username: 'WinterWonder',
		email: 'winterwonder@example.com',
		age: 32,
	},
	{
		username: 'CountrySoul',
		email: 'countrysoul@example.com',
		age: 31,
	},
	{
		username: 'Stargazer',
		email: 'stargazer@example.com',
		age: 29,
	},
	{
		username: 'HistoryBuff',
		email: 'historybuff@example.com',
		age: 37,
	},
	{
		username: 'OceanSong',
		email: 'oceansong@example.com',
		age: 33,
	},
	{
		username: 'WaveWatcher',
		email: 'wavewatcher@example.com',
		age: 30,
	},
	{
		username: 'SeashellCollector',
		email: 'seashellcollector@example.com',
		age: 28,
	},
])

//Actualiza todos los valores de los campos de una publicación.
db.posts.updateOne(
	{ title: 'Countryside charm changed' },
	{
		$set: {
			title: 'Countryside charm changed',
			body: 'Where simplicity shines. changed',
			username: 'CountrySoul changed',
			comments: [
				{ username: 'NatureLover changed', body: 'This looks like the perfect place to unwind. changed' },
				{ username: 'FarmLife changed', body: 'I could spend days exploring the countryside. changed' },
			],
		},
	}
)

//Cambiar el valor del campo “body” de una publicación.
db.posts.updateOne({ title: 'Countryside charm changed' }, { $set: { body: 'Where simplicity shines. changed two' } });

//Actualizar comentarios: Actualiza el comentario de una publicación.

db.posts.updateOne(
	{ title: 'Countryside charm changed' },
	{
		$set: {
			comments: [
				{ username: 'NatureLover changed two', body: 'This looks like the perfect place to unwind. changed two' },
				{ username: 'FarmLife changed two', body: 'I could spend days exploring the countryside. changed two' },
			],
		},
	}
)

//Actualiza todos los valores de los campos de un usuario
db.users.updateOne(
	{
		username: 'SeashellCollector',
	},
	{
		$set: {
			username: 'SeashellCollector changed',
			email: 'seashellcollectorchanged@example.com',
			age: 45,
		},
	}
)
//Cambiar el email de dos usuarios, es decir, hacer la query dos veces.
db.users.updateOne({username: 'HistoryBuff'},{$set: 'historybuffchanged@example.com'})
db.users.updateOne({username: 'OceanSong'},{$set: 'oceansongchanged@example.com'})

//Aumenta en 5 años la edad de un usuario.
db.users.updateOne({username: 'WinterWonder'},{$inc: {age: 5}})

//Seleccionar todas las publicaciones.
db.posts.find()

//Selecciona las publicaciones que coincidan con el username indicado.
db.posts.find({username: 'WinterWonder'})

//Seleccione todos los usuarios con una edad mayor a 20.
db.users.find({age: {$gt: 20}})

//Seleccione todos los usuarios con una edad inferior a 23.
db.users.find({age: {$lt: 23}})

//Seleccione todos los usuarios que tengan una edad entre 25 y 30 años.
db.users.find({age: {$gt: 25, $lt: 30}})

//Muestra los usuarios de edad menor a mayor y viceversa.
db.users.find().sort({age: -1}) //asc
db.users.find().sort({age: 1})  //desc

//Seleccione el número total de usuarios.
db.users.find().count()

//Seleccione todas las publicaciones y haz que se muestren con la siguiente estructura: Título de la publicación: "title one".
db.posts.find().forEach((doc) => {print('Titulo de la prublicación: ' + doc.title)})

//Selecciona solo 2 usuarios.
db.users.find().limit(2)

//Busca por title 2 publicaciones.
db.posts.find({title: 'Serenade of the Sea'})
db.posts.find({title: 'Sunset paradise'})

//Elimina a todos los usuarios con una edad mayor a 30.
db.users.deleteMany({age: {$gt: 30}})

//Seleccione el número total de publicaciones que tienen más de un comentario
db.posts.aggregate([{$match: {$expr: { $gt: [ { $size: "$comments" }, 1 ] }}},{$count: "Total Post"}])

//Seleccione la última publicación creada
db.posts.findOne({}, {sort: {_id: -1}})

//Selecciona 5 publicaciones y que sean las últimas creadas
db.posts.find({}, {sort: {_id: -1}}).limit(5)

//Elimina todas las publicaciones que tengan más de un comentario
db.posts.deleteMany({$expr: { $gt: [ { $size: "$comments" }, 1 ] }})
  