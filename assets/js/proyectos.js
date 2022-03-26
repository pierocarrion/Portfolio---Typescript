"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarProyecto = exports.ActualizarProyectos = exports.GetProyectos = exports.Proyecto = void 0;
class Proyecto {
    constructor(nombre, categoria, imagen, fechaInicio, fechaFin, descripcion) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
    }
}
exports.Proyecto = Proyecto;
let proyectos = [
    new Proyecto('Proyecto 1', "Desarrollo Web", 'https://projectcor.com/es/wp-content/uploads/2019/05/gestion-de-proyectos.jpg', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
    new Proyecto('Proyecto 2', "Desarrollo Web", 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
    new Proyecto('Proyecto 3', "Desarrollo de Escritorio", 'https://www.easyproject.com/EasyProject/media/images/easy-redmine-devops-plugins.png', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc'),
    new Proyecto('Proyecto 4', "Desarrollo de Escritorio", 'https://br.atsit.in/es/wp-content/uploads/2021/07/practique-la-programacion-en-linea-resolviendo-problemas-de-proyectos-reales-practice-dev.png', new Date('2022-03-20'), new Date('2025-03-20'), 'Desc')
];
function GetProyectos() {
    return proyectos;
}
exports.GetProyectos = GetProyectos;
function ActualizarProyectos(proyectos) {
    if (proyectos.length > 0) {
        document.getElementById('proyectos').innerHTML = "";
        for (var a of proyectos) {
            document.getElementById('proyectos').innerHTML += `<div class="col-md-4">
                                                                    <div class="gallery-item">
                                                                    <img src="${a.imagen}"></img
                                                                    alt="">
                                                                    <div class="gallery-item-info">
                                                                    <h4>${a.nombre}</h4>
                                                                    <p>${a.fechaInicio.toLocaleString()} - ${a.fechaFin.toLocaleString()}</p>
                                                                    </div>
                                                                    </div>
                                                                    </div>`;
        }
    }
    else {
        document.getElementById('proyectos').innerHTML = `<h4 class="tag">No existen proyectos</h4>`;
    }
}
exports.ActualizarProyectos = ActualizarProyectos;
function RegistrarProyecto(formInfo) {
    try {
        proyectos.push(new Proyecto(formInfo.nombreProyecto, formInfo.categoriaF, formInfo.enlaceProyecto, new Date(formInfo.fechaInicio), new Date(formInfo.fechaFin), formInfo.descripcionProyecto));
        console.log("Proyecto Registrado");
    }
    catch (e) {
        console.log(e);
    }
}
exports.RegistrarProyecto = RegistrarProyecto;
