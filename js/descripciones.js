const imagen = $("#imagen");
const nombre = $("#nombre");
const descripcion = $("#descripcion");

let descripcion_value = "";

function iniciar(url, callback) {
	var prom = new Promise(function (resolve, reject) {
		var personaje = url.split("=")[1];
		switch (personaje) {
			case "goku":
				imagen.attr("src", "/Los-Gokus/images/goku_6.jfif");
				nombre.text("Goku");
				descripcion_value = `Goku posee un espíritu combativo sumamente marcado, y es incapaz de resistirse a pelear con alguien que le parezca fuerte aun en los momentos más inoportunos. Es extremadamente competitivo y entrena constantemente, ya que nunca está satisfecho con su fuerza actual y siempre busca ir más allá.`;
				break;
			case "vegeta":
				imagen.attr("src", "/Los-Gokus/images/vegeta_2.webp");
				nombre.text("Vegeta");
				descripcion_value = `Vegeta es el príncipe de una raza guerrera extraterrestre conocida como los Saiyajin. Es extremadamente arrogante, orgulloso y trabajador; constantemente se refiere a su herencia y estatus real a lo largo de la serie.
            Sus poderes son de gran calibre y por mucho tiempo fue altamente temido por su crueldad. Sin embargo, luego de su llegada a la Tierra su vida cambiaría para siempre: se encontraría con un rival a quien nunca lograría superar del todo en el futuro: Son Goku.`;
				break;
			case "krillin":
				imagen.attr("src", "/Los-Gokus/images/krillin.jpg");
				nombre.text("Krillin");
				descripcion_value = `Krillin. De baja estatura, este personaje de la serie de manga y anime Dragon Ball es un alumno del Maestro Mutenroshi que ha llegado a ser para muchos uno de los humanos más diestros en la lucha mediante artes marciales (exceptuando, tal vez, a Oob y Ten Shin Han). Aunque hay quien le considera un cobarde, lo cierto es que siempre ha estado allí para apoyar a sus amigos en la lucha contra quienes amenazaron el Planeta Tierra, incluso cuando no tenía ninguna posibilidad (como con Cell).`;
				break;
			case "trunks":
				imagen.attr("src", "/Los-Gokus/images/trunks.jpg");
				nombre.text("Trunks");
				descripcion_value = `Trunks. Es mitad terrícola y mitad saiyajin (Híbrido Humano-Saiyajin), hijo de Vegeta y Bulma y hermano mayor de Bra en el presente. En el futuro alternativo es el único saiyajin que queda como el héroe de la tierra (y no posee hermanos o hermanas).`;
				break;
			case "piccolo":
				imagen.attr("src", "/Los-Gokus/images/piccolo_1.jpg");
				nombre.text("Piccolo");
				descripcion_value = `Piccolo. Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z.`;
				break;
			case "dende":
				imagen.attr("src", "/Los-Gokus/images/dende.jpg");
				nombre.text("Dende");
				descripcion_value = `Dendé es un pequeño namekiano, que vivía en el poblado de Moori, junto a su hermano Scargo y otros tantos de su especie. Es el hijo 108 del Gran Patriarca y posteriormente Dios de la Tierra, sustituyendo a Dios. Tiene el poder de la curación, esto se vio cuando sanó las heridas de Krilin, Gohan, Piccolo y Vegeta, después de los ataques que sufrieron por culpa del emperador del mal Freezer. Este fue uno de los poderes más característicos del personaje, incluso lo usó en Dragon Ball Super para curar a Videl. `;
				break;
			case "buu":
				imagen.attr("src", "/Los-Gokus/images/boo_3.jpg");
				nombre.text("Majin Buu");
				descripcion_value = `Majim buu. Es el último gran enemigo al que se enfrentan los héroes en Dragon Ball Z, un demonio rosado con poderes mágicos para convertir a quien quiera en dulce y habilidades como regenerarse casi de forma infinita y absorber personas, tras lo cual cambia de forma y se vuelve más poderoso adquiriendo su energía y habilidades.`;
				break;
			case "black":
				imagen.attr("src", "/Los-Gokus/images/black_1.jfif");
				nombre.text("Black Goku");
				descripcion_value = `Black Goku. Es el último gran enemigo al que se enfrentan los héroes en Dragon Ball Z, un demonio rosado con poderes mágicos para convertir a quien quiera en dulce y habilidades como regenerarse casi de forma infinita y absorber personas, tras lo cual cambia de forma y se vuelve más poderoso adquiriendo su energía y habilidades`;
				break;
			case "shin":
				imagen.attr("src", "/Los-Gokus/images/shin.webp");
				nombre.text("Shin");
				descripcion_value = `Shin. Su poder está por muy encima de Freezer en su forma original (referida a la vista en Namek, antes de su resurrección temporal), ya que le asegura a Vegeta que él y sus compañeros podrían derrotarlo de un solo golpe. Piccolo declara que el poder de Shin es de otra dimensión; en el Daizenshuu 7 corrobora que su poder es superior al de Piccolo una vez fusionado con Kami. Sin embargo muestra signos de debilidad al sorprenderse con los poderes de Goku, Vegeta y Son Gohan en Super Saiyan, también sentía miedo de Darbra (que poseía una fuerza equivalente a Cell Perfecto). Por lo que se puede deducir que este tenía un poder similar Goku en estado de Super Saiyan Máximo Poder, pero a pesar de esto no sabe pelear cuerpo a cuerpo`;
				break;
			default:
				alert("No se eligió a un personaje");
				imagen.attr("src", "");
				nombre.text("");
				descripcion_value = ``;
				break;
		}
		descripcion.text(descripcion_value);
		resolve("ok");
	});
	return prom;
}

iniciar(window.location.href).then(() => {
	$(".d-none").removeClass("d-none");
});
