const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSO:function(arrayTareas){
    let arrayString = JSON.stringify(arrayTareas)
    fs.writeFileSync(this.archivo, arrayString)
    },
    guardarTarea: function(tarea){
    let tareas= this.leerArchivo()
    tareas.push(tarea)
    this.escribirJSO(tareas)    
    },
 

    filtrarPorEstado: function(estadofiltrar){
       let tareas= this.leerArchivo()  
       let tareasFiltradas= tareas.filter(function(t){ 
       return t.estado===estadofiltrar      
    })   
    return tareasFiltradas;
    },
}


console.log(archivoTareas.filtrarPorEstado('pendiente'))
module.exports = archivoTareas;