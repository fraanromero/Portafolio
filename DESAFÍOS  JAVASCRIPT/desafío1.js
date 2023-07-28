//El apellido del rey es fernández
const persona1 ={
    nombre : "Julián",
    apellido : "Alvarez",
    edad: 19,
    tieneBuenaSalud: true,
    tieneAntecedentesPenales:false

}
    

const persona2 ={
    nombre : "Lionel",
    apellido : "Messi",
    edad: 15,
    tieneBuenaSalud: true,
    tieneAntecedentesPenales:true
}

const persona3 ={
    nombre : "Enzo",
    apellido : "Fernández",
    edad: 30,
    tieneBuenaSalud: true,
    tieneAntecedentesPenales:false
}

let array = [persona1, persona2, persona3]
//mayor de 18 años y menor de 35, tiene nque tener buena salud y no tener antecedentes penales

function esApto (persona){
    return persona.edad > 18 && persona.edad < 35 && persona.tieneBuenaSalud === true && persona.tieneAntecedentesPenales === false && persona.apellido !== "Fernández"
}

let cantidad = 0
console.log(esApto(array[0]))
console.log(esApto(array[1]))
console.log(esApto(array[2]))
console.log(array[0].nombre + " " + array[0].apellido + " " + esApto(array[0]))
console.log(array[1].nombre + " " + array[1].apellido + " " + esApto(array[1]))
console.log(array[2].nombre + " " + array[2].apellido + " " + esApto(array[2]))