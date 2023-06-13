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
			"/Los-Gokus/images/camara.png",
			"/Los-Gokus/images/androide.webp",
			"/Los-Gokus/images/goku_1.webp",
			"/Los-Gokus/images/goku_2.jpg",
			"/Los-Gokus/images/goku_3.webp",
			"/Los-Gokus/images/goku_4.jpg",
			"/Los-Gokus/images/goku_5.jpg",
			"/Los-Gokus/images/goku_6.jfif",
			"/Los-Gokus/images/vegeta_1.jfif",
			"/Los-Gokus/images/vegeta_2.webp",
			"/Los-Gokus/images/vegeta_3.webp",
			"/Los-Gokus/images/vegeta_4.jpg",
			"/Los-Gokus/images/krillin.jpg",
			"/Los-Gokus/images/trunks.jpg",
			"/Los-Gokus/images/piccolo_1.jpg",
			"/Los-Gokus/images/piccolo_2.jpg",
			"/Los-Gokus/images/piccolo_3.jfif",
			"/Los-Gokus/images/piccolo_4.jpg",
			"/Los-Gokus/images/dende.jpg",
			"/Los-Gokus/images/boo_1.jpg",
			"/Los-Gokus/images/boo_2.jpg",
			"/Los-Gokus/images/boo_3.jpg",
			"/Los-Gokus/images/boo_4.jpg",
			"/Los-Gokus/images/black_1.jfif",
			"/Los-Gokus/images/black_2.webp",
			"/Los-Gokus/images/shin.webp",
			"/Los-Gokus/",
			"/Los-Gokus/index.html",
			"/Los-Gokus/css/style.css",
			"/Los-Gokus/js/app.js",
			"/Los-Gokus/js/script.js",
			"/Los-Gokus/res/pages/descripciones.html",
		]);
	});
	//cache inmutable no se modifica
	const cacheInm = caches.open(CacheInmutable).then((cache) => {
		cache.addAll([
			"/Los-Gokus/css/bootstrap.min.css",
			"/Los-Gokus/css/fontawesome.min.css",
			"/Los-Gokus/js/bootstrap.bundle.min.js",
			"/Los-Gokus/js/jquery.min.js",
			"/Los-Gokus/js/fontawesome.min.js",
			"/Los-Gokus/res/pages/404.html",
			"/Los-Gokus/res/404.png",
			"/Los-Gokus/images/favicons/favicon.png",
			"/Los-Gokus/manifest.json",
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
								return caches.match("/Los-Gokus/res/404.png");
							}
							return caches.match("/Los-Gokus/res/pages/404.html");
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
							return caches.match("/Los-Gokus/res/404.png");
						}
						return caches.match("/Los-Gokus/res/pages/404.html");
					}
					return newRes;
				});
		});
	e.respondWith(respuesta);
});
