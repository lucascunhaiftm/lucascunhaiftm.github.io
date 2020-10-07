function destaqueLoja(img){
	img.style.opacity = 0.6;
}

function removerDestaqueLoja(img){
	img.style.opacity = 1;
}

function setAtivo(){
	var filename = window.location.href.split('/').pop()
	switch(filename){
		case "index.html":
			var elem = document.getElementById("menu_home");
			elem.classList.add("active");
			break;
		case "preco.html":
			var elem = document.getElementById("menu_preco");
			elem.classList.add("active");
			break;
		case "fale_conosco.html":
			var elem = document.getElementById("menu_contato");
			elem.classList.add("active");
			break;
		case "formulario.html":
			var elem = document.getElementById("menu_cadastro");
			elem.classList.add("active");
			break;
		default:
			var elem = document.getElementById("menu_jogos");
			elem.classList.add("active");
	}
}

function formatarTel(){
	var form = document.forms;
	tel = form[0].elements.namedItem("tel")
	valor = tel.value.replace(/\D/g,'');
	if(valor.length > 10){
		tel.value = "("+valor.slice(0,2)+")"+valor.slice(2,7) +"-"+valor.slice(7,11);
	}
}

function validarEmail() 
{
	var form = document.forms;
	email = form[0].elements.namedItem("email")
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
	{
		return (true)
		alert("Formato de Email inválido!");
	}
	
	return (false)
}