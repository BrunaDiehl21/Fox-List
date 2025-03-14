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

function fazerLogin(){
    firebase.auth().signInWithEmailAndPassword(emailUser.value, senhaUser.value ).then(response => {
        window.location.href = "./home.html";
    }).catch(error => {
        alert(error.code);
    });
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

//botaoEntrarLogin.addEventListener('click', verificarInputsLogin);


//botaoEntrarCriarConta.addEventListener('click', verificarInputsCriarConta);

form.addEventListener('submit', e => {
    e.preventDefault();
});