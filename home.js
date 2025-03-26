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
            const tarefas = resposta.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));

            mostrarTasks(tarefas);
            })
}

function mostrarTasks(tarefas){
const orderedList = document.getElementById('tarefas');

tarefas.forEach(task =>{
    const li = document.createElement('li');
    li.classList.add(task.statusTask);
    li.id = task.uid; 
    li.addEventListener('click', () =>{
        window.location.href = "./task.html?uid=" + task.uid;
    })

    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerHTML = "X";
    botaoDeletar.classList.add('outline', 'corDeletar');
    botaoDeletar.addEventListener('click', event => {
        event.stopPropagation();
        confirmDeletar(task);
    })
    li.appendChild(botaoDeletar);

    const name = document.createElement('p');
    name.innerHTML = task.name;
    li.appendChild(name);

        const date = document.createElement('p');
        date.innerHTML = formatarData(task.date);
        li.appendChild(date);

        if(task.descriptionTask){
            const description = document.createElement('p');
            description.innerHTML = task.descriptionTask;
            li.appendChild(description);
        }

    orderedList.appendChild(li);
});
}

function confirmDeletar(task){
    const verificarDelete = confirm('Você deseja deletar essa tarefa?');
    if(verificarDelete){
        deletarTask(task);
    }
}

function deletarTask(task){
    firebase.firestore()
    .collection('tarefas')
    .doc(task.uid)
    .delete()
    .then(() => {
        document.getElementById(task.uid).remove();
    })
    .catch (error =>
    {
        console.log(error)
        alert("Ocorreu um erro ao deletar a tarefa");
    })

}

function formatarData(date){
    return new Date(date).toLocaleDateString('pt-BR', {timeZone : 'UTC'});
}
