class Proyecto{
    constructor(id_proyecto,proyecto,descripcion,coordinador){
        this.id_proyecto = id_proyecto;
        this.proyecto=proyecto;
        this.descripcion=descripcion;
        this.coordinador = coordinador;
    }
};

class Tarea extends Proyecto{
    constructor(id_tarea,tarea,estado,encargado,id_proyecto,proyecto,descripcion,coordinador){
        super(id_proyecto,proyecto,descripcion,coordinador);
        this.id_tarea = id_tarea;
        this.tarea = tarea;
        this.estado = estado;
        this.encargado = encargado;
    }
}
