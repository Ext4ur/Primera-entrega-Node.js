opciones = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cc:{
        demand: true,
        alias: 'cc'
    }
}

const argv = require('yargs')
            .command ('inscribir','Inscribirme en un curso',opciones)
            .argv

const fs = require('fs');


let cursos = [{
    id: 1,
    nombre: "Curso A",
    duracion: 10,
    valor: 100000
},
{
    id: 2,
    nombre: "Curso B",
    duracion: 20,
    valor: 200000
},
{
    id: 3,
    nombre: "Curso C",
    duracion: 30,
    valor: 300000
},
{
    id: 4,
    nombre: "Curso D",
    duracion: 40,
    valor: 400000
},
{
    id: 5,
    nombre: "Curso E",
    duracion: 50,
    valor: 500000
}]

let notas = [{
    nombre: 'Juan',
    matematicas: 4,
    ingles: 3,
    programacion: 2
},
{
    nombre: 'Maria',
    matematicas: 5,
    ingles: 1,
    programacion: 3
}];

let id = argv.id;
let nombre = argv.nombre;
let cc = argv.cc;
if (id == null){
    for (var i = 0; i < cursos.length; i+=1){
        console.log("Curso #" + cursos[i].id + "    Nombre: " + cursos[i].nombre + "    Duración: " + cursos[i].duracion + 
        " horas    Valor: $" + cursos[i].valor);
    }
}
else{
    let curso = cursos.find(curso => curso.id == curso.id);
    let createFile = (curso) => {
        text = 'Se ha matriculado al estudiante ' + nombre + ' con cédula ' + cc + ' en el curso llamado ' + curso.nombre
        + ' con id de ' + curso.id + ', el cual tiene una duración de ' + curso.duracion + ' horas y un costo de $' + curso.valor
        fs.writeFile('Matricula.txt',text,(err) => {
            if (err) throw (err);
            console.log("Se ha creado el archivo")
        });
    }
    createFile(curso);
}