const imagen = $("#img-1");
const nombre = $("#nombre");
const transformacion = $("#transformacion");
const raza = $("#raza");
const comparacion = $("#comparacion");
const pierde = '<i class="fa-solid fa-angle-left" style="font-size: 7rem;"></i>';
const gana = '<i class="fa-solid fa-angle-right" style="font-size: 7rem;"></i>';
const def = '<i class="fa-solid" style="font-size: 5.3rem;"></i>';
const personaje = $("#nombre-p1");
const gokus = $("#gokus");
const per_nombre = $("#per-nombre");
const per_img = $("#per-img");

nombre.on("change", () => {
	let opc = "<option>Seleccione...</option>";

	if (nombre.val() == "goku") {
		per_nombre.html("Goku");
		per_img.attr("src", "/Los-Gokus/images/goku_6.jfif");
		per_img.attr("alt", "Goku");
		per_img.attr("onclick", "page('goku')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="1">Ozaru</option>
        <option value="2">Super Saiyajin</option>
        <option value="3">Super Saiyajin 2</option>
        <option value="4">Super Saiyajin 3</option>
        <option value="5">Super Saiyajin Dios</option>
        <option value="6">Super Saiyajin Blue</option>
        `;
		raza.val("Saiyajin");
	} else if (nombre.val() == "vegeta") {
		per_nombre.html("Vegeta");
		per_img.attr("src", "/Los-Gokus/images/vegeta_2.webp");
		per_img.attr("alt", "Vegeta");
		per_img.attr("onclick", "page('vegeta')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="7">Ozaru</option>
        <option value="8">Super Saiyajin</option>
        <option value="9">Majin Vegeta</option>
        <option value="10">Super Saiyajin 3</option>
        `;
		raza.val("Saiyajin");
	} else if (nombre.val() == "krillin") {
		per_nombre.html("Krillin");
		per_img.attr("src", "/Los-Gokus/images/krillin.jpg");
		per_img.attr("alt", "Krillin");
		per_img.attr("onclick", "page('krillin')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="11">Normal</option>
        `;
		raza.val("Humano");
	} else if (nombre.val() == "trunks") {
		per_nombre.html("Trunks");
		per_img.attr("src", "/Los-Gokus/images/trunks.jpg");
		per_img.attr("alt", "Trunks");
		per_img.attr("onclick", "page('trunks')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="12">Super Saiyajin</option>
        `;
		raza.val("Saiyajin-Humano");
	} else if (nombre.val() == "piccolo") {
		per_nombre.html("Piccolo");
		per_img.attr("src", "/Los-Gokus/images/piccolo_1.jpg");
		per_img.attr("alt", "Piccolo");
		per_img.attr("onclick", "page('piccolo')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="13">Normal</option>
        <option value="14">Gran Namek</option>
        <option value="15">Potencial Liberado</option>
        <option value="16">Rey Demonio</option>
        `;
		raza.val("Namekuseijin");
	} else if (nombre.val() == "dende") {
		per_nombre.html("Dende");
		per_img.attr("src", "/Los-Gokus/images/dende.jpg");
		per_img.attr("alt", "Dende");
		per_img.attr("onclick", "page('dende')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="17">Normal</option>
        `;
		raza.val("Namekuseijin");
	} else if (nombre.val() == "buu") {
		per_nombre.html("Majin Buu");
		per_img.attr("src", "/Los-Gokus/images/boo_3.jpg");
		per_img.attr("alt", "Majin Buu");
		per_img.attr("onclick", "page('buu')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="18">Super Buu</option>
        <option value="19">Pequeño Buu</option>
        <option value="20">Buu Gordo</option>
        <option value="21">Majin Buu Oscuro</option>
        `;
		raza.val("Demonio");
	} else if (nombre.val() == "black") {
		per_nombre.html("Black Goku");
		per_img.attr("src", "/Los-Gokus/images/black_1.jfif");
		per_img.attr("alt", "Black Goku");
		per_img.attr("onclick", "page('black')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="22">Super Saiyajin 1</option>
        <option value="23">Super Saiyajin Rose</option>
        `;
		raza.val("Saiyajin-Kaioshin");
	} else if (nombre.val() == "shin") {
		per_nombre.html("Shin");
		per_img.attr("src", "/Los-Gokus/images/shin.webp");
		per_img.attr("alt", "Shin");
		per_img.attr("onclick", "page('shin')");
		gokus.removeClass("d-none");
		transformacion.prop("disabled", false);
		opc += `
        <option value="24">Normal</option>
        `;
		raza.val("Kaio-shin");
	} else {
		gokus.addClass("d-none");
		raza.val("");
		transformacion.prop("disabled", true);
	}
    personaje.text("");
    comparacion.html(def);
    imagen.attr("src", "/Los-Gokus/images/camara.png");
	transformacion.html(opc);
});

transformacion.on("change", () => {
	let tipo = $("#transformacion option:selected").text();
	let nom = $("#nombre option:selected").text();
	if (tipo == "Normal") {
		personaje.text(nom);
	} else if (nom == "Majin Buu") {
		personaje.text(tipo);
	} else {
		personaje.text(nom + " " + tipo);
	}
	switch (transformacion.val()) {
		case "1":
			imagen.attr("src", "/Los-Gokus/images/goku_1.webp");
			comparacion.html(pierde);
			break;
		case "2":
			imagen.attr("src", "/Los-Gokus/images/goku_2.jpg");
			comparacion.html(pierde);
			break;
		case "3":
			imagen.attr("src", "/Los-Gokus/images/goku_3.webp");
			comparacion.html(gana);
			break;
		case "4":
			imagen.attr("src", "/Los-Gokus/images/goku_4.jpg");
			comparacion.html(gana);
			break;
		case "5":
			imagen.attr("src", "/Los-Gokus/images/goku_5.jpg");
			comparacion.html(gana);
			break;
		case "6":
			imagen.attr("src", "/Los-Gokus/images/goku_6.jfif");
			comparacion.html(gana);
			break;
		case "7":
			imagen.attr("src", "/Los-Gokus/images/vegeta_1.jfif");
			comparacion.html(gana);
			break;
		case "8":
			imagen.attr("src", "/Los-Gokus/images/vegeta_2.webp");
			comparacion.html(gana);
			break;
		case "9":
			imagen.attr("src", "/Los-Gokus/images/vegeta_3.webp");
			comparacion.html(gana);
			break;
		case "10":
			imagen.attr("src", "/Los-Gokus/images/vegeta_4.jpg");
			comparacion.html(gana);
			break;
		case "11":
			imagen.attr("src", "/Los-Gokus/images/krillin.jpg");
			comparacion.html(pierde);
			break;
		case "12":
			imagen.attr("src", "/Los-Gokus/images/trunks.jpg");
			comparacion.html(gana);
			break;
		case "13":
			imagen.attr("src", "/Los-Gokus/images/piccolo_1.jpg");
			comparacion.html(gana);
			break;
		case "14":
			imagen.attr("src", "/Los-Gokus/images/piccolo_2.jpg");
			comparacion.html(gana);
			break;
		case "15":
			imagen.attr("src", "/Los-Gokus/images/piccolo_3.jfif");
			comparacion.html(gana);
			break;
		case "16":
			imagen.attr("src", "/Los-Gokus/images/piccolo_4.jpg");
			comparacion.html(gana);
			break;
		case "17":
			imagen.attr("src", "/Los-Gokus/images/dende.jpg");
			comparacion.html(pierde);
			break;
		case "18":
			imagen.attr("src", "/Los-Gokus/images/boo_1.jpg");
			comparacion.html(gana);
			break;
		case "19":
			imagen.attr("src", "/Los-Gokus/images/boo_2.jpg");
			comparacion.html(gana);
			break;
		case "20":
			imagen.attr("src", "/Los-Gokus/images/boo_3.jpg");
			comparacion.html(pierde);
			break;
		case "21":
			imagen.attr("src", "/Los-Gokus/images/boo_4.jpg");
			comparacion.html(gana);
			break;
		case "22":
			imagen.attr("src", "/Los-Gokus/images/black_1.jfif");
			comparacion.html(gana);
			break;
		case "23":
			imagen.attr("src", "/Los-Gokus/images/black_2.webp");
			comparacion.html(gana);
			break;
		case "24":
			imagen.attr("src", "/Los-Gokus/images/shin.webp");
			comparacion.html(gana);
			break;
		default:
			imagen.attr("src", "/Los-Gokus/images/camara.png");
			comparacion.html(def);
			personaje.text("");
			break;
	}
});

function page(pag) {
	$(location).attr("href", "/Los-Gokus/res/pages/descripciones.html?personaje="+ pag);
}