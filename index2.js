const mostrarContenido = () => {
	const boton = document.querySelector('#boton')
	boton.addEventListener('click', () => {
	const random = Math.floor(Math.random()*11)
	const deseos= document.querySelector('#deseos')
	if(random===0) {
		deseos.textContent = "You'll be a millonaire" 
		boton.textContent = "Volver a Consultar"		
	}else if(random===1) {
		deseos.textContent = "You'll be expecting a baby" 
		boton.textContent = "Volver a Consultar"
	}else if(random===2) {
		deseos.textContent = "You'll get married" 
		boton.textContent = "Volver a Consultar"
	}else if(random===3) {
		deseos.textContent = "You'll find a treasure" 
		boton.textContent = "Volver a Consultar"
	}else if(random===4) {
		deseos.textContent = "You'll become a pilot" 
		boton.textContent = "Volver a Consultar"
	}else if(random===5) {
		deseos.textContent = "You'll make lots of friends" 
		boton.textContent = "Volver a Consultar"
	}else if(random===6) {
		deseos.textContent = "You'll find money" 
		boton.textContent = "Volver a Consultar"
	}else if(random===7){
		deseos.textContent = "You'll buy lots of clothes" 
		boton.textContent = "Volver a Consultar"
	}else if(random===8) {
		deseos.textContent = "You'll find a pet" 
		boton.textContent = "Volver a Consultar"
	}else if(random===9){
		deseos.textContent = "You'll create an empire" 
		boton.textContent = "Volver a Consultar"
	}else if(random===10) {
		deseos.textContent = "You'll go to lots of parties" 
		boton.textContent = "Volver a Consultar"
	}
})
}
mostrarContenido()


