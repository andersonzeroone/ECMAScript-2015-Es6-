import api from './api';

class App{
    constructor(){
        this.repositories = [];

        this.formeEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.liList = document.getElementById('repo-list');
        this.registerHandlrs();

    }

    registerHandlrs(){
        this.formeEl.onsubmit = event => this.addRepository(event);
    }

    setLoading( loading = true){
        if(loading == true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formeEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();            
        }

    }

    async  addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0){
            return;
        }

        this.setLoading();    

        try{     
            const response = await api.get(`/repos/${repoInput}`);

            console.log(response)

            this.repositories.push({
                name:'Andersonzeroone',
                description:'Covid-19Pandemic ? StayAtHome() : FreeToLeave()',
                avatar_url:'https://avatars1.githubusercontent.com/u/33969430?s=400&u=5ba7015754cacff77e821a2d87663693aa1b619e&v=4',
                html_url:'https://github.com/andersonzeroone'
            });

            this.inputEl.value = '';
            
            console.log(this.repositories);
            this.render();
        }catch{
            alert('Repositorio não encontrado!');
       }

       this.setLoading(false);
    }

    render(){
        this.liList.innerHTML ='';

        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.liList.appendChild(listItemEl);


        })
    }

}

new App();