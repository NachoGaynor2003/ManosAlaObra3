class Task {

    constructor(titulo){
        this.titulo=titulo
        this.estado='pendiente'
        this.id=Date.now()
    }
}
export default Task;
