if (!isNewTask()){
    const uid = pegarUIdTask();
    encontrarPorUid(uid);
}

function pegarUIdTask(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('uid');
}

function isNewTask(){
    return pegarUIdTask() ? false : true;  
}

function encontrarPorUid(uid){
    firebase.firestore()
    .collection('tarefas')
    .doc(uid)
    .get()
    .then(doc => {
        if(doc.exists){
            pegarDadosTask(doc.data());
        }
        else{
            alert('Documento não encontrado');
            window.location.href = "./home.html";
        }
    })
    .catch(() => {
        alert("Ocorreu um erro ao recuperar documento");
        window.location.href = "./home.html";
    })
}

function pegarDadosTask(tarefa){

    form.name().value = tarefa.name;

    if(tarefa.statusTask == "pendente"){
        form.statusPendente().checked = true;
    }
    else{
        form.statusCompleto().checked = true;
    }

    form.date().value = tarefa.date;

    if(tarefa.descriptionTask){
        form.descriptionTask().value = tarefa.descriptionTask;
    }
}

function salvarTask(){
    const tarefa = criarTarefa();
    
    if(isNewTask()){
        salvar(tarefa);
    }
    else{
        update(tarefa);
    }

}

function salvar(tarefa){
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

function update(tarefa){
    firebase.firestore()
    .collection('tarefas')
    .doc(pegarUIdTask())
    .update(tarefa)
    .then(() => {
        window.location.href = "./home.html";
    })
    .catch(() => {
        alert('Ocorreu um erro ao atualizar a tarefa')
    })
}

function criarTarefa(){
    const user = firebase.auth().currentUser;

    if (!user) {
    console.error("Usuário não autenticado.");
        return null;
    }

    const userId = user.uid;

    return {
        name: form.name().value,

        statusTask: form.statusPendente().checked ? "pendente" : "completo",

        date: form.date().value,

        descriptionTask: form.descriptionTask().value,

        userId: userId

    }

}

form = {
    name: () => document.getElementById('name'),
    statusPendente: () => document.getElementById('pendente'),
    statusCompleto: () => document.getElementById('completo'),
    date: () => document.getElementById('date'),
    descriptionTask: () => document.getElementById('descriptionTask')
}

function cancelarTask(){
    window.location.href = "./home.html";
}