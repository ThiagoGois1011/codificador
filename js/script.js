			var escreveAqui = document.querySelector(".escreve-aqui");
			var crip = document.querySelector(".criptografar");
			var descrip = document.querySelector(".descriptografar");
			var semNada = document.querySelector(".sem-nada");
			var exibeConteudo = document.querySelector(".exibe-conteudo");
			var exibe = document.createElement("textarea");
			var copia = document.createElement("button");
			var luz = document.querySelector(".luz");

			exibe.classList.add("exibe-texto");
			copia.classList.add("copia");

			exibe.setAttribute("rows", "8");
			exibe.setAttribute("disabled", "disabled");
			exibe.setAttribute("id", "exibeC");
			exibe.setAttribute("name", "exibeC");

			exibeConteudo.appendChild(exibe);
			exibeConteudo.appendChild(copia);

			var exibe1 = document.querySelector(".exibe-texto");
			var copia1 = document.querySelector(".copia");

			exibe1.style.display = "none";
			copia1.style.display = "none";
			
			
			function criptografar(){
					
					var texto = escreveAqui.value;

					var newstr = texto.replace(/e/g, "enter");
					newstr = newstr.replace(/i/g, "imes");
					newstr = newstr.replace(/a/g, "ai");
					newstr = newstr.replace(/o/g, "ober");
					newstr = newstr.replace(/u/g, "ufat");

					if (texto != ""){
					semNada.style.display = "none";
					
					exibe.textContent = newstr;
					copia.textContent = "Copiar";
					exibe1.style.display = "inline-block";
					copia1.style.display = "inline-block";

					}		
										
			}

			function descriptografar(){
					
					var texto1 = escreveAqui.value;

					var newstr1 = texto1.replace(/enter/g, "e");
					newstr1 = newstr1.replace(/imes/g, "i");
					newstr1 = newstr1.replace(/ai/g, "a");
					newstr1 = newstr1.replace(/ober/g, "o");
					newstr1 = newstr1.replace(/ufat/g, "u");

					if (texto1 != ""){
					semNada.style.display = "none";
					exibe.textContent = newstr1;
					exibe1.style.display = "inline-block";
					copia1.style.display = "inline-block";
					}
				
			}

			function copiar(){

				exibe1.removeAttribute("disabled");
				exibe1.focus();
             	exibe1.select();
             	document.execCommand("copy");
             	exibe1.setAttribute("disabled", "disabled");

			}

			var luzz = true;

			function ligaDesliga(){

				var body = document.querySelector("body");
				var logo = document.querySelector(".logo");
				var caixaExibe = document.querySelector(".exibe");
				var titulo = document.querySelector(".titulo-exibe");
				var subTitulo = document.querySelector(".conteudo-exibe");
				var rodape = document.querySelector("footer");

				


				if(luzz) {
					
					luzz = false;
					body.style.background = "#343A40";
					body.style.color = "#E8CD1D";

					escreveAqui.setAttribute("id", "escreve-aqui1");
					

					caixaExibe.style.background = "#868E96";


					exibe1.style.background = "#868E96";
					exibe1.style.color = "#F0E68C";

					copia1.style.background = "#CED4DA";

					crip.style.background = "#778899";
					crip.style.color = "#E8CD1D";

					luz.onmousedown = function() {

				        luz.style.background = "grey";
				    }

				    
				    luz.style.background = "#CED4DA";
				    luz.style.fill = "#0A3871";
					
					titulo.style.color = "#E8CD1D";
					subTitulo.style.color = "#f0e68c";

					rodape.style.background = "#ADB5BD";
					rodape.style.color = "blue";

					logo.style.fill = "#ADB5BD";

				}else if (luzz == false){

					luzz = true;
					body.style.background = "#E9ECF8";
					body.style.color = "#000000";

					escreveAqui.removeAttribute("id");
					

					caixaExibe.style.background = "#FFFFFF";


					exibe1.style.background = "#FFFFFF";
					exibe1.style.color = "#0a3871";

					copia1.style.background = "whitesmoke";

					crip.style.background = "#0A3871";
					crip.style.color = "white";

					luz.onmousedown = function() {

				        luz.style.background = "grey";
				    }

				    luz.onmouseup = function() {
				        luz.style.background = "yellow";
				        luz.style.fill = "#000000";
				    }

					titulo.style.color = "#0a3871";
					subTitulo.style.color = "#495057";

					rodape.style.background = "#343A40";
					rodape.style.color = "#CED4DA";

					logo.style.fill = "#0A3871";

				}
			}

			luz.addEventListener("click", ligaDesliga);
			luz.addEventListener("dblclick", ligaDesliga);

			
			copia1.onclick = copiar;
			crip.onclick = criptografar;
			descrip.onclick = descriptografar;
