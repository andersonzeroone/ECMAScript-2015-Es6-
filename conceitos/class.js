class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Usuariotest';
    }

    mostarusuario(){
        console.log(this.usuario)
    }
}

const MinhaLista= new TodoList();

document.getElementById('newtodo').onclick = function(){
    MinhaLista.add('New Todo');
}