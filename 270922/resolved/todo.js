const balloon = document.querySelector(".balloon")

let anchoInicial = 100;

const aumentar = () =>{
    if (anchoInicial<=340) {anchoInicial = anchoInicial + 20;
    balloon.style.height = `${anchoInicial}px`}
    else {
        balloon.style.height = `100px`
        anchoInicial= 100;
    }
}


const colores = ['red','blue','green']

let color = 0;

const cambiarColor = () =>{
    if (color > colores.length){
        color = 0
    }
    else { color +=1}
    
  const element = colores[color];
  balloon.style.background = element;

    
}

balloon.addEventListener('click',aumentar)

balloon.addEventListener('click',cambiarColor)