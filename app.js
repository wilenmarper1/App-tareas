let archivoTareas = require('./funcionesDeTareas');


let accion = process.argv[2];

switch(accion) {
    case 'listar':
    case 'Listar':    
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        tareas.forEach((tarea,i) => {
            console.log((i + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);
         });

        break;
            
        
    case 'crear':
    case 'Crear':    
    console.log('Creando de tareas');
    console.log('------------------');
    let dato1=process.argv[3];
    let dato2=process.argv[4];
    if(dato1==undefined){
        console.log('Debes escribir un titulo y un estado')
       // return 0;
    }
    else if (dato2==undefined){
        console.log('Debes escribir un estado')
        //return 0;
    }
    else{
    let tarea = {
        titulo:process.argv[3],
        estado:process.argv[4]}
        archivoTareas.guardarTarea(tarea)
        console.log('Titulo: '+tarea.titulo +' ===> Estado: ' +tarea.estado)
    }
    break;

    case 'filtrar':
    case 'Filtrar':
    case 'FILTRAR':    
        console.log('Filtro de tareas');
        console.log('------------------');

       
       let dato3 = process.argv[3]
       if(dato3==undefined ){
        console.log('Debes escribir un estado a filtrar')
       // return 0;
        }
        else{       
         let filtro = process.argv[3] 
         let tareasFiltradas= archivoTareas.filtrarPorEstado(filtro)
         tareasFiltradas.forEach((tarea,i) => {
         console.log((i + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);
          });
        }
    break;

    case undefined:
        console.log('------------------------------------');  
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar, crear y filtrar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar, crear y filtrar');
        console.log('------------------------------------');
        break;
}


// PARA EJECUTAR ESTA APP SE USAN LOS SIGUIENTES COMANDOS

//node app.js ***Este es el comando
//Cuando ejecutemos este comando nos muestra las opciones en este caso  'crear', 'listar' y 'filtar'

//si deseamos escojer una opcion, lo hacemos de esta manera
//node app.js opcion ***Este es el comando

//Ejemplo

//node app.js listar ***Este es el comando (Nos listaria la lista que tengamos)