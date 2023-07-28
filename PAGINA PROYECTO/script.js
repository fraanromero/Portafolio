const color_fondo=document. getElementById("color_fondo")
const numero=document. getElementById("numero")
let cantidad=0

let tiempo=setInterval(() => {
    cantidad+=1
    color_fondo.style.height="${cantidad}%"
    numero.textContent=cantidad

    if(cantidad===100)
    {
        clearInterval(tiempo)
    }
}, 80);