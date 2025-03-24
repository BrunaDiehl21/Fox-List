//Fazer Login
const emailUser = document.getElementById('email');
const senhaUser = document.getElementById('senha');
const spanDeEmail = document.getElementById('emailSpan');
const spanDeSenha = document.getElementById('senhaSpan');
//Criar Conta
const newEmailUser = document.getElementById('criarEmail');
const newSenhaUser = document.getElementById('criarSenha');
const confirmSenhaUser = document.getElementById('confirmSenha');
const spanDeConfirmSenha = document.getElementById('confirmSenhaSpan');
const spanDeConfirmSenha2 = document.getElementById('confirmSenhaSpan2');
//Botoes
const botaoEntrarLogin = document.getElementById('btnEntrar1');
//const botaoEntrarCriarConta = document.getElementById('btnEntrar2');

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "./home.html";
    }
})

function fazerLogin(){
    firebase.auth().signInWithEmailAndPassword(emailUser.value, senhaUser.value ).then(response => {
        window.location.href = "./home.html";
    }).catch(error => {
        alert(error.code);
    });
}

function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "./index.html";
    }).catch(() => {
        alert('Ocorreu um erro ao fazer logout')
    })
}

function registrarUser(){
    const email = document.getElementById('criarEmail').value;
    const password = document.getElementById('criarSenha').value;

    firebase.auth().createUserWithEmailAndPassword(
        email,password
    ).then(() => {
        window.location.href = "./home.html";
    }).catch(error => {
        alert(erroCriarConta(error))
    })
}

function erroCriarConta(error){
    if (error.code == "auth/email-already-in-use"){
        return 'Email já está em uso!'
    }
    return error.message;
}

function mostrarSenha(){
    var senhaLogin = document.getElementById('senha');
    var btnOlho = document.getElementById('olhoSenha')

    if (senhaLogin.type === 'password'){
        senhaLogin.setAttribute('type','text')
        btnOlho.classList.replace('bi-eye', 'bi-eye-slash')
    }
    else{
        senhaLogin.setAttribute('type','password')
        btnOlho.classList.replace('bi-eye-slash', 'bi-eye')
    }

}

function mostrarSenha2(){
    var criarSenha = document.getElementById('criarSenha');
    var btnOlho2 = document.getElementById('olhoSenha2')

    if (criarSenha.type === 'password'){
        criarSenha.setAttribute('type','text')
        btnOlho2.classList.replace('bi-eye', 'bi-eye-slash')
    }
    else{
        criarSenha.setAttribute('type','password')
        btnOlho2.classList.replace('bi-eye-slash', 'bi-eye')
    }

}

function mostrarSenha3(){
    var confirmSenhaOlho = document.getElementById('confirmSenha');
    var btnOlho3 = document.getElementById('olhoSenha3')

if (confirmSenhaOlho.type === 'password'){
    confirmSenhaOlho.setAttribute('type','text')
    btnOlho3.classList.replace('bi-eye', 'bi-eye-slash')
    }
else{
    confirmSenhaOlho.setAttribute('type','password')
    btnOlho3.classList.replace('bi-eye-slash', 'bi-eye')
    }
}
function verificarInputsLogin(){
    
    if (emailUser.value.trim() === "") {
        emailUser.classList.remove("corCampoCheio");
        emailUser.classList.add("corCampoVazio");
        spanDeEmail.style="visibility: visible";
    } else {
        emailUser.classList.add("corCampoCheio");
        emailUser.classList.remove("corCampoVazio");
        spanDeEmail.style="visibility: hidden";
    }

    if (senhaUser.value.trim() === "") {
        senhaUser.classList.remove("corCampoCheio");
        senhaUser.classList.add("corCampoVazio");
        spanDeSenha.style="visibility: visible";
    } else {
        senhaUser.classList.add("corCampoCheio");
        senhaUser.classList.remove("corCampoVazio");
        spanDeSenha.style="visibility: hidden";
    }

}

function verificarInputsCriarConta(){
    if (newEmailUser.value.trim() === "") {
        newEmailUser.classList.remove("corCampoCheio");
        newEmailUser.classList.add("corCampoVazio");
        spanDeEmail.style="visibility: visible";
    } else {
        newEmailUser.classList.add("corCampoCheio");
        newEmailUser.classList.remove("corCampoVazio");
        spanDeEmail.style="visibility: hidden";
    }

    if (newSenhaUser.value.trim() === "") {
        newSenhaUser.classList.remove("corCampoCheio");
        newSenhaUser.classList.add("corCampoVazio");
        spanDeSenha.style="visibility: visible";
    } else {
        newSenhaUser.classList.add("corCampoCheio");
        newSenhaUser.classList.remove("corCampoVazio");
        spanDeSenha.style="visibility: hidden";
    }

    
    if (confirmSenhaUser.value.trim() === "") {
        confirmSenhaUser.classList.remove("corCampoCheio");
        confirmSenhaUser.classList.add("corCampoVazio");
        spanDeConfirmSenha.style="visibility: visible";
        spanDeConfirmSenha2.style="visibility: visible";
    } else {
        confirmSenhaUser.classList.add("corCampoCheio");
        confirmSenhaUser.classList.remove("corCampoVazio");
        spanDeConfirmSenha.style="visibility: hidden";
        spanDeConfirmSenha2.style="visibility: hidden";
    }

    if (confirmSenhaUser.value !== newSenhaUser.value){
        confirmSenhaUser.classList.remove("corCampoCheio");
        confirmSenhaUser.classList.add("corCampoVazio");
        spanDeConfirmSenha.style="visibility: visible";
        spanDeConfirmSenha2.style="visibility: visible";
    }
    else if (confirmSenhaUser.value === newSenhaUser.value && confirmSenhaUser.value.trim() !== "" ) {
        confirmSenhaUser.classList.add("corCampoCheio");
        confirmSenhaUser.classList.remove("corCampoVazio");
        spanDeConfirmSenha.style="visibility: hidden";
        spanDeConfirmSenha2.style="visibility: hidden";
    }

}

form.addEventListener('submit', e => {
    e.preventDefault();
});