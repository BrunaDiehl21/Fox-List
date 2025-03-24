function salvarTask(){
    const tarefa = criarTarefa();

    firebase.firestore()
        .collection('tarefas')
        .add(tarefa)
        .then(() => {
            window.location.href = "./home.html";
        })
        .catch(() => {
            alert('Ocorreu um erro ao salvar a tarefa')
        })
    
}

function criarTarefa(){
    return {
        name: form.name().value,

        statusTask: form.statusTask().checked ? "pendente" : "completo",

        date: form.date().value,

        descriptionTask: form.descriptionTask().value,

        user: {
            uid: firebase.auth().currentUser.uid
        }

    }

}

form = {
    name: () => document.getElementById('name'),
    statusTask: () => document.getElementById('pendente'),
    date: () => document.getElementById('date'),
    descriptionTask: () => document.getElementById('descriptionTask')
}

function cancelarTask(){
    window.location.href = "./home.html";
}