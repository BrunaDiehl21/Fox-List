function logoutHome(){
    firebase.auth().signOut().then(() => {
        window.location.href = "./index.html";
    }).catch(() => {
        alert('Ocorreu um erro ao fazer logout')
    })
}

firebase.auth().onAuthStateChanged(user => {
    if(user){
        encontrarTasks(user);
    }
})

function newTask(){
    window.location.href = "./task.html";
}

function encontrarTasks(user){
    firebase.firestore()
    .collection('tarefas')
    .where('user.uid', '==', user.uid)
    .orderBy('date', 'desc')
    .get()
    .then(resposta => {
            const tarefas = resposta.docs.map(doc => doc.data());
            mostrarTasks(tarefas);
            })
}

function mostrarTasks(tarefas){
const orderedList = document.getElementById('tarefas');

tarefas.forEach(task =>{
    const li = document.createElement('li');
    li.classList.add(task.statusTask);

    const name = document.createElement('p');
    name.innerHTML = task.name;
    li.appendChild(name);

    if(task.date){
        const date = document.createElement('p');
        date.innerHTML = formatarData(task.date);
        li.appendChild(date);
    }


    const description = document.createElement('p');
    description.innerHTML = task.descriptionTask;
    li.appendChild(description);

    orderedList.appendChild(li);
})
}

function formatarData(date){
    return new Date(date).toLocaleDateString('pt-br')
}
