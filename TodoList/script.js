const input = document.getElementById('input'); 

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault(); //permet de ne pas submit le formulaire.

    //une fois que l'on a fait enter la function newTodo va s'exécuter.
    newTodo();
    
});


//Fonction pour créer / récupérer une todo
const newTodo = (todo) =>{

    if(todo){
        // va prendre la valeur de text qui est stocké dans un objet de de la key todo. 
        todoText = todo.text;
    } else {
        // va prendre la valeur qui se trouve dans l'input.
        todoText = input.value;
    }
    
    if(todoText){
        //va créer un nouvel élement li avec commme contenu un to do
        const todoEl = document.createElement('li');

        if(todo && todo.done){
            
            //va recréer un élément qui a comme valeur done égale à true.
            todoEl.classList.add('done');
        }

        //le contenu de l'élément li créée ci dessus sera le contenu de todoText (l'input ou todo.text déjà enregistré dans le local storage) 
        todoEl.innerText = todoText;

        //ajouter à la fin de l'élément ul avec un id todos.
        document.getElementById('todos').appendChild(todoEl);

        //permet d'effacer l'input une fois que l'on a appuyé sur la touche enter.
        input.value = "";  
        

        //changer la classe de l'élements li pour lui faire changer d'apparence.
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle("done");

            //va réaliser une mise à jour du localstorage suite à l'event listener
            localStorageUpdate();
        })

        //efface la todo en réalisant un clique droit
        todoEl.addEventListener('contextmenu', e => {
            e.preventDefault(); //evite d'ouvrie le menu du clique droit.
            todoEl.remove();

            //va réaliser une mise à jour du localstorage suite à l'event listener
            localStorageUpdate();
        })

        localStorageUpdate();
    }};


//Fonction pour stocker les todos
const localStorageUpdate = () => {
    const tasks = document.querySelectorAll('li');

    const todos = [];

    tasks.forEach((task) =>{
        todos.push({
            text: task.innerText,
            done: task.classList.contains('done'),
        });
    });

    let todosObj = JSON.stringify(todos); 
    localStorage.setItem("todos", todosObj);
};

//permet de lire les éléments sotcker dans le local storage.
let todos = localStorage.getItem("todos");
let todosJson = JSON.parse(todos)

//s'il y a des todos présent dans le local storage, ils seront à nouveau visible dans le local storage
if(todosJson){
    todosJson.forEach(todo => {
        newTodo(todo);
    });
}
            
    
   
    



