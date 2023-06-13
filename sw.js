const CacheEstatico = "st-1";
const CacheInmutable = "in-1";
const CacheDinamico = "din-1";

function LimpiarCache(cacheName, numeroItems) {
	caches.open(cacheName).then((cache) => {
		return cache.keys().then((keys) => {
			console.log(keys);
			if (keys.length > numeroItems)
				cache.delete(keys[0]).then(LimpiarCache(cacheName, numeroItems)); //Recursividad la funcion se llama a si misma
		});
	});
}

self.addEventListener("install", (e) => {
	const cacheProm = caches.open(CacheEstatico).then((cache) => {
		cache.addAll([
			"/DragonBallZ/images/camara.png",
			"/DragonBallZ/images/androide.webp",
			"/DragonBallZ/images/goku_1.webp",
			"/DragonBallZ/images/goku_2.jpg",
			"/DragonBallZ/images/goku_3.webp",
			"/DragonBallZ/images/goku_4.jpg",
			"/DragonBallZ/images/goku_5.jpg",
			"/DragonBallZ/images/goku_6.jfif",
			"/DragonBallZ/images/vegeta_1.jfif",
			"/DragonBallZ/images/vegeta_2.webp",
			"/DragonBallZ/images/vegeta_3.webp",
			"/DragonBallZ/images/vegeta_4.jpg",
			"/DragonBallZ/images/krillin.jpg",
			"/DragonBallZ/images/trunks.jpg",
			"/DragonBallZ/images/piccolo_1.jpg",
			"/DragonBallZ/images/piccolo_2.jpg",
			"/DragonBallZ/images/piccolo_3.jfif",
			"/DragonBallZ/images/piccolo_4.jpg",
			"/DragonBallZ/images/dende.jpg",
			"/DragonBallZ/images/boo_1.jpg",
			"/DragonBallZ/images/boo_2.jpg",
			"/DragonBallZ/images/boo_3.jpg",
			"/DragonBallZ/images/boo_4.jpg",
			"/DragonBallZ/images/black_1.jfif",
			"/DragonBallZ/images/black_2.webp",
			"/DragonBallZ/images/shin.webp",
			"/DragonBallZ/",
			"/DragonBallZ/index.html",
			"/DragonBallZ/css/style.css",
			"/DragonBallZ/js/app.js",
			"/DragonBallZ/js/script.js",
			"/DragonBallZ/res/pages/descripciones.html",
		]);
	});
	//cache inmutable no se modifica
	const cacheInm = caches.open(CacheInmutable).then((cache) => {
		cache.addAll([
			"/DragonBallZ/css/bootstrap.min.css",
			"/DragonBallZ/css/fontawesome.min.css",
			"/DragonBallZ/js/bootstrap.bundle.min.js",
			"/DragonBallZ/js/jquery.min.js",
			"/DragonBallZ/js/fontawesome.min.js",
			"/DragonBallZ/res/pages/404.html",
			"/DragonBallZ/res/404.png",
			"/DragonBallZ/images/favicons/favicon.png",
			"/DragonBallZ/manifest.json",
		]);
	});
	e.waitUntil(Promise.all([cacheProm, cacheInm]));
	self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
	//Network with cache fallback
	const respuesta = fetch(e.request)
		.then((res) => {
			//la app solicita un recurso de internet
			if (!res)
				//si falla (false or null)
				return caches
					.match(e.request) //lo busca y lo regresa al cache
					.then((newRes) => {
						if (!newRes) {
							if (/\.(png|jpg|webp|jfif)$/.test(e.request.url)) {
								return caches.match("/DragonBallZ/res/404.png");
							}
							return caches.match("/DragonBallZ/res/pages/404.html");
						}
						return newRes;
					});

			caches.match(e.request).then((cacheRes) => {
				if (!cacheRes) {
					caches.open(CacheDinamico).then((cache) => {
						//abre el cache dinamico
						cache.add(e.request); //mete el recurso que no existia en el cache
						LimpiarCache(CacheDinamico, 100); // limpia hasta 100 elementos de cache
					});
				}
			});
			return res; //devuelve la respuesta
		})
		.catch((err) => {
			// en caso de que encuetre algun error devuleve el archivo de cache
			return caches
				.match(e.request) //lo busca y lo regresa al cache
				.then((newRes) => {
					if (!newRes) {
						if (/\.(png|jpg|webp|jfif)$/.test(e.request.url)) {
							console.log("Error de imagen: " + e.request.url);
							return caches.match("/DragonBallZ/res/404.png");
						}
						return caches.match("/DragonBallZ/res/pages/404.html");
					}
					return newRes;
				});
		});
	e.respondWith(respuesta);
});
